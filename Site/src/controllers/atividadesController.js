var atividadesModel = require("../models/atividadesModel");

function concluirAtividade(req, res) {
    var idAtividade = req.body.idAtividadeServer;
    /*var nome = req.body.nomeServer;
    var statusConclusao = req.body.statusConclusaoServer;
    var fkProjeto = req.body.fkProjetoServer;*/

    console.log(`Verificando status da atividade`);

    atividadesModel.concluirAtividade(
        idAtividade,
        /*nome,
        statusConclusao, 
        fkProjeto*/
    )
    .then(concluirAtividade => {
    
        const idProjeto = concluirAtividade.insertId;
    
                    return atividadesModel.concluirAtividade(
                        idAtividade,
                        /*nome,
                        statusConclusao,
                        idProjeto*/
                    );
    })
    
    .then(concluirAtividade => {
                res.json({
                    mensagem: "Atividade concluida com sucesso!",
                    projeto: concluirAtividade
    });
    })
    
    .catch(erro => {
                console.log("Erro na conclusão:", erro);
                res.status(500).json(erro.sqlMessage);
    });
    
}

function porcentagemConcluido(req, res) {

    var idAtividade = req.params.idAtividade;

    console.log(`Recuperando as ultimas atividades`);

    atividadesModel.porcentagemConcluido(idAtividade).then(function (resultado) {
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

function porcentagemPendente(req, res) {

    var idAtividade = req.params.idAtividade;

    console.log(`Recuperando as ultimas atividades`);

    atividadesModel.porcentagemPendente(idAtividade).then(function (resultado) {
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
    concluirAtividade,
    porcentagemConcluido,
    porcentagemPendente,

}