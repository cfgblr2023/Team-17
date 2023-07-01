import { prisma } from "../config";

class AuthService {
  async login(req: {
    email: string;
    password: string;
    role: "coordinator" | "mentor" | "mentee";
  }) {
    const { email, password, role } = req;
    if (role === "coordinator") {
      const coordinator = await prisma.coordinator.findUnique({
        where: { email },
      });
      if (!coordinator) {
        throw new Error("User Not Found");
      }

      if (coordinator.password !== password) {
        throw new Error("Invalid Credentials");
      }

      return coordinator;
    } else if (role === "mentor") {
      const mentor = await prisma.mentor.findUnique({ where: { email } });
      if (!mentor) {
        throw new Error("User Not Found");
      }
      if (mentor.password !== password) {
        throw new Error("Invalid Credentials");
      }

      return mentor;
    } else {
      const mentee = await prisma.mentee.findUnique({ where: { email } });
      if (!mentee) {
        throw new Error("User Not Found");
      }
      if (mentee.password !== password) {
        throw new Error("Invalid Credentials");
      }

      return mentee;
    }
  }
}
export default AuthService;
