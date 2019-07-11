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

   
    $('#start').on('click', function() {
        gameTimer.start();
    })
    $('#stop').on('click', function(){
        gameTimer.stop();
    })
    












})