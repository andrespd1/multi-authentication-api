import AuthService from "../../services/AuthService";

class AuthController {
  private authService: AuthService

  constructor() {
    this.authService = new AuthService();
  }
}

export default AuthController