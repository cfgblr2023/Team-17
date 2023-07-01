import { Course } from "@prisma/client";
import { prisma } from "../config";

class CourseService {
  constructor() {}

  async createNewCourse(course: {
    title: string;
    duration: number;
    skills: { name: string }[];
    modules: { name: string; duration: number }[];
    coordinatorId: string;
  }) {
    const { title, duration, skills, modules, coordinatorId } = course;

    try {
      const course = await prisma.course.create({
        data: {
          title,
          duration,
          coordinator: { connect: { id: coordinatorId } },
          skills: {
            connectOrCreate: skills.map((skill) => ({
              where: { name: skill.name },
              create: {
                name: skill.name,
              },
            })),
          },
          modules: {
            create: modules.map((m) => ({
              name: m.name,
              duration: m.duration,
            })),
          },
        },
        include: {
          skills: true,
          coordinator: true,
        },
      });
      return course;
    } catch (error) {
      console.error("Error creating course:", error);
    }
  }
}
export default CourseService;
