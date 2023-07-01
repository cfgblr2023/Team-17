import { Coordinator } from "@prisma/client";
import { prisma } from "../config";

class CoordinatorService {
  async createNewCoordinator(coordinator: Coordinator) {
    return prisma.coordinator.create({ data: coordinator });
  }
}
export default CoordinatorService;
