function createWork(deployLink, gitLink, description){
    const workContainer = document.querySelector('.workContainer');
    const card = document.createElement('div');
    card.classList.add("card")
    workContainer.appendChild(card);


    const work = document.createElement('iframe');
    work.classList.add("iframe");
    work.setAttribute('src', deployLink);
    card.appendChild(work);

    const deploy = document.createElement('a');
    deploy.setAttribute('href', deployLink);
    deploy.textContent = description;
    card.appendChild(deploy);

    const git = document.createElement('a');
    git.setAttribute('href', gitLink);
    git.textContent = 'GitHub Repo';
    card.appendChild(git);

    return work;
}

createWork("https://happy-payne-d11aea.netlify.com","https://github.com/NateyLB/github-usercard",
"Components and API project");
createWork("https://boring-shaw-e19486.netlify.com/", "https://github.com/NateyLB/DOM-II",
"DOM Manipulation and EvenListeners");
createWork("https://friendly-bose-b5a0bc.netlify.com", "https://github.com/NateyLB/Sprint-Challenge-Applied-Javascript",
"Applied JavaScript, DOM Manipulation, and Components")