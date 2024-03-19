'use strict';

const categories = document.querySelector('.categories');
const categoryBtns = document.querySelectorAll('.category');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', (event) => {
    if ((event.target.tagName === 'BUTTON') || (event.target.className === 'category')) {
        categoryBtns.forEach((btn) => {
            btn.classList.remove('category--selected');
        })
        event.target.classList.add('category--selected');

        projects.forEach((project) => {
            if ((event.target.dataset.id === 'all') || (event.target.dataset.id === project.dataset.id)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }
})