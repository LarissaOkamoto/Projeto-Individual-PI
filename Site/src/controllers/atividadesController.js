var atividadesModel = require("../models/atividadesModel");

function concluirAtividade(req, res) {
    var idAtividade = req.body.idAtividadeServer;
    var nome = req.body.nomeServer;
    var statusConclusao = req.body.statusConclusaoServer;
    var fkProjeto = req.body.fkProjetoServer;

    /*console.log(`Verificando status da atividade`);

    atividadesModel.concluirAtividade(
        idAtividade,
        nome,
        statusConclusao, 
        fkProjeto
    )
    .then(resultadoConcluirAtividade => {
    
        const idProjeto = resultadoConcluirAtividade.insertId;
    
                    return atividadesModel.resultadoConcluirAtividade(
                        idAtividade,
                        nome,
                        statusConclusao,
                        idProjeto
                    );
    })
    
    .then(resultadoConcluirAtividade => {
                res.json({
                    mensagem: "Atividade concluida com sucesso!",
                    projeto: resultadoConcluirAtividade
    });
    })
    
    .catch(erro => {
                console.log("Erro na conclusão:", erro);
                res.status(500).json(erro.sqlMessage);
    });*/
    
}

function buscarUltimasAtividades(req, res) {

    var idProjetos = req.params.idProjetos;

    console.log(`Recuperando as ultimas atividades`);

    atividadesModel.buscarUltimasAtividades(idProjetos).then(function (resultado) {
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


/*function buscarAtividadesEmTempoReal(req, res) {

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
}*/

module.exports = {
    buscarUltimasAtividades,
    concluirAtividade
   // buscarAtividadesEmTempoReal

}