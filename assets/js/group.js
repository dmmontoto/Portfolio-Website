const movieMunchiesLink = document.getElementById("movie-munchies-link");
const eazyExplorerLink = document.getElementById("eazy-explorer-link");
const groupProject3Link = document.getElementById("group-project-3-link");

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
      <li>Collaborated with classmates Marissa and Huaquin to devise an innovative method for pairing movies and recipes to enhance the overall entertainment experience</li>
      <li>Demonstrated proficiency in integrating two distinct APIs, one for movie searching and another for recipe retrieval, ensuring seamless data integration and retrieval</li>
      <li>Assumed a leadership role in spearheading the development of the JavaScript framework, overseeing its architecture and implementation to ensure a robust and efficient solution</li>
    `;
    deployedSiteLink.href = "https://marissacraig.github.io/MovieMunchies/index.html";
    githubRepoLink.href = "https://github.com/marissacraig/MovieMunchies";
    presentationLink.href = "https://docs.google.com/presentation/d/16Ui0aU5dYNfOJJWxAHonK7zQYjUEIc_ZZdvr3sT7JNM/edit?pli=1#slide=id.g29f43f0a72_0_24";
}
  
function fillEazyInfo() {
  // Get references to the elements you want to update
  const projectTitle = document.getElementById("project-title");
  const gifImage = document.getElementById("gif");
  const bulletsList = document.getElementById("bullets");
  const deployedSiteLink = document.getElementById("live-link");
  const githubRepoLink = document.getElementById("git-link");
  const presentationLink = document.getElementById("slide-link");

  // Update the content with unique information for Movie Munchies
  projectTitle.textContent = "Eazy Explorer";
  gifImage.src = "assets/images/EazyExplorer.png";
  bulletsList.innerHTML = `
    <li>Spearheaded a collaborative effort with a team of three to develop an account-based social media platform, leveraging Artificial Intelligence to provide users with personalized vacation activity suggestions</li>
    <li>Implemented a SQL database and followed a Module-View-Controller architectural approach, enabling users to effortlessly share their travel experiences and plans while fostering engagement through interactive comments</li>
    <li>Utilized an account-based system that enables users to engage in discussions by posting and deleting their plans or providing feedback and comments on the vacation plans shared within the community.</li>
  `;
  deployedSiteLink.href = "https://eazy-explorer-8c2ae355679a.herokuapp.com/";
  githubRepoLink.href = "https://github.com/dmmontoto/Eazy-Explorer";
  presentationLink.href = "https://docs.google.com/presentation/d/1OFhthyG4mKMIhkubsJlc7L6OMa8O-Z6gS1sdry77io4/edit#slide=id.g280a2799bfd_0_1";
}

function fillThird() {
  // Get references to the elements you want to update
  const projectTitle = document.getElementById("project-title");

  // Update the content with unique information for Movie Munchies
  projectTitle.textContent = "Coming Soon!";
}

eazyExplorerLink.addEventListener("click", function() {
    fillEazyInfo();
});

movieMunchiesLink.addEventListener("click", function() {
    fillMovieMunchiesInfo();
});

groupProject3Link.addEventListener("click", function() {
  fillThird();
});