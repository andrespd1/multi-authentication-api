import User from "../src/models/User";
import UserRepository from "../src/repositories/UserRepository";

class AuthService{

 private userRepository = new UserRepository();
 register(user: User){
  this.userRepository.createUser(user)
 }
}
 export default AuthService