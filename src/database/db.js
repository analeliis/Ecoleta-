//importar a dependencia do squite3
const sqlite3 = require("sqlite3").verbose() //ver mensagem no  meu terminal do erro

//Criar o objeto que irá fazer operações no banco de dados  
const db = new sqlite3.Database("./src/database/database.db") //new cria um objeto caminho para criacao do banco




//exportar o objeto para ser usado em outro lugar 
module.exports = db



//utilizar o objeto de banco de dados , para as nossas operaçoes
 db.serialize(function () { //serializa vai rodar uma sequencia de codigo 
//   //com comando SQL eu vou :

//   //1 criar uma tabela no banco de dados
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT

//     );
  
//   `)

//   //2 inserir dados na tabela //inserir esses campos image
//   const query = ` 
//     INSERT INTO places ( 
//       image,
//       name,
//       address,
//       address2,
//       state,
//       city,
//       items
      
//     ) VALUES (?,?,?,?,?,?,?);

//   `
//   const values = [
//     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
//     "Papersider",
//     "Guilherme Gembalia, Jardim América",
//     "N°260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
//   ]

//   function afterInsertData(err){
//     if(err){
//       return console.log(err)
//     }

//     console.log("Cadastrado com Sucesso")
//     console.log(this) //esta referenciando a resposta do run
//   }

//   db.run(query, values, afterInsertData ) 
  //callback a aplicação continua acontecendo , 
  //quando tivesse a resposta do que foi pedido
  //executa a função 
  //Depois que a aplicação query , values for executada ai o metodo vai ser executado


  //3 Consultar os dados da tabela
  
  //  db.all(`SELECT * FROM places`,function(err, rows){
  //  if(err){
  //    return console.log(err)
  //  }

  //    console.log("Aqui estão seus registros")
  //    console.log(rows)
  //  })

  //4 Deletar dado de tabela

    //   db.run(`DELETE FROM places WHERE id = ?`,[13],function(err){
    //   if(err){
    //      return console.log(err)
    //    }

    //    console.log("Registro deletado com sucesso !")
    //  })
}) 