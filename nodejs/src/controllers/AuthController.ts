import AuthService from "../../services/AuthService";
import UserEntity from "../models/entities/UserEntity";
import UserDTO from "../models/dtos/UserDTO";
import UserMapper from "../helpers/mappers/UserMapper";
import { UNKNOWN_INTERNAL_ERROR } from "../models/constants";

class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async registerUser(
    user: UserDTO,
    password: string
  ): Promise<UserDTO | string> {
    try {
      const serviceResponse: UserEntity | null =
        await this.authService.register(UserMapper.toEntity(user), password);
      if (serviceResponse != null) {
        return UserMapper.toDTO(serviceResponse);
      }
      return UNKNOWN_INTERNAL_ERROR;
    } catch (e: any) {
      return e.message;
    }
  }

  async loginUser(email: string, password: string): Promise<UserDTO | string> {
    try {
      const serviceResponse: UserEntity | null = await this.authService.login(
        email,
        password
      );
      if (serviceResponse != null) {
        return UserMapper.toDTO(serviceResponse);
      }
      return UNKNOWN_INTERNAL_ERROR;
    } catch (e: any) {
      return e.message;
    }
  }
}

export default AuthController;
