
import User from "../models/User"
import myDataSource from "../../app-data-source";
class UserRepository{
  async createUser(user:User): Promise<void>{
    const users = await myDataSource.getRepository(User);
    if(user != null){
      await users.save(user)
    }
  }
}

export default UserRepository