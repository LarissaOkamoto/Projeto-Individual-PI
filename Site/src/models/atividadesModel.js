var database = require("../database/config");

function concluirAtividade(idAtividade, statusConclusao, fkProjeto) {
    console.log("ACESSEI A ATIVIDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idAtividade, statusConclusao, fkProjeto);

    var instrucaoSql = `
    UPDATE atividade SET statusConclusao = 1 WHERE idAtividade = '${idAtividade}' AND fkProjeto = 1;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function porcentagemConcluido (idAtividade, statusConclusao, fkProjeto) {
    console.log("ACESSEI A ATIVIDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idAtividade, statusConclusao, fkProjeto);

    var instrucaoSql = `
    SELECT 
        COUNT(idAtividade) as concluido FROM atividade
                WHERE fkProjeto = 1 AND statusConclusao = 1;
    `

    /*var instrucaoSql = `
    SELECT 
        COUNT 
        (SELECT idAtividade AS 'Número da Atividade',
        statusConclusao AS 'Status de Conclusão', 
        FROM atividade JOIN projeto
            ON idProjeto = fkProjeto
                WHERE fkProjeto = 1 AND statusConclusao = 1);
    `*/

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function porcentagemPendente (idAtividade, statusConclusao, fkProjeto) {
    console.log("ACESSEI A ATIVIDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idAtividade, statusConclusao, fkProjeto);

    var instrucaoSql = `
    SELECT 
        COUNT(idAtividade) as pendente FROM atividade
                WHERE fkProjeto = 1 AND statusConclusao = 0;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    concluirAtividade,
    porcentagemConcluido,
    porcentagemPendente
    //buscarAtividadesEmTempoReal
}
