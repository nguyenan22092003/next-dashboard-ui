/*
  Warnings:

  - You are about to drop the column `hello` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `test` on the `Class` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "hello",
DROP COLUMN "test";
