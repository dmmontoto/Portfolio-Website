let date = new Date();
let year = date.getFullYear();
let month = (date.getMonth()+1).toString();
if (month.length === 1) {
    month = '0' + month;
}
let today = String(date.getDate()).padStart(2,'0');
const datePattern = `${year}-${month}-${today}`;
console.log(month);
document.getElementById("date-pattern").value = datePattern;

console.log(today);

const curiosityBtn = document.getElementById('curiosity');
const spiritBtn = document.getElementById('spirit');
const opportunityBtn = document.getElementById('opportunity');
const searchBtn = document.getElementById('search-btn');

const searchTitle = document.getElementById('search-title');
const searchDescription = document.getElementById('search-description');
const cameraChoice = document.getElementById('rover-camera-input');

let active = '';

curiosityBtn.addEventListener('click', function() {
    searchTitle.innerHTML = 'Search Curiosity Images';
    searchDescription.innerHTML = 'For the Curiosity rover, images are available starting from August 6th, 2012. The newest available images can be found three to four days prior to the current date';
    document.getElementById("date-pattern").value = '2012-08-06';
    cameraChoice.value = '';

    // Remove existing options from the datalist
    const datalist = document.getElementById("cameras");
    while (datalist.firstChild) {
        datalist.removeChild(datalist.firstChild);
    }

    // Add the desired options
    const cameraOptions = [
        { id: "FHAZ", value: "Front Hazard Avoidance Camera" },
        { id: "RHAZ", value: "Rear Hazard Avoidance Camera" },
        { id: "MAST", value: "Mast Camera" },
        { id: "CHEMCAM", value: "Chemistry and Camera Complex" },
        { id: "MAHLI", value: "Mars Hand Lens Imager" },
        { id: "MARDI", value: "Mars Descent Imager" },
        { id: "NAVCAM", value: "Navigation Camera" }
    ];

    cameraOptions.forEach(optionData => {
        const option = document.createElement("option");
        option.id = optionData.id;
        option.value = optionData.value;
        datalist.appendChild(option);
    });

    active = 'curiosity';
});

spiritBtn.addEventListener('click', function() {
    searchTitle.innerHTML = 'Search Spirit Images';
    searchDescription.innerHTML = 'For the Spirit rover, images are available between the dates of January 8th, 2004 to January 11th, 2010.';
    document.getElementById("date-pattern").value = '2004-01-08';
    cameraChoice.value = '';

    // Remove existing options from the datalist
    const datalist = document.getElementById("cameras");
    while (datalist.firstChild) {
        datalist.removeChild(datalist.firstChild);
    }

    // Add the desired options
    const cameraOptions = [
        { id: "FHAZ", value: "Front Hazard Avoidance Camera" },
        { id: "RHAZ", value: "Rear Hazard Avoidance Camera" },
        { id: "NAVCAM", value: "Navigation Camera" },
        { id: "PANCAM", value: "Panoramic Camera"},
        { id: "MINITES", value: "Miniature Thermal Emission Spectrometer"}
    ];

    cameraOptions.forEach(optionData => {
        const option = document.createElement("option");
        option.id = optionData.id;
        option.value = optionData.value;
        datalist.appendChild(option);
    });

    active = 'spirit';
});

opportunityBtn.addEventListener('click', function() {
    searchTitle.innerHTML = 'Search Opportunity Images';
    searchDescription.innerHTML = 'For the Opportunity rover, images are available between the dates of January 26th, 2004 to June 11th, 2017.';
    document.getElementById("date-pattern").value = '2004-01-26';
    cameraChoice.value = '';

    // Remove existing options from the datalist
    const datalist = document.getElementById("cameras");
    while (datalist.firstChild) {
        datalist.removeChild(datalist.firstChild);
    }

    // Add the desired options
    const cameraOptions = [
        { id: "FHAZ", value: "Front Hazard Avoidance Camera" },
        { id: "RHAZ", value: "Rear Hazard Avoidance Camera" },
        { id: "NAVCAM", value: "Navigation Camera" },
        { id: "PANCAM", value: "Panoramic Camera"},
        { id: "MINITES", value: "Miniature Thermal Emission Spectrometer"}
    ];

    cameraOptions.forEach(optionData => {
        const option = document.createElement("option");
        option.id = optionData.id;
        option.value = optionData.value;
        datalist.appendChild(option);
    });

    active = 'opportunity';
});

searchBtn.addEventListener('click', function() {
    if (active == '') {
        return;
    } 

    const dateParam = document.getElementById("date-pattern").value;
    const [year, month, day] = dateParam.split('-');
    const parsedYear = parseInt(year);
    const parsedMonth = parseInt(month);
    const parsedDay = parseInt(day);

    if(!parsedYear || !parsedYear || !parsedDay) {
        return;
    }

    switch(active) {
        case "curiosity":
            if (parsedYear < 2012) {
                console.log('Invalid date: Year too early');
            } else if (parsedYear === 2012 && parsedMonth < 8) {
                console.log('Invalid date: Month too early');
            } else if (parsedYear === 2012 && parsedMonth === 8 && parsedDay < 6) {
                console.log('Invalid date: Day too early');
            } else if (parsedYear === new Date().getFullYear() && parsedMonth === new Date().getMonth() + 1 && parsedDay > new Date().getDate() - 3) {
                console.log('Invalid date: Too close to today');
            } else {
                console.log('Valid date');
            }  
            break;
        case "spirit":
            if (parsedYear < 2004) {
                console.log('Invalid year for Spirit');
            } else if (parsedYear === 2004 && parsedMonth < 1) {
                console.log('Invalid month for Spirit');
            } else if (parsedYear === 2004 && parsedMonth === 1 && parsedDay < 5) {
                console.log('Invalid day for Spirit');
            } else if (parsedYear > 2019) {
                console.log('Invalid year for Spirit');
            } else if (parsedYear === 2019 && parsedMonth > 1) {
                console.log('Invalid month for Spirit');
            } else if (parsedYear === 2019 && parsedMonth === 1 && parsedDay > 11) {
                console.log('Invalid day for Spirit');
            } else {
                console.log('Valid date for Spirit');
            }
            break;
        case "opportunity":
            if (parsedYear < 2004) {
                console.log('Invalid year for Spirit');
            } else if (parsedYear === 2004 && parsedMonth < 1) {
                console.log('Invalid month for Spirit');
            } else if (parsedYear === 2004 && parsedMonth === 1 && parsedDay < 29) {
                console.log('Invalid day for Spirit');
            } else if (parsedYear > 2017) {
                console.log('Invalid year for Spirit');
            } else if (parsedYear === 2017 && parsedMonth > 6) {
                console.log('Invalid month for Spirit');
            } else if (parsedYear === 2017 && parsedMonth === 6 && parsedDay > 11) {
                console.log('Invalid day for Spirit');
            } else {
                console.log('Valid date for Spirit');
            }
            break;
    }

    let camParam;
    switch(cameraChoice.value) {
        case "Front Hazard Avoidance Camera":
            camParam = 'FHAZ';
            break;
        case "Rear Hazard Avoidance Camera":
            camParam = 'RHAZ';
            break;
        case "Mast Camera":
            camParam = 'MAST';
            break;
        case "Chemistry and Camera Complex":
            camParam = 'CHEMCAM';
            break;
        case "Mars Hand Lens Imager":
            camParam = 'MAHLI';
            break;
        case "Mars Descent Imager":
            camParam = 'MARDI';
            break;
        case "Navigation Camera":
            camParam = 'NAVCAM';
            break;
        case "Panoramic Camera":
            camParam = 'PANCAM';
            break;
        case "Miniature Thermal Emission Spectrometer":
            camParam = 'MINITES';
            break;
        default:
            // please select a camera
    }

    roverSearch(dateParam, active, camParam);
});

function roverSearch(date, roverName, camera) {
    const responseSection = document.getElementById('response');
    const responseTitle = document.getElementById('response-title');
    const roverDescription = document.getElementById('rover-description');
    const youtubeIframe = document.getElementById('youtube-iframe');

    switch(active) {
        case "curiosity":
            responseTitle.textContent = 'Curiosity';
            roverDescription.textContent = 'Paragraph about the rover goes here.';
            youtubeIframe.src = "https://www.youtube.com/embed/xtDpWGF16po?si=A52tsFI-htn2MXig";
            break;
        case "spirit":
            responseTitle.textContent = 'Spirit';
            roverDescription.textContent = 'Paragraph about the rover goes here.';
            youtubeIframe.src = "https://www.youtube.com/embed/UTocjTbLUXs?si=_puVGd1Tk-BuGoYR";
            break;
        case "opportunity":
            responseTitle.textContent = 'Opportunity';
            roverDescription.textContent = 'Paragraph about the rover goes here.';
            youtubeIframe.src = "https://www.youtube.com/embed/1Ll-VHYxWXU?si=xdCc8js3Z_DyGtMI";
            break;
    }
    
    const nasaApiKey = '2QbpLQBozt59EwMHuzZseMAHas7Z9Q6X2gVu7UFm';
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${date}&camera=${camera}&api_key=${nasaApiKey}&per_page=6`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const slideshowInner = document.getElementById('slideshow-inner');
        const slideshow = document.getElementById('slideshow');

        slideshowInner.innerHTML = ''; // Clear previous content

        if (data.photos && data.photos.length > 0) {
            // Add images to slideshow
            data.photos.forEach((photo, index) => {
                const imageUrl = photo.img_src;

                const slideDiv = document.createElement('div');
                slideDiv.className = index === 0 ? 'carousel-item active' : 'carousel-item';

                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.className = 'd-block w-100';

                slideDiv.appendChild(imgElement);
                slideshowInner.appendChild(slideDiv);
            });

            // Show carousel control buttons
            slideshow.innerHTML += `
                <a class="carousel-control-prev" href="#slideshow" role="button" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#slideshow" role="button" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
            `;

            responseSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            const noImageMessage = document.createElement('p');
            noImageMessage.textContent = 'No images found for the provided criteria.';
            slideshowInner.appendChild(noImageMessage);
        }
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
}