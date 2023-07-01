import { Router } from "express";
import { CoordinatorController } from "../controller";

const router = Router();
const coordinatorController = new CoordinatorController();

router.post(
  "/",
  coordinatorController.createNewCoordinator.bind(coordinatorController)
);

export default router;
