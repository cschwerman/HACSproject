const startingBtn = document.getElementById('startbtn');
startingBtn.addEventListener('click', () => {
    window.location.replace("http://127.0.0.1:5500/formPage.html");
})

const modelBtn = document.getElementById('modelbtn');
modelBtn.addEventListener('click', () => {
    if(localStorage.getItem("modelInfo") !== null){
        window.location.replace("http://127.0.0.1:5500/dresser.html");
    } else {
        window.location.replace("http://127.0.0.1:5500/formPage.html");
    }
})