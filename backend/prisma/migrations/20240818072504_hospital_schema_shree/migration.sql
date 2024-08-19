/*
  Warnings:

  - You are about to drop the column `createdAt` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `doctorName` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `documents` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `followUpInstructions` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `hospitalName` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `medicationsPrescribed` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `patientId` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `recordDate` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `treatmentSummary` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `MedicalRecord` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hospital` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Patient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `allergies` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `importantConditions` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastHospitalVisit` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `permanentRecordId` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "QueueStatus" AS ENUM ('Pending', 'Inprogress', 'Completed');

-- CreateEnum
CREATE TYPE "BedStatus" AS ENUM ('Available', 'Occupied', 'Under_Maintainence');

-- CreateEnum
CREATE TYPE "VisitType" AS ENUM ('FreshVisit', 'Revisit');

-- CreateEnum
CREATE TYPE "InventoryCategory" AS ENUM ('Medicine', 'Surgical_Tools', 'Others');

-- DropForeignKey
ALTER TABLE "MedicalRecord" DROP CONSTRAINT "MedicalRecord_patientId_fkey";

-- AlterTable
ALTER TABLE "MedicalRecord" DROP COLUMN "createdAt",
DROP COLUMN "doctorName",
DROP COLUMN "documents",
DROP COLUMN "followUpInstructions",
DROP COLUMN "hospitalName",
DROP COLUMN "medicationsPrescribed",
DROP COLUMN "patientId",
DROP COLUMN "recordDate",
DROP COLUMN "treatmentSummary",
DROP COLUMN "updatedAt",
ADD COLUMN     "allergies" TEXT NOT NULL,
ADD COLUMN     "importantConditions" TEXT NOT NULL,
ADD COLUMN     "lastHospitalVisit" TEXT NOT NULL,
ADD COLUMN     "permanentRecordId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Hospital";

-- DropTable
DROP TABLE "Patient";

-- CreateTable
CREATE TABLE "Doctors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "Doctors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Departments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "headOfDepartmentId" TEXT NOT NULL DEFAULT ' ',

    CONSTRAINT "Departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OPDQueue" (
    "id" TEXT NOT NULL,
    "patientInstanceId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "status" "QueueStatus" NOT NULL,
    "queueNumber" INTEGER NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OPDQueue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bed" (
    "id" TEXT NOT NULL,
    "bedNumber" TEXT NOT NULL,
    "wardId" TEXT NOT NULL,
    "status" "BedStatus" NOT NULL,
    "admissionDate" TIMESTAMP(3) NOT NULL,
    "dischargeDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ward" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "totalBeds" INTEGER NOT NULL,
    "availableBeds" INTEGER NOT NULL,

    CONSTRAINT "Ward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PermanentRecord" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "PermanentRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientInstance" (
    "id" TEXT NOT NULL,
    "permanentRecordId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "wardId" TEXT,
    "bedId" TEXT,
    "queueNumber" INTEGER NOT NULL,
    "emergencyStatus" BOOLEAN NOT NULL,
    "medications" JSONB NOT NULL,
    "feedback" TEXT NOT NULL,
    "visitType" "VisitType" NOT NULL,

    CONSTRAINT "PatientInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admission" (
    "id" TEXT NOT NULL,
    "patientInstanceId" TEXT NOT NULL,
    "wardId" TEXT NOT NULL,
    "bedId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "Admission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainStore" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MainStore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubStore" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mainStoreId" TEXT NOT NULL,

    CONSTRAINT "SubStore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pharmacy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subStoreId" TEXT NOT NULL,

    CONSTRAINT "Pharmacy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "category" "InventoryCategory" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "reorderLevel" INTEGER NOT NULL,
    "lastOrderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stockBatches" JSONB[],
    "mainStoreId" TEXT,
    "subStoreId" TEXT,
    "pharmacyId" TEXT,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctors_email_key" ON "Doctors"("email");

-- AddForeignKey
ALTER TABLE "Doctors" ADD CONSTRAINT "Doctors_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OPDQueue" ADD CONSTRAINT "OPDQueue_patientInstanceId_fkey" FOREIGN KEY ("patientInstanceId") REFERENCES "PatientInstance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OPDQueue" ADD CONSTRAINT "OPDQueue_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bed" ADD CONSTRAINT "Bed_wardId_fkey" FOREIGN KEY ("wardId") REFERENCES "Ward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ward" ADD CONSTRAINT "Ward_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_permanentRecordId_fkey" FOREIGN KEY ("permanentRecordId") REFERENCES "PermanentRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientInstance" ADD CONSTRAINT "PatientInstance_permanentRecordId_fkey" FOREIGN KEY ("permanentRecordId") REFERENCES "PermanentRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientInstance" ADD CONSTRAINT "PatientInstance_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientInstance" ADD CONSTRAINT "PatientInstance_wardId_fkey" FOREIGN KEY ("wardId") REFERENCES "Ward"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientInstance" ADD CONSTRAINT "PatientInstance_bedId_fkey" FOREIGN KEY ("bedId") REFERENCES "Bed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admission" ADD CONSTRAINT "Admission_patientInstanceId_fkey" FOREIGN KEY ("patientInstanceId") REFERENCES "PatientInstance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admission" ADD CONSTRAINT "Admission_wardId_fkey" FOREIGN KEY ("wardId") REFERENCES "Ward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admission" ADD CONSTRAINT "Admission_bedId_fkey" FOREIGN KEY ("bedId") REFERENCES "Bed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admission" ADD CONSTRAINT "Admission_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubStore" ADD CONSTRAINT "SubStore_mainStoreId_fkey" FOREIGN KEY ("mainStoreId") REFERENCES "MainStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pharmacy" ADD CONSTRAINT "Pharmacy_subStoreId_fkey" FOREIGN KEY ("subStoreId") REFERENCES "SubStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_mainStoreId_fkey" FOREIGN KEY ("mainStoreId") REFERENCES "MainStore"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_subStoreId_fkey" FOREIGN KEY ("subStoreId") REFERENCES "SubStore"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_pharmacyId_fkey" FOREIGN KEY ("pharmacyId") REFERENCES "Pharmacy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
