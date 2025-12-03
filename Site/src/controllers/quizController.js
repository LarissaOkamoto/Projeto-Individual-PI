var quizModel = require("../models/quizModel");

function resultadoQuiz(req, res) {
    var idResultadoQuiz = req.body.idResultadoQuizServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkQuiz = req.body.fkQuizServer;
    var tipoEstilo = req.body.tipoEstiloServer;
    //var idQuiz = req.body.idQuizServer;
    //var qtdQuestoes = req.body.qtdQuestoesServer;

    console.log(`Verificando status da atividade`);

    quizModel.resultadoQuiz(
        idResultadoQuiz,
        fkUsuario,
        fkQuiz,
        tipoEstilo
    )
    .then(resultadoQuiz => {
    
        const idQuiz = resultadoQuiz.insertId;
    
                    /*return quizModel.resultadoQuiz(
                        idResultadoQuiz,
                        fkUsuario,
                        fkQuiz,
                        tipoEstilo
                    );*/
    })
    
    .then(resultadoQuiz => {
                res.json({
                    mensagem: "Quiz finalizado com sucesso!",
                    quiz: resultadoQuiz
    });
    })
    
    .catch(erro => {
                console.log("Erro na conclusão:", erro);
                res.status(500).json(erro.sqlMessage);
    });
    
}


function perfilLivro(req, res) {

    var tipoEstilo = req.params.tipoEstilo;

    console.log(`Recuperando as ultimas atividades`);

    quizModel.perfilLivro(tipoEstilo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas atividades.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function perfilScrapbook(req, res) {

    var tipoEstilo = req.params.tipoEstilo;

    console.log(`Recuperando as ultimas atividades`);

    quizModel.perfilScrapbook(tipoEstilo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas atividades.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function perfilPhotobook(req, res) {

    var tipoEstilo = req.params.tipoEstilo;

    console.log(`Recuperando as ultimas atividades`);

    quizModel.perfilPhotobook(tipoEstilo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas atividades.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function perfilEstilo(req, res) {

    var tipoEstilo = req.params.tipoEstilo;

    console.log(`Recuperando as ultimas atividades`);

    quizModel.perfilEstilo(tipoEstilo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas atividades.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function quantidadeCliente(req, res) {

    var tipoEstilo = req.params.tipoEstilo;

    console.log(`Recuperando as ultimas atividades`);

    quizModel.quantidadeCliente(tipoEstilo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas atividades.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    resultadoQuiz,
    perfilLivro,
    perfilScrapbook,
    perfilPhotobook,
    perfilEstilo,
    quantidadeCliente
}