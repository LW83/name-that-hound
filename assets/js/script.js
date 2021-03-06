//Declare variables used in game
const welcome = document.getElementById("welcome-container");
let playerName = document.getElementById("name");
const startButton = document.getElementById("start-game");
const game = document.getElementById("game-container");
const photo = document.getElementById("quiz-photo");
const answers = document.getElementById("answer-options");
const answerFeedback = document.getElementById("answer-feedback");
const submitButton = document.getElementById("submit-answer");
const nextQuestion = document.getElementById("next-question");
const finalTotal = document.getElementById("final-total");
const scoreContainer = document.getElementById("score-container");
const exit = document.getElementById("exit-game");
let finalContainer = document.getElementById("final-score");
let certificateText = document.getElementById("certificate-text");
const playAgainButton = document.getElementById("play-again");
const homeButton = document.getElementById("return-home");
const dogs = [
    { name : 'Afghan Hound', image : 'assets/images/dogs/afghan-hound.jpeg', description: 'large long haired slim build breed black and beige color'},
    { name : 'Airedale Terrier', image : 'assets/images/dogs/airedale-terrier.jpeg', description: 'medium wire haired breed black and tan color'}, 
    { name : 'Akita', image: 'assets/images/dogs/akita.jpeg', description: 'large stocky breed thick coat black brown and white color'},
    { name : 'Alaskan Malamute', image: 'assets/images/dogs/alaskan-malamute.jpeg', description: 'large stocky breed thick coat grey and white color'},
    { name : 'Basset Hound', image: 'assets/images/dogs/basset-hound.jpeg', description: 'small short legged long eared breed short coat black brown and white color'},
    { name : 'Beagle', image: 'assets/images/dogs/beagle.jpeg', description: 'small breed floppy ear black brown and white color'},
    { name : 'Bearded Collie', image: 'assets/images/dogs/bearded-collie.jpeg', description: 'large stocky breed long haired grey and white color'},
    { name : 'Bernese Mountain Dog', image: 'assets/images/dogs/bernese.webp', description: 'very large stocky breed thick long haired coat black tan and white color'},
    { name : 'Bichon Frise', image: 'assets/images/dogs/bichon-frise.webp', description: 'toy breed curly coat white color'},
    { name : 'Coonhound', image: 'assets/images/dogs/black-and-tan-coonhound.jpeg', description: 'long eared large slim build breed short coat black and tan color'},
    { name : 'Bloodhound', image: 'assets/images/dogs/bloodhound.jpeg', description: 'long eared large slim build breed short coat black and tan color'},
    { name : 'Border Collie', image: 'assets/images/dogs/border-collie.webp', description: 'medium slim build breed long coat black and white color'},
    { name : 'Border Terrier', image: 'assets/images/dogs/border-terrier.jpeg', description: 'small breed short wiry coat black and tan color'},
    { name : 'Boston Terrier', image: 'assets/images/dogs/boston-terrier.jpeg', description: 'small breed short coat black and white color short snout'},
    { name : 'Boxer', image: 'assets/images/dogs/boxer.jpeg', description: 'large muscular breed short coat red white and black'},
    { name : 'Bull Terrier', image: 'assets/images/dogs/bull-terrier.jpeg', description: 'small muscular breed short coat white color long snout'},
    { name : 'Bulldog', image: 'assets/images/dogs/bulldog.jpeg', description: 'medium muscular breed short coat tan and white color short snout'},
    { name : 'Bullmastiff', image: 'assets/images/dogs/bullmastiff.jpeg' , description: 'very large muscular breed short coat black tan and white color short snout'},
    { name : 'Cairn Terrier', image: 'assets/images/dogs/cairn-terrier.webp', description: 'small breed long coat tan color'},
    { name : 'Cavalier King Charles Spaniel', image: 'assets/images/dogs/cavalier-king-charles-spaniel.webp', description: 'small wavy long coat black and tan color floppy eared'},
    { name : 'Chihuahua', image: 'assets/images/dogs/chihuahua.webp', description: 'small slim toy breed short coat black and tan color'},
    { name : 'Chinese Crested', image: 'assets/images/dogs/chinese-crested.jpeg', description: 'small toy breed long coat on head bald body white and grey color'},
    { name : 'Chinese Shar Pei', image: 'assets/images/dogs/chinese-shar-pei.jpeg', description: 'mediium breed short coat grey color wrinkly face'},
    { name : 'Chow Chow', image: 'assets/images/dogs/chow-chow.jpeg', description: 'large stocky breed long fluffy coat orange color'},
    { name : 'Collie', image: 'assets/images/dogs/collie.webp', description: 'large slender breed long fluffy coat tan and white color long nose'},
    { name : 'Dachsund', image: 'assets/images/dogs/dachsund.webp', description: 'small toy breed short legged short coat tan and black color long body'},
    { name : 'Dalmatian', image: 'assets/images/dogs/dalmatian.webp', description: 'large slender breed short coat black and white color'},
    { name : 'Doberman Pinscher', image: 'assets/images/dogs/doberman-pinscher.jpeg', description: 'large slender breed short coat tan and black color long nose'},
    { name : 'English Cocker Spaniel', image: 'assets/images/dogs/english-cocker-spaniel.jpeg', description: 'medium slender breed long wavy coat black and white color long earred'},
    { name : 'English Setter', image: 'assets/images/dogs/english-setter.webp', description: 'large slender breed short wavy coat black and white color'},
    { name : 'English Springer Spaniel', image: 'assets/images/dogs/english-springer-spaniel.webp', description: 'medium slender breed long wavy coat brown and white color long earred'},
    { name : 'Fox Terrier', image: 'assets/images/dogs/fox-terrier.webp', description: 'medium breed short wire haired coat tan and white color'},
    { name : 'French Bulldog', image: 'assets/images/dogs/french-bulldog.webp', description: 'small toy breed short coat tan color pointed ears'},
    { name : 'German Pointer', image: 'assets/images/dogs/german-pointer.jpeg', description: 'large short haired coat brown and white color floppy earred'},
    { name : 'German Shepherd', image: 'assets/images/dogs/german-shepherd.webp', description: 'large breed short coat tan and black color pointed ears'},
    { name : 'Golden Retriever', image: 'assets/images/dogs/golden-retriever.jpeg', description: 'large breed long wavy haired coat golden color'},
    { name : 'Gordon Setter', image: 'assets/images/dogs/gordon-setter.jpeg', description: 'medium slender breed wavy coat black and tan color floppy earred'},
    { name : 'Great Dane', image: 'assets/images/dogs/great-dane.webp', description: 'very large breed short haired coat grey color floppy eared'},
    { name : 'Greyhound', image: 'assets/images/dogs/greyhound.jpeg', description: 'medium slender breed short haired coat tan color long snout'},
    { name : 'Hungarian Vizla', image: 'assets/images/dogs/hungarian-vizla.webp', description: 'large breed short haired coat red color floppy earred'},
    { name : 'Irish Setter', image: 'assets/images/dogs/irish-setter.webp', description: 'medium slender breed long coat red color floppy earred'},
    { name : 'Irish Wolfhound', image: 'assets/images/dogs/irish-wolfhound.webp', description: 'very large slender breed wire haired coat grey color'},
    { name : 'Jack Russell Terrier', image: 'assets/images/dogs/jack-russell-terrier.webp', description: 'small breed short coat brown and white color'},
    { name : 'Japanese Spitz', image: 'assets/images/dogs/japanese-spitz.webp', description: 'small toy breed long coat white color'},
    { name : 'Kerry Blue Terrier', image: 'assets/images/dogs/kerry-blue-terrier.webp', description: 'medium breed short wire haired coat dark grey color'},
    { name : 'Labrador', image: 'assets/images/dogs/labrador.webp', description: 'large breed short coat golden black or brown color'},
    { name : 'Lakeland Terrier', image: 'assets/images/dogs/lakeland-terrier.jpeg', description: 'medium breed short wire haired coat tan and black color'},
    { name : 'Leonberger', image: 'assets/images/dogs/leonberger.webp', description: 'very large stocky breed long haired coat beige and black color'},
    { name : 'Maltese', image: 'assets/images/dogs/maltese.webp', description: 'small toy breed long haired coat white color'},
    { name : 'Miniature Schnauzer', image: 'assets/images/dogs/miniature-schnauzer.jpeg', description: 'small breed short wire haired coat grey and white color'},
    { name : 'Newfoundland', image: 'assets/images/dogs/newfoundland.jpeg', description: 'very large stocky breed long haired coat black color'},
    { name : 'Norwegian Elkhound', image: 'assets/images/dogs/norwegian-elkhound.jpeg', description: 'large stocky breed fluffy coat beige and black color'},
    { name : 'Old English Sheepdog', image: 'assets/images/dogs/old-english-sheepdog.jpeg', description: 'large stocky breed long haired coat white and grey color'},
    { name : 'Papillon', image: 'assets/images/dogs/papillon.jpeg', description: 'small toy breed long haired coat brown and white color pointed ears'},
    { name : 'Pekingese', image: 'assets/images/dogs/pekingese.jpeg', description: 'small toy breed long haired coat beige color short snout'},
    { name : 'Pomeranian', image: 'assets/images/dogs/pomeranian.jpeg', description: 'small toy breed long haired coat orange color'},
    { name : 'Poodle', image: 'assets/images/dogs/poodle.jpeg', description: 'medium breed short curly coat dark grey color long snout'},
    { name : 'Pug', image: 'assets/images/dogs/pug.webp', description: 'small breed short coat tan colour short snout'},
    { name : 'Rhodesian Ridgeback', image: 'assets/images/dogs/rhodesian-ridgeback.webp', description: 'large muscular breed short coat red colour'},
    { name : 'Rottweiler', image: 'assets/images/dogs/rottweiler.jpeg', description: 'large muscular breed short coat tan and black colour'},
    { name : 'Saint Bernard', image: 'assets/images/dogs/saint-bernard.jpeg', description: 'very large breed long coat red and white colour'},
    { name : 'Saluki', image: 'assets/images/dogs/saluki.webp', description: 'medium slender breed long coat long snout floppy earred beige colour'},
    { name : 'Samoyed', image: 'assets/images/dogs/samoyed.jpeg', description: 'medium breed long fluffy coat white colour'},
    { name : 'Scottish Terrier', image: 'assets/images/dogs/scottish-terrier.jpeg', description: 'small breed wavy coat black colour'},
    { name : 'Shiba Inu', image: 'assets/images/dogs/shiba-inu.jpeg', description: 'medium breed short coat orange and white colour'},
    { name : 'Shih Tzu', image: 'assets/images/dogs/shih-tzu.webp', description: 'small toy breed long coat tan colour short snout'},
    { name : 'Siberian Husky', image: 'assets/images/dogs/siberian-husky.webp', description: 'large muscular breed fluffy coat grey and white colour'},
    { name : 'Staffordshire Bull Terrier', image: 'assets/images/dogs/staffordshire-bull-terrier.webp', description: 'small muscular breed short coat black colour short snout'},
    { name : 'Tibetan Spaniel', image: 'assets/images/dogs/tibetan-spaniel.jpeg', description: 'small toy breed long coat tan colour short snout'},
    { name : 'Weimaraner', image: 'assets/images/dogs/weimaraner.webp', description: 'small breed short coat grey colour floppy earred'},
    { name : 'Welsh Corgi', image: 'assets/images/dogs/welsh-corgi.webp', description: 'small breed short legged short coat black tan and white colour pointed ears'},
    { name : 'West Highland White Terrier', image: 'assets/images/dogs/west-highland-white-terrier.jpeg', description: 'small breed wavy coat white colour'},
    { name : 'Whippet', image: 'assets/images/dogs/whippet.jpeg', description: 'small slender breed short coat tan and white colour long snout'},
    { name : 'Yorkshire Terrier', image : 'assets/images/dogs/yorkshire-terrier.webp', description: 'small toy breed long coat tan and black colour' }
];
let score = 0;
let total = 0;
let dogName;
const numbers = Array(dogs.length).fill().map((_, index) => index);//Code from StackOverflow to create an array of numbers based on the dogs variable to generate unique numbers for pulling photo and answer options

//Function to wait until DOM content is loaded before executing 
document.addEventListener("DOMContentLoaded", function(){
    playerName.focus();
});

//Event Listeners required to navigate game

submitButton.addEventListener("click", function() {
    answerAlert();
    checkAnswer(); //checks if answer is correct
    finalScoreTotal(); //checks if final score button needs to be displayed
    answerFeedback.style.display = "block"; //shows answer feedback
    nextQuestion.style.display = "inline-block"; //shows next question button
    submitButton.style.display = "none"; //hides submit button 
    noMoreQuestions(); //check if next question button should be shown
});

startButton.addEventListener("click", function() {
    generateGame(); //generates image and answer options
    resetScore(); //ensures game is reset to zero and feedback cleared
    game.style.display = "block"; //shows main game container
    welcome.style.display = "none"; //hides welcome container and game instructions
    finalTotal.style.display = "none"; //hides final total button
    submitButton.style.display = "inline-block"; //shows submit button 
});

nextQuestion.addEventListener("click", function() {
    generateGame(); //generates a new image and answer options
    answerFeedback.style.display = "none"; //clears answer feedback from previous question
    submitButton.style.display = "inline-block"; //redisplays submit button 
});

exit.addEventListener("click", function() {
    resetScore(); //resets scores to zero
    welcome.style.display = "block"; //shows welcome container
    game.style.display = "none"; //hides game container
});

finalTotal.addEventListener("click", function() {
    certificateGeneration(); //generates certificate with user score
    finalContainer.style.display = "block"; //shows final score container with certificate
    game.style.display = "none"; //hides game conatainer
});

playAgainButton.addEventListener("click", function() {
    resetScore(); //resets scores for new game 
    answerFeedback.style.display = "none"; //clears answer feedback
    generateGame(); //generates image and answer options
    finalContainer.style.display = "none"; //hides final score container
    game.style.display = "block"; //shows game container
    finalTotal.style.display = "none"; //hides final total button
    submitButton.style.display = "inline-block"; //shows submit button for game
});

homeButton.addEventListener("click", function() {
    resetScore(); //resets scores for new game
    welcome.style.display = "block"; //shows welcome container
    game.style.display = "none"; //hides game container
    finalContainer.style.display = "none"; //hides final score container
    playerName.value = ""; //clears player name entered
});

/**
 * Function to generate game including image, correct answer and 3 other different answer options, shuffle answers and push to DOM
 */
function generateGame() {
    numbers.sort(() => Math.random() - 0.5); //randomly sorts numbers variable
    let num = (numbers.slice(0, 1)); //takes first number of numbers array 
    let newNum = (numbers.slice(1, 4)); //takes next 3 numbers from numbers array to ensure all answer options will be unique
    let dog = dogs[num]; //selects dog for question from dog array 
    let dogPhoto = dog.image; //pulls image of selected dog
    dogName = dog.name; //remove var/let to enable dogName to be accessed outside of function (from codegrepper.com)
    
        /**
         * Nested function to generate a photo and push it to the DOM as basis for question 
         * @returns randomly selected dog image from dog array 
         */
        function generatePhoto() {
            return photo.innerHTML = `<img src="${(dogPhoto)}" class="dogPhoto" alt ="${dog.description}">`;
        }
        
        generatePhoto();//call function to generate selected image and push to DOM
        
        /**
         * Nested function to generate 3 different alternate answer options for image and push to answer options array
         */
        let answerOptions = [];
        function generateAnswerOptions() {
        
            for (let i = 0; i < newNum.length; i++) {
                let dogOptions = (dogs[newNum[i]]);
                answerOptions.push(dogOptions.name);
            }
        }

        generateAnswerOptions(); //call function to create answer options
        answerOptions.push(dogName); //push correct answer to answer options array 

        /**
         * Nested function to shuffle answer options array to ensure correct answer placement is not identifiable. This code was taken from Stack Overflow as noted in ReadMe.  
         */

        function shuffle(array) { 
            let currentIndex = array.length,  randomIndex;
        
            // While there remain elements to shuffle
            while (currentIndex != 0) {
        
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
        
            return array;
        }
        
        shuffle(answerOptions); //call shuffle function to shuffle answers pushed to answer options array 
        
        /**
         * Pushes shuffled answers into new array to be pushed as radio button options in DOM. This code was based on code from https://www.sitepoint.com/simple-javascript-quiz/. 
         */
        let finalAnswerOptions = [];
        for (let i =0; i<answerOptions.length; i++){ 
            finalAnswerOptions.push(
            `<label>
                <input id="radio" type="radio" name="possibleAnswers" value="${answerOptions[i]}">
                ${answerOptions[i]}<br>
            </label>`
            );
        }
        answers.innerHTML = finalAnswerOptions.join('');

    nextQuestion.style.display = "none"; //hides next question button when game round is triggered   
}

/**
 * Creates score container in DOM to reflect current correct score and total questions played
 */
scoreContainer.innerHTML = `<p>Current Score: <span id="score">${score}</span>/<span id="total-questions">${total}</span>`;

/**
 * Function to reset scores to zero and hide answer feedback when game is replayed
 */
function resetScore(){
    score = 0; 
    total = 0; 
    scoreContainer.innerHTML = `<p>Current Score: <span id="score">${score}</span>/<span id="total-questions">${total}</span>`;
    answerFeedback.style.display = "none";
}

/**
 * Function to check if the user answer is correct, increase score for correct answer, 
 * increase total questions and provide feedback on answer provided
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

/**
 * Function to hide submit button and display Final Total button when tenth question reached
 */
function finalScoreTotal(){
    if (total > 9) {
        finalTotal.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

/**
 * Function to hide next question button to end game after 10 questions
 */
function noMoreQuestions(){
    if (total > 9) {
        nextQuestion.style.display = "none";
    }
}

/**
 * Function to generate certificate wording based on score range achieved
 */
function certificateGeneration(){
    if (score < 4) {
        certificateText.innerHTML = 
        `<h2>Better Luck Next Time</h2>
        <p>You scored ${score} out of 10</p>
        <br>
        <p>Your hound knowledge needs some Pawfecting, ${playerName.value}, but Milo here thinks you are up to the challenge!</p>`;
    } else if (score < 7) {
        certificateText.innerHTML = 
        `<h2>Pawsitive!</h2>
        <p>You scored ${score} out of 10</p>
        <br>
        <p>Your know your hounds, ${playerName.value}, and Milo reckons with a bit of practice you could be Pawfect!</p>`;
    } else {
        certificateText.innerHTML = 
        `<h2>Pawfection!</h2>
        <p>You scored ${score} out of 10</p>
        <br>
        <p>${playerName.value}, you are the ultimate expert of hounds!</p>`;
    }
}

/**
 * Function to alert user to select an answer in order to proceed with the quiz
 */
function answerAlert(){
    if (document.querySelector('input[name="possibleAnswers"]:checked')==null) {
        alert ("Please select an answer in order to proceed");
    }
}