document.querySelector(".gameButton").addEventListener("click", guessNumber);

function guessNumber() {
  window.location.href = "game/game.html";
}
let currentClass = ".profile";

document.querySelector(".home").addEventListener("click", function () {
  // Get the element to replace
  var contentElement = document.querySelector(currentClass);

  // Create a new element with the desired class name and HTML content
  var newElement = document.createElement("div");
  newElement.className = "profile";
  currentClass = ".profile";
  newElement.innerHTML = `  <img src="port-profile.png" alt="profile image"  class="profileImage"/>
  <div class="profile-details">
    <h1>Hi, I am</h1>
    <span class="name">SUDHAN RAJ BABU</span><br />
    <p>
      I am a software engineer, who has experience in Flutter mobile
      application development, and interested in both mobile and web
      application development
    </p>
  </div>
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
      var githubButton = newElement.querySelector('#github');
      if (githubButton) {
        githubButton.addEventListener('click', () => {
          console.log('GitHub button clicked');
          window.open('https://github.com/sudhan003', '_blank');
        });
      }
    }
  };
  xhr.send();
});
// document.getElementById('github').addEventListener('click',()=>{
//   console.log('GitHub button clicked');
//   window.open('https://github.com/sudhan003','_blank');
// });

// document.querySelector(".contact").addEventListener("click", function () {
//   // Get the element to replace
//   var contentElement = document.querySelector(currentClass);

//   // Create a new element with the desired class name and HTML content
//   var newElement = document.createElement("div");
//   newElement.className = "contact-me";
//   currentClass = ".contact-me";
//   newElement.innerHTML = `
//   <form>
//     <p>Contact me</p>
//     <input type="text" placeholder="name" name="" id="" />
//     <input type="text" placeholder="email" name="" id="" />

//     <textarea
//       name=""
//       id=""
//       cols="30"
//       rows="10"
//       placeholder="what do you wanna talk about!"
//     ></textarea>
//     <button class="gameButton">Send to Me</button>
//   </form>
//   <div class="social-media">
//     <div>
//       <h4>Mail id</h4>
//       <p>sudhandevwork@gmail.com</p>
//     </div>
//     <div>
//       <h4>Location</h4>
//       <p>Palayamkottai, TVL, TN</p>
//     </div>
//     <section>
//       <div class="iconButton" id="linkedin">
//         <img src="linkedin.svg" alt="" />
//       </div>
//       <div class="iconButton" id="github">
//         <img src="github.svg" alt="" />
//       </div>
//       <div class="iconButton" id="instagram">
//         <img src="instagram.svg" alt="" />
//       </div>
//     </section>
//   </div>
// `;

//   // Replace the content element with the new element
//   contentElement.parentNode.replaceChild(newElement, contentElement);
// });

document.querySelector(".project").addEventListener("click", function () {
  // Get the element to replace
  var contentElement = document.querySelector(currentClass);

  // Create a new element with the desired class name and HTML content
  var newElement = document.createElement("div");
  newElement.className = "projects";
  currentClass = ".projects";
  newElement.innerHTML = "<p>project changed</p>";

  // Replace the content element with the new element
  contentElement.parentNode.replaceChild(newElement, contentElement);
});

// document.querySelector('.container').addEventListener('click', function(event) {
//     if (event.target.classList.contains('home')) {
//       replaceContent('.profile');
//     } else if (event.target.classList.contains('contact')) {
//       replaceContent('.contact-me', '<p>Contact changed</p>');
//     } else if (event.target.classList.contains('project')) {
//       replaceContent('.projects', '<p>Project changed</p>');
//     }
//   });
//   function replaceContent(className, newContent = '') {
//     var contentElement = document.querySelector(className);
//     console.log(contentElement); // Log contentElement to see if it's null
//     var newElement = document.createElement('div');
//     newElement.innerHTML = newContent;
//     if (contentElement) {
//       contentElement.parentNode.replaceChild(newElement, contentElement);
//     } else {
//       console.error('Element not found:', className);
//     }
//   }
