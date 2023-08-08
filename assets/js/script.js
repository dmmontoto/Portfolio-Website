$(document).ready(function() {
    // Attach a click event handler to the button with id "gotoIndexBtn"
    $("#goToIndexBtn").on("click", function() {
        // Redirect to "index.html" when the button is clicked
        window.location.href = "index.html";
    });
});

document.addEventListener("scroll", function () {
    var slideInElement = document.querySelector(".slide-in-element");
    var elementPosition = slideInElement.getBoundingClientRect().top;

    if (elementPosition < window.innerHeight) {
        slideInElement.classList.add("active");
    }
})