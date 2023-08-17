// Rocket
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

// Clock
function clock() {
    let hr = document.querySelector('#hr');
    let mn = document.querySelector('#mn');
    let sc = document.querySelector('#sc');

    setInterval(() => {
        let day = new Date();
        let hour = day.getHours() * 30;
        let minute = day.getMinutes() * 6;
        let second = day.getSeconds() * 6;

        hr.style.transform = `rotateZ(${hour+(minute/12)}deg)`;
        mn.style.transform = `rotateZ(${minute}deg)`;
        sc.style.transform = `rotateZ(${second}deg)`;

        // Digital
        let hours = document.getElementById('hour');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');
        let ampm = document.getElementById('ampm');

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();

        let am = h >= 12 ? "PM" : "AM";

        // converting 24hr clock to 12hr
        if (h > 12) {
            h = h - 12;
        }

        // add zero before single digit number
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        ampm.innerHTML = am;
    })
}
clock();

// Mars Rover
function roverSearch(date, roverName, camera) {
    const nasaApiKey = '2QbpLQBozt59EwMHuzZseMAHas7Z9Q6X2gVu7UFm';
    
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${date}&camera=${camera}&api_key=${nasaApiKey}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.photos && data.photos.length > 0) {
                const imageUrl = data.photos[0].img_src;
                const imgElement = document.getElementById('img-display');
                imgElement.src = imageUrl;
            } else {
                console.log('No image found for the provided criteria.');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}
roverSearch('2015-6-3', 'curiosity', 'FHAZ');


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



// Drone 
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
