import AuthService from "../../services/AuthService";
import UserEntity from "../models/entities/UserEntity";
import UserDTO from "../models/dtos/UserDTO";
import UserMapper from "../helpers/mappers/UserMapper";

class AuthController {
  private authService: AuthService

  constructor() {
    this.authService = new AuthService();
  }

  async registerUser(user: UserDTO, password: string): Promise<UserEntity | null> {
    return await this.authService.register(UserMapper.toEntity(user), password)
  }
}

export default AuthController