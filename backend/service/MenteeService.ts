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

  async recommendCourses(menteeId: string) {
    const mentee = await prisma.mentee.findUnique({
      where: { id: menteeId },
      include: { areaOfInterest: true, languagesSpoken: true },
    });

    if (!mentee) return [];

    let recommendedCourses = await prisma.course.findMany({
      where: {
        skills: {
          some: {
            name: {
              in: mentee.areaOfInterest.map((interest) => interest.name),
            },
          },
        },
        mentors: {
          some: {
            languagesSpoken: {
              some: {
                language: {
                  in: mentee.languagesSpoken.map(
                    (language) => language.language
                  ),
                },
              },
            },
          },
        },
      },
      include: {
        skills: true,
      },
    });

    if (recommendedCourses.length === 0) {
      recommendedCourses = await prisma.course.findMany({
        where: {
          mentors: {
            some: {
              languagesSpoken: {
                some: {
                  language: {
                    in: mentee.languagesSpoken.map(
                      (language) => language.language
                    ),
                  },
                },
              },
            },
          },
        },
        include: { skills: true },
      });
    }

    return recommendedCourses;
  }
}
export default MenteeService;
