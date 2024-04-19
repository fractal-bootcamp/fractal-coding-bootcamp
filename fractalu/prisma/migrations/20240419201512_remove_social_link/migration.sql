/*
  Warnings:

  - You are about to drop the `SocialLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SocialLink" DROP CONSTRAINT "SocialLink_instructorId_fkey";

-- DropTable
DROP TABLE "SocialLink";
