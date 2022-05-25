const cardContainer = document.querySelector(".card-container");

const addCard = (container, pokemon) => {
    container.innerHTML += `
        <div class="card">
            <div class="card__image" src="${pokemon.sprite}" alt="${pokemon.name}"></div>
            <div class="card__content">
                <p class="card__heading">${pokemon.name}</p>
                <p class="card__text">${pokemon.name} (#${pokemon.id}) is a type ${pokemon.type.join(" & ")} pokemon</p>
            </div>
        </div>
    `;
}

