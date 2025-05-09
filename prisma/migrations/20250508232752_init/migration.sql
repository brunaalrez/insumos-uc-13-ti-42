-- CreateTable
CREATE TABLE `criar usuários` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `data_de_nascimento` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tipo_de_usuario` INTEGER NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `criado_em` DATETIME(3) NOT NULL,
    `criado_por` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estoque` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_de_insumo` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `fornecedor` VARCHAR(191) NOT NULL,
    `tipo_de_produto` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movimentação` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_do_usuario` INTEGER NOT NULL,
    `id_do_insumo` INTEGER NOT NULL,
    `id_do_produto` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
