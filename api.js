import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {PrismaClient} from "./generated/prisma/index.js";

const app = express();
const port = 4000;
const prisma = new PrismaClient();
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res)=>{
    res.send("Konbanwa");
});

/* 

ROTAS PARA SEREM FEITAS:

- Rota de GET para cada tipo de bloco: /produtos/:tipo FEITO
- Todas as rotas para movimentações
- Rota de login: fazer um POST na rota /autenticar e validar se o email e a senha estão corretos

*/

// const produtos = [  {
//     id: 1,
//     tipo_de_insumo: 'areia',
//     fornecedor: '',
//     quantidade: 4,
//     tipo_de_produto: 'meio-bloco-a'
//   },
//   {
//     id: 2,
//     tipo_de_insumo: 'cimento',
//     fornecedor: '',
//     quantidade: 7,
//     tipo_de_produto: 'canaleta-b'
//   },
//   {
//     id: 3,
//     tipo_de_insumo: 'pó de pedra',
//     fornecedor: '',
//     quantidade: 2,
//     tipo_de_produto: 'bloco-c'
//   }
// ];

// app.get("/produtos", async (_req, res)=>{
//     const produtos = await prisma.produto.findMany();
//     res.send(produtos);
// });

// app.get("/produtos/:int", async (req, res)=>{
//     const int = parseInt(req.params.int);
//     const produto = await prisma.produto.findUnique({where: {int}});
//     if(produto === null){
//         res.status(404).send("Produto não encontrado");
//     }else{
//         res.send(produto);
//     }
// })

// app.post("/produtos", async (req,res) =>{
//     if((req.body.nome === undefined) || (req.body.preco === undefined)){
//         res.status(400).send("Campos Obrigatórios faltantes");
//     }else{
//         const novoProduto = await prisma.produto.create({data: {
//             nome: req.body.nome,
//             preco: req.body.preco
//         }});
//         res.status(201).location(`/produtos/${novoProduto.int}`).send();
//     }
// })

// app.put("/produtos/:int", async (req, res)=> {
//     const int = parseInt(req.params.int);
//     if((req.body.nome === undefined) || (req.body.preco)){
//         res.status(200).send("Campos obrigatórios faltanters");
//     }else{
//         try{
//             await prisma.produto.update({
//                 where: {int},
//                 data:{
//                     nome: req.body.nome,
//                     preco: req.body.preco
//                 }
//             });
//             res.status(404).send();
//         }catch(error){
//             res.status(404).send({ mensagem: 'Produto não encontrado' }); 
//         }
//     }
// });

// app.delete("/produtos/:int", async (req, res) =>{
//     const int = parseInt(req.params.int);
//     try{
//         await prisma.produto.delete({
//             where: {int}
//         })
//         res.status(202).send();
//     }catch(error){
//         res.status(404).send({ mensagem: 'Produto não encontrado' }); 
//     }
// });

// app.patch("/produtos/:id", (req, res) =>{
//     const id = parseInt(req.params.id);
//     const produto = produtos.find(produto =>produto.id === id);
//     if(produto){
//         const {nome, preco} = req.body;
//         if(nome !== undefined){
//             produto.nome = nome;
//         }
//         if(preco !== undefined){
//             produto.preco = preco;
//         }
//         res.status(200).json({ mensagem: 'sucesso' }); 
//     }else{
//         res.status(404).json({ mensagem: 'não foi' }); 
//     }
// })

// Rotas para Usuário
 
// Rota para obter todos os Usuários

// app.get('/usuarios', async (req, res) => {

//     const usuarios = await prisma.usuario.findMany(); // Busca todos os usuários no banco
  
//     res.json(usuarios); // Retorna a lista de usuários em formato JSON
  
//   });
   
//   // Rota para obter um usuário específico pelo ID
  
//   app.get('/usuarios/:id', async (req, res) => {
  
//     const id = parseInt(req.params.id); // Converte o ID da URL para número
  
//     const usuario = await prisma.usuario.findUnique({ where: { id } }); // Busca o usuário pelo ID
   
//     if (usuario === null) {
  
//       return res.status(404).json({ mensagem: 'Usuário não encontrado' }); // Retorna erro se não encontrado
  
//     } else {
  
//       res.json(usuario); // Retorna o usuário encontrado
  
//     }
  
//   });
  
 

  // Rotas para Movimentacao
 
// Rota para obter todas as movimentações
app.get('/movimentacao', async (req, res) => {
    const movimentacoes = await prisma.movimentacao.findMany(); // Busca todas as movimentações no banco
    res.json(movimentacoes); // Retorna a lista de movimentações em formato JSON
  });

  app.get('/movimentacoes/:tipo_i_p', async (req, res) => {
    const tipo_i_p = req.params.tipo_i_p; 
const movimentacao = await prisma.movimentacao.findMany({
  where: {
    tpi: {
      tipo: tipo_i_p // <- compara com o campo `tipo` da tabela `tpi`
    }
  },
  include: {
    tpi: true // inclui os dados relacionados da tabela Tipo_Produto_Insumo
  }
});
   
    if (movimentacao === null) {
      return res.status(404).json({ mensagem: 'Movimentação não encontrada' }); 
    } else {
      res.json(movimentacao);
    }
  });
   
  // Rota para obter uma movimentação específica pelo ID
  app.get('/movimentacao/:id', async (req, res) => {
    const id = parseInt(req.params.id); // Converte o ID da URL para número
    const movimentacao = await prisma.movimentacao.findUnique({ where: { id } }); // Busca a movimentação pelo ID
   
    if (movimentacao === null) {
      return res.status(404).json({ mensagem: 'Movimentação não encontrada' }); // Retorna erro se não encontrada
    } else {
      res.json(movimentacao); // Retorna a movimentação encontrada
    }
  });

  // Rotas para Tipo_Produto_Insumo
 //
// Rota para obter todos os tipos de produto insumo
app.get('/produto_insumo', async (req, res) => {
    const tipos = await prisma.Produto_Insumo.findMany(); // Busca todos os tipos no banco
    res.json(tipos); // Retorna a lista de tipos em formato JSON

  });
   
  // Rota para obter um tipo de produto insumo específico pelo ID
  app.get('/produto_insumo/:id', async (req, res) => {
    const id = parseInt(req.params.id); // Converte o ID da URL para número
    const tipo = await prisma.Produto_Insumo.findUnique({ where: { id } }); // Busca o tipo pelo ID
   
    if (tipo === null) {
      return res.status(404).json({ mensagem: 'Tipo de Produto/Insumo não encontrado' }); // Retorna erro se não encontrado
    } else {
      res.json(tipo); // Retorna o tipo encontrado
    }
  });

  app.get('/produtos/:tipo', async (req, res) =>{
    const tipo = 'produto';
    const categoria = req.params.tipo;

    const produtos = await prisma.Produto_Insumo.findMany({
        where: {
            tipo,
            categoria
        }
    });

    if(produtos.length === 0) {
        return res.status(404).json({mensagem: 'Produto não existe'});
    }else{
        return res.status(200).json(produtos);
    }
  })

  app.get('/insumo', async (req, res) =>{
    const tipo = 'insumo';

    const insumo = await prisma.Produto_Insumo.findMany({
        where: {
            tipo
        }
    });

    if(insumo.length === 0) {
        return res.status(404).json({mensagem: 'Insumo não existe'});
    }else{
        return res.status(200).json(insumo);
    }
  })

app.listen(port, ()=> {
    console.log(`REST API iniciada em http://localhost:${port}`);
});