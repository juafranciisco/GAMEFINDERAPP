function updateCardList(games) {
    const cardList = document.querySelector('.card-list');
    cardList.innerHTML = ''; // Limpiamos el contenido previo de la lista de tarjetas

    games.forEach(game => {
        // Creamos el contenido de la tarjeta para cada juego
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = game.background_image;
        img.alt = game.name;

        const likeIcon = document.createElement('div');
        likeIcon.classList.add('like-icon');
        likeIcon.textContent = '❤';

        const title = document.createElement('h3');
        title.textContent = game.name;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Release Date: ${game.released}`;

        const genres = document.createElement('p');
        const genreNames = game.genres.map(genre => genre.name).join(', ');
        genres.textContent = `Genres: ${genreNames}`;

        const description = document.createElement('p');
        description.textContent = game.description || 'No description available.';

        // Agregamos los elementos creados a la tarjeta
        card.appendChild(img);
        card.appendChild(likeIcon);
        card.appendChild(title);
        card.appendChild(releaseDate);
        card.appendChild(genres);
        card.appendChild(description);

        // Agregamos la tarjeta a la lista de tarjetas
        cardList.appendChild(card);
    });
}

function updateGameList(gameNames) {
    const datalist = document.getElementById('game-list');
    datalist.innerHTML = ''; // Limpiamos el contenido previo del datalist

    gameNames.forEach(gameName => {
        const option = document.createElement('option');
        option.value = gameName;
        datalist.appendChild(option);
    });
}

function searchGames() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        // Si el término de búsqueda está vacío, no se realiza la búsqueda
        return;
    }

    fetch(`https://api.rawg.io/api/games?key=7a898f76b78e4aaa9832535d8a2e75e7&search=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            const games = data.results;
            const gameNames = games.map(game => game.name);
            updateGameList(gameNames); // Actualizamos el datalist con los nombres de los juegos
            updateCardList(games);
        })
        .catch(error => {
            console.log(error);
        });
}

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', searchGames);