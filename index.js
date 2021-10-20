import { Cah } from './Cah.js';
var dadPack = Cah[0];


console.log(dadPack.name);

var show = document.getElementById("show")

show.innerHTML = `<h1> ${dadPack.name} </h1>`

var cards = document.getElementById("cards");

var dadWhiteCards = dadPack.white;
for(const card of dadWhiteCards) {
    cards.innerHTML += `<li>${card.text}</li>`
}