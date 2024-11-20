//Calculator Start

function calculateCalories() {
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    if (!age || !weight || !height) {
        document.getElementById('result').innerText = "Lütfen tüm alanları doldurun!";
        return;
    }

    // BMR (Basal Metabolic Rate) - Harris-Benedict Formula
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Erkekler için (Kadınlar için -161 eklenmeli)

    const dailyCalories = bmr * activity;

    document.getElementById('result').innerText = `Günlük Kalori İhtiyacınız: ${dailyCalories.toFixed(2)} kcal`;
}


//Calculator End