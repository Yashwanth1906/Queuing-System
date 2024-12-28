/*
  Warnings:

  - A unique constraint covering the columns `[headOfDepartmentId]` on the table `Departments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Departments" ADD COLUMN     "headOfDepartmentId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Departments_headOfDepartmentId_key" ON "Departments"("headOfDepartmentId");

-- AddForeignKey
ALTER TABLE "Departments" ADD CONSTRAINT "Departments_headOfDepartmentId_fkey" FOREIGN KEY ("headOfDepartmentId") REFERENCES "Doctors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
