let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}
let randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

$(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);

$(".button").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
});

console.log(randomChosenColour);
console.log(gamePattern);
console.log("hello");
