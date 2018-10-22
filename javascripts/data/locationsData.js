// AJAX call for locations data

import {printLocals} from '../components/locationComponent.js'

const locationData = () => {
    $.get('../db/locations.json') 
    .done((data) => {
        console.log(data.locations);
        printLocals(data.locations)
    })
    .fail((error) => {
        console.log(error)
    })
};


export {locationData}