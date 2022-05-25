import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");
const body = document.querySelector("body");
const pokemonCards = document.getElementsByClassName("card");
const search = document.querySelector


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
    
}


//insert form after h1

//body.innerHTML

//generate cards

const pokemons = [];
pokemonArray.forEach((pokemon, index) => {
    cardContainer.innerHTML += getCardHTML(pokemon);
    const pokemonData = { 
        obj: pokemon,
        cardIndex: index
    }
    pokemons.push(pokemonData);
});

pokemons.forEach((pokemon) => pokemonCards[pokemon.cardIndex].style.display = "none");


