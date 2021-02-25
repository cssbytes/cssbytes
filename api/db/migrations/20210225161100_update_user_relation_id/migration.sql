-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Byte" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    "xml" TEXT,
    "js" TEXT,
    FOREIGN KEY ("userId") REFERENCES "User" ("username") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Byte" ("id", "userId", "css", "xml", "js") SELECT "id", "userId", "css", "xml", "js" FROM "Byte";
DROP TABLE "Byte";
ALTER TABLE "new_Byte" RENAME TO "Byte";
CREATE TABLE "new_Stylesheet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "css" TEXT,
    FOREIGN KEY ("userId") REFERENCES "User" ("username") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Stylesheet" ("id", "userId", "locked", "css") SELECT "id", "userId", "locked", "css" FROM "Stylesheet";
DROP TABLE "Stylesheet";
ALTER TABLE "new_Stylesheet" RENAME TO "Stylesheet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
