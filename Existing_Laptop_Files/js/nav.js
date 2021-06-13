function navBar() {
// const navBtns = document.querySelectorAll(".nav-button");
    const navLinks = [
        {name: 'Home', href: 'index.html'},
        {name: 'About', href: 'about.html'},
        {name: 'Social Media', href: 'socialMedia.html'},
        {name: 'Goals', href: 'goals.html'},
        {name: 'Portfolio', href: 'portfolio.html'}
    ]

    // nav construct
    const navLocation = document.querySelector('body');
    const navBarWrapper = document.createElement('div');
    navBarWrapper.classList.add('nav-bar-wrapper');
    navLocation.appendChild(navBarWrapper);
    const sectionsWrapper = document.createElement('div');
    sectionsWrapper.classList.add('sections-wrapper')
    navBarWrapper.appendChild(sectionsWrapper);

    // left side
    const leftSectionWrapper = document.createElement('div');
    leftSectionWrapper.classList.add('left-section-wrapper');
    sectionsWrapper.appendChild(leftSectionWrapper);
    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('title-wrapper');
    leftSectionWrapper.appendChild(titleWrapper);
    const title = document.createElement('div');
    title.classList.add('title');
    titleWrapper.appendChild(title);
    const icon = document.createElement('img');
    icon.id = 'icon';
    icon.src = "images/web-page-icon.png";
    icon.alt = "icon";
    title.appendChild(icon);



    // right side
    const rightSectionWrapper = document.createElement('div');
    rightSectionWrapper.classList.add('right-section-wrapper');
    sectionsWrapper.appendChild(rightSectionWrapper);
    const navButtonsWrapper = document.createElement('div');
    navButtonsWrapper.classList.add('nav-buttons-wrapper');
    rightSectionWrapper.appendChild(navButtonsWrapper);
    navLinks.forEach(e => {
        const navButton = document.createElement('a')
        navButton.classList.add('nav-button');
        navButton.innerHTML = e.name;
        navButton.href = e.href
        navButtonsWrapper.appendChild(navButton);
    });
    console.log(navBarWrapper);
}