let buttons = document.getElementsByTagName("button");

let photo = document.getElementById("dog-image");

let dogs = [
    { name: 'Afghan Hound', src : 'assets/images/dogs/afghan-hound.jpeg' },
    { name: 'Airedale Terrier', src : 'assets/images/dogs/airedale-terrier.jpeg' } 
];

document.addEventListener("DOMContentLoaded", function() {
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "easy") {
               generatePhoto();
            }
        });
    }

    generatePhoto("easy");

});

function generatePhoto(dogPhoto, num) {
        let dogPhoto = dogs.src;
        let num = Math.floor(Math.random() * dogPhoto.length);
        return dogPhoto[num];
    }

function displayPhoto() {

        photo.src = generatePhoto;
    }

/**function generatePhoto(game) {
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