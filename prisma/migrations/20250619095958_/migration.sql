-- CreateEnum
CREATE TYPE "worksOnType" AS ENUM ('Web Development', 'Android / IOS Development', 'Machine Learning', 'Cyber Security', 'Cloud');

-- CreateEnum
CREATE TYPE "tag" AS ENUM ('ML', 'FRONTEND', 'BACKEND', 'FULLSTACK', 'CLOUD', 'DEVOPS', 'MOBILE', 'DATABASE', 'NLP', 'VISION', 'SECURITY');

-- CreateEnum
CREATE TYPE "job_type" AS ENUM ('HYBRID', 'REMOTE', 'OnSite');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "looking_for" "tag"[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "jid" SERIAL NOT NULL,
    "tags" "tag"[],
    "link" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "responsibility" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "last_date" TIMESTAMP(3) NOT NULL,
    "types" "job_type" NOT NULL,
    "requirements" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("jid")
);

-- CreateTable
CREATE TABLE "Company" (
    "cid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "workson" "worksOnType"[],

    CONSTRAINT "Company_pkey" PRIMARY KEY ("cid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jid_fkey" FOREIGN KEY ("jid") REFERENCES "Company"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;
