
// ===============================
// TABELA DE FUNCIONÁRIOS
// ===============================

export async function criarFuncionarios(conexao) {
    await conexao.schema.createTable('tbFuncionarios', tabela => {
        tabela.increments("codFunc").primary().unsigned().notNullable()
        tabela.string("nome")
        tabela.string("email")
        tabela.string("telefone")
    })
    console.log("Funcionários criados com sucesso")
}

export async function inserirFuncionario(conexao, dados) {
    await conexao("tbFuncionarios").insert(dados)
    console.log("Funcionário inserido...")
}

export async function consultarFuncionarios(conexao, filtro = {}) {
    const dados = await conexao("tbFuncionarios").where(filtro)
    console.log(dados)
}

export async function alterarFuncionario(conexao, filtro, novosDados) {
    await conexao("tbFuncionarios").where(filtro).update(novosDados)
    console.log("Funcionário alterado...")
}

export async function excluirFuncionario(conexao, filtro) {
    await conexao("tbFuncionarios").where(filtro).del()
    console.log("Funcionário excluído...")
}