// ===============================
// TABELA DE VENDAS
// ===============================

export async function criarVendas(conexao) {
    await conexao.schema.createTable('tbVendas', tabela => {
        tabela.increments("codVend").primary().unsigned().notNullable()
        tabela.string("produto")
    })
    console.log("Vendas criadas com sucesso")
}

export async function inserirVenda(conexao, dados) {
    await conexao("tbVendas").insert(dados)
    console.log("Venda inserida...")
}

export async function consultarVendas(conexao, filtro = {}) {
    const dados = await conexao("tbVendas").where(filtro)
    console.log(dados)
}

export async function alterarVenda(conexao, filtro, novosDados) {
    await conexao("tbVendas").where(filtro).update(novosDados)
    console.log("Venda alterada...")
}

export async function excluirVenda(conexao, filtro) {
    await conexao("tbVendas").where(filtro).del()
    console.log("Venda excluída...")
}