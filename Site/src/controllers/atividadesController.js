var atividadesModel = require("../models/atividadesModel");

function buscarUltimasAtividades(req, res) {

    const limite_linhas = 7;

    var idProjetos = req.params.idProjetos;

    console.log(`Recuperando as ultimas ${limite_linhas} atividades`);

    medidaModel.buscarUltimasAtividades(idProjetos, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarAtividadesEmTempoReal(req, res) {

    var idProjetos = req.params.idProjetos;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarAtividadesEmTempoReal(idProjetos).then(function (resultado) {
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
    buscarUltimasAtividades,
    buscarAtividadesEmTempoReal

}