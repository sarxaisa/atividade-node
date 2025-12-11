
// ===============================
// TABELA DE FORNECEDORES
// ===============================

export async function criarFornecedores(conexao) {
    await conexao.schema.createTable('tbFornecedores', tabela => {
        tabela.increments("codForn").primary().unsigned().notNullable()
        tabela.string("nome")
        tabela.string("codFor")
        tabela.string("descricao")
        tabela.string("quantidade")
    })
    console.log("Fornecedores criados com sucesso")
}

export async function inserirFornecedor(conexao, dados) {
    await conexao("tbFornecedores").insert(dados)
    console.log("Fornecedor inserido...")
}

export async function consultarFornecedores(conexao, filtro = {}) {
    const dados = await conexao("tbFornecedores").where(filtro)
    console.log(dados)
}

export async function alterarFornecedor(conexao, filtro, novosDados) {
    await conexao("tbFornecedores").where(filtro).update(novosDados)
    console.log("Fornecedor alterado...")
}

export async function excluirFornecedor(conexao, filtro) {
    await conexao("tbFornecedores").where(filtro).del()
    console.log("Fornecedor excluído...")
}