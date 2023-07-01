import { Router } from "express";
import { CourseController } from "../controller";

const router = Router();
const courseController = new CourseController();

router.post("/", courseController.createNewCourse.bind(courseController));

export default router;
