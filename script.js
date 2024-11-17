const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Kart genişliğini hesapla (dinamik olarak)
const cardWidth = cards[0].offsetWidth;

// Mevcut görsellerin bir listesini tanımlayın (örnek olarak)
const images = [
    "populer/tarif1.jpg",
    "populer/tarif2.webp",
    "populer/tarif3.jpg",
    "populer/tarif4.jpg",
    "populer/tarif5.jpg",
    "populer/tarif6.jpg"
];

// Sadece mevcut görselleri kullanarak kart ekle
images.forEach((image, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="image-container">
            <img src="${image}" alt="Tarif ${index + 1}">
        </div>
        <h4>Tarif ${index + 1}</h4>
    `;
    carousel.appendChild(card);
});

// Sağ düğme ile kaydır
nextButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: cardWidth,
        behavior: 'smooth' // Yumuşak geçiş
    });
});

// Sol düğme ile kaydır
prevButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: -cardWidth,
        behavior: 'smooth' // Yumuşak geçiş
    });
});
