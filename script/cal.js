let selectedGender = null; // Seçilen cinsiyet

// Cinsiyet seçimi fonksiyonu
function selectGender(gender) {
    // Tüm seçeneklerden "selected" sınıfını kaldır
    document.querySelectorAll('.gender-option').forEach(option => {
        option.classList.remove('selected', 'male', 'female');
    });

    // Tıklanan seçeneğe "selected" sınıfını ekle
    const selectedOption = document.getElementById(gender);
    selectedOption.classList.add('selected');
    selectedOption.classList.add(gender); // Erkek ya da kadın sınıfını ekle

    // Seçilen cinsiyeti sakla
    selectedGender = gender;
}

// Kalori hesaplama fonksiyonu
function calculateCalories() {
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    // Alanların doluluğunu kontrol et
    if (!selectedGender || !age || !weight || !height) {
        document.getElementById('result').innerHTML = 
            `<span style="color: red;">Lütfen tüm alanları doldurun!</span>`;
        return;
    }

    // BMR Hesaplama (Harris-Benedict Formülü)
    let bmr = 0;
    if (selectedGender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Erkek
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161; // Kadın
    }

    // Günlük kalori ihtiyacı
    const dailyCalories = bmr * activity;

    // Sonuç gösterimi
    document.getElementById('result').innerHTML = 
        `<span style="color: green;">Günlük Kalori İhtiyacınız: ${dailyCalories.toFixed(2)} kcal</span>`;
}
