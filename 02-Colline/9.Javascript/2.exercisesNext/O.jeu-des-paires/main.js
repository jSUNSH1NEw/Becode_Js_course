//Show Instructions




//! variabe & Take the element from html  

let cardElements = document.getElementsByClassName('game-card');
let cardElementsArray = [...cardElements];
let imgElements = document.getElementsByClassName('game-card-img');
let imgElementsArray = [...imgElements];
let starElements = document.getElementsByClassName('star');
let starElementsArray = [...starElements];
let counter = document.getElementById('moveCounter');
let timer = document.getElementById('timer');
let totalGameMovesElement = document.getElementById('totalGameMoves');
let totalGameTimeElement = document.getElementById('totalGameTime');
let finalStarRatingElement = document.getElementById('finalStarRating');
let openedCards = [];
let matchedCards =  [];
let moves;
let second = 0,
    minute = 0,
    hour = 0,
    interval,
    totalGameTime,
    starRating;

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//! shuffle cards
function startGame() {
    let shuffledImages = shuffle(imgElementsArray);

    for(i=0; i<shuffledImages.length; i++) {
        // !suprimer le placement des image a chaque reset 
        cardElements[i].innerHTML = "";

        //! Ajout du melange de chaque carte
        cardElements[i].appendChild(shuffledImages[i]);
        cardElements[i].type = `${shuffledImages[i].alt}`;

        //! Prendre les class pour le jeux
        cardElements[i].classList.remove("show", "open", "match", "disabled");
        cardElements[i].children[0].classList.remove("show-img");
    }

    //! Check les evenement user sur les cartes
    for(let i = 0; i < cardElementsArray.length; i++) {
        cardElementsArray[i].addEventListener("click", displayCard)
    }

    //! Quand le jeuc commence Les carte se montre 1 sec
    flashCards();

    //! Reset des essai
    moves = 0;
    counter.innerText = `${moves} move(s)`;

    //! Reset de la cote etoilée
    for(let i=0; i<starElementsArray.length; i++) {
        starElementsArray[i].style.opacity = 1;
    }

    //! Reset du timer
    timer.innerHTML = '0 mins 0 secs';
    clearInterval(interval);
}
//! Memoire des carte
function flashCards() {
    for(i=0; i<cardElements.length; i++) {
        cardElements[i].children[0].classList.add("show-img")
    }
    setTimeout(function(){
        for(i=0; i<cardElements.length; i++) {
            cardElements[i].children[0].classList.remove("show-img")
        }
    }, 1000)
}

//! afficher les cartes
function displayCard() {
    this.children[0].classList.toggle('show-img');
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
    cardOpen(this);
}
//! carte retourner par l'utilisateur 
function cardOpen(card) {
    openedCards.push(card);
    let len = openedCards.length;
    if(len === 2) {
        moveCounter();
        if(openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }
    }
}

//! Functuion utilisateur SI : Carte assortie 
function matched() {
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    matchedCards.push(openedCards[0]);
    matchedCards.push(openedCards[1]);
    openedCards = [];
    if(matchedCards.length == 16) {
        endGame();
    }
}

//! Fonction utilisateur SI : Carte non-assortie
function unmatched() {
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function() {
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        openedCards[0].children[0].classList.remove('show-img');
        openedCards[1].children[0].classList.remove('show-img');
        enable();
        openedCards = [];
        
    }, 1100)
}

//! retournement carte si Fail 
function disable() {
    cardElementsArray.filter((card, i, cardElementsArray) => {
        card.classList.add('disabled');
    })
}
//! Fix retournement carte si reussite
function enable() {
    cardElementsArray.filter((card, i, cardElementsArray) => {
        card.classList.remove('disabled');
        for(let i=0; i<matchedCards.length; i++) {
            matchedCards[i].classList.add('disabled');
        }
    })
}


//! Compteur d essaie
function moveCounter() {
    moves++;
    counter.innerHTML = `${moves} move(s)`;

    if(moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }

//!Definition de cote etoilée sur base des mouvement (essai)
    if(moves > 8 && moves <= 12) {
        for(let i=0; i<5; i++) {
            starElementsArray[i].opacity = 1; 
        }
    } else if(moves > 12 && moves <= 16) {
        for(let i=0; i<5; i++) {
            if(i > 3) {
                starElementsArray[i].style.opacity = 0.1;
            }
        }
    } else if(moves > 16 && moves <= 20) {
        for(let i=0; i<5; i++) {
            if(i > 2) {
                starElementsArray[i].style.opacity = 0.1;
            }
        }
    } else if(moves > 20 && moves <= 24) {
        for(let i=0; i<5; i++) {
            if(i > 1) {
                starElementsArray[i].style.opacity = 0.1;
            }
        }
    } else if(moves > 24){
        for(let i=0; i<5; i++) {
            if(i > 0) {
                starElementsArray[i].style.opacity = 0.1;
            }
        }
    }
}

function startTimer() {
    interval = setInterval(function(){
        timer.innerHTML = `${minute} mins ${second} secs`;
        second++;
        if(second == 60) {
            minute++;
            second = 0;
        }
        if(minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000)
}

function endGame() {
    clearInterval(interval);
    totalGameTime = timer.innerHTML;
    starRating = document.querySelector('.rating').innerHTML;

}

//todo ICI se retrouvera des stas utilisateur


//!  DELAIS DE RECONNAISANCE DES CARTE avant Lancement du jeux 
window.onload = function () {
    setTimeout(function() {
        startGame()
    }, 1200);  //? delai d'arriver Sur le navigateur
}