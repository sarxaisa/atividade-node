import knex from "knex";
import knexfile from "./knexfile.js"
import { inserirProduto, consultarProdutos, alterarProduto, excluirProduto, criarProdutos } from "./loja/produtos.js";

import { inserirFuncionario, consultarFuncionarios, alterarFuncionario, excluirFuncionario } from "./loja/funcionarios.js";

import { inserirFornecedor, consultarFornecedores, alterarFornecedor, excluirFornecedor, criarFornecedores } from "./loja/fornecedores.js";

import { inserirUsuario, consultarUsuarios, alterarUsuario, excluirUsuario } from "./loja/usuarios.js";

import { inserirCliente, consultarClientes, alterarCliente, excluirCliente } from "./loja/clientes.js";

import { inserirVenda, consultarVendas, alterarVenda, excluirVenda } from "./loja/vendas.js";

 
 
const conexao = knex(knexfile)

//Criação das Tabelas
 
 //await criarFuncionarios(conexao);
 
// await criarProdutos(conexao);
 
//await criarFornecedores(conexao);

// await criarUsuarios(conexao);

//await criarClientes(conexao);

 //await criarVendas(conexao);


 //CRUD Produtos

 //inserir registros e alterações de produtos


// await inserirProduto(conexao,{
//     nome: "Macarrão",
//     validade: "11/12/25"
// })


// await criarProdutos(conexao,{
//     nome: "Macarrão",
//     validade: "11/12/25",
//     })

//     await inserirProduto(conexao,{
//     nome: "Macarrão",
//     validade: "11/12/25"
// })
// await alterarProduto(conexao,
//     { codProd: 3 },   // filtro
//     { 
//         nome: "Arroz",
//         validade: "20/12/26"
//     }
// )
// await excluirProduto(conexao,
//     { codProd: 2 },   // filtro
//     { 
//         nome: "Macarrão",
//         validade: "11/12/25"
//     }
// )

// await consultarProdutos(conexao,
//     { codProd: 3 },
// )


//CRUD Funcionários

// await inserirFuncionario(conexao,{
//     nome: "Laryssa",
//     email: "ferreiralaryssa623@gmai.com",
//     telefone:"11976811805",
// })

// await consultarFuncionarios(conexao,
//     {codFunc:1}
// )

// await alterarFuncionario(conexao,
//     {codFunc:1},
//     {
//         nome:"Lucas",
//         email:"lucas_silva@gmail.com",
//         telefone:"1148796421"
//     }
// )

// await excluirFuncionario(conexao,
//     {codFunc:1}
// )

//CRUD Fornecedor


// await inserirFornecedor(conexao,{
//     descricao: "O melhor fornecedor",
//     quantidade: "150",
// })

// await consultarFornecedores(conexao,
//     {codForn:1}
// )

// await alterarFornecedor(conexao,
//     {codForn:2},
//     {
//         descricao:"o melhor fornecedor de arroz namorado",
//         quantidade:"10",
        
//     }
// )

// await excluirFornecedor(conexao,
//     {codForn:1}
// )

//CRUD Usuários


// await inserirUsuario(conexao,{
// codUsu:1,
//     nome: "Elize",
//     email: "Elize150@gmail.com",
//     telefone:"117845965417"
// })

// await consultarUsuarios(conexao,
//     {codUsu:1}
// )

// await alterarUsuario(conexao,
//     {codUsu:1},
//     {
//         nome:"luana",
//         email:"luana10@gmail.com",
//         telefone:"1178965423"
        
//     }
// )

// await excluirUsuario(conexao,
//     {codFunc:1}
// )


//CRUD Clientes

// await inserirCliente(conexao,{
// codCli:1,
//     nome: "Marcos",
//     email: "Marcos_150@gmail.com",
//     telefone:"117878965417"
// })

// await consultarClientes(conexao,
//     {codCli:1}
// )

// await alterarCliente(conexao,
//     {codCli:1},
//     {
//         nome:"Ryan",
//         email:"Ryan_zyka@gmail.com",
//         telefone:"7896541203"
        
//     }
// )

// await excluirCliente(conexao,
//     {codFunc:1}
// )

//CRUD Vendas

// await inserirVenda(conexao,{
// codVend:1,
//     produto: "luva",

// })

// await consultarVendas(conexao,
//     {codVend:1}
// )

// await alterarVenda(conexao,
//     {codVend:1},
//     {
//         produto:"Prato",
        
//     }
// )

// await excluirVenda(conexao,
//     {codVend:1}
// )







//fechando a conexao
conexao.destroy()