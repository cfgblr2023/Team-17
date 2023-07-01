import { Course } from "@prisma/client";
import { prisma } from "../config";

class CourseService {
  constructor() {}

  async createNewCourse(course: {
    title: string;
    duration: number;
    skills: { name: string }[];
    coordinatorId: string;
  }) {
    const { title, duration, skills, coordinatorId } = course;

    try {
      const course = await prisma.course.create({
        data: {
          title,
          duration,
          coordinator: { connect: { id: coordinatorId } },
          skills: {
            create: skills.map((skill: { name: string }) => ({
              name: skill.name,
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
