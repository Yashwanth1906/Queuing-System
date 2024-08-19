/*
  Warnings:

  - Added the required column `Gender` to the `PatientInstance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `PatientInstance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `PatientInstance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PatientInstance" ADD COLUMN     "Gender" TEXT NOT NULL,
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "reason" TEXT NOT NULL;
