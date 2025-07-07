/*
  Warnings:

  - Added the required column `hello` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "hello" TEXT NOT NULL;
