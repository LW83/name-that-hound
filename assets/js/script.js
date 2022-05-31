//Declare variables
const photo = document.getElementById("quiz-photo");
let buttons = document.getElementsByTagName("button");
const answers = document.getElementById("answer-options");

//Function to wait until DOM content is loaded before executing 


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
    { name : 'English Setter', image: 'assets/images/dogs/english-setter.jpeg'},
    { name : 'English Springer Spaniel', image: 'assets/images/dogs/english-springer-spaniel.webp'},
    { name : 'Fox Terrier', image: 'assets/images/dogs/fox-terrier.webp'},
    { name : 'French Bulldog', image: 'assets/images/dogs/french-bulldog.webp'},
    { name : 'German Pointer', image: 'assets/images/dogs/german-pointer.jpeg'},
    { name : 'German Shepherd', image: 'assets/images/dogs/german-shepherd.webp'},
    { name : 'Golden Retriever', image: 'assets/images/dogs/golden-retriever.jpeg'},
    { name : 'Gordon Setter', image: 'assets/images/dogs/gordon-setter.webp'},
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

/**document.addEventListener("DOMContentLoaded", function() {
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "easy") {
               generatePhoto();
            }
        });
    }

    generatePhoto("easy");

});**/

function generatePhotoAndAnswers() {
    let num = Math.floor(Math.random() * dogs.length);
    let dog = dogs[num];
    let dogPhoto = dog.image; 
    let dogName = dog.name;

    function generatePhoto() {
        return photo.innerHTML = `<img src="${(dogPhoto)}">`;
    }
    
    function generateCorrectAnswer () { //can probably remove once array shuffled and pushed to DOM
        return answers.innerHTML = `<p>${(dogName)}</p>`;
    } 

    generatePhoto()
    generateCorrectAnswer()
    
    function generateAnswerOptions () {
        let newNum = Math.floor(Math.random() * dogs.length);
        let addDogs = dogs[newNum];
        let addDogName = addDogs.name;
        let answerOptions = [];
    
        answerOptions.push(addDogName);
    } 
    
    for (var i = 0; i < 3; i++) {
        generateAnswerOptions ();
    }
}

generatePhotoAndAnswers()

function checkAnswer() {

}

function correctAnswer() {

}

function increaseScore() {

}