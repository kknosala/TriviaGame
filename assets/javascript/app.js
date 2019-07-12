$( document ).ready(function() {

    var intervalId;

    var gameVariables = {

        correctGuesses: 0,
        incorrectGuesses: 0,
        timer: 10,
        clockRunning: false,
        answerQuestion: true,

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
            // $('#timer').html(gameVariables.timer);
            print.timer();
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
        questions6: 'When born, a Dalmatian puppy is always what?',
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
            this.answerQuestion(x);
        },

        answerQuestion: function(y){

            $('.answer-button').click(function(){

                var answerChoice = this.value;
            
                if(gameVariables.answerQuestion){
            
                    gameVariables.answerQuestion = false;
                    
                    if(y === 1){
                        if(answerChoice == 'Coast Redwood'){
                            print.correctAnswer();
                        }else{
                            print.inccorrectAnswer();
                        }
                        gameQuestions.askQuestion(2);
                    }else if(y === 2){
                        if(answerChoice == 'Travis Bickle'){
                            print.correctAnswer();
                        }else{
                            print.inccorrectAnswer();
                        }
                    }else if(y === 3){
                        if(answerChoice == 'American Civil War'){
                            print.correctAnswer();
                        }else{
                            print.inccorrectAnswer();
                        }
                    }else if(y === 4){
                        if(answerChoice == 'Stone Fish'){
                            print.correctAnswer();
                        }else{
                            print.inccorrectAnswer();
                        }
                    }else if(y === 5){
                        if(answerChoice == 'USA'){
                            print.correctAnswer();
                        }else{
                            print.inccorrectAnswer();
                        }
                    }else if(y === 6){
                        if(answerChoice == 'White'){
                            print.correctAnswer();
                        }else{
                            print.inccorrectAnswer();
                        }
                    }else if(y === 7){
                        if(answerChoice == 'Prime Numbers'){
                            print.correctAnswer();
                        }else{
                            print.inccorrectAnswer();
                        }
                    }else if(y === 8){
                        if(answerChoice == 'Spanish'){
                            print.correctAnswer();
                        }else{
                            print.inccorrectAnswer();
                        }
                    }else if(y === 9){
                        if(answerChoice == 'Abu'){
                            print.correctAnswer();
                        }else{
                            print.inccorrectAnswer();
                        }
                    }else if(y === 10){
                        if(answerChoice == 'Romania'){
                            print.correctAnswer();
                        }else{
                            print.inccorrectAnswer();
                        }
                    }
                }
                gameTimer.stop();
                print.gameStats();
            })
        }
        
    }

    var print = {

        gameStats: function(){
            $('#correct').html(gameVariables.correctGuesses);
            $('#incorrect').html(gameVariables.incorrectGuesses);
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
            $('#win-text').html('You were wrong!');
            gameVariables.incorrectGuesses++
        }
    }
   
    print.gameStats();
    print.timer();
    gameQuestions.askQuestion(1);
    gameTimer.start();
    
    // $('.answer-button').click(function(){

    //     var answerChoice = this.value;

    //     if(gameVariables.answerQuestion){

    //         gameVariables.answerQuestion = false;

    //         if(answerChoice == 'Coast Redwood'){
    //             $('#win-text').html('You are correct!');
    //             gameVariables.correctGuesses++
    //         }else{
    //             $('#win-text').html('You were wrong!');
    //             gameVariables.incorrectGuesses++
    //         }
    //         gameTimer.stop();
    //     }

    //     print.gameStats();
    // })

    

    
    












})