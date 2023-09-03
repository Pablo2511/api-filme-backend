const sqliteConnection = require('../../sqlite'); // <-- importar sqlite
const createUsers = require('./createUsers'); // <-- importar as tabelas

async function migrationRun(){
   const schemas = [
      createUsers // pegar todas as colunas e unir em uma única string
   ].join('');

   sqliteConnection()
   .then(db => db.exec(schemas)) // o then indica se só sera executado se a conexão for estabelicida com sucesso
   .catch(error => console.error(error));
}

module.exports = migrationRun;