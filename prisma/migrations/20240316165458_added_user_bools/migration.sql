/*
  Warnings:

  - Added the required column `isAdmin` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isStaff` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL,
ADD COLUMN     "isStaff" BOOLEAN NOT NULL;
