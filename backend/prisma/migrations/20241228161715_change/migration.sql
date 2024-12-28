/*
  Warnings:

  - You are about to drop the column `headOfDepartmentId` on the `Departments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Departments" DROP COLUMN "headOfDepartmentId";

-- CreateTable
CREATE TABLE "OPSlots" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "slot" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "deptid" TEXT NOT NULL,

    CONSTRAINT "OPSlots_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OPSlots" ADD CONSTRAINT "OPSlots_deptid_fkey" FOREIGN KEY ("deptid") REFERENCES "Departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
