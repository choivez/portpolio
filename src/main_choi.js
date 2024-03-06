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
    const btnArrow = document.querySelector('.arrow-up');
    if(window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
        arrowUp.style.visibility = 'visible';
    } else {
        arrowUp.style.opacity = 0;
        arrowUp.style.visibility = 'hidden';
    }
}

function scrollHandler() {
    headerStyleOnScroll();
    homeFadeOutOnScroll('.home__container');
    asideArrowShowOnScroll();
}

window.addEventListener('scroll', scrollHandler);