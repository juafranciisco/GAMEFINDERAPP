const themeToggle = document.getElementById('theme-toggle');

if (themeToggle !== null) {
  // Verificar el tema actual al cargar la página
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.classList.add('active');
    setLoginContainerColor('dark-theme');
  }

  // Cambiar el tema al hacer clic en el botón deslizante
  themeToggle.addEventListener('click', function () {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      themeToggle.classList.remove('active');
      localStorage.setItem('theme', 'light');
      setLoginContainerColor('');
    } else {
      document.body.classList.add('dark-theme');
      themeToggle.classList.add('active');
      localStorage.setItem('theme', 'dark');
      setLoginContainerColor('dark-theme');
    }

    setTitlesColor();
    setAdditionalElementsColor();
  });
} else {
  console.error("El elemento con el ID 'theme-toggle' no fue encontrado.");
}

function setLoginContainerColor(theme) {
  const loginContainer = document.querySelector('.login-container');

  if (theme === 'dark-theme') {
    loginContainer.style.backgroundColor = '#F0F0F0';
  } else {
    loginContainer.style.backgroundColor = '';
  }
}

function setTitlesColor() {
  const titleElements = document.querySelectorAll('.login-container h2, .login-container h3');

  titleElements.forEach((title) => {
    title.style.color = document.body.classList.contains('dark-theme') ? '#515151' : '';
  });
}

function setAdditionalElementsColor() {
  const linkElement = document.querySelector('.login-container .link1');
  const notRegisteredElement = document.querySelector('.login-container h7');

  linkElement.style.color = document.body.classList.contains('dark-theme') ? '#515151' : '';
  notRegisteredElement.style.color = document.body.classList.contains('dark-theme') ? '#515151' : '';
}


