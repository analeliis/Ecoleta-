const express = require("express") //busca o modulo express e coloca dentro da variaavel

const server = express() //executar o express

//Pegar o banco de dados(Acesso)
const db = require("./database/db")


//configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.bodu na nossa aplicação
server.use(express.urlencoded({extended:true}))


//utilizando template engine
const nunjucks = require("nunjucks") //buscando o modulo 

nunjucks.configure("src/views",{ //configurar o nunjucks qual a pasta que estao o html
  express:server,
  noCache: true //não guarda na memoria as versoes 
})


//configurar caminhos da minha aplicação
//pagina inicial
//req: Requisição 
//res: Resposta do servidor
server.get("/",(req,res) => {
  return res.render("index.html") //constroe a copia arquivo index /enviar variavel
})

server.get("/create-point",(req,res) =>{

  //req.query: Query String da nossa url enviar dados
  //console.log(req.query)

  return res.render("create-point.html") //constroe a copia arquivo 
})


 server.post("/savepoint", function(req,res){

   //req.body: O corpo do nosso formulário //pegar os valores da url
   //console.log(req.body)

   //inserir no banco de dados
    const query = ` 
      INSERT INTO places ( 
        image,
        name,
        address,
        address2,
        state,
        city,
        items
      
     ) VALUES (?,?,?,?,?,?,?);

    `
    const values = [
     req.body.image,
     req.body.name,
     req.body.address,
     req.body.address2,
     req.body.state,
     req.body.city,
     req.body.items
    ]

    function afterInsertData(err){
      if(err){
        console.log(err)
        return res.send("Erro no Cadastro") //erro no cadastro
      }

      console.log("Cadastrado com Sucesso")
      console.log(this) //esta referenciando a resposta do run

      return res.render("create-point.html",{saved:true})
      
    }

    db.run(query, values, afterInsertData ) 

   
 })





server.get("/search",(req,res) =>{

  const search = req.query.search

  if(search == ""){
    //pesquisa vazia
    return res.render("search-results.html",{
      total: 0
    })
    

  }

  //pegar os dados do banco de dados
  //Tudo que vem antes de depois do sul
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`,function(err, rows){
    if(err){
      return console.log(err)
    }

    const total = rows.length

    console.log("Aqui estão seus registros:")
    console.log(rows)

    //mostrar a página html com os dados do banco de dados
    return res.render("search-results.html",{
      places:rows,total: total
    }) //constroe a copia arquivo create
  })

  
})


//ligar o servidor
server.listen(3000,function(){
  console.log("serving conecter")
})
