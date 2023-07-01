import { Router } from "express";
import { MentorController } from "../controller";

const router = Router();
const mentorController = new MentorController();

router.post("/", mentorController.createNewMentor.bind(mentorController));

export default router;
