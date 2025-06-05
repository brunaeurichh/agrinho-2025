const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que a poluição do rio é mais preocupante devido ao lixo sólido ou ao esgoto doméstico?",
        alternativas: [
            {
                texto: "Lixo sólido",
                afirmacao: " A pessoa é ambientalista, preocupada com o impacto dos plásticos e resíduos na fauna e qualidade da água, buscando soluções sustentáveis."
            },
            {
                texto: "Mudança de comportamento humano",
                afirmacao: "A pessoa acredita que a mudança de comportamento humana, com ações conscientes como o descarte adequado de lixo e o uso responsável de produtos químicos, é essencial para combater a poluição hídrica."
            }
        ]
    },
    {
        enunciado: "A falta de consciência ambiental e a baixa adesão a práticas sustentáveis acontecem por vários motivos, entre os quais destacam-se:",
        alternativas: [
            {
                texto: "Falta de Educação Ambiental",
                afirmacao: "Muitas pessoas não têm acesso a informações adequadas sobre o impacto de suas ações no meio ambiente, o que leva à falta de conscientização e, consequentemente, a comportamentos prejudiciais à <b>sustentabilidade</b>.</b>."
            },
            {
                texto: "Falta de Incentivos e Legislação",
                afirmacao: "A ausência de incentivos governamentais e de uma legislação <b>rigorosa </b>faz com que empresas e indivíduos não se sintam motivados a adotar práticas sustentáveis, contribuindo para a continuidade de ações nocivas ao meio ambiente."
            }
        ]
    },
    {
        enunciado: " Você acredita que a poluição hídrica é mais prejudicial para as áreas urbanas ou rurais?",
        alternativas: [
            {
                texto: "Áreas urbanas",
                afirmacao: "A pessoa se preocupa com a falta de infraestrutura urbana e defende melhorias no tratamento de esgoto para reduzir a poluição hídrica."
            },
            {
                texto: "Áreas rurais",
                afirmacao: "A pessoa se preocupa com o uso excessivo de pesticidas e fertilizantes na agricultura e com a falta de infraestrutura nas áreas rurais, defendendo soluções sustentáveis e melhorias no saneamento."
            }
        ]
    },
    {
        enunciado: "Você acredita que a poluição hídrica pode ser mitigada com o tratamento de esgoto ou com a redução do uso de plásticos?",
        alternativas: [
            {
                texto: "Tratamento de esgoto",
                afirmacao: "A pessoa vê o tratamento de esgoto como essencial para proteger a qualidade da água e a fauna aquática, destacando a importância de saneamento adequado."
            },
            {
                texto: "Redução do uso de plásticos",
                afirmacao: "A pessoa defende a redução do uso de plásticos, especialmente os descartáveis, para diminuir a poluição nos rios, reconhecendo que os plásticos prejudicam a vida aquática e a qualidade da água. "
            }
        ]
    },
    {
        enunciado: "Você acredita que a poluição hídrica pode ser controlada com a redução do consumo de água ou com o uso de tecnologias de purificação?",
        alternativas: [
            {
                texto: "Redução do consumo de água",
                afirmacao: "A pessoa valoriza a redução do consumo de água como uma forma de minimizar o impacto ambiental, reconhecendo que isso reduz a produção de esgoto e resíduos nos rios, além de contribuir para a preservação dos recursos hídricos. "
            },
            {
                texto: "Uso de tecnologias de purificação",
                afirmacao: "A pessoa defende o uso de tecnologias de purificação para garantir água limpa e mitigar a poluição hídrica."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 