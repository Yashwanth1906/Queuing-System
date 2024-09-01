-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "hospitalCode" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'admin';

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_hospitalCode_fkey" FOREIGN KEY ("hospitalCode") REFERENCES "Hospital"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
