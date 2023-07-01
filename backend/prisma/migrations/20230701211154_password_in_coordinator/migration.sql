/*
  Warnings:

  - Added the required column `password` to the `Coordinator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Coordinator` ADD COLUMN `password` VARCHAR(191) NOT NULL;
