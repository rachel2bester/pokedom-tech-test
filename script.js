import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");
const body = document.querySelector("body");

const search = document.querySelector("#search");
const searchBy = document.querySelector("#search-by");


const getCardHTML = (pokemon) => {
    const capitalisedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return `
        <div class="card">
            <img class="card__image" src="${pokemon.sprite}" alt="${pokemon.name}"/>
            <div class="card__content">
                <p class="card__heading">${capitalisedName}</p>
                <p class="card__text">${capitalisedName} (#${pokemon.id}) is a type ${pokemon.types.join(" & ")} pokemon</p>
            </div>
        </div>
    `;
}

const onSearchChange = (event) => {
    if (searchBy.options[searchBy.selectedIndex].text === "Name") {
        pokemons.forEach((pokemon) => {
            if (pokemon.obj.name.includes(event.target.value)) {
                pokemon.htmlCard.style.display = "";
            } else {
                pokemon.htmlCard.style.display = "none";
            }
        })
    } else if (searchBy.options[searchBy.selectedIndex].text === "ID Number") {
        pokemons.forEach((pokemon) => {
            if (pokemon.obj.id.toString().includes(event.target.value)) {
                pokemon.htmlCard.style.display = "";
            } else {
                pokemon.htmlCard.style.display = "none";
            }
        })
    } else {
        pokemons.forEach((pokemon) => {
            if (pokemon.obj.types.join(' ').includes(event.target.value)) {
                pokemon.htmlCard.style.display = "";
            } else {
                pokemon.htmlCard.style.display = "none";
            }
        })
    }
}


//insert form after h1

//body.innerHTML

//generate cards



const pokemons = [];
pokemonArray.forEach((pokemon) => cardContainer.innerHTML += getCardHTML(pokemon));

const pokemonCards = document.querySelectorAll(".card");

pokemonArray.forEach((pokemon, index) => {
    const pokemonData = { 
        obj: pokemon,
        htmlCard: pokemonCards[index]
    }
    pokemons.push(pokemonData);
});

pokemons.forEach((pokemon) => pokemon.htmlCard.style.display = "");

search.addEventListener("input", onSearchChange);




