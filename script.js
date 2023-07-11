const toggleMenu = () => document.body.classList.toggle("open");

const sections = Array.from(document.getElementsByClassName('head'));
const site = document.getElementById('site');

let currentIndex = 0;

function showSection(index) {
    sections.forEach((section, i) => {
        section.style.display = i === index ? 'grid' : 'none';
    });
}


function handleNextClick() {
    currentIndex = (currentIndex + 1) % sections.length;
    showSection(currentIndex);
}

function handlePreviousClick() {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    showSection(currentIndex);
}

site.addEventListener('click', (event) => {
    const target = event.target;
    if (target.id === 'next') {
        handleNextClick();
    } else if (target.id === 'pre') {
        handlePreviousClick();
    }
});

showSection(currentIndex);
