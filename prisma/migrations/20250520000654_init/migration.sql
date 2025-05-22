-- CreateTable
CREATE TABLE `estoque` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `fornecedor` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `categoria` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movimentacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_insumo_produto` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `tipo_movimentacao` VARCHAR(191) NOT NULL,
    `tipo_i_p` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `movimentacao` ADD CONSTRAINT `movimentacao_id_insumo_produto_fkey` FOREIGN KEY (`id_insumo_produto`) REFERENCES `estoque`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
