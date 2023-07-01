import { prisma } from "../config";

class MentorService {
  async createNewMentor(mentor: {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    qualification: string;
    institutionWorking: string;
    skills: { name: string }[];
  }) {
    const {
      name,
      email,
      password,
      phoneNumber,
      qualification,
      institutionWorking,
      skills,
    } = mentor;
    const dbSkills = await prisma.skill.findMany({
      where: {
        name: {
          in: skills.map((skill) => skill.name),
        },
      },
    });

    const matchingCourses = await prisma.course.findMany({
      where: {
        skills: {
          some: {
            name: {
              in: skills.map((skill) => skill.name),
            },
          },
        },
      },
    });

    return prisma.mentor.create({
      data: {
        name,
        email,
        password,
        phoneNumber,
        qualification,
        institutionWorking,
        available: true,
        skills: {
          connect: dbSkills.map((skill) => ({ id: skill.id })),
        },
        courses: {
          connect: matchingCourses.map((matchedCourse) => ({
            id: matchedCourse.id,
          })),
        },
      },
      include: {
        courses: true,
      },
    });
  }
}
export default MentorService;
