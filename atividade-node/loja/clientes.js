
// ===============================
// TABELA DE CLIENTES
// ===============================

export async function criarClientes(conexao) {
    await conexao.schema.createTable('tbClientes', tabela => {
        tabela.increments("codCli").primary().unsigned().notNullable()
        tabela.string("nome")
        tabela.string("email")
        tabela.string("telefone")
        tabela.string("produtos")
    })
    console.log("Clientes criados com sucesso")
}

export async function inserirCliente(conexao, dados) {
    await conexao("tbClientes").insert(dados)
    console.log("Cliente inserido...")
}

export async function consultarClientes(conexao, filtro = {}) {
    const dados = await conexao("tbClientes").where(filtro)
    console.log(dados)
}

export async function alterarCliente(conexao, filtro, novosDados) {
    await conexao("tbClientes").where(filtro).update(novosDados)
    console.log("Cliente alterado...")
}

export async function excluirCliente(conexao, filtro) {
    await conexao("tbClientes").where(filtro).del()
    console.log("Cliente excluído...")
}