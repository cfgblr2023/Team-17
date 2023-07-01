import { Router } from "express";
import { MenteeController } from "../controller";

const router = Router();
const menteeController = new MenteeController();

router.post("/", menteeController.createNewMentee.bind(menteeController));

export default router;
