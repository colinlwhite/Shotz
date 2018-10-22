// Writing to the dom for the movie component

const printMovie = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((movie) => {
        domString += `<h1>${movie.Name}</h1>
        <h1>${movie.Genre}</h1>
        <h1>${movie.Date}</h1>
        <h1>${movie.Description}</h1>
        `;
})
    $("#movieDiv").append(domString);
};

export {printMovie}
