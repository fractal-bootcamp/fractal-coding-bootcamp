/*
  Warnings:

  - Added the required column `schedule_options` to the `ClassApplication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClassApplication" ADD COLUMN     "schedule_options" "ScheduleOptions" NOT NULL;
