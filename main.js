const cardsArray = [
    {"img_url": "./assets/1.jpg"},
    {"img_url": "./assets/1.jpg"},
    {"img_url": "./assets/2.jpg"},
    {"img_url": "./assets/2.jpg"},
    {"img_url": "./assets/3.jpg"},
    {"img_url": "./assets/3.jpg"},
    {"img_url": "./assets/4.jpg"},
    {"img_url": "./assets/4.jpg"},
    {"img_url": "./assets/5.jpg"},
    {"img_url": "./assets/5.jpg"},
    {"img_url": "./assets/6.jpg"},
    {"img_url": "./assets/6.jpg"},
    {"img_url": "./assets/7.jpg"},
    {"img_url": "./assets/7.jpg"},
    {"img_url": "./assets/8.jpg"},
    {"img_url": "./assets/8.jpg"},
    {"img_url": "./assets/9.jpg"},
    {"img_url": "./assets/9.jpg"},
    {"img_url": "./assets/10.jpg"},
    {"img_url": "./assets/10.jpg"}
]

cardsArray.sort(() => Math.random() - 0.5);


const cardContainer = document.getElementById("cardContainer");

let index = 0;
for (let i = 0; i < 5; i++) {
    let outerDiv = document.createElement('div');
    for (let j = 0; j < 4; j++) {
        let innerDiv = document.createElement('div');
        let currentElement = cardsArray[index];
        index++;
        innerDiv.id = currentElement.id;
        innerDiv.classList.add("customCard");
        innerDiv.classList.add("flipped");
        innerDiv.style.backgroundImage = `url(${currentElement.img_url})`
        outerDiv.appendChild(innerDiv);
    }
    cardContainer.appendChild(outerDiv);
}

let cardsFlipped = [];
let foundPairsCount = 0;
cardContainer.addEventListener("click", e => {
    if(e.target.classList.contains("customCard") && e.target.classList.contains("flipped") && cardsFlipped.length !== 2) {



        e.target.classList.toggle("flipped");

        cardsFlipped.push(e.target);

        if (cardsFlipped.length === 2) {
            if (cardsFlipped[0].style.backgroundImage.slice(4, -1).replace(/"/g, "") === cardsFlipped[1].style.backgroundImage.slice(4, -1).replace(/"/g, "")) {
                setTimeout(() => {
                    foundPairsCount ++;
                    console.log(foundPairsCount)
                    if (foundPairsCount >= 10) {
                        alert("¡Felicidades! Has ganado")
                    }
                    cardsFlipped = [];
                }, 1200);
            } else {
                setTimeout(() => {
                    cardsFlipped[0].classList.add("flipped");
                    cardsFlipped[1].classList.add("flipped");
                    cardsFlipped = [];
                }, 1200);
            }

        }
    }
})