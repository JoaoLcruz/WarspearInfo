var database = require("../database/config");

function buscarResultadosFaccao() {
    instrucaoSql = ''

    instrucaoSql = `select count(Fkfaccao) as qtdVotos , NomeFaccao as Faccao from usuario u 
        join faccao f on Fkfaccao = idFaccao group by Fkfaccao; `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarResultadosRaca() {
    instrucaoSql = ''

    instrucaoSql = `select count(FkRaca) as qtdVotos2 , NomeRaca as Raca from usuario u 
        join raca r on FkRaca = idRaca group by FkRaca; `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function PostarPonto(user, ponto) {

    instrucaoSql = `INSERT INTO quiz VALUES (NULL, ${ponto}, ${user}); `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarResultadosFaccao,
    PostarPonto,
    buscarResultadosRaca
}