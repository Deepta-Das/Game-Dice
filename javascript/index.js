var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 = Math.floor( randomNumber1 * 6)+1;
randomNumber2 = Math.floor( randomNumber2 * 6)+1;
 
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// or document.querySelectorAll("img")[0].setAttribute("src",-------);
if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else {
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
