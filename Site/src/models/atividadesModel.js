var database = require("../database/config");

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
    buscarUltimasAtividades
    //buscarAtividadesEmTempoReal
}
