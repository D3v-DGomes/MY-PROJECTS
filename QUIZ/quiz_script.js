// Initial Data
let currentQuestion = 0;
let correctAnswers = 0;
showQuestion();


// Events
document.querySelector('.scoreArea button').addEventListener('click', resetEvent);


// Functions
function showQuestion() {        // Mostrar as questões uma por vez, até acabar.
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        // Barra de progresso:
        let pct = Math.floor((currentQuestion / questions.length) * 100);        
        document.querySelector('.progress--bar').style.width = `${pct}%`;

        document.querySelector('.scoreArea').style.display = 'none';         // Para esconder a scroeArea.
        document.querySelector('.questionArea').style.display = 'block';     //  Para exibir a questão atual

        document.querySelector('.question').innerHTML = q.question;      // Para inserir a pergunta na tela
        let optionsHtml = '';        // Carregando as alternativas das questões.
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`;     // parseInt() para tornar o número das alternativas em string somado ao 1 para que se inicie do 1 e não do 0.
        }
        document.querySelector('.options').innerHTML = optionsHtml;      // Para inserir as opções na tela.

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });
    } else {
        finishQuiz();        // acabaram as questões
    }
}

function optionClickEvent(e) {       // Para informar a alternativa que foi selecionada
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    }

    currentQuestion++;   // Faz passar para a próxima questão
    showQuestion();      // Atualiza a tela com a próxima questão e suas alternativas.
}

function finishQuiz() {
    let points = Math.floor((correctAnswers / questions.length) * 100);

    if(points < 30) {
        document.querySelector('.scoreText1').innerHTML = 'Tá ruim em?!';
        document.querySelector('.scorePct').style.color = '#FF0000';
    } else if(points >= 30 && points < 70) {
        document.querySelector('.scoreText1').innerHTML = 'Muito bom!';
        document.querySelector('.scorePct').style.color = '#FFFF00';
    } else if(points >= 70) {
        document.querySelector('.scoreText1').innerHTML = 'Parabéns';
        document.querySelector('.scorePct').style.color = '#0D630D';
    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;

    document.querySelector('.scoreArea').style.display = 'block';    // Exibir o scoreArea.
    document.querySelector('.questionArea').style.display = 'none';  // Ocultar as questões.
    document.querySelector('.progress--bar').style.width = '100%';   // Preencher a barra de progresso completamente.
}

function resetEvent() {
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}

