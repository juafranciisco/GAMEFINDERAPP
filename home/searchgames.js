document.addEventListener('DOMContentLoaded', function() {
    const cardList = document.querySelector('.card-list');
    const searchInput = document.getElementById('search-input');
    const latestSearchesLink = document.getElementById('latest-searches-link');

    // Variable para almacenar las últimas búsquedas
    let latestSearches = [];

    // URL de la API RAW para buscar juegos
    const apiURL = 'https://api.rawg.io/api/games';

    // Función para mostrar los juegos en las tarjetas
    function mostrarJuegos(juegos) {
        cardList.innerHTML = ''; // Limpiar contenido actual de las tarjetas

        juegos.forEach(function(juego) {
            const card = document.createElement('div');
            card.classList.add('card');

            const likeIcon = document.createElement('div');
            likeIcon.classList.add('like-icon');
            likeIcon.innerHTML = '&#x2764;';

            const img = document.createElement('img');
            img.src = juego.background_image;
            img.alt = juego.name;

            const title = document.createElement('h3');
            title.textContent = juego.name;

            const releaseDate = document.createElement('p');
            releaseDate.textContent = `Release Date: ${juego.released}`;

            const genres = document.createElement('p');
            const genreNames = juego.genres.map(genre => genre.name).join(', ');
            genres.textContent = `Genres: ${genreNames}`;

            card.appendChild(likeIcon);
            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(releaseDate);
            card.appendChild(genres);
            cardList.appendChild(card);

            // Reiniciar estado del corazón
            likeIcon.classList.remove('clicked');
        });
    }

    // Función para realizar la búsqueda en la API RAW
    function buscarJuegos(termino) {
        const url = `${apiURL}?key=7a898f76b78e4aaa9832535d8a2e75e7&search=${termino}&page_size=20`;

        axios.get(url)
            .then(response => {
                const juegos = response.data.results;
                mostrarJuegos(juegos);

                // Agregar la búsqueda a las últimas búsquedas
                if (!latestSearches.includes(termino)) {
                    latestSearches.push(termino);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    // Función para mostrar las últimas búsquedas en la "card-list"
    function mostrarUltimasBusquedas() {
        cardList.innerHTML = ''; // Limpiar contenido actual de las tarjetas

        latestSearches.forEach(function(termino) {
            const card = document.createElement('div');
            card.classList.add('card');

            const searchTerm = document.createElement('p');
            searchTerm.textContent = `Search Term: ${termino}`;

            card.appendChild(searchTerm);
            cardList.appendChild(card);
        });
    }

    // Evento de búsqueda
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm !== '') {
            buscarJuegos(searchTerm);
        } else {
            // Restaurar juegos predeterminados
            // Llamada a la función para mostrar los juegos predeterminados
        }
    });

    // Evento de clic en "Latest Searches"
    latestSearchesLink.addEventListener('click', function() {
        mostrarUltimasBusquedas();
    });
});