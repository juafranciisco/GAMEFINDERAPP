document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los elementos con el atributo "id" igual a "title"
    const titleElements = document.querySelectorAll('[id="title"]');
  
    // Agrega un escucha de evento de clic a cada elemento encontrado
    titleElements.forEach(function (titleElement) {
      titleElement.addEventListener('click', function () {
        // Obtén el elemento <div> que contiene toda la tarjeta (class="card")
        const cardElement = titleElement.closest('.card');
  
        // Obtén la URL de la imagen de fondo desde el atributo "src" del elemento <img> dentro de la tarjeta
        const backgroundImageUrl = cardElement.querySelector('img').src;
  
        // Obtén el texto del título
        const titleText = titleElement.textContent;
  
        // Crea un nuevo elemento <div> para la nueva vista
        const newView = document.createElement('div');
        newView.classList.add('new-view'); // Puedes definir estilos CSS adicionales para esta clase
  
        // Establece la imagen de fondo en la nueva vista con degradado
        newView.style.backgroundImage = `linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('${backgroundImageUrl}')`;
  
        // Agrega contenido a la nueva vista, utilizando el texto del título en el elemento <h1>
        newView.innerHTML = `<img src="${backgroundImageUrl}" alt="${titleText}">
                              <h1>${titleText}</h1>`;
  
        // Agrega más contenido dentro de la nueva vista
        // Por ejemplo, agrega párrafos adicionales:
        newView.innerHTML += `<p class="text"> Game Description Here.</p>`;
        newView.innerHTML += `<p class="text1"> Games Videos Here .</p>`;
        
        
  
        // Agrega los botones adicionales
        newView.innerHTML += ` <button class="button1">Add to wishlist &#x2764</button> 
                               <button class="button2">Purchase</button> `;
  
        // Agrega un escucha de evento a los botones
        const button1 = newView.querySelector('.button1');
        const button2 = newView.querySelector('.button2');
  
        button1.addEventListener('click', function () {
          // Acciones cuando se hace clic en el botón 1
          console.log('Botón 1 clickeado');
        });
  
        button2.addEventListener('click', function () {
          // Acciones cuando se hace clic en el botón 2
          console.log('Botón 2 clickeado');
        });
  
        // Agrega un botón de cerrar a la nueva vista
        const closeButton = document.createElement('span');
        closeButton.innerHTML = 'X';
        closeButton.classList.add('close-button');
        closeButton.addEventListener('click', function () {
          // Cierra la nueva vista al hacer clic en el botón de cerrar
          document.getElementById('newViewContainer').removeChild(newView);
        });
        newView.appendChild(closeButton);
  
        // Agrega la nueva vista al contenedor en el cuerpo del documento
        document.getElementById('newViewContainer').appendChild(newView);
      });
    });
  });