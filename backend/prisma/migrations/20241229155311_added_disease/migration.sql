-- CreateTable
CREATE TABLE "DiseaseAnalysis" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "disease" TEXT NOT NULL,
    "patientsCount" INTEGER NOT NULL,

    CONSTRAINT "DiseaseAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiseaseAnalysis_disease_key" ON "DiseaseAnalysis"("disease");
