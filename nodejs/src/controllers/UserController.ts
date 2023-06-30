import UserService from "../../services/UserService";
import userDTO from "../models/dtos/UserDTO";
import UserMapper from "../helpers/mappers/UserMapper";
import UserDTO from "../models/dtos/UserDTO";
import AuthService from "../../services/AuthService";
import { PERMISSION_DENIED } from "../models/constants";

class UserController {
  private userService: UserService;
  private authService: AuthService;

  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
  }

  async updateUserProfile(
    email: string,
    password: string,
    user: userDTO
  ): Promise<UserDTO | string> {
    try {
      const oldUser = await this.authService.login(email, password);
      if (oldUser != null) {
        return UserMapper.toDTO(
          await this.userService.updateUserProfile(
            oldUser,
            UserMapper.toEntity(user)
          )
        );
      }
      return PERMISSION_DENIED;
    } catch (e: any) {
      return e.message;
    }
  }
}

export default UserController;
