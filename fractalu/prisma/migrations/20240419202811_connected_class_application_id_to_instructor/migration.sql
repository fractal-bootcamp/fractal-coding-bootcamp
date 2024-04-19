-- AlterTable
ALTER TABLE "Instructor" ALTER COLUMN "classApplicationId" DROP NOT NULL,
ALTER COLUMN "classApplicationId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Instructor" ADD CONSTRAINT "Instructor_classApplicationId_fkey" FOREIGN KEY ("classApplicationId") REFERENCES "ClassApplication"("id") ON DELETE SET NULL ON UPDATE CASCADE;
