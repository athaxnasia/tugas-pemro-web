const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const keterangan = this.alt;
        alert("Keterangan Foto: " + keterangan);
    });
});

const blogCards = document.querySelectorAll('.blog-card');

blogCards.forEach(card => {
    const title = card.querySelector('h2');
    const content = card.querySelector('.blog-content');

    if (title && content) {
        title.style.cursor = "pointer"; 
        title.addEventListener('click', function() {
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

const currentPath = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || (currentPath === "" && link.getAttribute('href') === "index.html")) {
        link.classList.add('active-page');
    }
});

const cardIntro = document.getElementById('card-intro');
const cardBio = document.getElementById('card-bio');

if (cardIntro && cardBio) {
    const swapCards = () => {
        cardIntro.classList.toggle('swap-back');
        cardBio.classList.toggle('swap-front');
    };

    cardIntro.addEventListener('click', swapCards);
    cardBio.addEventListener('click', swapCards);
}