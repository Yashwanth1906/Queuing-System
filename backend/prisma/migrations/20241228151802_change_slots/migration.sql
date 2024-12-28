/*
  Warnings:

  - You are about to drop the column `endDate` on the `OPSlots` table. All the data in the column will be lost.
  - You are about to drop the column `slots` on the `OPSlots` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `OPSlots` table. All the data in the column will be lost.
  - Added the required column `date` to the `OPSlots` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slot` to the `OPSlots` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OPSlots" DROP COLUMN "endDate",
DROP COLUMN "slots",
DROP COLUMN "startDate",
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "slot" TEXT NOT NULL;
