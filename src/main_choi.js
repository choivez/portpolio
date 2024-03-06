function headerStyleOnScroll() {
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    
    document.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight) {
            header.classList.add('header--dark');
        } else {
            header.classList.remove('header--dark');
        }
    });
}

function homeFadeOutOnScroll(element) {
    if (!element) {
        return;
    }

    const elem = document.querySelector(element);
    const distanceToTop = window.scrollY + elem.getBoundingClientRect().top;
    const elemHeight = elem.offsetHeight;
    const scrollTop = document.documentElement.scrollTop;

    let opacity = 1;

    if (scrollTop > distanceToTop) {
        opacity = 1 - ((scrollTop - distanceToTop) / elemHeight);
    }

    if (opacity >= 0) {
        elem.style.opacity = opacity;
    }
}

function asideArrowShowOnScroll() {
    const home = document.querySelector('#home');
    const homeHeight = home.offsetHeight;
    const arrowUp = document.querySelector('.arrow-up');
    if(window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
        arrowUp.style.visibility = 'visible';
    } else {
        arrowUp.style.opacity = 0;
        arrowUp.style.visibility = 'hidden';
    }
}

function menuBtnOnClick(event) {
    const headerNav = document.querySelector('.header__nav');

    if (event.target.tagName === 'I' && event.target.className === 'fa-solid fa-bars') {
        headerNav.classList.toggle('nav__show');
    }
    if (event.target.tagName === 'A' && (event.target.className === 'header__menu__item' || event.target.className === 'header__menu__item active')) {
        headerNav.classList.remove('nav__show');
    }

}

function scrollHandler() {
    headerStyleOnScroll();
    homeFadeOutOnScroll('.home__container');
    asideArrowShowOnScroll();
}

function clickEventHandler(e) {
    menuBtnOnClick(e);
}

window.addEventListener('scroll', scrollHandler);
window.addEventListener('click', clickEventHandler);