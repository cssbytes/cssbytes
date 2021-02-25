-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Byte" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    "xml" TEXT,
    "js" TEXT,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Byte" ("id", "userId", "css", "xml", "js") SELECT "id", "userId", "css", "xml", "js" FROM "Byte";
DROP TABLE "Byte";
ALTER TABLE "new_Byte" RENAME TO "Byte";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
