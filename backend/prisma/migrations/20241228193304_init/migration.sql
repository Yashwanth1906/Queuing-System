-- CreateEnum
CREATE TYPE "DesignationType" AS ENUM ('Trainee', 'Assistant', 'Senior', 'HeadOfDepartment');

-- CreateEnum
CREATE TYPE "QueueStatus" AS ENUM ('Pending', 'Inprogress', 'Completed');

-- CreateEnum
CREATE TYPE "BedStatus" AS ENUM ('Available', 'Occupied', 'Under_Maintainence');

-- CreateEnum
CREATE TYPE "VisitType" AS ENUM ('FreshVisit', 'Revisit');

-- CreateEnum
CREATE TYPE "InventoryCategory" AS ENUM ('Medicine', 'Surgical_Tools', 'Others');

-- CreateTable
CREATE TABLE "Doctors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "designation" "DesignationType" NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "departmentId" TEXT NOT NULL,
    "hospitalCode" TEXT NOT NULL DEFAULT '0001',

    CONSTRAINT "Doctors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OPSlots" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "slot" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "deptid" TEXT NOT NULL,

    CONSTRAINT "OPSlots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Departments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OPDQueue" (
    "id" TEXT NOT NULL,
    "patientInstanceId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "status" "QueueStatus" NOT NULL,
    "queueNumber" INTEGER NOT NULL,
    "timeStamp" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OPDQueue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bed" (
    "id" TEXT NOT NULL,
    "bedNumber" TEXT NOT NULL,
    "wardId" TEXT NOT NULL,
    "status" "BedStatus" NOT NULL,

    CONSTRAINT "Bed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ward" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "totalBeds" INTEGER NOT NULL,
    "availableBeds" INTEGER NOT NULL,

    CONSTRAINT "Ward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientInstance" (
    "id" TEXT NOT NULL,
    "abhaId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "Gender" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "queueNumber" INTEGER,
    "medications" JSONB,
    "feedback" TEXT,
    "visitType" "VisitType" NOT NULL,

    CONSTRAINT "PatientInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admission" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "wardId" TEXT,
    "bedId" TEXT,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "Admission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Intimation" (
    "id" SERIAL NOT NULL,
    "abhaId" TEXT NOT NULL,
    "reason" TEXT,
    "deptId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "Intimation_pkey" PRIMARY KEY ("id")
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

-- CreateIndex
CREATE UNIQUE INDEX "OPDQueue_patientInstanceId_key" ON "OPDQueue"("patientInstanceId");

-- CreateIndex
CREATE UNIQUE INDEX "Bed_bedNumber_key" ON "Bed"("bedNumber");

-- CreateIndex
CREATE UNIQUE INDEX "PatientInstance_abhaId_key" ON "PatientInstance"("abhaId");

-- AddForeignKey
ALTER TABLE "Doctors" ADD CONSTRAINT "Doctors_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OPSlots" ADD CONSTRAINT "OPSlots_deptid_fkey" FOREIGN KEY ("deptid") REFERENCES "Departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OPDQueue" ADD CONSTRAINT "OPDQueue_patientInstanceId_fkey" FOREIGN KEY ("patientInstanceId") REFERENCES "PatientInstance"("abhaId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OPDQueue" ADD CONSTRAINT "OPDQueue_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bed" ADD CONSTRAINT "Bed_wardId_fkey" FOREIGN KEY ("wardId") REFERENCES "Ward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientInstance" ADD CONSTRAINT "PatientInstance_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admission" ADD CONSTRAINT "Admission_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "PatientInstance"("abhaId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admission" ADD CONSTRAINT "Admission_wardId_fkey" FOREIGN KEY ("wardId") REFERENCES "Ward"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admission" ADD CONSTRAINT "Admission_bedId_fkey" FOREIGN KEY ("bedId") REFERENCES "Bed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admission" ADD CONSTRAINT "Admission_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Intimation" ADD CONSTRAINT "Intimation_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
