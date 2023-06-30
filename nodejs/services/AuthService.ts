import UserEntity from "../src/models/entities/UserEntity";
import UserRepository from "../src/repositories/UserRepository";
import { comparePasswords, hashPassword } from "../src/helpers/EncryptHelper";
import { Gender } from "../src/models/types";
import { validateEmail } from "../src/helpers/EmailHelper";
import UserDTO from "../src/models/dtos/UserDTO";
import UserMapper from "../src/helpers/mappers/UserMapper";

class AuthService {
  private userRepository = new UserRepository();

  async register(
    user: UserEntity,
    password: string
  ): Promise<UserEntity | null> {
    if (user != null && password != null && password.length > 0) {
      //Verify with RE if the email is valid
      validateEmail(user.email);
      //Verify gender type
      if (!Object.values(Gender).includes(user.gender)) {
        throw new Error("The gender isn't valid");
      }
      //Encrypts user password
      user.password = await hashPassword(password);
      await this.userRepository.createUser(user);
      return user;
    }
    return null;
  }

  async login(email: string, password: string): Promise<UserEntity | null> {
    if (
      email != null &&
      email.length > 0 &&
      password != null &&
      password.length > 0
    ) {
      validateEmail(email);
      const user: UserEntity | undefined =
        await this.userRepository.findByEmail(email);
      if (user != undefined) {
        if (await comparePasswords(password, user.password)) {
          return user;
        } else {
          throw Error("Invalid email or password. Please try again!");
        }
      }
    }
    return null;
  }
}

export default AuthService;
