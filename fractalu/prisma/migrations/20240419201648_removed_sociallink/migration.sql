/*
  Warnings:

  - Added the required column `socialLinks` to the `Instructor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Instructor" ADD COLUMN     "socialLinks" TEXT NOT NULL;
