var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/resultadoQuiz", function (req, res) {
    quizController.resultadoQuiz(req, res);
});

router.get("/perfilLivro", function (req, res) {
    quizController.perfilLivro(req, res);
});

router.get("/perfilScrapbook", function (req, res) {
    quizController.perfilScrapbook(req, res);
});

router.get("/perfilPhotobook", function (req, res) {
    quizController.perfilPhotobook(req, res);
});

router.get("/perfilEstilo", function (req, res) {
    quizController.perfilEstilo(req, res);
});

router.get("/quantidadeCliente", function (req, res) {
    quizController.quantidadeCliente(req, res);
});


module.exports = router;