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
    languagesSpoken: { language: string }[];
  }) {
    const {
      name,
      email,
      password,
      phoneNumber,
      qualification,
      institutionWorking,
      skills,
      languagesSpoken,
    } = mentor;
    const dbLanguages = await prisma.language.findMany({
      where: {
        language: {
          in: languagesSpoken.map((lang) => lang.language),
        },
      },
    });

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
        languagesSpoken: {
          connectOrCreate: languagesSpoken.map((lang) => ({
            where: { language: lang.language },
            create: { language: lang.language },
          })),
        },
      },
      include: {
        courses: true,
        languagesSpoken: true,
      },
    });
  }
}
export default MentorService;
