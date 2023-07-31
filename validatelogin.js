// validatelogin.js

// Función para realizar la validación del formulario de inicio de sesión
function validateLogin() {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Aquí puedes realizar cualquier validación adicional que necesites, como asegurarte de que el correo electrónico tenga un formato válido o la contraseña cumpla con ciertos requisitos.
  
    // Si los campos cumplen con los criterios de validación, puedes enviar los datos al backend para autenticar al usuario.
    // Puedes usar la función "login" que se invoca al hacer clic en el botón "Log In".
  
    login(email, password);
  }
  
  // Función para manejar el inicio de sesión
  function login(email, password) {
    // Aquí deberías realizar la llamada al backend para autenticar al usuario.
    // Puedes usar Fetch API o Axios para hacer una solicitud HTTP al backend.
  
    // Ejemplo de cómo se puede realizar una solicitud usando Fetch API (esto debe adaptarse según el backend que estés usando):
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      // Aquí recibirías la respuesta del backend después de intentar autenticar al usuario.
      // Si el inicio de sesión es exitoso, el backend debería proporcionar el token de acceso y los datos del usuario.
      // Puedes guardar el token de acceso en el almacenamiento del navegador, como localStorage, para mantener al usuario autenticado.
  
      // Por ejemplo, si el backend devuelve el objeto "responseFromBackend" que contiene el token de acceso y los datos del usuario:
  
      // Guardar el token de acceso en localStorage
      localStorage.setItem("accessToken", data.accessToken);
  
      // Redirigir al usuario a la página de inicio después del inicio de sesión exitoso.
      window.location.href = "home/home.html";
    })
    .catch(error => {
      // Si ocurre un error, puedes mostrar un mensaje de error o realizar otra acción según tu aplicación.
      console.error("Error al iniciar sesión:", error);
    });
  }
  
  // Función para cambiar la visibilidad de la contraseña
  function PasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  }
  