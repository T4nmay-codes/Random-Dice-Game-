var randomNum = Math.floor(Math.random() * 6) + 1;


var randomImageSource = "images/dice" + randomNum + ".png";

var imgOne = document.querySelectorAll("img")[0];

imgOne.setAttribute("src", randomImageSource);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImgSrc2 = "images/dice" + randomNum2 + ".png";

var Img2 = document.querySelectorAll("img")[1];

Img2.setAttribute("src",randomImgSrc2 );


if (randomNum > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins ";
}
else if(randomNum < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins ";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw!!!!";
}
