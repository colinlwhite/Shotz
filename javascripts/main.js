// Entry point/start application

import {movieData} from './data/movieData.js'
import {locationData} from './data/locationsData.js'

const initialApp = () => {
    movieData();
    locationData();
};

initialApp();