-- AlterTable
ALTER TABLE "ClassApplication" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "class_size" DROP NOT NULL,
ALTER COLUMN "schedule_constraints" DROP NOT NULL,
ALTER COLUMN "schedule_options" DROP NOT NULL,
ALTER COLUMN "schedule_options" SET DEFAULT 'WeekdayEvenings';
