var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

$(document).keypress(function() {
  if (!started) {
    nextSequence();
    started = true;
  }
});

function nextSequence() {
    level++;
    $("h1").text(`Level ${level}`);
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}


$(".btn").on("click", function() {
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(color) {
    var audio = new Audio(`./sounds/${color}.mp3`);
    audio.play();
}

function animatePress(currentColour) {
    $(`.${currentColour}`).addClass("pressed");
    setTimeout(function () {
        $(`.${currentColour}`).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
        if (gamePattern.length == userClickedPattern.length) {
            setTimeout(nextSequence, 1000);
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => { $("body").removeClass("game-over"); }, 200);
        $("h1").text(`Game Over, Press Any Key to Restart`);
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}