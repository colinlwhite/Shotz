// Attaching all event listeners

import {printLocals, shootTimeClass} from './components/locationComponent.js';

const allButton = $('#all'); 
const morningButton = $('#morning'); 
const afternoonButton = $('#afternoon'); 
const eveningButton = $('#evening'); 
const afterDarkButton = $('#afterDark'); 

const allButtonEvent = () => {
    allButton.on('click', () => {
        console.log("All Button is working");
        $('.bg-secondary').closest('.location').show();
        $('.bg-success').closest('.location').show();
        $('.bg-info').closest('.location').show();
        $('.bg-danger').closest('.location').show();
    });
};

const morningButtonEvent = () => {
    morningButton.on('click', () => {
        console.log("Morning Button is working");
        $('.bg-secondary').closest('#hoping').show();
        $('.bg-success').closest('#hoping').hide();
        $('.bg-info').closest('#hoping').hide();
        $('.bg-danger').closest('#hoping').hide();
    });
};


const setEvents = () => {
    allButtonEvent();
morningButtonEvent();
}

export {setEvents}




  

