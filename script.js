const toggleMenu = () => document.body.classList.toggle("open");

// Get the sections and the previous/next buttons
const sections = Array.from(document.getElementsByClassName('head'));
const site = document.getElementById('site');
const previousButtons = Array.from(document.getElementsByClassName('pre'));
const nextButtons = Array.from(document.getElementsByClassName('next'));

let currentIndex = 0; // Current section index

// Function to show the current section and hide the rest
function showSection(index) {
    sections.forEach((section, i) => {
        section.style.display = i === index ? 'grid' : 'none';
    });
}

// Function to handle the next button click
function handleNextClick() {
    currentIndex = (currentIndex + 1) % sections.length;
    showSection(currentIndex);
}

// Function to handle the previous button click
function handlePreviousClick() {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    showSection(currentIndex);
}

// Attach event listeners to previous buttons
previousButtons.forEach((button) => {
    button.addEventListener('click', handlePreviousClick);
});

// Attach event listeners to next buttons
nextButtons.forEach((button) => {
    button.addEventListener('click', handleNextClick);
});

// Show the initial section
showSection(currentIndex);