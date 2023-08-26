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
const searchAlert = document.getElementById('search-alert');

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
    searchAlert.innerHTML = '';
});

spiritBtn.addEventListener('click', function() {
    searchTitle.innerHTML = 'Search Spirit Images';
    searchDescription.innerHTML = 'For the Spirit rover, images are available between the dates of January 8th, 2004 to January 10th, 2010.';
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
    searchAlert.innerHTML = '';
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
    searchAlert.innerHTML = '';
});

searchBtn.addEventListener('click', function() {
    searchAlert.innerHTML = '';
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
            searchAlert.innerHTML = 'Please select a camera';
            return;
    }

    switch(active) {
        case "curiosity":
            if (parsedYear < 2012) {
                searchAlert.innerHTML = 'Invalid date: Too early for the Curiosity rover';
                return;
            } else if (parsedYear === 2012 && parsedMonth < 8) {
                searchAlert.innerHTML = 'Invalid date: Too early for the Curiosity rover';
                return;
            } else if (parsedYear === 2012 && parsedMonth === 8 && parsedDay < 6) {
                searchAlert.innerHTML = 'Invalid date: Too early for the Curiosity rover';
                return;
            } else if (parsedYear === new Date().getFullYear() && parsedMonth === new Date().getMonth() + 1 && parsedDay > new Date().getDate() - 3) {
                searchAlert.innerHTML = 'Invalid date: Too close to today';
                return;
            } else {
                break;
            }  
            break;
        case "spirit":
            if (parsedYear < 2004) {
                searchAlert.innerHTML = 'Invalid date: Too early for the Spirit rover';
                return;
            } else if (parsedYear === 2004 && parsedMonth < 1) {
                searchAlert.innerHTML = 'Invalid date: Too early for the Spirit rover';
                return;
            } else if (parsedYear === 2004 && parsedMonth === 1 && parsedDay < 5) {
                searchAlert.innerHTML = 'Invalid date: Too early for the Spirit rover';
                return;
            } else if (parsedYear > 2010) {
                searchAlert.innerHTML = 'Invalid date: Last available date is January 10th, 2010';
                return;
            } else if (parsedYear === 2010 && parsedMonth > 1) {
                searchAlert.innerHTML = 'Invalid date: Last available date is January 10th, 2010';
                return;
            } else if (parsedYear === 2010 && parsedMonth === 1 && parsedDay > 10) {
                searchAlert.innerHTML = 'Invalid date: Last available date is January 10th, 2010';
                return;
            } else {
                break;
            }
            break;
        case "opportunity":
            if (parsedYear < 2004) {
                searchAlert.innerHTML = 'Invalid date: Too early for the Opportunity rover';
                return;
            } else if (parsedYear === 2004 && parsedMonth < 1) {
                searchAlert.innerHTML = 'Invalid date: Too early for the Opportunity rover';
                return;
            } else if (parsedYear === 2004 && parsedMonth === 1 && parsedDay < 29) {
                searchAlert.innerHTML = 'Invalid date: Too early for the Opportunity rover';
                return;
            } else if (parsedYear > 2017) {
                searchAlert.innerHTML = 'Invalid date: Last available date is June 11th, 2017';
                return;
            } else if (parsedYear === 2017 && parsedMonth > 6) {
                searchAlert.innerHTML = 'Invalid date: Last available date is June 11th, 2017';
                return;
            } else if (parsedYear === 2017 && parsedMonth === 6 && parsedDay > 11) {
                searchAlert.innerHTML = 'Invalid date: Last available date is June 11th, 2017';
                return;
            } else {
                break;
            }
            break;
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
            roverDescription.innerHTML = `The <a href="https://mars.nasa.gov/msl/home/"><span style="color: var(--main-blue);">Curiosity</span></a> rover, 
            also known as the Mars Science Laboratory (MSL), is a car-sized rover designed to explore Mars. Launched by NASA on November 26, 2011, and successfully
             landed on Mars on August 6, 2012, Curiosity's primary goal is to study the Martian climate and geology to assess whether the planet could have ever 
             supported microbial life. It has made remarkable discoveries, including finding evidence of ancient riverbeds and confirming the presence of water in the 
             planet's past. Curiosity continues to investigate Mars' surface, sending back valuable data and images that contribute to our understanding of the 
             Red Planet's history and potential habitability.`;
            youtubeIframe.src = "https://www.youtube.com/embed/xtDpWGF16po?si=A52tsFI-htn2MXig";
            break;
        case "spirit":
            responseTitle.textContent = 'Spirit';
            roverDescription.innerHTML = `The <a href="https://solarsystem.nasa.gov/missions/spirit/in-depth/"><span style="color: var(--main-blue);">Spirit</span></a> 
            rover was a vital part of NASA's Mars Exploration Rover mission. It landed on Mars on January 4, 2004, with a mission focused on studying the planet's geology 
            and searching for signs of past water activity. Designed for a 90-day mission, Spirit far exceeded expectations and operated for over six years, providing valuable 
            insights into the Martian environment. The rover helped identify the presence of volcanic rocks, ancient river channels, and evidence of past water flows. Although 
            its mission ended in 2010 after getting stuck in sand, Spirit's legacy continues to contribute to our understanding of the Red Planet's history and geology.`;
            youtubeIframe.src = "https://www.youtube.com/embed/UTocjTbLUXs?si=_puVGd1Tk-BuGoYR";
            break;
        case "opportunity":
            responseTitle.textContent = 'Opportunity';
            roverDescription.innerHTML = `The <a href="https://solarsystem.nasa.gov/missions/opportunity/in-depth/"><span style="color: var(--main-blue);">Opportunity</span></a> 
            rover was a remarkable part of NASA's Mars Exploration Rover mission. Touching down on Mars on January 25, 2004, Opportunity exceeded all expectations by continuing 
            its mission for nearly 15 years. Its exploration of the Martian surface provided invaluable insights into the planet's history and geology. Opportunity's discoveries 
            included evidence of past water on Mars and geological features that suggested a watery environment in the planet's past. The rover's remarkable longevity and the scientific 
            data it gathered significantly expanded our understanding of Mars and its potential for past habitability.`;
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
        let count = 0;
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
                count++;
            }); 

            if (count !== 0) {
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
            }

        } else {
            const noImageMessage = document.createElement('p');
            noImageMessage.textContent = `** No images were found for the selected criteria. It's possible that the chosen camera didn't capture any photographs on the specified date. 
            You might consider trying a different date or selecting a different camera. **`;
            slideshowInner.appendChild(noImageMessage);
        }

        responseSection.scrollIntoView({ behavior: 'smooth' });
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
}