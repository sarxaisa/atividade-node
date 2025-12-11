// ===============================
// TABELA DE PRODUTOS
// ===============================

export async function criarProdutos(conexao) {
    await conexao.schema.createTable('tbProdutos', tabela => {
        tabela.increments("codProd").primary()
        tabela.string("nome")
        tabela.string("validade")
    })
    console.log("Produtos criados com sucesso")
}

export async function inserirProduto(conexao, dados) {
    await conexao("tbProdutos").insert(dados)
    console.log("Produto inserido...")
}

export async function consultarProdutos(conexao, filtro = {}) {
    const dados = await conexao("tbProdutos").where(filtro)
    console.log(dados)
}

export async function alterarProduto(conexao, filtro, novosDados) {
    await conexao("tbProdutos").where(filtro).update(novosDados)
    console.log("Produto alterado...")
}

export async function excluirProduto(conexao, filtro) {
    await conexao("tbProdutos").where(filtro).del()
    console.log("Produto excluído...")
}