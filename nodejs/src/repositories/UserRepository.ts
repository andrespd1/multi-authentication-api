import UserEntity from "../models/entities/UserEntity"
import myDataSource from "../../app-data-source";

class UserRepository {
  async createUser(user: UserEntity): Promise<void> {
    const users = await myDataSource.getRepository(UserEntity);
    await users.save(user)
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    const users = await myDataSource.getRepository(UserEntity);
    const response: UserEntity[] = await users.findBy({email: email})
    if (response != undefined) {
      return response[0];
    }
    return undefined;
  }
}

export default UserRepository