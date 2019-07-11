$( document ).ready(function() {

    var intervalId;

    var gameVariables = {

        correctGuesses: 0,
        incorrectGuesses: 0,
        timer: 10,
        clockRunning: false,

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
            $('#timer').html(gameVariables.timer);
            console.log(this.intervalId);
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
    }

    var print = {
        
    }
   
    $('#start').on('click', function() {
        gameTimer.start();
    })
    $('#stop').on('click', function(){
        gameTimer.stop();
    })
    












})