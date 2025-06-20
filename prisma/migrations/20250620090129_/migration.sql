/*
  Warnings:

  - A unique constraint covering the columns `[jid,id]` on the table `NewJob` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "NewJob_jid_id_key" ON "NewJob"("jid", "id");
