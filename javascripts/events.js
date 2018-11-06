// Attaching all event listeners

import {printLocals, shootTimeClass} from './components/locationComponent.js';

const allButton = $('#all'); 
const morningButton = $('#morning'); 
const afternoonButton = $('#afternoon'); 
const eveningButton = $('#evening'); 
const afterDarkButton = $('#afterDark'); 

const allButtonEvent = () => {
    allButton.on('click', () => {
        $('.btn-warning').closest('.location').show();
        $('.btn-primary').closest('.location').show();
        $('.btn-success').closest('.location').show();
        $('.btn-danger').closest('.location').show();
    });
};

const morningButtonEvent = () => {
    morningButton.on('click', () => {
        $('.btn-warning').closest('.location').show();
        $('.btn-primary').closest('.location').hide();
        $('.btn-success').closest('.location').hide();
        $('.btn-danger').closest('.location').hide();
    });
};

morningButtonEvent();
allButtonEvent();


// $("#morningButton").on('click', (e) => {
//     console.log(e); // Making sure the click logs out 
//     // $("h4").filter(":contains('Afternoon')").remove(); // Removes the h4 text only 
//     //$("#Afternoon").remove(); // Only removes one card or so I thought
//     $("#Afternoon, #AfterDark, #Evening").detach();
//   }); 
  

//   $("#afternoonButton").on('click', () => {
//     $("#Morning, #AfterDark, #Evening").hide();
//     $("#afternoonButton").show();
//   }); 
  

//   $("#eveningButton").on('click', () => {
//     $("#Afternoon, #AfterDark, #Morning").remove();
//   }); 
  

//   $("#afterDarkButton").on('click', () => {
//     $("#Afternoon, #Morning, #Evening").remove();
//   }); 
  

