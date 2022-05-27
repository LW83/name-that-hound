let buttons = document.getElementsByTagName("button");
let photo = document.getElementById("quiz-photo");



document.addEventListener("DOMContentLoaded", function() {
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let game = this.getAttribute("data-type");
                alert(`You clicked ${generatePhoto}`);
            }
        });
    }

});

let dogImages = [
    { name: "Afghan Hound", image: "afghan-hound.jpeg" },
    { name: "Airedale Terrier", image: "airedale-terrier.jpeg" } 
];

function generatePhoto() {
    for (var i = 0; i < 10; i += 1) {
        var dog = getRandomItem(dogImages);
        photo[i].innerHTML = dog.image;
    }
}

function generateOptions() {

}

function checkAnswer() {

}

function correctAnswer() {

}

function increaseScore() {

}