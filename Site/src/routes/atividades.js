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


/*router.post("/ultimas/:idProjeto", function (req, res){
    atividadesController.postarStatusAtividades (req, res)
});

router.get("/ultimas/:idProjeto", function (req, res) {
    atividadesController.buscarUltimasAtividades(req, res);
});

router.patch("/ultimas/:idProjeto", function (req, res) {
    atividadesController.buscarUltimasAtividades(req, res);
});

router.get("/tempo-real/:idProjeto", function (req, res) {
    atividadesController.buscarAtividadesEmTempoReal(req, res);
})*/

module.exports = router;