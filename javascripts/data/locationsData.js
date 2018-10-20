// AJAX call for locations data

$.get('../db/locations.json') 
.done((data) => {
    console.log(data);
});
