var express = require("express");
var router = express.Router();

var atividadesController = require("../controllers/atividadesController");

router.put("/concluirAtividade", function (req, res) {
    atividadesController.concluirAtividade(req, res);
});

router.get("/porcentagemConcluido", function (req, res) {
    atividadesController.porcentagemConcluido(req, res);
});

router.get("/porcentagemPendente", function (req, res) {
    atividadesController.porcentagemPendente(req, res);
});

router.get("/porcentagemGeral", function (req, res) {
    atividadesController.porcentagemGeral(req, res);
});

module.exports = router;