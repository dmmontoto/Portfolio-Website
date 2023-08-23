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
    searchDescription.innerHTML = 'For the Curiosity rover, images are available starting from August 6th, 2012. The newest available images can be found two days prior to the current date';
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
    const dataParam = document.getElementById("date-pattern").value
    
});

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
// roverSearch('2015-6-3', 'curiosity', 'FHAZ');

//two day turnaround for pics on curiosity
// curiosity August 6, 2012 
// live
// spirit January 5, 2004 
// The last communication from the Mars Rover Spirit occurred on January 11, 2010
// January 29, 2004 
// Opportunity's last communication with Earth was on June 11 2017