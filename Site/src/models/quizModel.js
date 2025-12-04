var database = require("../database/config");

function resultadoQuiz(idResultadoQuiz, fkUsuario, fkQuiz, tipoEstilo) {
    debugger
    console.log("ACESSEI A ATIVIDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function resultadoQuiz():", idResultadoQuiz, fkUsuario, fkQuiz, tipoEstilo);

    var instrucaoSql = `
    INSERT INTO resultadoQuiz (idResultadoQuiz, fkUsuario, fkQuiz, tipoEstilo) VALUES 
    (${idResultadoQuiz}, ${fkUsuario}, ${fkQuiz}, '${tipoEstilo}');
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function perfilLivro(tipoEstilo) {
    console.log("ACESSEI A ATIVIDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function resultadoQuiz():", tipoEstilo);

    var instrucaoSql = `
    SELECT COUNT(tipoEstilo) as livro FROM resultadoQuiz WHERE tipoEstilo = 'Livro';
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function perfilScrapbook(tipoEstilo) {
    console.log("ACESSEI A ATIVIDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function resultadoQuiz():", tipoEstilo);

    var instrucaoSql = `
    SELECT COUNT(tipoEstilo) as scrapbook FROM resultadoQuiz WHERE tipoEstilo = 'Scrapbook';
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function perfilPhotobook(tipoEstilo) {
    console.log("ACESSEI A ATIVIDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function resultadoQuiz():", tipoEstilo);

    var instrucaoSql = `
    SELECT COUNT(tipoEstilo) as photobook FROM resultadoQuiz WHERE tipoEstilo = 'Photobook';
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function perfilEstilo(tipoEstilo) {
    console.log("ACESSEI A ATIVIDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function resultadoQuiz():", tipoEstilo);

    var instrucaoSql = `
    SELECT tipoEstilo as estilo FROM resultadoQuiz GROUP BY tipoEstilo ORDER BY COUNT(*) DESC LIMIT 1;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quantidadeCliente(tipoEstilo) {
    console.log("ACESSEI A ATIVIDADE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function resultadoQuiz():", tipoEstilo);

    var instrucaoSql = `
    SELECT COUNT(tipoEstilo) as quantidade FROM resultadoQuiz;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    resultadoQuiz,
    perfilLivro,
    perfilScrapbook,
    perfilPhotobook,
    perfilEstilo,
    quantidadeCliente
}