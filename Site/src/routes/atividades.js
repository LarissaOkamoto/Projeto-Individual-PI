var express = require("express");
var router = express.Router();

var atividadesController = require("../controllers/atividadesController");

router.post("/ultimas/:idProjeto", function (req, res){
    atividadesController.postarStatusAtividades (req, res)
});

router.get("/ultimas/:idProjeto", function (req, res) {
    atividadesController.buscarUltimasAtividades(req, res);
});

router.patch("/ultimas/:idProjeto", function (req, res) {
    atividadesController.buscarUltimasAtividades(req, res);
});

/*router.get("/tempo-real/:idProjeto", function (req, res) {
    atividadesController.buscarAtividadesEmTempoReal(req, res);
})*/

module.exports = router;