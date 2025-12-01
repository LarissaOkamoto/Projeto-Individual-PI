var database = require("../database/config");

function buscarProjetosPorUsuario(idUsuario) {

  var instrucaoSql = `SELECT * FROM projeto a WHERE fkUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idProjeto, nome, descricao, idUsuario) {
  
  var instrucaoSql = `INSERT INTO (idProjeto, nome, descricao, fkUsuario) projeto VALUES (${idProjeto}, ${nome}, ${descricao}, ${idUsuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarProjetosPorUsuario,
  cadastrar
}

/*
function buscarAquariosPorEndereco(idEndereco) {

  var instrucaoSql = `SELECT * FROM umui a WHERE fkEndereco = ${idEndereco}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idEndereco) {
  
  var instrucaoSql = `INSERT INTO (fkEndereco) cadastro VALUES (${idEndereco})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEndereco,
  cadastrar
}

*/