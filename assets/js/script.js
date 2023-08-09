$(document).ready(function() {
    // Attach a click event handler to the button with id "gotoIndexBtn"
    $("#goToIndexBtn").on("click", function() {
        // Redirect to "index.html" when the button is clicked
        window.location.href = "index.html";
    });
});

// document.addEventListener("scroll", function () {
//     var slideInElement = document.querySelector(".slide-in-element");
//     var elementPosition = slideInElement.getBoundingClientRect().top;

//     if (elementPosition < window.innerHeight) {
//         slideInElement.classList.add("active");
//     }
// })

function stars() {
    let count = 50;
    let scene = document.querySelector('.rocket-scene');
    let i = 0;
    while (i < count) {
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);

        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = h + 'px';
        star.style.animationDuration = duration + 's';

        scene.appendChild(star);
        i++;
    }
}
stars();