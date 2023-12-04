const header = document.querySelector('header');
const nav = document.createElement('nav');
const link1 = document.createElement('a');
const link2 = document.createElement('a');
const link3 = document.createElement('a');

// Get attribute in header
link1Att = header.getAttribute('home');
link2Att = header.getAttribute('logo-link');
link2Att_pic = header.getAttribute('logo-pic');
link3Att = header.getAttribute('repository');

// Set logo image for Home and Repository
linkHome = "https://i.imgur.com/1qyIKGs.png"
linkRepository = "https://i.imgur.com/HRuhLGE.png"

// Set href attributes for links
link1.setAttribute('href', link1Att);
link2.setAttribute('href', link2Att);
link3.setAttribute('href', link3Att);

// Create divs for logo, home, and repository
const homeDiv = document.createElement('div');
homeDiv.classList.add('home');
const logoDiv = document.createElement('div');
logoDiv.classList.add('logo');
const repoDiv = document.createElement('div');
repoDiv.classList.add('repository');

// Append divs to links
link1.appendChild(homeDiv);
link2.appendChild(logoDiv);
link3.appendChild(repoDiv);

// Append links to nav
nav.appendChild(link1);
nav.appendChild(link2);
nav.appendChild(link3);

// Append nav to header
header.appendChild(nav);

// Append header to the body (or any other desired element)
document.body.appendChild(header);

// Create a style element for CSS
/*const style = document.createElement('style');
style.innerHTML = `
header {
    margin-left: 77vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #727272;
    width: 15%;
    padding: 10px;
    border-radius: 250px;
}

.logo, .home, .repository {
    background-size: cover;
    background-position: center;
}

.logo {
    width: 64px;
    height: 64px;
    background-color: #333;
    border-radius: 50%;
    background-image: url('${link2Att_pic}');
}

.home {
    height: 50px;
    width: 50px;
    background-image: url('${linkHome}');
}

.repository {
    height: 50px;
    width: 50px;
    background-image: url('${linkRepository}');
}

nav a {
    text-decoration: none;
    color: black;
    font-size: 16px;
}

// Centering the logo
nav {
    display: flex;
    justify-content: center;
    align-items: center;
}

// Adjusting spacing
nav > * {
    margin: 0 20px;
}`
;*/

// Append style to the head
document.head.appendChild(style);
