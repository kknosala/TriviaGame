$( document ).ready(function() {

    var intervalId;

    var gameVariables = {

        correctGuesses: 0,
        incorrectGuesses: 0,
        timer: 10,
        clockRunning: false,
        answerQuestion: true,
        nextQuestion: 0,
        questionNumber: 0,

    }

    var gameTimer = {

        start: function(){
            
            if(!gameVariables.clockRunning){
                gameVariables.clockRunning = true;
                intervalId = setInterval(this.count, 1000);
            }
        },

        stop: function() {
            clearInterval(intervalId)
            gameVariables.clockRunning = false;
        },

        reset: function() {
            gameVariables.timer = 10;
            this.start();
        },

        count: function() {
            gameVariables.timer--;
            print.timer();
            if(gameVariables.timer === 0){
                gameTimer.stop();
                gameQuestions.timeOut(gameVariables.questionNumber);
                }
            }
    }
    
    var gameQuestions = {

        question1: 'What are the tallest trees on Earth?',
        answers1: ['Coast Redwood', 'Coast Douglas Fir', 'Giant Sequoia', 'Sitka Spruce'],
        //Coast Redwood
        question2: 'What was the name of Robert De Niro\'s character in Taxi Driver?',
        answers2: ['Jimmy Bickle', 'Travis Bickle', 'Virgil Bickle', 'Harry Bickle'],
        //Travis Bickle
        question3: 'Which war caused the greatest loss of life for Americans?',
        answers3: ['WW1', 'WW2', 'Vietnam', 'American Civil War'],
        //American Civil War
        question4: 'What is the world\'s most venomous fish?',
        answers4: ['Scorpion Fish', 'Lion Fish', 'Stone Fish', 'Toadfish'],
        //Stone Fish
        question5: 'Which country employed the first police woman?',
        answers5: ['England', 'USA', 'France', 'Australia'],
        //USA
        question6: 'When born, a Dalmatian puppy is always what?',
        answers6: ['Black', 'Black with white spots', 'White', 'White with black spots'],
        //White
        question7: '2, 3, 5, 7, and 11 are the first five what?',
        answers7: ['Odd Numbers', 'Integers', 'Composite Numbers', 'Prime Numbers'],
        //Prime Numbers
        question8: 'What is the main language spoken in Venezuela?',
        answers8: ['Spanish', 'Portuguese', 'French', 'Italian'],
        //Spanish
        question9: 'What is Aladdin\'s monkey friend called in the Disney movie Aladdin?',
        answers9: ['Zazu', 'Abu', 'Moo Shu', 'Babu'],
        //Abu
        question10: 'Bram Stoker\'s Dracula lived in Transylvania. In what modern-day country can Transylvania be found in?',
        answers10: ['Russia', 'Serbia', 'Romania', 'Kazakhstan'],
        //Romania

        askQuestion: function(x){

            if(x === 1){
                print.question(gameQuestions.question1, gameQuestions.answers1);
            }else if(x === 2){
                print.question(gameQuestions.question2, gameQuestions.answers2);
            }else if(x === 3){
                print.question(gameQuestions.question3, gameQuestions.answers3);
            }else if(x === 4){
                print.question(gameQuestions.question4, gameQuestions.answers4);
            }else if(x === 5){
                print.question(gameQuestions.question5, gameQuestions.answers5);
            }else if(x === 6){
                print.question(gameQuestions.question6, gameQuestions.answers6);
            }else if(x === 7){
                print.question(gameQuestions.question7, gameQuestions.answers7);
            }else if(x === 8){
                print.question(gameQuestions.question8, gameQuestions.answers8);
            }else if(x === 9){
                print.question(gameQuestions.question9, gameQuestions.answers9);
            }else if(x === 10){
                print.question(gameQuestions.question10, gameQuestions.answers10);
            }
            gameTimer.start();
            this.answerQuestion(x);
        },

        answerQuestion: function(y){

                $('.answer-button').click(function(){

                var answerChoice = this.value;
            
                if(gameVariables.answerQuestion){
            
                    gameVariables.answerQuestion = false;

                        if(y === 1){
                            if(answerChoice == 'Coast Redwood'){
                                $(this).attr('class', 'right');
                                print.correctAnswer();
                            }else{
                                $('#win-text').html('The correct answer is: Coast Redwood');
                                $(this).attr('class', 'wrong');
                                print.inccorrectAnswer();
                            }
                            $('#fun-fact').html('Redwoods can reach 115 meters tall.');
                            $('#image').html('<img src=\"assets/images/question1.gif\" alt=\"A Coast Redwood\" />');
                        }else if(y === 2){
                            if(answerChoice == 'Travis Bickle'){
                                $(this).attr('class', 'right');
                                print.correctAnswer();
                            }else{
                                $('#win-text').html('The correct answer is: Travis Bickle');
                                $(this).attr('class', 'wrong');      
                                print.inccorrectAnswer();
                            }
                            $('#fun-fact').html('Every actor in \"Taxi Driver\" took a massive paycut to make the film.');
                            $('#image').html('<img src=\"assets/images/question2.gif\" alt=\"Travis Clapping\" />');
                        }else if(y === 3){
                            if(answerChoice == 'American Civil War'){
                                $(this).attr('class', 'right');
                                print.correctAnswer();
                            }else{
                                $('#win-text').html('The correct answer is: American Civil War');
                                $(this).attr('class', 'wrong');
                                print.inccorrectAnswer();
                            }
                            $('#fun-fact').html('620,000 soliders died, more than WW1, WW2, and Vietnam combined.');
                            $('#image').html('<img src=\"assets/images/question3.gif\" alt=\"Civil War Renactors\" />');
                        }else if(y === 4){
                            if(answerChoice == 'Stone Fish'){
                                $(this).attr('class', 'right');
                                print.correctAnswer();
                            }else{
                                $('#win-text').html('The correct answer is: Stone Fish');
                                $(this).attr('class', 'wrong');
                                print.inccorrectAnswer();
                            }
                            $('#fun-fact').html('The Stone Fish sting is described as the most intense pain known to man.');
                            $('#image').html('<img src=\"assets/images/question4.gif\" alt\"A Stone Fish\" />');
                        }else if(y === 5){
                            if(answerChoice == 'USA'){
                                $(this).attr('class', 'right');
                                print.correctAnswer();
                            }else{
                                $('#win-text').html('The correct answer is: USA');
                                $(this).attr('class', 'wrong');
                                print.inccorrectAnswer();
                            }
                            $('#fun-fact').html('Alice Stevvins Wells became a police office in 1910.');
                            $('#image').html('<img src=\"assets/images/question5.gif\" alt=\"A female police officer\" />');
                        }else if(y === 6){
                            if(answerChoice == 'White'){
                                $(this).attr('class', 'right');
                                print.correctAnswer();
                            }else{
                                $('#win-text').html('The correct answer is: White');
                                $(this).attr('class', 'wrong');
                                print.inccorrectAnswer();
                            }
                            $('#fun-fact').html('Dalmations develop their spots at 4 weeks old.');
                            $('#image').html('<img src=\"assets/images/question6.gif\" alt=\"Dalmation Puppies\" />');
                        }else if(y === 7){
                            if(answerChoice == 'Prime Numbers'){
                                $(this).attr('class', 'right');
                                print.correctAnswer();
                            }else{
                                $('#win-text').html('The correct answer is: Prime Numbers');
                                $(this).attr('class', 'wrong');
                                print.inccorrectAnswer();
                            }
                            $('#fun-fact').html('Prime numbers can only be divided by themselves and 1.');
                            $('#image').html('<img src=\"assets/images/question7.gif\" alt=\"Examples of Prime numbers\" />');
                        }else if(y === 8){
                            if(answerChoice == 'Spanish'){
                                $(this).attr('class', 'right');
                                print.correctAnswer();
                            }else{
                                $('#win-text').html('The correct answer is: Spanish');
                                $(this).attr('class', 'wrong');
                                print.inccorrectAnswer();
                            }
                            $('#fun-fact').html('Venezuela is home to the world\'s largest rodent, the Capybara.');
                            $('#image').html('<img src=\"assets/images/question8.gif\" alt=\"Venezuelan Flag\" />');
                        }else if(y === 9){
                            if(answerChoice == 'Abu'){
                                $(this).attr('class', 'right');
                                print.correctAnswer();
                            }else{
                                $('#win-text').html('The correct answer is: Abu');
                                $(this).attr('class', 'wrong');
                                print.inccorrectAnswer();
                            }
                            $('#fun-fact').html('Robin Williams recorded over 16 hours of audio for the movie.');
                            $('#image').html('<img src=\"assets/images/question9.gif\" alt=\"Abu looking at a jewel\" />');
                        }else if(y === 10){
                            if(answerChoice == 'Romania'){
                                $(this).attr('class', 'right');
                                print.correctAnswer();
                            }else{
                                $('#win-text').html('The correct answer is: Romania');
                                $(this).attr('class', 'wrong');
                                print.inccorrectAnswer();
                            }
                            $('#fun-fact').html('The Romanian language is over 1,700 years old.');
                            $('#image').html('<img src=\"assets/images/question10.gif\" alt=\"Dracula in his coffin\" />');
                        }

                        setTimeout(function(){
                            if(y < 10){
                                print.playGame();
                                gameQuestions.askQuestion(y + 1);
                            }else{
                                print.clear();
                                $('#timer').empty();
                                print.finalScreen();
                            }
                        }, 5000)
                }
                gameTimer.stop();
                print.gameStats();
            })
        },

        timeOut: function(y){

            if(gameVariables.timer === 0){

                gameVariables.answerQuestion = false;

                if(y === 1){
                    $('#win-text').html('<p>Out of Time!</p><p>The correct answer is: Coast Redwood</p>');
                    $('#fun-fact').html('Redwoods can reach 115 meters tall.');
                    $('#image').html('<img src=\"assets/images/question1.gif\" alt=\"A Coast Redwood\" />');
                    print.inccorrectAnswer();
                }else if(y === 2){
                    $('#win-text').html('<p>Out of Time!</p><p>The correct answer is: Travis Bickle</p>');
                    $('#fun-fact').html('Every actor in \"Taxi Driver\" took a massive paycut to make the film.');
                    $('#image').html('<img src=\"assets/images/question2.gif\" alt=\"Travis Clapping\" />');
                    print.inccorrectAnswer();
                }else if(y === 3){
                    $('#win-text').html('<p>Out of Time!</p><p>The correct answer is: American Civil War</p>');
                    $('#fun-fact').html('620,000 soliders died, more than WW1, WW2, and Vietnam combined.');
                    $('#image').html('<img src=\"assets/images/question3.gif\" alt=\"Civil War Renactors\" />');
                    print.inccorrectAnswer();
                }else if(y === 4){
                    $('#win-text').html('<p>Out of Time!</p><p>The correct answer is: Stone Fish</p>');
                    $('#fun-fact').html('The Stone Fish sting is described as the most intense pain known to man.');
                    $('#image').html('<img src=\"assets/images/question4.gif\" alt\"A Stone Fish\" />');
                    print.inccorrectAnswer();
                }else if(y === 5){
                    $('#win-text').html('<p>Out of Time!</p><p>The correct answer is: USA</p>');
                    $('#fun-fact').html('Alice Stevvins Wells became a police office in 1910.');
                    $('#image').html('<img src=\"assets/images/question5.gif\" alt=\"A female police officer\" />');
                    print.inccorrectAnswer();
                }else if(y === 6){
                    $('#win-text').html('<p>Out of Time!</p><p>The correct answer is: White</p>');
                    $('#fun-fact').html('Dalmations develop their spots at 4 weeks old.');
                    $('#image').html('<img src=\"assets/images/question6.gif\" alt=\"Dalmation Puppies\" />');
                    print.inccorrectAnswer();
                }else if(y === 7){
                    $('#win-text').html('<p>Out of Time!</p><p>The correct answer is: Prime Numbers</p>');
                    $('#fun-fact').html('Prime numbers can only be divided by themselves and 1.');
                    $('#image').html('<img src=\"assets/images/question7.gif\" alt=\"Examples of Prime numbers\" />');
                    print.inccorrectAnswer();
                }else if(y === 8){
                    $('#win-text').html('<p>Out of Time!</p><p>The correct answer is: Spanish</p>');
                    $('#fun-fact').html('Venezuela is home to the world\'s largest rodent, the Capybara.');
                    $('#image').html('<img src=\"assets/images/question8.gif\" alt=\"Venezuelan Flag\" />');
                    print.inccorrectAnswer();
                }else if(y === 9){
                    $('#win-text').html('<p>Out of Time!</p><p>The correct answer is: Abu</p>');
                    $('#fun-fact').html('Robin Williams recorded over 16 hours of audio for the movie.');
                    $('#image').html('<img src=\"assets/images/question9.gif\" alt=\"Abu looking at a jewel\" />');
                    print.inccorrectAnswer();
                }else if(y === 10){
                    $('#win-text').html('<p>Out of Time!</p><p>The correct answer is: Romania</p>');
                    $('#fun-fact').html('The Romanian language is over 1,700 years old.');
                    $('#image').html('<img src=\"assets/images/question10.gif\" alt=\"Dracula in his coffin\" />');
                    print.inccorrectAnswer();
                }
                setTimeout(function(){
                    if(y < 10){
                        print.playGame();
                        gameQuestions.askQuestion(y + 1);
                    }else{
                        print.clear();
                        $('#timer').empty();
                        print.finalScreen();
                    }
                }, 5000)
            }print.gameStats();
        }
        
    }

    var print = {

        gameStats: function(){
            $('#correct').html('Correct Answers: ' + gameVariables.correctGuesses);
            $('#incorrect').html('Incorrect Answers: ' + gameVariables.incorrectGuesses);
        },

        timer: function(){
            $('#timer').html('Time Left: ' + gameVariables.timer);
        },

        question: function(question, answers){
            gameVariables.answerQuestion = true;
            $('#question').html(question);
            for(i = 0; i < 4; i++){
                $('#answers').append('<button class=\"answer-button\" value=\"' + answers[i] + '\">' + answers[i] + '</button><br>');
            }
        },

        correctAnswer: function(){
            $('#win-text').html('You are correct!');
            gameVariables.correctGuesses++
        },
        
        inccorrectAnswer: function(){
            gameVariables.incorrectGuesses++
        },

        clear: function(){
            $('#question').empty();
            $('#answers').empty();
            $('#win-text').empty();
            $('#fun-fact').empty();
            $('#image').empty();
        },

        playGame: function(z){
            print.clear();
            gameVariables.questionNumber++
            gameVariables.timer = 10
            gameQuestions.askQuestion(z);
            print.timer();
            gameTimer.start(z);
        },

        finalScreen: function(){
            $('#correct').empty();
            $('#incorrect').empty();
            $('#question').html('Congradulations!');
            $('#answers').html('Here are your final results:');
            $('#win-text').html('How many questions you got right: ' + gameVariables.correctGuesses);
            $('#fun-fact').html('How many questions you got wrong: ' + gameVariables.incorrectGuesses);
        }
    }
   
    print.gameStats();
    
    $('#start').click(function(){
        print.playGame(1);
    })
    

    
    












})