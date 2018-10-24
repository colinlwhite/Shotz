// Writing to the dom for the location components

const printLocals = (arrayOfLocals) => {
    let domString = '';
    arrayOfLocals.forEach((local) => {
      domString += `
        <div class="card d-inline-block m-4" style="width: 18rem;">
           <img class="card-img-top" src="${local.Image}" alt="Card image cap">
           <div class="card-body text-center">
              <h3 class="card-text">${local.Name}</h3>
              <h3 class="card-text">${local.Address}</h3>
              <h3 class="card-text">${local.Time}</h3>
           </div>
        </div> 
          `; 
})
    $("#locationDiv").append(domString);
};

export {printLocals}

