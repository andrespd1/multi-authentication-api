import UserEntity from "../src/models/entities/UserEntity";
import UserRepository from "../src/repositories/UserRepository";
import { comparePasswords, hashPassword } from "../src/helpers/EncryptHelper";
import { Gender } from "../src/models/types";

class AuthService {
  private userRepository = new UserRepository();

  async register(
    user: UserEntity,
    password: string
  ): Promise<UserEntity | null> {
    if (user != null && password != null && password.length > 0) {
      //Verify with RE if the email is valid
      const emailPatter = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!emailPatter.test(user.email)) {
        throw new Error("The email isn't valid");
      }
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

  async login(email: string, password: string) {
    if (
      email != null &&
      email.length > 0 &&
      password != null &&
      password.length > 0
    ) {
      const user: UserEntity | undefined =
        await this.userRepository.findByEmail(email);
      if (user != undefined) {
        return await comparePasswords(password, user.password);
      }
    }
    return null;
  }
}

export default AuthService;
