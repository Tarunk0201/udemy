function diceGame(){
    let randomNum1 = Math.floor((Math.random() * 6) + 1);
    function diceRoll1(){
        if(randomNum1 === 1){
            img1.src = "./images/dice1.png";
        }else if(randomNum1 === 2){
            img1.src = "./images/dice2.png";
        }else if(randomNum1 === 3){
            img1.src = "./images/dice3.png";
        }else if(randomNum1 === 4){
            img1.src = "./images/dice4.png";
        }else if(randomNum1 === 5){
            img1.src = "./images/dice5.png";
        }else if(randomNum1 === 6){
            img1.src = "./images/dice6.png";
        }
}

    let randomNum2 = Math.floor((Math.random() * 6) + 1);
    function diceRoll2(){
        if(randomNum2 === 1){
            img2.src = "./images/dice1.png";
        }else if(randomNum2 === 2){
            img2.src = "./images/dice2.png";
        }else if(randomNum2 === 3){
            img2.src = "./images/dice3.png";
        }else if(randomNum2 === 4){
            img2.src = "./images/dice4.png";
        }else if(randomNum2 === 5){
            img2.src = "./images/dice5.png";
        }else if(randomNum2 === 6){
            img2.src = "./images/dice6.png";
        }
    }
    diceRoll1();
    diceRoll2();

    if(randomNum1 > randomNum2 ){
        document.querySelector("h1").innerHTML = "Player 1 Win";
    }   else if (randomNum2 > randomNum1 ){
        document.querySelector("h1").innerHTML = "Player 2 Win";
    }   else    {document.querySelector("h1").innerHTML = "its Drow";}
}

diceGame();

//----------------------------------------------------------------------------------------------------------------------------

var randomNum1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage =  "dice" + randomNum1 + ".png";

var randomImageSource = "images/" + randomDiceImage ;

var image = document.querySelectorAll("img")[0];

image.setAttribute("src", randomImageSource);

var randomNum2 = Math.floor((Math.random() * 6) + 1);

var randomImageSource2 = "images/" + randomDiceImage;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);