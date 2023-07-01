import { prisma } from "../config";

class MenteeService {
  async createNewMentee(mentee: {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    institutionStudying: string;
    eduactionalStatus: string;
    languagesSpoken: { language: string }[];
    areaOfInterest: { name: string }[];
  }) {
    const {
      name,
      email,
      password,
      phoneNumber,
      institutionStudying,
      eduactionalStatus,
      languagesSpoken,
      areaOfInterest,
    } = mentee;
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
          in: areaOfInterest.map((interest) => interest.name),
        },
      },
    });

    return prisma.mentee.create({
      data: {
        name,
        email,
        password,
        phoneNumber,
        institutionStudying,
        eduactionalStatus,
        languagesSpoken: {
          connect: dbLanguages.map((lang) => ({ id: lang.id })),
        },
        areaOfInterest: {
          connect: dbSkills.map((skill) => ({ id: skill.id })),
        },
      },
      include: {
        languagesSpoken: true,
        areaOfInterest: true,
      },
    });
  }
}
export default MenteeService;
