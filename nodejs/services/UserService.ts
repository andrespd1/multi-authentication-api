import UserRepository from "../src/repositories/UserRepository";
import userEntity from "../src/models/entities/UserEntity";
import UserEntity from "../src/models/entities/UserEntity";
import { EMAIL_NOT_FOUND } from "../src/models/constants";

class UserService {
  private userRepository = new UserRepository();

  async updateUserProfile(
    oldUser: UserEntity,
    newUser: userEntity
  ): Promise<UserEntity> {
    if (newUser.email !== null) {
      if (oldUser != null) {
        newUser.id = oldUser.id;
        newUser.password = oldUser.password;
        newUser.framework = oldUser.framework;
        newUser.thirdPartyApp = oldUser.thirdPartyApp;
        await this.userRepository.createAndUpdateUser(newUser);
        return newUser;
      }
    }
    throw Error(EMAIL_NOT_FOUND);
  }
}

export default UserService;
