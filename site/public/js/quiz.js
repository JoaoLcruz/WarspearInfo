var titulo = document.querySelector('h1')
var instrucoes = document.querySelector('#instrucoes')
var aviso = document.querySelector('#aviso')
//var respostaEsta = document.querySelector('#respostaEsta')
var pontos = 0 // pontos para o placar
var placar = 0 // placar

// PERGUNTA
var numQuestao = document.querySelector('#numQuestao')
var pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
var a = document.querySelector('#a')
var b = document.querySelector('#b')
var c = document.querySelector('#c')

// article com a class questoes
var articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
var alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual desses não é suporte:",
    alternativaA : "Necromante",
    alternativaB : "Xãma",
    alternativaC : "Bárbaro",
    correta      : "Bárbaro",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual mapa acontece a guerra",
    alternativaA : "Melvendil",
    alternativaB : "Pântanos de Norlant",
    alternativaC : "Irselnort",
    correta      : "Irselnort",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Druida usa que tipo de armadura?",
    alternativaA : "Tecido",
    alternativaB : "Leve",
    alternativaC : "Pesado",
    correta      : "Tecido",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual Chefe Mundial se parece com uma árvore?",
    alternativaA : "Olmo Negro",
    alternativaB : "Engenheiro",
    alternativaC : "Kronos",
    correta      : "Olmo Negro",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Quantos chefes tem o labirinto Astral",
    alternativaA : "5",
    alternativaB : "6",
    alternativaC : "7",
    correta      : "7",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5]

var numero = document.querySelector('#numero')
var total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

var totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPvarA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPvarA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    var numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    var respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    var certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    var pont = ''
    if (pontos == 0) {
        pont = 'ponto'
    }else {
        pont = 'pontos'
    }

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}