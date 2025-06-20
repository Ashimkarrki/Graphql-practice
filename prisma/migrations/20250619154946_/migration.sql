/*
  Warnings:

  - Added the required column `cid` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_jid_fkey";

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "cid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_cid_fkey" FOREIGN KEY ("cid") REFERENCES "Company"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;
