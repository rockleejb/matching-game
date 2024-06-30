let numberOfFaces = 5;
const theLeftSide = document.querySelector("#leftSide");
const theRightSide = document.querySelector("#rightSide");
const restartBtn = document.querySelector("#restartBtn");
const correctSound = document.querySelector("#correctSound");
const wrongSound = document.querySelector("#wrongSound");
let gamesWon = 0;

function generateFaces() {
    restartBtn.hidden = true;
    for (let i = 0; i < numberOfFaces; i++) {
        const face = document.createElement("img");
        face.src = 'img/smile.png';
        const randomTop = Math.floor(Math.random() * 400);
        const randomLeft = Math.floor(Math.random() * 400);
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
    }
    const theLeftSideImages = theLeftSide.cloneNode(true);
    theLeftSideImages.removeChild(theLeftSideImages.lastElementChild);
    theRightSide.appendChild(theLeftSideImages);
    theLeftSide.lastElementChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);
}

function nextLevel(event) {
    event.stopPropagation();
    correctSound.play();
    resetBoard();
    numberOfFaces += 5;
    gamesWon++;
    generateFaces();
}

function gameOver() {
    wrongSound.play();
    alert(`Game Over! Games won: ${gamesWon}`);
    document.body.removeEventListener('click', gameOver);
    theLeftSide.lastElementChild.removeEventListener('click', nextLevel);
    restartBtn.addEventListener('click', restartGame);
    restartBtn.hidden = false;
}

function restartGame() {
    event.stopPropagation();
    numberOfFaces = 5;
    gamesWon = 0;
    restartBtn.removeEventListener('click', restartGame);
    resetBoard();
    generateFaces();
}

function resetBoard() {
    while (theLeftSide.firstElementChild) {
        theLeftSide.removeChild(theLeftSide.lastElementChild);
    }
    while (theRightSide.firstElementChild) {
        theRightSide.removeChild(theRightSide.lastElementChild);
    }
}