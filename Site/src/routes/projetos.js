var express = require("express");
var router = express.Router();

var projetosController = require("../controllers/projetosController");
var atividadesController = require("../controllers/atividadesController");

router.get("/:idUsuario", function (req, res) {
  projetosController.buscarProjetosPorUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
  projetosController.cadastrar(req, res);
})

module.exports = router;