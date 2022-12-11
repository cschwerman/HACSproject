const nameText = document.getElementById('name');
const ageText = document.getElementById('age');
const genderText = document.getElementById('gender');
const weightText = document.getElementById('weight');
const heightText = document.getElementById('height');
const backgroundText = document.getElementById('background');
const birthplacetext = document.getElementById('birthplace');
// Slider consts
const emotionValue = document.getElementById('emotions');
const happinessValue = document.getElementById('happiness');
const calmnessValue = document.getElementById('calmness');
const bravenessValue = document.getElementById('braveness');
const orderlyValue = document.getElementById('orderly');

const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', () => {
    modelInfo = {
        "Name": nameText.value,
        "Age": ageText.value,
        "Gender": genderText.value,
        "Weight": weightText.value,
        "Height": heightText.value,
        "Background": backgroundText.value,
        "Birthplace": birthplacetext.value,
        "Emotion": emotionValue.value,
        "Happy": happinessValue.value,
        "Calm": calmnessValue.value,
        "Brave": bravenessValue.value,
        "Order": orderlyValue.value,
    }
    localStorage.setItem("modelInfo", JSON.stringify(modelInfo));

    window.location.replace("http://127.0.0.1:5500/dresser.html");
})

// console.log(nameText);
// console.log(ageText);
// console.log(genderText);
// console.log(weightText);
// console.log(heightText);
// console.log(backgroundText);
// console.log(birthplacetext);
// console.log(emotionValue);
// console.log(happinessValue);
// console.log(calmnessValue);
// console.log(bravenessValue);
// console.log(orderlyValue);
// console.log(generateBtn);