CREATE TABLE tbClientes (
    codCli INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    telefone VARCHAR(255) DEFAULT NULL,
    produto VARCHAR(255) DEFAULT NULL,
    valor TINYINT(1) DEFAULT NULL,
    PRIMARY KEY (codCli)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ==================================
-- TABELA: tbFornecedores
-- ==================================

CREATE TABLE tbFornecedores (
    codForn INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) DEFAULT NULL,
    descricao VARCHAR(255) DEFAULT NULL,
    telefone VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (codForn)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ==================================
-- TABELA: tbFuncionarios
-- ==================================

CREATE TABLE tbFuncionarios (
    codFunc INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    telefone VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (codFunc)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ==================================
-- TABELA: tbProdutos
-- ==================================

CREATE TABLE tbProdutos (
    codProd INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) DEFAULT NULL,
    validade VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (codProd)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ==================================
-- TABELA: tbUsuarios
-- ==================================

CREATE TABLE tbUsuarios (
    codFunc INT UNSIGNED NOT NULL AUTO_INCREMENT,
    codUsu VARCHAR(255) DEFAULT NULL,
    nome VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    telefone VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (codFunc)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ==================================
-- TABELA: tbVendas
-- ==================================

CREATE TABLE tbVendas (
    codVenda INT UNSIGNED NOT NULL AUTO_INCREMENT,
    produto VARCHAR(255) DEFAULT NULL,
    valor VARCHAR(255) DEFAULT NULL,
    data DATE DEFAULT NULL,
    horario TIME DEFAULT NULL,
    PRIMARY KEY (codVenda)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
