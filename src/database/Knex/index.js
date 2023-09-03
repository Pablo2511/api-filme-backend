const config = require("../../../knexfile");
const knex = require("knex");

const connection = knex(config.development); // conexão do knex e do banco de dados

module.exports = connection;