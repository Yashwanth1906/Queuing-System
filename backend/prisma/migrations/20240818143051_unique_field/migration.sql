/*
  Warnings:

  - The primary key for the `Patient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Patient` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[abhaId]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "MedicalRecord" DROP CONSTRAINT "MedicalRecord_patientId_fkey";

-- AlterTable
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Patient_pkey" PRIMARY KEY ("abhaId");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_abhaId_key" ON "Patient"("abhaId");

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("abhaId") ON DELETE RESTRICT ON UPDATE CASCADE;
