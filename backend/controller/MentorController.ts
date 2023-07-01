import { Request, Response } from "express";
import { MentorService } from "../service";

class MentorController {
  private mentorService: MentorService;
  constructor() {
    this.mentorService = new MentorService();
  }

  async createNewMentor(req: Request, res: Response) {
    const savedMentor = await this.mentorService.createNewMentor(req.body);
    res.status(201).json({ savedMentor });
  }
}
export default MentorController;
