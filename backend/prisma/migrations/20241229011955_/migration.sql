/*
  Warnings:

  - You are about to drop the `Admission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Bed` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Departments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Doctors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Intimation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Inventory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MainStore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OPDQueue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OPSlots` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PatientInstance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pharmacy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubStore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ward` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Admission" DROP CONSTRAINT "Admission_bedId_fkey";

-- DropForeignKey
ALTER TABLE "Admission" DROP CONSTRAINT "Admission_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Admission" DROP CONSTRAINT "Admission_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Admission" DROP CONSTRAINT "Admission_wardId_fkey";

-- DropForeignKey
ALTER TABLE "Bed" DROP CONSTRAINT "Bed_wardId_fkey";

-- DropForeignKey
ALTER TABLE "Doctors" DROP CONSTRAINT "Doctors_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Intimation" DROP CONSTRAINT "Intimation_deptId_fkey";

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_mainStoreId_fkey";

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_pharmacyId_fkey";

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_subStoreId_fkey";

-- DropForeignKey
ALTER TABLE "OPDQueue" DROP CONSTRAINT "OPDQueue_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "OPDQueue" DROP CONSTRAINT "OPDQueue_patientInstanceId_fkey";

-- DropForeignKey
ALTER TABLE "OPSlots" DROP CONSTRAINT "OPSlots_deptid_fkey";

-- DropForeignKey
ALTER TABLE "PatientInstance" DROP CONSTRAINT "PatientInstance_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Pharmacy" DROP CONSTRAINT "Pharmacy_subStoreId_fkey";

-- DropForeignKey
ALTER TABLE "SubStore" DROP CONSTRAINT "SubStore_mainStoreId_fkey";

-- DropTable
DROP TABLE "Admission";

-- DropTable
DROP TABLE "Bed";

-- DropTable
DROP TABLE "Departments";

-- DropTable
DROP TABLE "Doctors";

-- DropTable
DROP TABLE "Intimation";

-- DropTable
DROP TABLE "Inventory";

-- DropTable
DROP TABLE "MainStore";

-- DropTable
DROP TABLE "OPDQueue";

-- DropTable
DROP TABLE "OPSlots";

-- DropTable
DROP TABLE "PatientInstance";

-- DropTable
DROP TABLE "Pharmacy";

-- DropTable
DROP TABLE "SubStore";

-- DropTable
DROP TABLE "Ward";

-- DropEnum
DROP TYPE "BedStatus";

-- DropEnum
DROP TYPE "DesignationType";

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
    "name" TEXT NOT NULL DEFAULT 'admin',
    "password" TEXT NOT NULL,
    "hospitalCode" TEXT NOT NULL DEFAULT '',

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
    "abhaId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "DOB" TEXT NOT NULL,
    "emergencyContact" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("abhaId")
);

-- CreateTable
CREATE TABLE "PatientBooking" (
    "id" SERIAL NOT NULL,
    "abhaId" TEXT NOT NULL,
    "hospitalCode" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Upcoming',
    "reason" TEXT NOT NULL,

    CONSTRAINT "PatientBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalRecord" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "hospitalCode" TEXT NOT NULL,
    "recordDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visitReason" TEXT NOT NULL,
    "medicationsPrescribed" JSONB NOT NULL,
    "treatmentSummary" TEXT NOT NULL,
    "doctorName" TEXT NOT NULL,
    "followUpInstructions" TEXT,
    "documents" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "MedicalRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ABHANumber" (
    "prev" TEXT NOT NULL,

    CONSTRAINT "ABHANumber_pkey" PRIMARY KEY ("prev")
);

-- CreateTable
CREATE TABLE "OTPVerification" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OTPVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BedRequest" (
    "id" TEXT NOT NULL,
    "hospitalCode" TEXT NOT NULL,
    "patientAbhaId" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "patientContact" TEXT NOT NULL,
    "wardName" TEXT NOT NULL,

    CONSTRAINT "BedRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_code_key" ON "Hospital"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_abhaId_key" ON "Patient"("abhaId");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "OTPVerification_email_key" ON "OTPVerification"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BedRequest_patientAbhaId_key" ON "BedRequest"("patientAbhaId");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_hospitalCode_fkey" FOREIGN KEY ("hospitalCode") REFERENCES "Hospital"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientBooking" ADD CONSTRAINT "PatientBooking_abhaId_fkey" FOREIGN KEY ("abhaId") REFERENCES "Patient"("abhaId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientBooking" ADD CONSTRAINT "PatientBooking_hospitalCode_fkey" FOREIGN KEY ("hospitalCode") REFERENCES "Hospital"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("abhaId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_hospitalCode_fkey" FOREIGN KEY ("hospitalCode") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
