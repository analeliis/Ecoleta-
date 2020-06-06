//importar a dependencia do squite3
const sqlite3 = require("sqlite3").verbose() //ver mensagem no  meu terminal do erro

//Criar o objeto que irá fazer operações no banco de dados  
const db = new sqlite3.Database("./src/database/database.db") //new cria um objeto caminho para criacao do banco


//utilizar o objeto de banco de dados , para as nossas operaçoes
db.serialize(function(){ //serializa vai rodar uma sequencia de codigo 
   //com comando SQL eu vou :
  
  //1 criar uma tabela no banco de dados
   db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT

    );
  
  `)

  //2 inserir dados na tabela


  //3 Consultar os dados da tabela


  //4 Deletar dado de tabela
}) 