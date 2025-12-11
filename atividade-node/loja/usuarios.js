

// ===============================
// TABELA DE USUÁRIOS
// ===============================

export async function criarUsuarios(conexao) {
    await conexao.schema.createTable('tbUsuarios', tabela => {
        tabela.increments("codFunc").primary().unsigned().notNullable()
        tabela.string("codUsu")
        tabela.string("nome")
        tabela.string("email")
        tabela.string("telefone")
    })
    console.log("Usuários criados com sucesso")
}

export async function inserirUsuario(conexao, dados) {
    await conexao("tbUsuarios").insert(dados)
    console.log("Usuário inserido...")
}

export async function consultarUsuarios(conexao, filtro = {}) {
    const dados = await conexao("tbUsuarios").where(filtro)
    console.log(dados)
}

export async function alterarUsuario(conexao, filtro, novosDados) {
    await conexao("tbUsuarios").where(filtro).update(novosDados)
    console.log("Usuário alterado...")
}

export async function excluirUsuario(conexao, filtro) {
    await conexao("tbUsuarios").where(filtro).del()
    console.log("Usuário excluído...")
}