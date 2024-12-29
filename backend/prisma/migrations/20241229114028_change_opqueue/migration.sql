/*
  Warnings:

  - Made the column `timeStamp` on table `OPDQueue` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "OPDQueue" ADD COLUMN     "demotion" INTEGER,
ADD COLUMN     "priority" INTEGER,
ALTER COLUMN "timeStamp" SET NOT NULL,
ALTER COLUMN "timeStamp" SET DEFAULT '',
ALTER COLUMN "timeStamp" SET DATA TYPE TEXT;
