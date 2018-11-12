// Writing to the dom for the location components

const shootTimeClass = (shootTime) => {
    let selectedClass = '';
    switch (shootTime) {
      case 'Morning': 
        selectedClass = 'bg-secondary'; 
        break;
      case 'Afternoon': 
        selectedClass = 'bg-success'; 
        break;
      case 'Evening': 
        selectedClass = 'bg-info'; 
        break;
      case 'AfterDark': 
        selectedClass = 'bg-danger'; 
        break;
      default: 
        selectedClass = '';
    }
    return selectedClass;
};


const printLocals = (arrayOfLocals) => {
    let domString = '';
    arrayOfLocals.forEach((local) => {
      domString += `
      <div class="d-inline-block">
      <div class="location"> 
        <div class="card m-4 ${shootTimeClass(local.Time)}" style="width: 18rem;">
           <img class="card-img-top" src="${local.Image}" alt="Card image cap">
           <div class="card-body text-center">
              <h3 class="card-text div-search">${local.Name}</h3>
              <h3 class="card-text div-search">${local.Address}</h3>
              <h4 class="card-text">${local.Time}</h4>
           </div>
        </div> 
        </div>
      </div>
          `; 
})
    $("#locationDiv").append(domString);
};

export {printLocals, shootTimeClass}

