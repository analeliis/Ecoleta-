const express = require("express") //busca o modulo express e coloca dentro da variaavel

const server = express() //executar o express


//configurar pasta publica
server.use(express.static("public"))


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
  return res.render("create-point.html") //constroe a copia arquivo create
})

server.get("/search",(req,res) =>{
  return res.render("search-results.html") //constroe a copia arquivo create
})


//ligar o servidor
server.listen(3000,function(){
  console.log("serving conecter")
})
