/*
  Warnings:

  - You are about to drop the column `moduleId` on the `Course` table. All the data in the column will be lost.
  - Added the required column `courseId` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Course` DROP FOREIGN KEY `Course_moduleId_fkey`;

-- AlterTable
ALTER TABLE `Course` DROP COLUMN `moduleId`;

-- AlterTable
ALTER TABLE `Module` ADD COLUMN `courseId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Module` ADD CONSTRAINT `Module_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
