import UserEntity from "../src/models/entities/UserEntity";
import UserRepository from "../src/repositories/UserRepository";
import { comparePasswords, hashPassword } from "../src/helpers/EncryptHelper";
import { Gender } from "../src/models/types";
import { validateEmail } from "../src/helpers/EmailHelper";
import UserDTO from "../src/models/dtos/UserDTO";
import UserMapper from "../src/helpers/mappers/UserMapper";
import {
  EMAIL_NOT_FOUND,
  INVALID_EMAIL_PASSWORD,
  INVALID_GENDER,
  INVALID_OLD_PASSWORD,
  NEW_PASSWORD_DIFFERENT,
} from "../src/models/constants";

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
        throw new Error(INVALID_GENDER);
      }
      //Encrypts user password
      user.password = await hashPassword(password);
      await this.userRepository.createAndUpdateUser(user);
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
          throw Error(INVALID_EMAIL_PASSWORD);
        }
      }
      throw Error(EMAIL_NOT_FOUND);
    }
    return null;
  }

  async changePassword(
    email: string,
    oldPassword: string,
    newPassword: string
  ): Promise<boolean> {
    if (
      oldPassword != null &&
      oldPassword.length > 0 &&
      newPassword != null &&
      newPassword.length > 0 &&
      email != null &&
      email.length > 0
    ) {
      if (oldPassword == newPassword) {
        throw Error(NEW_PASSWORD_DIFFERENT);
      }
      const user: UserEntity | undefined =
        await this.userRepository.findByEmail(email);
      if (user === undefined) {
        throw Error(EMAIL_NOT_FOUND);
      }
      if (!(await comparePasswords(oldPassword, user.password))) {
        throw Error(INVALID_OLD_PASSWORD);
      }
      user.password = await hashPassword(newPassword);
      await this.userRepository.createAndUpdateUser(user);
      return true;
    }
    return false;
  }
}

export default AuthService;
