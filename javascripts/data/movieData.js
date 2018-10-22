// AJAX call for movie data

import {printMovie} from "../components/movieComponent.js";

const movieData = () => {
    $.get('../db/movie.json')
    .done((data) => {
        console.log(data.movie);
        printMovie(data.movie)
    })
    .fail((error) => {
        console.log(error)
    })
};

export {movieData}

