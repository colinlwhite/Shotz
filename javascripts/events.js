// Attaching all event listeners

const allButton = $('#all'); 
const morningButton = $('#morning'); 
const afternoonButton = $('#afternoon'); 
const eveningButton = $('#evening'); 
const afterDarkButton = $('#afterDark'); 

const allButtonEvent = () => {
    allButton.on('click', () => {
        
    });
};


$("#morningButton").on('click', (e) => {
    console.log(e); // Making sure the click logs out 
    // $("h4").filter(":contains('Afternoon')").remove(); // Removes the h4 text only 
    //$("#Afternoon").remove(); // Only removes one card or so I thought
    $("#Afternoon, #AfterDark, #Evening").detach();
  }); 
  

  $("#afternoonButton").on('click', () => {
    $("#Morning, #AfterDark, #Evening").hide();
    $("#afternoonButton").show();
  }); 
  

  $("#eveningButton").on('click', () => {
    $("#Afternoon, #AfterDark, #Morning").remove();
  }); 
  

  $("#afterDarkButton").on('click', () => {
    $("#Afternoon, #Morning, #Evening").remove();
  }); 
  

