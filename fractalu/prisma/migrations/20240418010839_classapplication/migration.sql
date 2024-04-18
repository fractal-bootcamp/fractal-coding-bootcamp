-- CreateEnum
CREATE TYPE "ScheduleOptions" AS ENUM ('WeekdayEvenings', 'WeekdayNights', 'WeekendMornings', 'WeekendAfternoons', 'WeekendEvenings');

-- CreateTable
CREATE TABLE "Instructor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "teachingExperience" TEXT NOT NULL,
    "classApplicationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "platform" TEXT,
    "instructorId" TEXT NOT NULL,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassApplication" (
    "id" TEXT NOT NULL,
    "schedule_options" "ScheduleOptions"[],
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "class_size" INTEGER NOT NULL,
    "schedule_constraints" TEXT NOT NULL,

    CONSTRAINT "ClassApplication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_name_key" ON "Instructor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_email_key" ON "Instructor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ClassApplication_name_key" ON "ClassApplication"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ClassApplication_description_key" ON "ClassApplication"("description");

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
