/*
  Warnings:

  - Added the required column `name` to the `PatientInstance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PatientInstance" ADD COLUMN     "name" TEXT NOT NULL;
