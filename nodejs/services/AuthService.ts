import User from "../src/models/User";
import UserRepository from "../src/repositories/UserRepository";
import {comparePasswords, hashPassword} from "../src/helpers/EncryptHelper";


class AuthService {

  private userRepository = new UserRepository();

  async register(user: User, password: string) {
    if (user != null && password != null && password.length > 0) {
      user.password = await hashPassword(password);
      await this.userRepository.createUser(user)
      return user;
    }
    return undefined;

  }

  async login(email: string, password: string) {
    if (email != null && email.length > 0 && password != null && password.length > 0) {
      const user: User | undefined = await this.userRepository.findByEmail(email)
      if (user != undefined) {
        return await comparePasswords(password, user.password)
      }
    }
    return null;
  }

}

export default AuthService