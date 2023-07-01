-- CreateTable
CREATE TABLE `_CourseToMentor` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CourseToMentor_AB_unique`(`A`, `B`),
    INDEX `_CourseToMentor_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CourseToMentor` ADD CONSTRAINT `_CourseToMentor_A_fkey` FOREIGN KEY (`A`) REFERENCES `Course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CourseToMentor` ADD CONSTRAINT `_CourseToMentor_B_fkey` FOREIGN KEY (`B`) REFERENCES `Mentor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
