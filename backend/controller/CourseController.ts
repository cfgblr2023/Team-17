import { Request, Response } from "express";
import { CourseService } from "../service";

class CourseController {
  private courseService: CourseService;
  constructor() {
    this.courseService = new CourseService();
  }

  async createNewCourse(req: Request, res: Response) {
    const savedCourse = await this.courseService.createNewCourse(req.body);
    res.status(201).json({ savedCourse });
  }
}
export default CourseController;
