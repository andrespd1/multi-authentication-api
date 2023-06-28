import User from "../models/User"
import myDataSource from "../../app-data-source";

class UserRepository {
  async createUser(user: User): Promise<void> {
    const users = await myDataSource.getRepository(User);
    await users.save(user)
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const users = await myDataSource.getRepository(User);
    const response: User[] = await users.findBy({email: email})
    if (response != undefined) {
      return response[0];
    }
    return undefined;
  }
}

export default UserRepository