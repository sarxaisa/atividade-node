export async function criarClientes(conexao) {
    await conexao.schema.createTable('tbClientes', tabela => {
        tabela.increments("codCli").primary().unsigned().notNullable()
        tabela.string("nome")
        tabela.string("email")
        tabela.string("telefone")
        tabela.string("produto")
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


export async function criarFornecedores(conexao) {
    await conexao.schema.createTable('tbFornecedores', tabela => {
        tabela.increments("codForn").primary().unsigned().notNullable()
        tabela.string("nome")
        tabela.string("descricao")
        tabela.string("telefone")
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

export async function alterarFornecedor(conexao, filtro, newDados) {
    await conexao("tbFornecedores").where(filtro).update(newDados)
    console.log("Fornecedor alterado...")
}

export async function excluirFornecedor(conexao, filtro) {
    await conexao("tbFornecedores").where(filtro).del()
    console.log("Fornecedor excluído...")
}

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

export async function alterarFuncionario(conexao, filtro, newDados) {
    await conexao("tbFuncionarios").where(filtro).update(newDados)
    console.log("Funcionário alterado...")
}

export async function excluirFuncionario(conexao, filtro) {
    await conexao("tbFuncionarios").where(filtro).del()
    console.log("Funcionário excluído...")
}

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

export async function alterarProduto(conexao, filtro, newDados) {
    await conexao("tbProdutos").where(filtro).update(newDados)
    console.log("Produto alterado...")
}

export async function excluirProduto(conexao, filtro) {
    await conexao("tbProdutos").where(filtro).del()
    console.log("Produto excluído...")
}

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

export async function alterarUsuario(conexao, filtro, newDados) {
    await conexao("tbUsuarios").where(filtro).update(newDados)
    console.log("Usuário alterado...")
}

export async function excluirUsuario(conexao, filtro) {
    await conexao("tbUsuarios").where(filtro).del()
    console.log("Usuário excluído...")
}


export async function criarVendas(conexao) {
    await conexao.schema.createTable('tbVendas', tabela => {
        tabela.increments("codVenda").primary().unsigned().notNullable()
        tabela.string("produto")
        tabela.string("valor")
        tabela.date("data")
        tabela.time("horario")
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

export async function alterarVenda(conexao, filtro, newDados) {
    await conexao("tbVendas").where(filtro).update(newDados)
    console.log("Venda alterada...")
}

export async function excluirVenda(conexao, filtro) {
    await conexao("tbVendas").where(filtro).del()
    console.log("Venda excluída...")
}