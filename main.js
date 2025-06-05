const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como faço para conseguir medicamentos não padronizados do sus?",
        alternativas: [
            {
                texto: "encaminhar-se a regional de saude do seu município, munido dos seguintes documentos: cpf ou rg, comprovante de residencia, prescriçao atualizada, receituario medico.",
                afirmacao: "<b>Organização</b> Sim, a Sesa tem como principal função garantir o acesso ao serviços que visem a promoção, protećão e recuperação da saúde da população em todo o Paraná."
            },
            {
                texto: "Exigências quanto ao  relatório médico. Os documentos preenchidos pelo médico deverão conter carimbo legível, com nome e CRM do médico, data e assinatura.",
                afirmacao: "Você se destaca por seu <b>conhecimento</b>, o carimbo deverá conter também o número do Registro de Qualificação de Especialista (RQE)"
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
        enunciado: "Por que há tanta escassez de recursos na saúde pública?",
        alternativas: [
            {
                texto: "Acredito que Falta de investimento governamental",
                afirmacao: "<b>Pragmatismo</b> A falta de investimento governamental na saúde pública decorre de orçamentos restritos e outras prioridades de gastos, levando a infraestrutura precária e serviços de saúde insuficientes."
            },
            {
                texto: "desigualdades na distribuição de recursos",
                afirmacao: "<b>Detalhista</b>,Desigualdades na distribuição de recursos na saúde pública ocorrem quando os recursos são alocados de maneira desigual entre diferentes regiões ou populações. Isso pode resultar em acesso desigual a serviços de saúde, com áreas mais pobres ou rurais recebendo menos apoio e, portanto, enfrentando maiores desafios em termos de qualidade e acesso a cuidados médicos."
            }
        ]
    },
    {
        enunciado: "Por que a violência obstétrica está cada vez mais banalizada? ",
        alternativas: [
            {
                texto: "Negligência médica",
                afirmacao: "<b>Foco</b> Apesar do uso de algumas técnicas serem restringidas apenas para casos específicos, ainda são utilizadas diariamente por profissionais da saúde."
            },
            {
                texto: "Desinformação da população.",
                afirmacao: "<b>Curiosidade</b> Mesmo com fácil acesso a informação, o assunto é pouco comentado e dado certa  importância. "
            }
        ]
    },
    {
        enunciado: "Como evitar que ocorra a extinção de animais nativos?",
        alternativas: [
            {
                texto: "Criação de mais áreas de proteção ambiental, com grande biodiversidade ajudaria a melhorar esse cenário?",
                afirmacao: "Sim, pois preservando nosso meio ambiente, protegemos nossos animais e facilitamos sua reprodução "
            },
            {
                texto: "Evitar intervenções de espécies não nativas neste ambiente pode ser uma alternativa?",
                afirmacao: "Sim, animais de um determinado local não estão preparados para lidar com predadores de outras áreas, levando a um extermínio da espécie local"
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