import UserEntity from "../src/models/entities/UserEntity";
import UserRepository from "../src/repositories/UserRepository";
import {comparePasswords, hashPassword} from "../src/helpers/EncryptHelper";


class AuthService {

  private userRepository = new UserRepository();

  async register(user: UserEntity, password: string): Promise<UserEntity | null> {
    if (user != null && password != null && password.length > 0) {
      user.password = await hashPassword(password);
      await this.userRepository.createUser(user)
      return user;
    }
    return null;

  }

  async login(email: string, password: string) {
    if (email != null && email.length > 0 && password != null && password.length > 0) {
      const user: UserEntity | undefined = await this.userRepository.findByEmail(email)
      if (user != undefined) {
        return await comparePasswords(password, user.password)
      }
    }
    return null;
  }

}

export default AuthService