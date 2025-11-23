var empresaModel = require("../models/enderecoModel");


function listar(req, res) {
  enderecoModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  enderecoModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var rua = req.body.rua;
    var numero = req.body.numero;
    var complemento = req.body.complemento;
    var bairro = req.body.bairro;
    var cidade = req.body.cidade;
    var uf = req.body.uf;
    var cep = req.body.cep;
    var fkUsuario = req.body.fkUsuario;
}

module.exports = {
  buscarPorId,
  cadastrar,
  listar,
};
