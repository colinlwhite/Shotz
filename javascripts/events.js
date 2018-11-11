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

let userInput = $('#textInput');
const userMessage = () => {
    $(userInput).on('keypress', (e) => {
        const keyCode = e.which;
        if (keyCode == 13) {
            for (let i = 0; i < $('.location').length; i++) {
                console.log($('.location').text());
            }
            console.log(userInput.val()); // .val() is a jQuery method. It's in the documentation under "ATTRIBUTES / CSS" 
        }
    })
};

userMessage();

export {setEvents}



// right click on anything logged out in the console and
  

