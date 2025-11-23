var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM endereco WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, rua, numero, complemento, bairro, cidade, uf, cep FROM endereco`;

  return database.executar(instrucaoSql);
}

function cadastrar(rua, numero, complemento, bairro, cidade, uf, cep, fkUsuario) {
  var instrucaoSql = `INSERT INTO endereco (rua, numero, complemento, bairro, cidade, uf, cep, fkUsuario) VALUES ('${rua}', '${numero}', '${complemento}', '${bairro}', '${cidade}', '${uf}', '${cep}', '${fkUsuario}')`;

  return database.executar(instrucaoSql);
}

module.exports = {buscarPorId, cadastrar, listar };
