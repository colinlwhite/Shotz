// Entry point/start application

import {movieData} from './data/movieData.js'
import {locationData} from './data/locationsData.js'
//import {printMovie} from './components/movieComponent.js'

const initialApp = () => {
    movieData();
    locationData();
    //printMovie();
};

initialApp();