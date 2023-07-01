/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Mentee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Mentor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Mentee_email_key` ON `Mentee`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Mentor_email_key` ON `Mentor`(`email`);
