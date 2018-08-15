// QUIZ

  $('#fadeIn').click(function(){
        $('p1').fadeIn('slow');
    });

    $('#fadeOut').click(function(){
        $('p1').fadeOut('slow');
    });
var myQuestions = [
    {
        question: "When was the miniskirt invented?",
        answers: {
            a: 'In the 1970s',
            b: 'In the 1960s',
            c: 'In the 1920s'
        },
        correctAnswer: 'b'
    },
    {
        question: "The average American owns how many pairs of jeans?",
        answers: {
            a: 'Ten',
            b: 'Two',
            c: 'Seven'
        },
        correctAnswer: 'c'
    },
    {
        question: "The first fashion magazine was published in 1586 in ________________?",
        answers: {
            a: 'Germany',
            b: 'England',
            c: 'France'
        },
        correctAnswer: 'a'
    },
    {
        question: "When was the first time women wore pants in public?",
        answers: {
            a: 'After WWII',
            b: 'In the mid-1800s',
            c: 'In the 1920s'
        },
        correctAnswer: 'b'
    },
    {
        question: "Who started the white wedding dress trend?",
        answers: {
            a: 'Marie Antoinette',
            b: 'Catherine the Greta',
            c: 'Queen Victoria'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'pink';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'lightblue';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
        
        
    }
}