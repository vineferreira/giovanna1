const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado = "Como a música de um artista pode promover o respeito e a conscientização sobre a inclusão e a caça ilegal que leva à extinção de animais?" ,
        alternativas: [
            {
               texto: "Sim",
               afirmação: "afirmação"
            },
            {
                texto: "Não",
                afirmação: "afirmação"
            }
        ]
        enunciado = "Como a acessibilidade, a diversidade musical e o crescimento urbano desenfreado impactam a inclusão social e a preservação de espécie ameaçadas?" ,
        alternativas: [
            {
               texto: "Sim",
               afirmação: "afirmação"
            },
            {
                texto: "Não",
                afirmação: "afirmação"
            }
        ]
        enunciado = "Como a tecnologia assistiva está sendo aplicada para promover inclusão, a música como instrumento de conscientização e a luta contra o desmatamento para evitar a extinção de animais?" ,
        alternativas: [
            {
               texto: "O artista pode falar sobre esses temas.",
               afirmação: "afirmação"
            },
            {
                texto: "Talvez ele não possa falar sobre esse tema.",
                afirmação: "afirmação"
            }
        ]
    },
]