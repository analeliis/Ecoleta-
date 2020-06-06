//importar a dependencia do squite3
const sqlite3 = require("sqlite3").verbose() //ver mensagem no  meu terminal do erro

//Criar o objeto que irá fazer operações no banco de dados  
const db = new sqlite3.Database("./src/database/database.db") //new cria um objeto caminho para criacao do banco
