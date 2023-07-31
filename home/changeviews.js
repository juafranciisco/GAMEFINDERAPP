document.addEventListener('DOMContentLoaded', () => {
  const view1 = document.querySelector('.view1');
  const view2 = document.querySelector('.view2');
  const cardList = document.querySelector('.card-list');
  const descriptions = cardList.querySelectorAll('.card [data-description]');

  // Función para mostrar u ocultar las descripciones según la vista actual
  function updateDescriptionsVisibility() {
    const isSingleColumn = cardList.classList.contains('single-column');
    descriptions.forEach(description => {
      description.style.display = isSingleColumn ? 'block' : 'none';
    });
  }

  // Mostrar u ocultar descripciones cuando se cargue la página
  updateDescriptionsVisibility();

  view1.addEventListener('click', () => {
    cardList.classList.remove('single-column');
    // Actualizar la visibilidad de las descripciones según la vista actual
    updateDescriptionsVisibility();
  });

  view2.addEventListener('click', () => {
    cardList.classList.add('single-column');
    // Actualizar la visibilidad de las descripciones según la vista actual
    updateDescriptionsVisibility();
  });
});
