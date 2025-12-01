var database = require("../database/config");

function concluirAtividade(idAtividade, nome, statusConclusao, fkProjeto) {
    console.log("ACESSEI A ATIVIDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idAtividade, nome, statusConclusao, fkProjeto);


    var instrucaoSql = `
    INSERT INTO atividade (idAtividade, nome, statusConclusao, fkProjeto) VALUES 
    ('${idAtividade}', '${nome}', '${statusConclusao}', '${fkProjeto}')
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasAtividades(nome, descricao, statusConclusao, dtConclusao, idProjeto) {

    /*var instrucaoSql = `
    SELECT 
        nome as 'Atividade', 
        descricao as 'Descrição',
        statusConcluido AS 'Status da Atividade',
        dtConclusao AS 'Data de Conclusão'
                    FROM atividades
                    WHERE fkProjeto = ${idProjeto}
                    ORDER BY dtConclusao DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);*/

    var instrucaoSql = `
    SELECT 
        nome as 'Atividade', 
        statusConclusao AS 'Status da Atividade'
                    FROM atividades
                    WHERE fkProjeto = ${idProjeto}
                    ORDER BY dtConclusao`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

    var instrucaoSql = `
    SELECT 
        nome as 'Atividade', 
        statusConcluido AS 'Status da Atividade'
                    FROM atividades
                    WHERE fkProjeto = ${idProjeto} AND statusConclusao = 'false'
                    ORDER BY dtConclusao`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

/*function buscarAtividadesEmTempoReal(idProjeto) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_Projeto 
                        FROM medida WHERE fk_Projeto = ${idProjeto} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}*/

module.exports = {
    buscarUltimasAtividades,
    concluirAtividade
    //buscarAtividadesEmTempoReal
}
