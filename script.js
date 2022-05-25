import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

const getCardHTML = (pokemon) => {
    const capitalisedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const cardHTML = `
        <div class="card">
            <img class="card__image" src="${pokemon.sprite}" alt="${pokemon.name}"/>
            <div class="card__content">
                <p class="card__heading">${capitalisedName}</p>
                <p class="card__text">${capitalisedName} (#${pokemon.id}) is a type ${pokemon.types.join(" & ")} pokemon</p>
            </div>
        </div>
    `;
    return cardHTML;
}

pokemonArray.forEach((pokemon) => {
    cardContainer.innerHTML += getCardHTML(pokemon);
});

