// Entry point/start application

import {movieData} from './data/movieData.js'
import {locationData} from './data/locationsData.js'
import {setEvents} from './events.js'

const initialApp = () => {
    movieData();
    locationData();
    setEvents();
};

initialApp();