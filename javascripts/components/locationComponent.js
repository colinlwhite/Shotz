// Writing to the dom for the location components

const shootTimeClass = (shootTime) => {
    let selectedClass = '';
    switch (shootTime) {
      case 'Morning': 
        selectedClass = 'btn-warning'; 
        break;
      case 'Afternoon': 
        selectedClass = 'btn-primary'; 
        break;
      case 'Evening': 
        selectedClass = 'btn-success'; 
        break;
      case 'AfterDark': 
        selectedClass = 'btn-danger'; 
        break;
      default: 
        selectedClass = '';
    }
    return selectedClass;
}


const printLocals = (arrayOfLocals) => {
    let domString = '';
    arrayOfLocals.forEach((local) => {
      domString += `
        <div class="card d-inline-block m-4" style="width: 18rem; ${shootTimeClass(local.Time)}">
           <img class="card-img-top" src="${local.Image}" alt="Card image cap">
           <div class="card-body text-center">
              <h3 class="card-text">${local.Name}</h3>
              <h3 class="card-text">${local.Address}</h3>
              <h4 class="card-text">${local.Time}</h4>
           </div>
        </div> 
          `; 
})
    $("#locationDiv").append(domString);
};

export {printLocals}

