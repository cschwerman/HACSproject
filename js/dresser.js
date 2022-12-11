const outfitBtn = document.getElementById('outfit-btn');
const hairBtn = document.getElementById('hair-btn');
const eyesBtn = document.getElementById('eyes-btn');
const shoesBtn = document.getElementById('shoe-btn');

const outfitOverlay = document.getElementById('outfit-overlay');
const hairOverlay = document.getElementById('hair-overlay');
const eyesOverlay = document.getElementById('eyes-overlay');
const shoesOverlay = document.getElementById('shoes-overlay');

let outfitIndex = 2;
outfitBtn.addEventListener('click', () => {
    if (outfitIndex > 5) {
        outfitIndex = 1;
    }
    outfitOverlay.src = `http://127.0.0.1:5500/assets/Outfit/${outfitIndex}.png`;
    localStorage.setItem("outfitIndex", outfitIndex);
    outfitIndex++;
    // console.log('changed outfit')
})

let hairIndex = 2;
hairBtn.addEventListener('click', () => {
    if (hairIndex > 2) {
        hairIndex = 1;
    }
    hairOverlay.src = `http://127.0.0.1:5500/assets/Hair/${hairIndex}.png`;
    localStorage.setItem("hairIndex", hairIndex);
    hairIndex++;
    // console.log('changed hair')
})

let eyesIndex = 2;
eyesBtn.addEventListener('click', () => {
    if (eyesIndex > 6) {
        eyesIndex = 1;
    }
    eyesOverlay.src = `http://127.0.0.1:5500/assets/Eyes/${eyesIndex}.png`;
    localStorage.setItem("eyesIndex", eyesIndex);
    eyesIndex++;
    // console.log('changed eyes')
})

let shoesIndex = 2;
shoesBtn.addEventListener('click', () => {
    if (shoesIndex > 3) {
        shoesIndex = 1;
    }
    shoesOverlay.src = `http://127.0.0.1:5500/assets/Shoes/${shoesIndex}.png`;
    localStorage.setItem("shoesIndex", shoesIndex);
    shoesIndex++;
    // console.log('changed shoes')
})

const modelInfo = JSON.parse(localStorage.getItem("modelInfo"));
// console.log(modelInfo);

const nameTag = document.getElementById('nameTag');
const ageTag = document.getElementById('ageTag');
const genderTag = document.getElementById('genderTag');
const heightTag = document.getElementById('heightTag');
const weightTag = document.getElementById('weightTag');
const backgroundTag = document.getElementById('backgroundTag');
const birthplaceTag = document.getElementById('birthplaceTag');

const emotionTag = document.getElementById('emotionTag');
const happinessTag = document.getElementById('happinessTag');
const clamnessTag = document.getElementById('clamnessTag');
const bravenessTag = document.getElementById('bravenessTag');
const orderlyTag = document.getElementById('orderlyTag');

nameTag.innerText = modelInfo.Name;
ageTag.innerText = modelInfo.Age;
genderTag.innerText = modelInfo.Gender;
weightTag.innerText = modelInfo.Weight;
heightTag.innerText = modelInfo.Height;
backgroundTag.innerText = modelInfo.Background;
birthplaceTag.innerText = modelInfo.Birthplace;

emotionTag.innerText = modelInfo.Emotion;
happinessTag.innerText = modelInfo.Happy;
clamnessTag.innerText = modelInfo.Calm;
bravenessTag.innerText = modelInfo.Brave;
orderlyTag.innerText = modelInfo.Order;

const homebtn = document.getElementById('home-btn');
homebtn.addEventListener('click', () => {
    window.location.replace("http://127.0.0.1:5500/index.html");
})

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.replace("http://127.0.0.1:5500/formPage.html");
})

function createModel() {
    if(localStorage.getItem("outfitIndex") !== null){
        outfitIndex = localStorage.getItem("outfitIndex");
        outfitOverlay.src = `http://127.0.0.1:5500/assets/Outfit/${outfitIndex}.png`;
        outfitIndex++;
    }

    if(localStorage.getItem("hairIndex") !== null){
        hairIndex = localStorage.getItem("hairIndex");
        hairOverlay.src = `http://127.0.0.1:5500/assets/Hair/${hairIndex}.png`;
        hairIndex++;
    }

    if(localStorage.getItem("eyesIndex") !== null){
        eyesIndex = localStorage.getItem("eyesIndex");
        eyesOverlay.src = `http://127.0.0.1:5500/assets/Eyes/${eyesIndex}.png`;
        eyesIndex++;
    }

    if(localStorage.getItem("shoesIndex") !== null){
        shoesIndex = localStorage.getItem("shoesIndex");
        shoesOverlay.src = `http://127.0.0.1:5500/assets/Shoes/${shoesIndex}.png`;
        shoesIndex++;
    }
}