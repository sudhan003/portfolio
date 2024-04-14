document.querySelector(".gameButton").addEventListener("click", guessNumber);

function guessNumber() {
  window.location.href = "game.html";
}
let currentClass = ".profile";

document.querySelector(".home").addEventListener("click", function () {
  // Get the element to replace
  var contentElement = document.querySelector(currentClass);

  // Create a new element with the desired class name and HTML content
  var newElement = document.createElement("div");
  newElement.className = "profile";
  currentClass = ".profile";
  newElement.innerHTML = ` <img src="port-profile.png" alt="profile image"  class="profileImage"/>
  <div class="profile-details">
    <h1>Hi👋, </h1>
    <h1>I am <span class="name">SUDHAN RAJ BABU</span></h1><br />
    <p>
      I am a software engineer, who has experience in Flutter mobile
      application development, and interested in both mobile and web
      application development
    </p>
    <br>
    <p>Do you wanna view my resume 😉? </p>
    <button class="downloadButton">Click here 👈</button>
   
`;

  // Replace the content element with the new element
  contentElement.parentNode.replaceChild(newElement, contentElement);
});
document.querySelector(".contact").addEventListener("click", function () {
  var contentElement = document.querySelector(currentClass);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "contact.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var newElement = document.createElement("div");
      newElement.className = "contact-me";
      currentClass = ".contact-me";
      newElement.innerHTML = xhr.responseText;
      contentElement.parentNode.replaceChild(newElement, contentElement);

      // Add event listener for the "github" button here
      var githubButton = newElement.querySelector("#github");
      if (githubButton) {
        githubButton.addEventListener("click", () => {
          console.log("GitHub button clicked");
          window.open("https://github.com/sudhan003", "_blank");
        });
      }
    }
  };
  xhr.send();
});

document.querySelector(".project").addEventListener("click", function () {
  var contentElement = document.querySelector(currentClass);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "projects.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var newElement = document.createElement("div");
      newElement.className = "project-page";
      currentClass = ".project-page";
      newElement.innerHTML = xhr.responseText;
      contentElement.parentNode.replaceChild(newElement, contentElement);

      document.querySelector(".workout").addEventListener("click",()=>{
            window.open("https://github.com/sudhan003/gym_guide_application");
      });
      document.querySelector(".docSaver").addEventListener("click",()=>{
            window.open("https://github.com/sudhan003/doc_saver");
      });
      document.querySelector(".portfolio").addEventListener("click",()=>{
            window.location.href = "https://sudhan003.github.io/portfolio/home.html";
      });
      document
      .querySelector(".game")
      .addEventListener("click", guessNumber);
    
    }

  };
  

  xhr.send();
});

// View resume
document
  .querySelector(".downloadButton")
  .addEventListener("click", function () {
    window.open("assets/Resume_Sudhan_Raj_Babu_A.pdf", "_blank");
  });
