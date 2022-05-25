import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");
const body = document.querySelector("body");





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
    
    pokemons.forEach((pokemon, index) => {
        let attribute = null;
        if (searchBy.options[searchBy.selectedIndex].text === "Name") {
            attribute = pokemon.obj.name;
        } else if (searchBy.options[searchBy.selectedIndex].text === "ID Number") {
            attribute = pokemon.obj.id.toString();
        } else if (searchBy.options[searchBy.selectedIndex].text === "Type") {
            attribute = pokemon.obj.types.join(' ');
        }
        
        if (attribute.includes(event.target.value)) {
            pokemon.htmlCard.style.display = "";
        } else {
            pokemon.htmlCard.style.display = "none";
        }
    })

}

const onNumberChange = (event) => {
    pokemons.forEach((pokemon, index) => {
        if (index < numOfResults) {
            pokemon.htmlCard.style.display = "";
        } else {
            pokemon.htmlCard.style.display = "none";
        }
    });
}

//generate cards
pokemonArray.forEach((pokemon) => cardContainer.innerHTML += getCardHTML(pokemon));

//add form
const formHTML = `
    <form>
        <label for="search">Search</label>
        <input type="text" id="search">
        <label for="search-by">Search by</label>
        <select id="search-by">
            <option value="name">Name</option>
            <option value="id">ID Number</option>
            <option value="type">Type</option>
        </select>
        
        <label for="num-of-results" value=10>Number of Results to Display</label>
        <input type="number" id="num-of-results">
    </form>
`
{/* <label for="sort">Sort by</label>
<select id="sort">
    <option value="name">Name</option>
    <option value="id">ID Number</option>
</select> */}

const indexOfMain = body.innerHTML.indexOf('<main');
console.log(indexOfMain);
body.innerHTML = body.innerHTML.substring(0, indexOfMain) + formHTML + body.innerHTML.substring(indexOfMain, body.innerHTML.length)

const search = document.querySelector("#search");
const searchBy = document.querySelector("#search-by");
const numOfResults = document.querySelector("#num-of-results");

const pokemonCards = document.querySelectorAll(".card");
const pokemons = [];

pokemonArray.forEach((pokemon, index) => {
    const pokemonData = { 
        obj: pokemon,
        htmlCard: pokemonCards[index]
    }
    pokemons.push(pokemonData);
});

pokemons.forEach((pokemon) => pokemon.htmlCard.style.display = "");

search.addEventListener("input", onSearchChange);

//numOfResults.addEventListener("input", onNumberChange);




