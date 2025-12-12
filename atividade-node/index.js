import knex from "knex";
import knexfile from "./knexfile.js"
import { inserirProduto, consultarProdutos, alterarProduto, excluirProduto, criarProdutos } from "./loja.js"

import { inserirFuncionario, consultarFuncionarios, alterarFuncionario, excluirFuncionario } from "./loja.js";

import { inserirFornecedor, consultarFornecedores, alterarFornecedor, excluirFornecedor, criarFornecedores } from "./loja.js";

import { inserirUsuario, consultarUsuarios, alterarUsuario, excluirUsuario } from "./loja.js";

import { inserirCliente, consultarClientes, alterarCliente, excluirCliente } from "./loja.js";

import { inserirVenda, consultarVendas, alterarVenda, excluirVenda } from "./loja.js";

 
 
const conexao = knex(knexfile)

//Criação das Tabelas
 
 //await criarFuncionarios(conexao);
 
// await criarProdutos(conexao);
 
//await criarFornecedores(conexao);

// await criarUsuarios(conexao);

//await criarClientes(conexao);

 //await criarVendas(conexao);


 // await inserirUsuario(conexao,{
//     codUsu:1,
//     nome: "Tatiane",
//     email: "tatiane_oliveira@gmail.com",
//     telefone:"11978451236"
// })

// await inserirUsuario(conexao,{
//     codUsu:1,
//     nome: "Amelia",
//     email: "amelia.marques@gmail.com",
//     telefone:"119241526930"
// })

// await consultarUsuarios(conexao,
//     {codUsu:2}
// )

// await alterarUsuario(conexao,
//     {codUsu:2},
//     {
//         nome:"Joana",
//         email:"joana.santos@yahoo.com",
//         telefone:"11963278459"
//     }
// )

// await excluirUsuario(conexao,
//     {codUsu:2}
// )


//CRUD Fornecedor

// await inserirFornecedor(conexao,{
//     descricao: "Fornecedor de materiais diversos",
//     quantidade: "200",
// })

// await consultarFornecedores(conexao,
//     {codForn:1}
// )

// await alterarFornecedor(conexao,
//     {codForn:2},
//     {
//         descricao:"Fornecedor especializado em feijão premium",
//         quantidade:"25",
//     }
// )

// await excluirFornecedor(conexao,
//     {codForn:1}
// )




// await inserirProduto(conexao,{
//     nome: "Arroz",
//     validade: "05/01/2027",
// })


// await criarProdutos(conexao,{
//     nome: "Batata"
//     validade: "05/01/2027",
//     })


// await alterarProduto(conexao,
//     { codProd: 1},   // filtro
//     { 
//         nome: "Feijao
//         validade: "10/06/2027
//     }
// )
// await excluirProduto(conexao,
//     { codProd: 2},   // filtro
//     { 
//         nome: "Batata",
//         validade: "05/01/2027"
//     }
// )

// await consultarProdutos(conexao,
//     { codProd: 1 },
// )


//CRUD Funcionários

// await inserirFuncionario(conexao,{
//     nome: "Adriana",
//     email: "adriana.souza@example.com",
//     telefone:"11956234780",
// })

// await consultarFuncionarios(conexao,
//     {codFunc:1}
// )

// await alterarFuncionario(conexao,
//     {codFunc:1},
//     {
//         nome:"Bruno",
//         email:"bruno_mendes@example.com",
//         telefone:"11984567210"
//     }
// )

// await excluirFuncionario(conexao,
//     {codFunc:1}
// )




//CRUD Clientes

// await inserirCliente(conexao,{
//     codCli:1,
//     nome: "Henrique",
//     email: "henrique.alves@yahoo.com",
//     telefone:"11978459632"
// })

// await consultarClientes(conexao,
//     {codCli:1}
// )

// await alterarCliente(conexao,
//     {codCli:1},
//     {
//         nome:"Diego",
//         email:"diego.martins@example.com",
//         telefone:"11975684213"
//     }
// )

// await excluirCliente(conexao,
//     {codCli:1}
// )

//CRUD Vendas

// await inserirVenda(conexao,{
//     codVend:1,
//     produto: "Copo térmico",
// })

// await consultarVendas(conexao,
//     {codVend:1}
// )

// await alterarVenda(conexao,
//     {codVend:1},
//     {
//         produto:"Garrafa de vidro",
//     }
// )

// await excluirVenda(conexao,
//     {codVend:1}
// )







//fechando a conexao
conexao.destroy()