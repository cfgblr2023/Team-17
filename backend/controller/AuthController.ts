import { Request, Response } from "express";
import { AuthService } from "../service";
class AuthController {
  private authService: AuthService;
  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response) {
    try {
      const user = await this.authService.login(req.body);
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ err: JSON.stringify(error) });
    }
  }
}
export default AuthController;
