const takButton = document.getElementById('tak');
const nieButton = document.getElementById('nie');
const dziekujeSection = document.getElementById('dziekuje');
const container = document.querySelector('.container');
const heartsContainer = document.querySelector('.static-hearts');
const hearts = document.querySelectorAll('.static-hearts span');

function moveNoButton() {
    const randomX = Math.random() * (window.innerWidth - nieButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - nieButton.offsetHeight);
    nieButton.style.transition = 'all 0.3s ease';
    nieButton.style.position = 'absolute';
    nieButton.style.left = `${randomX}px`;
    nieButton.style.top = `${randomY}px`;
}

nieButton.addEventListener('mouseover', moveNoButton);
nieButton.addEventListener('touchstart', moveNoButton);

takButton.addEventListener('click', () => {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.classList.add('hidden');
    dziekujeSection.style.display = 'block';
});

function positionHearts() {
    hearts.forEach(heart => {
        const randomX = Math.random() * heartsContainer.offsetWidth;
        const randomY = Math.random() * heartsContainer.offsetHeight;

        heart.style.left = `${randomX}px`;
        heart.style.top = `${randomY}px`;
    });
}

positionHearts(); // Wywołaj funkcję, aby rozmieścić serca po załadowaniu strony

window.addEventListener('resize', positionHearts); // Zaktualizuj pozycje serc przy zmianie rozmiaru okna