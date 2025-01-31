// Create a header element
const header = document.createElement('div');
header.classList.add('header');

// Get attribute values from <body> (ensure these attributes exist in the HTML)
const githubLink = document.body.getAttribute('github-website-link') || "https://jetsadawijit.github.io";
const gitlabLink = document.body.getAttribute('gitlab-website-link') || "https://jetsadawijit.gitlab.io";

// Create GitHub link with logo
const link1 = document.createElement('a');
link1.setAttribute('href', githubLink);
const githubImg = document.createElement('img');
githubImg.setAttribute('src', 'https://i.imgur.com/lAUFnI4.png');
githubImg.setAttribute('alt', 'GitHub Logo');
githubImg.classList.add('logo');
link1.appendChild(githubImg);

// Create GitLab link with logo
const link2 = document.createElement('a');
link2.setAttribute('href', gitlabLink);
const gitlabImg = document.createElement('img');
gitlabImg.setAttribute('src', 'https://i.imgur.com/rgIGxmL.png');
gitlabImg.setAttribute('alt', 'GitLab Logo');
gitlabImg.classList.add('logo');
link2.appendChild(gitlabImg);

// Append links to header
header.appendChild(link1);
header.appendChild(link2);

// Append header to the body
document.body.appendChild(header);

// Create a style element for CSS
const style = document.createElement('style');
style.innerHTML = `
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin: 0 10px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }

    .header-container {
        display: flex;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        width: 40px;
        height: 40px;
    }
`;

// Append style to the head
document.head.appendChild(style);
