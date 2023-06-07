

    function PasswordVisibility() {
      var passwordInput = document.getElementById("password");
      var eyeIcon = document.getElementById("eyeIcon");
    
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

    function loginWithFacebook() {
    }
    
    function loginWithGoogle() {
    }
    
    function loginWithTwitter() {
    }

 
    var emailInput = document.getElementById("email-input");
    var passwordInput = document.getElementById("password-input");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

function validateEmail() {
  if (emailInput.value === "") {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
}

function validatePassword() {
  if (passwordInput.value === "") {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
}

    emailInput.addEventListener("blur", validateEmail);
    passwordInput.addEventListener("blur", validatePassword);
    


