const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const getCardWidth = () => cards[0]?.offsetWidth || 0;


// Kart genişliğini hesapla (dinamik olarak)
const cardWidth = cards[0].offsetWidth;

// Mevcut görsellerin bir listesini tanımlayın (örnek olarak)
const images = [

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

const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons

const searchBtn = document.querySelector("#search-btn")
const cartBtn = document.querySelector("#cart-btn")
const menuBtn = document.querySelector("#menu-btn")

searchBtn.addEventListener("click" , function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click" , function(e){
        if(
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)

        ){
            searchForm.classList.remove("active")
        }
    })
})

cartBtn.addEventListener("click" , function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click" , function(e){
        if(
            !e.composedPath().includes(cartBtn) &&
            !e.composedPath().includes(cartItem)

        ){
            cartItem.classList.remove("active")
        }
    })
})

menuBtn.addEventListener("click" , function(){
    navbar.classList.toggle("active");
    document.addEventListener("click" , function(e){
        if(
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)

        ){
            navbar.classList.remove("active")
        }
    })
})

