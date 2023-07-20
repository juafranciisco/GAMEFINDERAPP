

fetch('https://api.rawg.io/api/games?key=7a898f76b78e4aaa9832535d8a2e75e7')
    .then(response => response.json())
    .then(data => {
      // Obtener la lista de juegos
      const games = data.results;

      // Obtener todos los elementos con la clase "card"
      const cardElements = document.getElementsByClassName('card');

      // Iterar sobre cada tarjeta y actualizar los datos del juego
      for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        const game = games[i];

        // Obtener la imagen de la tarjeta actual
        const img = card.getElementsByTagName('img')[0];

        // Actualizar el atributo "src" con la URL de la imagen del juego
        img.src = game.background_image;
        img.alt = game.name;

        // Actualizar el título de la tarjeta
        const h3 = card.getElementsByTagName('h3')[0];
        h3.textContent = game.name;

        // Crear un párrafo para la fecha de lanzamiento
        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Release Date: ${game.released}`;
        card.appendChild(releaseDate);

        // Crear un párrafo para los géneros
        const genres = document.createElement('p');
        const genreNames = game.genres.map(genre => genre.name).join(', ');
        genres.textContent = `Genres: ${genreNames}`;
        card.appendChild(genres);
      }
    })
    .catch(error => {
      // Manejo de errores
      console.log(error);
    });