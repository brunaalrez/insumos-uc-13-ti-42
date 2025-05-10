/*
  Warnings:

  - Added the required column `telefone` to the `criar usuários` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `criar usuários` ADD COLUMN `telefone` VARCHAR(191) NOT NULL;
