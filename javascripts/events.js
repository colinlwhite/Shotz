// Attaching all event listeners

const allButton = $('#all'); 
const morningButton = $('#morning'); 
const afternoonButton = $('#afternoon'); 
const eveningButton = $('#evening'); 
const afterDarkButton = $('#afterDark'); 

const allButtonEvent = () => {
    allButton.on('click', () => {
        $('.bg-secondary').closest('.location').show();
        $('.bg-success').closest('.location').show();
        $('.bg-info').closest('.location').show();
        $('.bg-danger').closest('.location').show();
    });
};

const morningButtonEvent = () => {
    morningButton.on('click', () => {
        $('.bg-secondary').closest('.location').show();
        $('.bg-success').closest('.location').hide();
        $('.bg-info').closest('.location').hide();
        $('.bg-danger').closest('.location').hide();
    });
};

const afternoonButtonEvent = () => {
    afternoonButton.on('click', () => {
        $('.bg-secondary').closest('.location').hide();
        $('.bg-success').closest('.location').show();
        $('.bg-info').closest('.location').hide();
        $('.bg-danger').closest('.location').hide();
    });
};

const eveningButtonEvent = () => {
    eveningButton.on('click', () => {
        $('.bg-secondary').closest('.location').hide();
        $('.bg-success').closest('.location').hide();
        $('.bg-info').closest('.location').show();
        $('.bg-danger').closest('.location').hide();
    });
};

const afterDarkButtonEvent = () => {
    afterDarkButton.on('click', () => {
        $('.bg-secondary').closest('.location').hide();
        $('.bg-success').closest('.location').hide();
        $('.bg-info').closest('.location').hide();
        $('.bg-danger').closest('.location').show();
    });
};

const setEvents = () => {
    allButtonEvent();
morningButtonEvent();
afternoonButtonEvent();
eveningButtonEvent();
afterDarkButtonEvent();
};

jQuery.expr[":"].icontains = function(obj, index, meta) {
    return (
      jQuery(obj)
        .text()
        .toUpperCase()
        .indexOf(meta[3].toUpperCase()) >= 0
    );
  };

const searchBar = () => { // declaring the function
    $('#textInput').on('keyup', e => { // The keyup event is fired when a key is released.
        if (e.keyCode === 13) { // if the key they pressed equals 13
            const userInput = $(e.target).val(); // the value of where the user clicked? 
            $(".div-search").not(`:icontains(${userInput})`).closest('.location').hide();
            $(`.div-search:icontains(${userInput})`).closest('.location').show();
            $(e.target).val("");
        }
    });
};

searchBar();

export {setEvents}



// right click on anything logged out in the console and
  

