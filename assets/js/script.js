//Declare variables
const game = document.getElementById("game-container");
const photo = document.getElementById("quiz-photo");
const answers = document.getElementById("answer-options");
const submitButton = document.getElementById("submit-answer");
const welcome = document.getElementById("welcome-container");
const rules = document.getElementById("rules");
const startButton = document.getElementById("start-game");
const finalTotal = document.getElementById("final-total");
const scoreContainer = document.getElementById("score-container");
let finalContainer = document.getElementById("final-score");
const playAgainButton = document.getElementById("play-again");
const homeButton = document.getElementById("return-home");
const answerFeedback = document.getElementById("answer-feedback");
let dogs = [
    { name : 'Afghan Hound', image : 'assets/images/dogs/afghan-hound.jpeg' },
    { name : 'Airedale Terrier', image : 'assets/images/dogs/airedale-terrier.jpeg' }, 
    { name : 'Akita', image: 'assets/images/dogs/akita.jpeg'},
    { name : 'Alaskan Malamute', image: 'assets/images/dogs/alaskan-malamute.jpeg'},
    { name : 'Basset Hound', image: 'assets/images/dogs/basset-hound.jpeg'},
    { name : 'Beagle', image: 'assets/images/dogs/beagle.jpeg'},
    { name : 'Bearded Collie', image: 'assets/images/dogs/bearded-collie.jpeg'},
    { name : 'Bernese Mountain Dog', image: 'assets/images/dogs/bernese.webp'},
    { name : 'Bichon Frise', image: 'assets/images/dogs/bichon-frise.webp'},
    { name : 'Coonhound', image: 'assets/images/dogs/black-and-tan-coonhound.jpeg'},
    { name : 'Bloodhound', image: 'assets/images/dogs/bloodhound.jpeg'},
    { name : 'Border Collie', image: 'assets/images/dogs/border-collie.webp'},
    { name : 'Border Terrier', image: 'assets/images/dogs/border-terrier.jpeg'},
    { name : 'Boxer', image: 'assets/images/dogs/boxer.jpeg'},
    { name : 'Bull Terrier', image: 'assets/images/dogs/bull-terrier.jpeg'},
    { name : 'Bulldog', image: 'assets/images/dogs/bulldog.jpeg'},
    { name : 'Bullmastiff', image: 'assets/images/dogs/bullmastiff.jpeg'},
    { name : 'Cairn Terrier', image: 'assets/images/dogs/cairn-terrier.webp'},
    { name : 'Cavalier King Charles Spaniel', image: 'assets/images/dogs/cavalier-king-charles-spaniel.webp'},
    { name : 'Chihuahua', image: 'assets/images/dogs/chihuahua.webp'},
    { name : 'Chinese Crested', image: 'assets/images/dogs/chinese-crested.jpeg'},
    { name : 'Chinese Shar Pei', image: 'assets/images/dogs/chinese-shar-pei.jpeg'},
    { name : 'Chow Chow', image: 'assets/images/dogs/chow-chow.jpeg'},
    { name : 'Collie', image: 'assets/images/dogs/collie.webp'},
    { name : 'Dachsund', image: 'assets/images/dogs/dachsund.webp'},
    { name : 'Dalmatian', image: 'assets/images/dogs/dalmatian.webp'},
    { name : 'Doberman Pinscher', image: 'assets/images/dogs/doberman-pinscher.jpeg'},
    { name : 'English Cocker Spaniel', image: 'assets/images/dogs/english-cocker-spaniel.jpeg'},
    { name : 'English Setter', image: 'assets/images/dogs/english-setter.webp'},
    { name : 'English Springer Spaniel', image: 'assets/images/dogs/english-springer-spaniel.webp'},
    { name : 'Fox Terrier', image: 'assets/images/dogs/fox-terrier.webp'},
    { name : 'French Bulldog', image: 'assets/images/dogs/french-bulldog.webp'},
    { name : 'German Pointer', image: 'assets/images/dogs/german-pointer.jpeg'},
    { name : 'German Shepherd', image: 'assets/images/dogs/german-shepherd.webp'},
    { name : 'Golden Retriever', image: 'assets/images/dogs/golden-retriever.jpeg'},
    { name : 'Gordon Setter', image: 'assets/images/dogs/gordon-setter.jpeg'},
    { name : 'Great Dane', image: 'assets/images/dogs/great-dane.webp'},
    { name : 'Greyhound', image: 'assets/images/dogs/greyhound.jpeg'},
    { name : 'Hungarian Vizla', image: 'assets/images/dogs/hungarian-vizla.webp'},
    { name : 'Irish Setter', image: 'assets/images/dogs/irish-setter.webp'},
    { name : 'Irish Wolfhound', image: 'assets/images/dogs/irish-wolfhound.webp'},
    { name : 'Jack Russell Terrier', image: 'assets/images/dogs/jack-russell-terrier.webp'},
    { name : 'Japanese Spitz', image: 'assets/images/dogs/japanese-spitz.webp'},
    { name : 'Kerry Blue Terrier', image: 'assets/images/dogs/kerry-blue-terrier.webp'},
    { name : 'Labrador', image: 'assets/images/dogs/labrador.webp'},
    { name : 'Lakeland Terrier', image: 'assets/images/dogs/lakeland-terrier.jpeg'},
    { name : 'Leonberger', image: 'assets/images/dogs/leonberger.webp'},
    { name : 'Maltese', image: 'assets/images/dogs/maltese.webp'},
    { name : 'Miniature Schnauzer', image: 'assets/images/dogs/miniature-schnauzer.jpeg'},
    { name : 'Newfoundland', image: 'assets/images/dogs/newfoundland.jpeg'},
    { name : 'Norwegian Elkhound', image: 'assets/images/dogs/norwegian-elkhound.jpeg'},
    { name : 'Old English Sheepdog', image: 'assets/images/dogs/old-english-sheepdog.jpeg'},
    { name : 'Papillon', image: 'assets/images/dogs/papillon.jpeg'},
    { name : 'Pekingese', image: 'assets/images/dogs/pekingese.jpeg'},
    { name : 'Pomeranian', image: 'assets/images/dogs/pomeranian.jpeg'},
    { name : 'Poodle', image: 'assets/images/dogs/poodle.jpeg'},
    { name : 'Pug', image: 'assets/images/dogs/pug.webp'},
    { name : 'Rhodesian Ridgeback', image: 'assets/images/dogs/rhodesian-ridgeback.webp'},
    { name : 'Rottweiler', image: 'assets/images/dogs/rottweiler.jpeg'},
    { name : 'Saint Bernard', image: 'assets/images/dogs/saint-bernard.jpeg'},
    { name : 'Saluki', image: 'assets/images/dogs/saluki.webp'},
    { name : 'Samoyed', image: 'assets/images/dogs/samoyed.jpeg'},
    { name : 'Scottish Terrier', image: 'assets/images/dogs/scottish-terrier.jpeg'},
    { name : 'Shiba Inu', image: 'assets/images/dogs/shiba-inu.jpeg'},
    { name : 'Shih Tzu', image: 'assets/images/dogs/shih-tzu.webp'},
    { name : 'Siberian Husky', image: 'assets/images/dogs/siberian-husky.webp'},
    { name : 'Staffordshire Bull Terrier', image: 'assets/images/dogs/staffordshire-bull-terrier.webp'},
    { name : 'Tibetan Spaniel', image: 'assets/images/dogs/tibetan-spaniel.jpeg'},
    { name : 'Weimaraner', image: 'assets/images/dogs/weimaraner.webp'},
    { name : 'Welsh Corgi', image: 'assets/images/dogs/welsh-corgi.webp'},
    { name : 'West Highland White Terrier', image: 'assets/images/dogs/west-highland-white-terrier.jpeg'},
    { name : 'Whippet', image: 'assets/images/dogs/whippet.jpeg'},
    { name : 'Yorkshire Terrier', image : 'assets/images/dogs/yorkshire-terrier.webp' }
];
let playerName = document.getElementById("name");
const nextQuestion = document.getElementById("next-question");
const exit = document.getElementById("exit-game");
let score = 0;
let total = 0;
let certificateText = document.getElementById("certificate-text");


//Function to wait until DOM content is loaded before executing 

//Event Listeners

submitButton.addEventListener("click", function() {
    checkAnswer();
    finalScoreTotal();
    noMoreQuestions();
    answerFeedback.style.display = "block";
    nextQuestion.style.display = "inline-block";
});

startButton.addEventListener("click", function() {
    generateGame();
    resetScore();
    game.style.display = "block";
    welcome.style.display = "none";
});

nextQuestion.addEventListener("click", function() {
    generateGame();
    answerFeedback.style.display = "none";
});

exit.addEventListener("click", function() {
    resetScore();
    welcome.style.display = "block";
    game.style.display = "none";
});

finalTotal.addEventListener("click", function() {
    certificateGeneration();
    finalContainer.style.display = "block";
    game.style.display = "none";
});

playAgainButton.addEventListener("click", function() {
    resetScore();
    answerFeedback.style.display = "none";
    generateGame();
    finalContainer.style.display = "none";
    game.style.display = "block";
    finalTotal.style.display = "none";
    submitButton.style.display = "inline-block";
});

homeButton.addEventListener("click", function() {
    resetScore();
    welcome.style.display = "block";
    game.style.display = "none";
    finalContainer.style.display = "none";
    playerName.value = "";
});


//Function to generate game
function generateGame() {
    let num = Math.floor(Math.random() * dogs.length);
    let dog = dogs[num];
    let dogPhoto = dog.image; 
    dogName = dog.name; //remove var/let to enable dogName to be accessed outside of function from codegrepper.com (https://www.codegrepper.com/code-examples/javascript/how+to+access+variable+outside+function+in+javascript)

    function generatePhoto() {
        return photo.innerHTML = `<img src="${(dogPhoto)}" class="dogPhoto">`;
    }
    
    generatePhoto()
    
    let answerOptions = [];
    function generateAnswerOptions () {
        let newNum = Math.floor(Math.random() * dogs.length);
        let addDogs = dogs[newNum];
            return addDogs.name;
    }
        
    for (var i = 0; i < 3; i++) {
            generateAnswerOptions ();
            answerOptions.push(generateAnswerOptions());
        } 
    
    answerOptions.push(dogName);

/**
 * Function to shuffle array to ensure correct answer placement is not identifiable. This code was taken from Stack Overflow as noted in ReadMe.  
 */

    function shuffle(array) { 
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
      
    shuffle(answerOptions);
      
      let finalAnswerOptions = [];
      for (i in answerOptions){ 
        finalAnswerOptions.push(
          `<label>
            <input  type="radio" name="possibleAnswers" value="${answerOptions[i]}">
            ${answerOptions[i]} <br>
          </label>`
        );
      }
      answers.innerHTML = finalAnswerOptions.join('');

      nextQuestion.style.display = "none";    
}

scoreContainer.innerHTML = `<p>Current Score: <span id="score">${score}</span>/<span id="total-questions">${total}</span>`;

function resetScore(){
    score = 0; 
    total = 0; 
    scoreContainer.innerHTML = `<p>Current Score: <span id="score">${score}</span>/<span id="total-questions">${total}</span>`;
    answerFeedback.style.display = "none";
}

/**
 * Function to check if the user answer is correct, increase score for correct answer, increase total questions and provide feedback on answer provided
 */
function checkAnswer(){
    let userAnswer = document.querySelector('input[name="possibleAnswers"]:checked').value;
    if (userAnswer === dogName) {
        ++score;
        ++total;
        scoreContainer.innerHTML = `<p>Current Score: <span id="score">${score}</span>/<span id="total-questions">${total}</span>`;
        answerFeedback.innerHTML = "<p><i class='fa-solid fa-paw'></i> Congratulations that's the right hound!</p>";
        answerFeedback.style.color = 'green';
        } else {
            ++total;
            scoreContainer.innerHTML = `<p>Current Score: <span id="score">${score}</span>/<span id="total-questions">${total}</span>`;
            answerFeedback.innerHTML = `<p><i class='fa-solid fa-heart-crack'></i> Hard luck! The correct answer was ${dogName} </p>`;
            answerFeedback.style.color = 'darkred';
        }
}
//ERROR - Still showing the next question button
function finalScoreTotal(){
    if (total > 9) {
        finalTotal.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

function noMoreQuestions(){
    if (total > 8) {
        nextQuestion.style.display = "none";
    }
}


function certificateGeneration(){
    if (score < 4) {
        certificateText.innerHTML = 
        `<h3>Better Luck Next Time</h3>
        <p>You scored ${score} out of 10</p>
        <br>
        <p>Your hound knowledge needs some Pawfecting, ${playerName.value}, but Milo here thinks you are up to the challenge!</p>`
    } else if (score < 7) {
        certificateText.innerHTML = 
        `<h3>Pawsitive!</h3>
        <p>You scored ${score} out of 10</p>
        <br>
        <p>Your know your hounds, ${playerName.value}, and Milo reckons with a bit of practice you could be Pawfect!</p>`
    } else {
        certificateText.innerHTML = 
        `<h3>Pawfection!</h3>
        <p>You scored ${score} out of 10</p>
        <br>
        <p>${playerName.value}, you are the ultimate expert of hounds!</p>`
    }

}

