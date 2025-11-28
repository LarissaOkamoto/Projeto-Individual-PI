var express = require("express");
var router = express.Router();

var atividadesController = require("../controllers/atividadesController");

router.get("/ultimas/:idProjeto", function (req, res) {
    atividadesController.buscarUltimasAtividades(req, res);
});

router.get("/tempo-real/:idProjeto", function (req, res) {
    atividadesController.buscarAtividadesEmTempoReal(req, res);
})

module.exports = router;