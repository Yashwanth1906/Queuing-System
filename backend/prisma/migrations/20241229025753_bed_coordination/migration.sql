/*
  Warnings:

  - Added the required column `patientAge` to the `BedRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientGender` to the `BedRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `BedRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BedRequest" ADD COLUMN     "patientAge" INTEGER NOT NULL,
ADD COLUMN     "patientGender" TEXT NOT NULL,
ADD COLUMN     "reason" TEXT NOT NULL;
