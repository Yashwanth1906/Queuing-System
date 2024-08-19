/*
  Warnings:

  - You are about to drop the column `allergies` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `importantConditions` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `lastHospitalVisit` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `permanentRecordId` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the `Admission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Bed` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Departments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Doctors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Inventory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MainStore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OPDQueue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PatientInstance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PermanentRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pharmacy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubStore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ward` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `doctorName` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hospitalName` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicationsPrescribed` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientId` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `treatmentSummary` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Admission" DROP CONSTRAINT "Admission_bedId_fkey";

-- DropForeignKey
ALTER TABLE "Admission" DROP CONSTRAINT "Admission_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Admission" DROP CONSTRAINT "Admission_patientInstanceId_fkey";

-- DropForeignKey
ALTER TABLE "Admission" DROP CONSTRAINT "Admission_wardId_fkey";

-- DropForeignKey
ALTER TABLE "Bed" DROP CONSTRAINT "Bed_wardId_fkey";

-- DropForeignKey
ALTER TABLE "Doctors" DROP CONSTRAINT "Doctors_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_mainStoreId_fkey";

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_pharmacyId_fkey";

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_subStoreId_fkey";

-- DropForeignKey
ALTER TABLE "MedicalRecord" DROP CONSTRAINT "MedicalRecord_permanentRecordId_fkey";

-- DropForeignKey
ALTER TABLE "OPDQueue" DROP CONSTRAINT "OPDQueue_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "OPDQueue" DROP CONSTRAINT "OPDQueue_patientInstanceId_fkey";

-- DropForeignKey
ALTER TABLE "PatientInstance" DROP CONSTRAINT "PatientInstance_bedId_fkey";

-- DropForeignKey
ALTER TABLE "PatientInstance" DROP CONSTRAINT "PatientInstance_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "PatientInstance" DROP CONSTRAINT "PatientInstance_permanentRecordId_fkey";

-- DropForeignKey
ALTER TABLE "PatientInstance" DROP CONSTRAINT "PatientInstance_wardId_fkey";

-- DropForeignKey
ALTER TABLE "Pharmacy" DROP CONSTRAINT "Pharmacy_subStoreId_fkey";

-- DropForeignKey
ALTER TABLE "SubStore" DROP CONSTRAINT "SubStore_mainStoreId_fkey";

-- DropForeignKey
ALTER TABLE "Ward" DROP CONSTRAINT "Ward_departmentId_fkey";

-- AlterTable
ALTER TABLE "MedicalRecord" DROP COLUMN "allergies",
DROP COLUMN "importantConditions",
DROP COLUMN "lastHospitalVisit",
DROP COLUMN "permanentRecordId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "doctorName" TEXT NOT NULL,
ADD COLUMN     "documents" JSONB,
ADD COLUMN     "followUpInstructions" TEXT,
ADD COLUMN     "hospitalName" TEXT NOT NULL,
ADD COLUMN     "medicationsPrescribed" TEXT NOT NULL,
ADD COLUMN     "patientId" TEXT NOT NULL,
ADD COLUMN     "recordDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "treatmentSummary" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "Admission";

-- DropTable
DROP TABLE "Bed";

-- DropTable
DROP TABLE "Departments";

-- DropTable
DROP TABLE "Doctors";

-- DropTable
DROP TABLE "Inventory";

-- DropTable
DROP TABLE "MainStore";

-- DropTable
DROP TABLE "OPDQueue";

-- DropTable
DROP TABLE "PatientInstance";

-- DropTable
DROP TABLE "PermanentRecord";

-- DropTable
DROP TABLE "Pharmacy";

-- DropTable
DROP TABLE "SubStore";

-- DropTable
DROP TABLE "Ward";

-- DropEnum
DROP TYPE "BedStatus";

-- DropEnum
DROP TYPE "InventoryCategory";

-- DropEnum
DROP TYPE "QueueStatus";

-- DropEnum
DROP TYPE "VisitType";

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "dbURL" TEXT NOT NULL,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "abhaId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_code_key" ON "Hospital"("code");

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
