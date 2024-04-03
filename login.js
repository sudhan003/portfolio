var isSignUp = true;
document.addEventListener("DOMContentLoaded", function () {
  console.log(isSignUp);
  document
    .querySelector(".loginButton")
    .addEventListener("click",  function (event) {
      if (isSignUp) {
        validateSignUpForm(event);
      } else {
        validateLogInForm(event);
      }
    });
});

function navigateToHome() {
  window.location.href = "home.html";
}
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var confirmPasswordInput = document.querySelector("#confirm-password");
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var passwordError = document.getElementById('passwordError');
var confirmPasswordError = document.getElementById('confirmPasswordError');

function validateSignUpForm(event) {
  
  console.log("validate");
 
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var password = passwordInput.value.trim();
  var confirmPassword = confirmPasswordInput.value.trim();

  console.log("name:", name);
  console.log("email:", email);
  console.log("password:", password);
  console.log("confirmPassword:", confirmPassword);

  if (name === '') {
    event.preventDefault(); // Prevent form submission
    nameError.textContent = 'name is required';
    return;
  } else {
    nameError.textContent = '';
  }
  if (email === '') {
    event.preventDefault(); // Prevent form submission
    emailError.textContent = 'email is required';
    return;
  } else {
    emailError.textContent = '';
  }
  if (password === '') {
    event.preventDefault(); // Prevent form submission
    passwordError.textContent = 'password is required';
    return;
  } else {
    passwordError.textContent = '';
  }
  if (confirmPassword === '') {
    event.preventDefault(); // Prevent form submission
    confirmPasswordError.textContent = 'confirm password is required';
    return;
  } else {
    confirmPasswordError.textContent = '';
  }


  if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'password does not match';
    return; 
  }
  
  navigateToHome();

}
function validateLogInForm(event) {

 
  var email = emailInput.value.trim();
  var password = passwordInput.value.trim();

  console.log("email:", email);
  console.log("password:", password);

  
  if (email === '') {
    event.preventDefault(); // Prevent form submission
    emailError.textContent = 'email is required';
    return;
  } else {
    emailError.textContent = '';
  }
  if (password === '') {
    event.preventDefault(); // Prevent form submission
    passwordError.textContent = 'password is required';
    return;
  } else {
    passwordError.textContent = '';
  }
 
  if(email === 'sudhan@sense7ai.com' && password === "softdevfx"){
    navigateToHome();
  }else{
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  
  

}
document.querySelector(".visibility").addEventListener("click", () => {
  console.log("testing");
  var inputField = document.querySelector(".userInput .password input");
  var visibilityImg = document.querySelector(".visibility");
  if (inputField.type === "password") {
    inputField.type = "text";
    visibilityImg.src = "visibility-off.svg";
  } else {
    inputField.type = "password";
    visibilityImg.src = "visibility.svg";
  }
});
document
  .querySelector(".confirm-password .visibility")
  .addEventListener("click", () => {
    console.log("testing");
    var inputField = document.querySelector(
      ".userInput .confirm-password input",
    );
    var visibilityImg = document.querySelector(
      ".userInput .confirm-password .visibility",
    );
    if (inputField.type === "password") {
      inputField.type = "text";
      visibilityImg.src = "visibility-off.svg";
    } else {
      inputField.type = "password";
      visibilityImg.src = "visibility.svg";
    }
  });


document.querySelector(".authNav span").addEventListener("click", () => {
  if (isSignUp) {
    document.querySelector(".forgot-password").style.display = "block";
    document.querySelector(".name").style.display = "none";
    document.querySelector(".confirm-password").style.display = "none";
    document.querySelector(".userInput h1").textContent = "Login";
    document.querySelector(".userInput button").textContent = "Log in";
    document.querySelector(".userInput .authNav span").textContent = " Signup";
    document.querySelector(".userInput .authNav").childNodes[0].textContent =
      "Create an account! ";

    isSignUp = false;
    console.log(isSignUp);
  } else {
    document.querySelector(".forgot-password").style.display = "none";
    document.querySelector(".name").style.display = "block";
    document.querySelector(".confirm-password").style.display = "block";
    document.querySelector(".userInput h1").textContent = "Signup";
    document.querySelector(".userInput button").textContent = "Sign up";
    document.querySelector(".userInput .authNav span").textContent = " Login";
    document.querySelector(".userInput .authNav").childNodes[0].textContent =
      "Already have an account? ";

    isSignUp = true;
  }
});
