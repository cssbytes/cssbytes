-- CreateTable
CREATE TABLE "_FavoriteBytes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Byte" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_FavoriteStylesheets" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Stylesheet" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteBytes_AB_unique" ON "_FavoriteBytes"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteBytes_B_index" ON "_FavoriteBytes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteStylesheets_AB_unique" ON "_FavoriteStylesheets"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteStylesheets_B_index" ON "_FavoriteStylesheets"("B");
