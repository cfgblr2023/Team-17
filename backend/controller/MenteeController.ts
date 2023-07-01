import { Request, Response } from "express";
import { MenteeService } from "../service";

class MenteeController {
  private menteeService: MenteeService;
  constructor() {
    this.menteeService = new MenteeService();
  }

  async createNewMentee(req: Request, res: Response) {
    const savedMentee = await this.menteeService.createNewMentee(req.body);
    res.status(201).json({ savedMentee });
  }

  async getRecommendedCourses(req: Request, res: Response) {
    const { menteeId } = req.params;
    const recommendCourses = await this.menteeService.recommendCourses(
      menteeId
    );

    res.status(200).json({ recommendCourses });
  }
}
export default MenteeController;
