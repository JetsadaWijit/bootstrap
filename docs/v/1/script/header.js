document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.header');

    if (!header) {
        console.error("Header element not found!");
        return;
    }

    const githubLink = document.createElement('a');
    const gitlabLink = document.createElement('a');
    
    // Get attributes
    const githubAtt = header.getAttribute('github-website-link');
    const gitlabAtt = header.getAttribute('gitlab-website-link');

    // Set href attributes
    if (githubAtt) githubLink.setAttribute('href', githubAtt);
    if (gitlabAtt) gitlabLink.setAttribute('href', gitlabAtt);

    // Create images for logos
    const githubImg = document.createElement('img');
    githubImg.src = "https://i.imgur.com/lAUFnI4.png";
    githubImg.alt = "GitHub Logo";
    githubImg.classList.add("logo");

    const gitlabImg = document.createElement('img');
    gitlabImg.src = "https://i.imgur.com/rgIGxmL.png";
    gitlabImg.alt = "GitLab Logo";
    gitlabImg.classList.add("logo");

    // Append images to links
    githubLink.appendChild(githubImg);
    gitlabLink.appendChild(gitlabImg);

    // Append links to header
    header.appendChild(githubLink);
    header.appendChild(gitlabLink);

    // Create and append a style element
    const style = document.createElement('style');
    style.innerHTML = `
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.logo {
    width: 40px;
    height: 40px;
}`;
    document.head.appendChild(style);
});
