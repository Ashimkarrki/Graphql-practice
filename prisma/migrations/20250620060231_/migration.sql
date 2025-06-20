-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_cid_fkey";

-- CreateTable
CREATE TABLE "NewJob" (
    "njid" SERIAL NOT NULL,
    "jid" INTEGER NOT NULL,
    "id" INTEGER NOT NULL,

    CONSTRAINT "NewJob_pkey" PRIMARY KEY ("njid")
);

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_cid_fkey" FOREIGN KEY ("cid") REFERENCES "Company"("cid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewJob" ADD CONSTRAINT "NewJob_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewJob" ADD CONSTRAINT "NewJob_jid_fkey" FOREIGN KEY ("jid") REFERENCES "Job"("jid") ON DELETE CASCADE ON UPDATE CASCADE;
