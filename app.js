const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";
const img = document.getElementById("img");
const character = document.getElementById("character");
const quote = document.getElementById("quote");
const generate = document.getElementById("btnGenerate");

generate.addEventListener("click", getApi);

function getApi() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        img.src = (data[0].image)
        character.textContent = (data[0].character)
        quote.textContent = (data[0].quote)
    })
}