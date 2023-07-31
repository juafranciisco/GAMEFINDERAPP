const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = false;
const body = document.body;
const options = document.querySelector('.Options');
const title = document.querySelector('.title1 h4');
const logoutButton = document.querySelector('.logout button');
const toggletext = document.querySelector('.toggle-text');
const title2 = document.querySelector ('.title2');
const cardList = document.querySelector('.card-list');
const container = document.querySelector('.container');
const palabra2 = document.getElementById('palabra2');





themeToggle.addEventListener('click', function () {
  isDarkMode = !isDarkMode;
  themeToggle.classList.toggle('clicked');
  body.style.backgroundColor = isDarkMode ? '#EAEAEA' : '';
  options.style.color = isDarkMode ? '#515151' : ''; 
  title.style.color = isDarkMode ? '#1B1B1B' : '';
  logoutButton.style.color = isDarkMode ? '#1B1B1B' : '';
  toggletext.style.color = isDarkMode ? '#1B1B1B' : '';
  title2.style.color = isDarkMode ? '#1B1B1B' : '';
  container.style.backgroundColor = isDarkMode ? '#EAEAEA' : '';


    // Cambiar la imagen de palabra2 según el modo
    if (isDarkMode) {
      palabra2.src = '/assets/ARCHIVEdark.png'; 
    } else {
      palabra2.src = '/assets/ARCHIVE.png'; 
    }




  const cards = cardList.querySelectorAll('.card');
  const h3 = cardList.querySelectorAll('h3')
  cards.forEach(card => {
    card.style.backgroundColor = isDarkMode ? '#FFFFFF' : ''; // Cambia el color de fondo aquí
  });
  h3.forEach(h3 => {
    h3.style.color = isDarkMode ? '#515151' : ''; // Cambia el color de fondo aquí
  });
  

});








