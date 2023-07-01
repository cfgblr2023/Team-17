import { Request, Response } from "express";
import { CoordinatorService } from "../service";

class CoordinatorController {
  private coordinatorService: CoordinatorService;
  constructor() {
    this.coordinatorService = new CoordinatorService();
  }

  async createNewCoordinator(req: Request, res: Response) {
    const savedCoordinator = await this.coordinatorService.createNewCoordinator(
      req.body
    );

    res.status(201).json({ savedCoordinator });
  }
}
export default CoordinatorController;
