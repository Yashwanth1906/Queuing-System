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
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "DOB" TEXT NOT NULL,
    "emergencyContact" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("abhaId")
);

-- CreateTable
CREATE TABLE "MedicalRecord" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "hospitalName" TEXT NOT NULL,
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
CREATE UNIQUE INDEX "OTPVerification_email_key" ON "OTPVerification"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BedRequest_patientAbhaId_key" ON "BedRequest"("patientAbhaId");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_hospitalCode_fkey" FOREIGN KEY ("hospitalCode") REFERENCES "Hospital"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("abhaId") ON DELETE RESTRICT ON UPDATE CASCADE;
