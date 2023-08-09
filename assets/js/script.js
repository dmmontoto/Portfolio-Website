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

// $(document).ready(function() {
//     var droneBox = $("#drone-box");
//     var droneBackground = $("#drone-background");

//     droneBackground.mousemove(function(e) {
//         var droneBoxWidth = droneBackground.width();
//         var droneBoxHeight = droneBackground.height();

//         var droneBackgroundOffset = droneBackground.offset();
//         var droneBackgroundWidth = droneBackground.width();
//         var droneBackgroundHeight = droneBackground.height();

//         var mouseX = e.pageX - droneBackgroundOffset.left;
//         var mouseY = e.pageY - droneBackgroundOffset.top;

//         var moveX = mouseX - droneBoxWidth / 2;
//         var moveY = mouseY -50- droneBoxHeight / 2;

//         moveX = Math.min(Math.max(moveX, -droneBoxWidth / 2), droneBackgroundWidth - droneBoxWidth / 2);
//         moveY = Math.min(Math.max(moveY, -droneBoxHeight / 2), droneBackgroundHeight - droneBoxHeight / 2);

//         droneBox.css({
//             'transform': 'translate3d(' + moveX + 'px, ' + moveY + 'px, 0)'
//         });
//     });
// });


$(document).ready(function() {
    var droneBox = $("#drone-box");
    var droneBackground = $("#drone-background");

    droneBackground.mousemove(function(e) {
        var droneBoxWidth = droneBox.width();
        var droneBoxHeight = droneBox.height();

        var droneBackgroundOffset = droneBackground.offset();
        var droneBackgroundWidth = droneBackground.width();
        var droneBackgroundHeight = droneBackground.height();

        var mouseX = e.pageX - droneBackgroundOffset.left;
        var mouseY = e.pageY - droneBackgroundOffset.top;

        var moveX = mouseX - 100 - droneBoxWidth / 2; // Adjusted x-axis shift
        var moveY = mouseY - 200 - droneBoxHeight / 2;

        // Adjust boundaries for x-axis
        moveX = Math.min(Math.max(moveX, -50), droneBackgroundWidth - droneBoxWidth - 50);

        // Adjust boundaries for y-axis
        moveY = Math.min(Math.max(moveY, -droneBoxHeight / 2), droneBackgroundHeight - droneBoxHeight + droneBoxHeight / 2);

        droneBox.css({
            'transform': 'translate3d(' + moveX + 'px, ' + moveY + 'px, 0)'
        });
    });
});
