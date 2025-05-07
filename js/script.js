const quizForm = document.getElementById('quiz-form');
const quizContainer = document.querySelector('.quiz-container');
const resultContainer = document.getElementById('result-container');

const questions = [
    {
        question: "Qual a faixa etária com maior incidência de câncer de mama?",
        options: ["Abaixo de 30 anos", "Entre 30 e 50 anos", "Acima de 50 anos", "Não há faixa etária específica"],
        correctAnswer: "c"
    },
    {
        question: "O histórico familiar de câncer de mama aumenta o risco para uma pessoa?",
        options: ["Não, o risco é o mesmo", "Sim, especialmente em parentes de primeiro grau", "Apenas se for histórico materno", "Apenas se for histórico paterno"],
        correctAnswer: "b"
    },
    {
        question: "Qual a principal forma de tratamento para o câncer de mama em estágio inicial?",
        options: ["Quimioterapia", "Radioterapia", "Cirurgia", "Hormonioterapia"],
        correctAnswer: "c"
    },
    {
        question: "A amamentação protege contra o câncer de mama?",
        options: ["Sim, comprovadamente", "Não, não há relação", "Pode oferecer alguma proteção, especialmente se prolongada", "Apenas se for amamentação exclusiva"],
        correctAnswer: "c"
    },
    {
        question: "Qual a importância da detecção precoce do câncer de mama?",
        options: ["Aumenta as chances de cura e tratamentos menos agressivos", "Não faz diferença no prognóstico", "Apenas reduz o custo do tratamento", "Apenas melhora a qualidade de vida durante o tratamento"],
        correctAnswer: "a"
    },
    {
        question: "O consumo de álcool está associado a um maior risco de câncer de mama?",
        options: ["Não há nenhuma evidência", "Sim, mesmo em quantidades moderadas", "Apenas o consumo excessivo", "Apenas em mulheres com predisposição genética"],
        correctAnswer: "b"
    },
    {
        question: "Qual o papel da hormonioterapia no tratamento do câncer de mama?",
        options: ["Destrói as células cancerosas diretamente", "Impede a disseminação para outros órgãos", "Bloqueia a ação de hormônios que podem estimular o crescimento tumoral", "Alivia os efeitos colaterais de outros tratamentos"],
        correctAnswer: "c"
    },
    {
        question: "A terapia alvo é um tipo de tratamento que:",
        options: ["Utiliza radiação para destruir as células cancerosas", "Estimula o sistema imunológico a combater o câncer", "Ataca especificamente as células cancerosas com menos danos às células normais", "Bloqueia a produção de hormônios"],
        correctAnswer: "c"
    },
    {
        question: "A mastectomia é a remoção completa da mama. Em quais casos ela pode ser indicada?",
        options: ["Apenas em casos de tumores muito grandes", "Em todos os casos de câncer de mama", "Em casos de tumores múltiplos, grandes ou quando a radioterapia não é viável", "Apenas por escolha da paciente"],
        correctAnswer: "c"
    },
    {
        question: "A quadrantectomia é um tipo de cirurgia conservadora da mama que remove:",
        options: ["Apenas o mamilo", "Um quarto da mama", "Metade da mama", "Apenas os linfonodos axilares"],
        correctAnswer: "b"
    },
    {
        question: "O que são os linfonodos sentinela na cirurgia de câncer de mama?",
        options: ["Linfonodos removidos para exame de rotina", "Os primeiros linfonodos para onde as células cancerosas podem se espalhar", "Linfonodos que causam dor na axila", "Linfonodos que indicam metástase avançada"],
        correctAnswer: "b"
    },
    {
        question: "A radioterapia pode ser utilizada após a cirurgia de câncer de mama para:",
        options: ["Acelerar a cicatrização", "Reduzir o risco de recorrência local", "Aliviar a dor pós-operatória", "Melhorar a estética da mama"],
        correctAnswer: "b"
    },
    {
        question: "Quais são os principais efeitos colaterais da quimioterapia para o câncer de mama?",
        options: ["Apenas queda de cabelo", "Náuseas, fadiga, queda de cabelo e alterações no sangue", "Apenas perda de apetite", "Apenas alterações na pele"],
        correctAnswer: "b"
    },
    {
        question: "A reconstrução mamária é uma opção para todas as mulheres que fazem mastectomia?",
        options: ["Sim, é obrigatória", "Não, depende de fatores como o tipo de câncer e a saúde da paciente", "Apenas para mulheres jovens", "Apenas se a paciente tiver plano de saúde"],
        correctAnswer: "b"
    },
    {
        question: "O câncer de mama metastático significa que:",
        options: ["O câncer está confinado à mama", "O câncer se espalhou para linfonodos próximos", "O câncer se espalhou para outras partes do corpo, como ossos, fígado ou pulmões", "O câncer voltou após o tratamento inicial"],
        correctAnswer: "c"
    },
    {
        question: "Qual a importância do acompanhamento médico após o tratamento do câncer de mama?",
        options: ["Apenas para renovar receitas de medicamentos", "Para monitorar a recorrência da doença e gerenciar possíveis efeitos tardios do tratamento", "Não é necessário acompanhamento", "Apenas se a paciente sentir alguma dor"],
        correctAnswer: "b"
    },
    {
        question: "Exercícios físicos são recomendados durante e após o tratamento do câncer de mama?",
        options: ["Não, o repouso é fundamental", "Sim, podem ajudar a reduzir a fadiga e melhorar a qualidade de vida", "Apenas exercícios leves como caminhada", "Apenas exercícios de força"],
        correctAnswer: "b"
    },
    {
        question: "Uma dieta saudável pode influenciar o risco de câncer de mama?",
        options: ["Não tem nenhuma influência", "Sim, rica em frutas, vegetais e fibras pode ser protetora", "Apenas dietas vegetarianas", "Apenas dietas com baixo teor de gordura"],
        correctAnswer: "b"
    },
    {
        question: "O uso de anticoncepcionais hormonais aumenta o risco de câncer de mama?",
        options: ["Não há nenhuma relação", "Pode haver um pequeno aumento no risco, que geralmente desaparece após a interrupção", "Aumenta significativamente o risco", "Apenas anticoncepcionais de longa duração"],
        correctAnswer: "b"
    },
    {
        question: "A terapia neoadjuvante é um tratamento realizado:",
        options: ["Após a cirurgia", "Antes da cirurgia para tentar reduzir o tamanho do tumor", "Durante a radioterapia", "Em casos de metástase"],
        correctAnswer: "b"
    },
    {
        question: "O que são os receptores hormonais em células de câncer de mama?",
        options: ["Proteínas que ajudam a célula a se mover", "Proteínas que se ligam a hormônios como estrogênio e progesterona e podem estimular o crescimento do câncer", "Proteínas que indicam a agressividade do tumor", "Proteínas que tornam a célula resistente à quimioterapia"],
        correctAnswer: "b"
    },
    {
        question: "HER2 é uma proteína que pode estar super expressa em alguns tipos de câncer de mama. Qual a importância de saber o status HER2?",
        options: ["Indica o tamanho do tumor", "Ajuda a determinar o tipo de tratamento mais eficaz", "Indica a probabilidade de metástase", "Não tem relevância para o tratamento"],
        correctAnswer: "b"
    },
    {
        question: "A densidade mamária alta pode dificultar a detecção de câncer de mama na mamografia?",
        options: ["Não interfere na detecção", "Sim, pode tornar mais difícil identificar tumores", "Apenas em mulheres jovens", "Apenas em mulheres com próteses mamárias"],
        correctAnswer: "b"
    },
    {
        question: "A exposição à radiação (por exemplo, de exames de imagem frequentes) aumenta o risco de câncer de mama?",
        options: ["Não há risco", "Há um risco muito baixo associado a exames diagnósticos", "Aumenta significativamente o risco", "Apenas a radiação de acidentes nucleares"],
        correctAnswer: "b"
    },
    {
        question: "O câncer de mama inflamatório é um tipo:",
        options: ["Com crescimento lento e pouco agressivo", "Que causa vermelhidão e inchaço na mama, muitas vezes sem um caroço óbvio", "Que responde muito bem à hormonioterapia", "Exclusivo de mulheres jovens"],
        correctAnswer: "b"
    },
    {
        question: "A síndrome de Li-Fraumeni é uma condição genética rara que aumenta o risco de:",
        options: ["Apenas câncer de pulmão", "Vários tipos de câncer, incluindo o de mama", "Apenas leucemia", "Apenas câncer de pele"],
        correctAnswer: "b"
    },
    {
        question: "BRCA1 e BRCA2 são genes relacionados ao aumento do risco de câncer de mama e:",
        options: ["Apenas câncer de ovário", "Outros tipos de câncer, como ovário, próstata e pâncreas", "Apenas câncer de cólon", "Apenas melanoma"],
        correctAnswer: "b"
    },
    {
        question: "A terapia adjuvante é um tratamento realizado:",
        options: ["Antes da cirurgia", "Durante a cirurgia", "Após o tratamento principal (geralmente cirurgia) para reduzir o risco de recorrência", "Em casos de doença avançada"],
        correctAnswer: "c"
    },
    {
        question: "A fadiga relacionada ao câncer é:",
        options: ["A mesma coisa que o cansaço normal", "Um cansaço persistente e debilitante que não melhora com o descanso", "Apenas um efeito colateral da quimioterapia", "Sinal de que o tratamento não está funcionando"],
        correctAnswer: "b"
    },
    {
        question: "O apoio psicológico é importante para pacientes com câncer de mama?",
        options: ["Não faz diferença", "Sim, ajuda a lidar com o impacto emocional da doença e do tratamento", "Apenas para pacientes com depressão pré-existente", "Apenas no estágio final da doença"],
        correctAnswer: "b"
    },
    {
        question: "A acupuntura pode ser utilizada como terapia complementar no tratamento do câncer de mama para:",
        options: ["Curar o câncer", "Reduzir os tumores", "Aliviar náuseas e outros efeitos colaterais do tratamento", "Substituir a quimioterapia"],
        correctAnswer: "c"
    },
    {
        question: "Grupos de apoio podem ser benéficos para pacientes com câncer de mama porque:",
        options: ["Fornecem apenas informações médicas", "Oferecem um espaço para compartilhar experiências e emoções com outras pessoas que estão passando por situações semelhantes", "Substituem a necessidade de terapia profissional", "Apenas organizam eventos sociais"],
        correctAnswer: "b"
    },
    {
        question: "A pesquisa sobre o câncer de mama continua avançando em áreas como:",
        options: ["Apenas cirurgia", "Novas terapias, diagnóstico precoce e prevenção", "Apenas radioterapia", "Apenas hormonioterapia"],
        correctAnswer: "b"
    },
    {
        question: "Qual a importância da participação em ensaios clínicos para o avanço no tratamento do câncer de mama?",
        options: ["Não contribuem para o avanço", "Ajudam a testar novas terapias e melhorar os tratamentos existentes", "São apenas para pacientes em estágio terminal", "São apenas para pacientes jovens"],
        correctAnswer: "b"
    },
    {
        question: "A palpação das mamas é uma forma de:",
        options: ["Medir o tamanho do tumor", "Verificar a temperatura da mama", "Realizar o autoexame para identificar alterações", "Aplicar medicamentos tópicos"],
        correctAnswer: "c"
    },
    {
        question: "A mamografia 3D (tomossíntese) pode oferecer algumas vantagens em relação à mamografia tradicional, como:",
        options: ["Menor exposição à radiação", "Imagens mais claras, especialmente em mamas densas", "Diagnóstico mais rápido", "Custo mais baixo"],
        correctAnswer: "b"
    },
    {
        question: "A ultrassonografia mamária é frequentemente utilizada como complemento à mamografia para:",
        options: ["Substituir a mamografia em mulheres jovens", "Diferenciar entre cistos e tumores sólidos", "Detectar microcalcificações", "Avaliar a resposta ao tratamento"],
        correctAnswer: "b"
    },
    {
        question: "A ressonância magnética (RM) das mamas pode ser indicada em casos de:",
        options: ["Rastreamento de rotina para todas as mulheres", "Alto risco genético, avaliação de próteses ou resposta à quimioterapia neoadjuvante", "Suspeita de infecção mamária", "Dor mamária cíclica"],
        correctAnswer: "b"
    },
    {
        question: "O índice de sobrevida em 5 anos para câncer de mama tem:",
        options: ["Diminuído nas últimas décadas", "Aumentado significativamente devido aos avanços no tratamento", "Permanecido o mesmo", "Grandes variações regionais, mas sem tendência geral"],
        correctAnswer: "b"
    },
    {
        question: "A mastectomia profilática é a remoção das mamas para:",
        options: ["Tratar um câncer já existente", "Prevenir o desenvolvimento de câncer em pessoas com alto risco genético", "Melhorar a estética das mamas", "Aliviar a dor mamária crônica"],
        correctAnswer: "b"
    },
    {
        question: "A ooforectomia profilática (remoção dos ovários) pode reduzir o risco de câncer de mama em mulheres com mutações nos genes:",
        options: ["TP53", "PTEN", "BRCA1 e BRCA2", "ATM"],
        correctAnswer: "c"
    },
    {
        question: "A importância da comunicação entre paciente e equipe médica no tratamento do câncer de mama é:",
        options: ["Relativamente baixa", "Fundamental para decisões compartilhadas e adesão ao tratamento", "Responsabilidade exclusiva da equipe médica", "Importante apenas no estágio final da doença"],
        correctAnswer: "b"
    },
    {
        question: "O conceito de 'navegador de pacientes' no contexto do câncer de mama se refere a:",
        options: ["Um software para rastrear dados de pacientes", "Um profissional que ajuda o paciente a superar barreiras no acesso e fluxo do tratamento", "Um guia turístico em hospitais oncológicos", "Um robô cirúrgico"],
        correctAnswer: "b"
    },
    {
        question: "A telemedicina pode ser utilizada no acompanhamento de pacientes com câncer de mama para:",
        options: ["Realizar cirurgias remotamente", "Administrar quimioterapia em casa", "Consultas de acompanhamento, avaliação de efeitos colaterais e suporte emocional", "Substituir todas as consultas presenciais"],
        correctAnswer: "c"
    },
    {
        question: "A pesquisa translacional no câncer de mama busca:",
        options: ["Traduzir descobertas científicas básicas em novas abordagens de prevenção, diagnóstico e tratamento", "Apenas traduzir artigos científicos para outros idiomas", "Apenas pesquisar a história do câncer de mama", "Apenas focar em estudos com animais"],
        correctAnswer: "a"
    },
    {
        question: "O estigma associado ao câncer de mama pode afetar:",
        options: ["Apenas a autoestima da paciente", "A busca por ajuda médica, o apoio social e a qualidade de vida", "Apenas o relacionamento com a família", "Apenas a capacidade de trabalhar"],
        correctAnswer: "b"
    },
    {
        question: "A educação e a conscientização sobre o câncer de mama são importantes para:",
        options: ["Apenas assustar as pessoas", "Promover a detecção precoce, a prevenção e o apoio aos pacientes", "Apenas gerar lucro para instituições de pesquisa", "Apenas criar campanhas publicitárias"],
        correctAnswer: "b"
    },
    {
        question: "O papel do parceiro(a) e da família no apoio à paciente com câncer de mama é:",
        options: ["Irrelevante", "Fundamental para o bem-estar emocional e a adesão ao tratamento", "Apenas oferecer ajuda prática", "Apenas evitar falar sobre a doença"],
        correctAnswer: "b"
    },
    {
        question: "A importância da informação de qualidade e de fontes confiáveis sobre o câncer de mama é crucial para:",
        options: ["Apenas decorar para conversas", "Tomar decisões informadas sobre prevenção, diagnóstico e tratamento", "Apenas seguir a opinião de amigos e familiares", "Apenas evitar o medo"],
        correctAnswer: "b"
    }
];

function generateQuiz() {
    const numQuestions = 5;
    const selectedQuestions = [];
    const availableQuestions = [...questions];

    for (let i = 0; i < numQuestions; i++) {
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        selectedQuestions.push(availableQuestions.splice(randomIndex, 1)[0]);
    }

    quizForm.innerHTML = '';

    selectedQuestions.forEach((currentQuestion, questionIndex) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');
        questionContainer.id = `question-${questionIndex + 1}`;

        const questionText = document.createElement('p');
        questionText.classList.add('question-text');
        questionText.textContent = currentQuestion.question;

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options-container');

        const letters = ['a', 'b', 'c', 'd'];
        currentQuestion.options.forEach((option, optionIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${questionIndex + 1}`;
            input.value = letters[optionIndex];

            const optionText = document.createTextNode(` ${option}`);

            label.appendChild(input);
            label.appendChild(optionText);
            optionsContainer.appendChild(label);
        });

        questionContainer.appendChild(questionText);
        questionContainer.appendChild(optionsContainer);
        quizForm.appendChild(questionContainer);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar Respostas';
    quizForm.appendChild(submitButton);
}

function checkAnswers(event) {
    event.preventDefault(); 

    const selectedQuestions = Array.from(quizForm.querySelectorAll('.question-container'));
    let allQuestionsAnswered  = true;

    selectedQuestions.forEach((questionContainer, index) => {
        const selectedOption = questionContainer.querySelector(`input[name="question-${index + 1}"]:checked`);
        if(!selectedOption) {
            allQuestionsAnswered = false;
        }
    });

    if(!allQuestionsAnswered) {
        alert("Por favor, responda todas as perguntas antes de enviar.");
    } else {
    
    const userAnswers = [];
    let correctAnswersCount = 0;
    let wrongAnswersCount = 0;

    selectedQuestions.forEach((questionContainer, index) => {
        const selectedOption = questionContainer.querySelector(`input[name="question-${index + 1}"]:checked`);

        if (selectedOption) {
            const userAnswer = selectedOption.value;
            userAnswers.push(userAnswer);

            const correctAnswer = questions.find(q => q.question === questionContainer.querySelector('.question-text').textContent).correctAnswer;
            
            if (userAnswer === correctAnswer) {
                correctAnswersCount++;
                selectedOption.parentNode.classList.add('correto');
            } else {
                wrongAnswersCount++;
                selectedOption.parentNode.classList.add('incorreto');

                const correctOptionInput = questionContainer.querySelector(`input[value="${correctAnswer}"]`);
                if(correctOptionInput) {
                    const correctOptionLabel = correctOptionInput.parentNode;
                    correctOptionLabel.classList.add('incorreto-correto');
                }
            }
        } 
        
        const radioButtons = questionContainer.querySelectorAll(`input[type="radio"][name="question-${index + 1}"]`);
            radioButtons.forEach(radio => {
                radio.disabled = true;
            });
    });

    document.getElementById('correct-answers').textContent = correctAnswersCount;
    document.getElementById('wrong-answers').textContent = wrongAnswersCount;
    resultContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden'); 
    
    setTimeout(() => {
        location.reload();
    }, 15000);
}

}

generateQuiz();
quizForm.addEventListener('submit', checkAnswers);