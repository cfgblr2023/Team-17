/*
  Warnings:

  - You are about to drop the column `mentorId` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Mentor` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `available` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `institutionWorking` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qualification` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Language` DROP FOREIGN KEY `Language_mentorId_fkey`;

-- AlterTable
ALTER TABLE `Course` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Language` DROP COLUMN `mentorId`;

-- AlterTable
ALTER TABLE `Mentor` DROP COLUMN `gender`,
    ADD COLUMN `available` BOOLEAN NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `institutionWorking` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `qualification` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Module` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `_MentorToSkill` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_MentorToSkill_AB_unique`(`A`, `B`),
    INDEX `_MentorToSkill_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_LanguageToMentor` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_LanguageToMentor_AB_unique`(`A`, `B`),
    INDEX `_LanguageToMentor_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_MentorToSkill` ADD CONSTRAINT `_MentorToSkill_A_fkey` FOREIGN KEY (`A`) REFERENCES `Mentor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MentorToSkill` ADD CONSTRAINT `_MentorToSkill_B_fkey` FOREIGN KEY (`B`) REFERENCES `Skill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LanguageToMentor` ADD CONSTRAINT `_LanguageToMentor_A_fkey` FOREIGN KEY (`A`) REFERENCES `Language`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LanguageToMentor` ADD CONSTRAINT `_LanguageToMentor_B_fkey` FOREIGN KEY (`B`) REFERENCES `Mentor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
