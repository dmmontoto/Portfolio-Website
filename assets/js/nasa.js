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

//two day turnaround for pics on curiosity
// curiosity August 6, 2012 
// live
// spirit January 5, 2004 
// The last communication from the Mars Rover Spirit occurred on January 11, 2010
// January 29, 2004 
// Opportunity's last communication with Earth was on June 11 2017