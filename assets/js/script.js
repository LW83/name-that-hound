//Declare variables
const photo = document.getElementById("quiz-photo");
let buttons = document.getElementsByTagName("button");
let dogs = {
      name : "Boxer",  
      image : "/assets/images/dogs/boxer-dogs.jpeg" 
    }

//Function to wait until DOM content is loaded before executing 


//Testing functions
let dogsTest = [
    { name : 'Afghan Hound', image : 'assets/images/dogs/afghan-hound.jpeg' },
    { name : 'Airedale Terrier', image : 'assets/images/dogs/airedale-terrier.jpeg' }, 
    { name : 'Samoyed', image : 'assets/images/dogs/samoyed.jpeg' }
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


/** Undo this comment remove 
 * function generatePhoto () {
    let dogPhoto = document.createElement('img');
    /**dogPhoto.src = dogs.image;**/
    /**return photo.innerHTML = `<img src="${dogs.image}">`;  
}

generatePhoto ();**/

function generatePhotoTest() {
    let num = Math.floor(Math.random() * dogsTest.length);
    let dogPhoto = dogsTest[num].image; 
    return photo.innerHTML = `<img src="${(dogPhoto)}">`;
}

generatePhotoTest();

/** function generatePhoto(game) {
    for (var i = 0; i < 10; i += 1) {
        var dog = getRandomItem(dogPhoto); 
        photo[i].innerHTML = dog.image;
    }
}**/

function generateChoices() {

}

function checkAnswer() {

}

function correctAnswer() {

}

function increaseScore() {

}