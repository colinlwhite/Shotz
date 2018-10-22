// AJAX call for locations data

const locationData = () => {
    $.get('../db/locations.json') 
    .done((data) => {
        console.log(data.locations);
    });
};

export {locationData}