-- CreateTable
CREATE TABLE "Bookmark" (
    "mark" SERIAL NOT NULL,
    "jid" INTEGER NOT NULL,
    "id" INTEGER NOT NULL,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("mark")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_jid_id_key" ON "Bookmark"("jid", "id");

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_jid_fkey" FOREIGN KEY ("jid") REFERENCES "Job"("jid") ON DELETE CASCADE ON UPDATE CASCADE;
