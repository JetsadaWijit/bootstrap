// Create the main container div with class "navbar"
const navbarDiv = document.createElement("div");
navbarDiv.className = "navbar";

// Create the first div container for the first icon and link
const firstDiv = document.createElement("div");
const firstIconLink = document.createElement("a");
firstIconLink.href = "https://jetsadaWijit.github.io";
firstIconLink.target = "_blank";
const firstIconImg = document.createElement("img");
firstIconImg.className = "img-logo";
firstIconImg.src = "https://i.imgur.com/lAUFnI4.png";
firstIconImg.alt = "logo";
firstIconLink.appendChild(firstIconImg);
firstDiv.appendChild(firstIconLink);

// Create the second div container for the second icon and link
const secondDiv = document.createElement("div");
const secondIconLink = document.createElement("a");
secondIconLink.href = "https://jetsadaWijit.gitlab.io";
secondIconLink.target = "_blank";
const secondIconImg = document.createElement("img");
secondIconImg.className = "img-logo";
secondIconImg.src = "https://i.imgur.com/rgIGxmL.png";
secondIconImg.alt = "logo";
secondIconLink.appendChild(secondIconImg);
secondDiv.appendChild(secondIconLink);

// Append the first and second div containers to the main container div
navbarDiv.appendChild(firstDiv);
navbarDiv.appendChild(secondDiv);

// Append the main container div to the document body (or any other parent element)
document.body.appendChild(navbarDiv);

// CSS
// Get the .navbar element and set its styles
const navbar = document.querySelector('.navbar');
navbar.style.display = 'flex';
navbar.style.justifyContent = 'space-between';
navbar.style.backgroundColor = '#333';
navbar.style.color = '#fff';
navbar.style.padding = '10px';
navbar.style.borderRadius = '25px';

// Get the .navbar-icon elements and set their styles
const navbarIcons = document.querySelectorAll('.navbar-icon');
navbarIcons.forEach(icon => {
    icon.style.fontSize = '24px';
    icon.style.margin = '0 10px';
    icon.style.cursor = 'pointer';
});