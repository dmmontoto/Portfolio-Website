const movieMunchiesLink = document.getElementById("movie-munchies-link");
const groupProject2Link = document.getElementById("group-project-2-link");
const groupProject3Link = document.getElementById("group-project-3-link");

// movieMunchiesLink.addEventListener("click", fillMovieMunchiesInfo);
groupProject2Link.addEventListener("click", function() {
    console.log("TEST");
    makeInfoBlack();
});

movieMunchiesLink.addEventListener("click", function() {
    console.log("TEST");
    fillMovieMunchiesInfo();
});

function fillMovieMunchiesInfo() {
    // Get references to the elements you want to update
    const projectTitle = document.getElementById("project-title");
    const gifImage = document.getElementById("gif");
    const bulletsList = document.getElementById("bullets");
    const deployedSiteLink = document.getElementById("live-link");
    const githubRepoLink = document.getElementById("git-link");
    const presentationLink = document.getElementById("slide-link");
  
    // Update the content with unique information for Movie Munchies
    projectTitle.textContent = "Movie Munchies";
    gifImage.src = "assets/images/GP1slidePreview.gif";
    bulletsList.innerHTML = `
      <li>Collaborated with classmates Marissa and Huaquin to devise an innovative method for pairing movies and recipes to enhance the overall entertainment experience.</li>
      <li>Demonstrated proficiency in integrating two distinct APIs, one for movie searching and another for recipe retrieval, ensuring seamless data integration and retrieval.</li>
      <li>Assumed a leadership role in spearheading the development of the JavaScript framework, overseeing its architecture and implementation to ensure a robust and efficient solution.</li>
    `;
    deployedSiteLink.href = "https://marissacraig.github.io/MovieMunchies/index.html";
    githubRepoLink.href = "https://github.com/marissacraig/MovieMunchies";
    presentationLink.href = "https://docs.google.com/presentation/d/16Ui0aU5dYNfOJJWxAHonK7zQYjUEIc_ZZdvr3sT7JNM/edit?pli=1#slide=id.g29f43f0a72_0_24";
  }
  
  // Function to make all information black for Group Project 2
  function makeInfoBlack() {
    const projectTitle = document.getElementById("project-title");
    const gifImage = document.getElementById("gif");
    const bulletsList = document.getElementById("bullets");
    const deployedSiteLink = document.getElementById("live-link");
    const githubRepoLink = document.getElementById("git-link");
    const presentationLink = document.getElementById("slide-link");
    // // Get reference to the project-container element
    // const projectContainer = document.getElementById("project-container");
  
    // // Add a CSS class to make the text color black (you should define this class in your CSS)
    // projectContainer.classList.add("black-text");
    projectTitle.textContent = "";
  }