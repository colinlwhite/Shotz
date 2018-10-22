// Writing to the dom for the location components

const printLocals = (arrayOfLocals) => {
    let domString = '';
    arrayOfLocals.forEach((local) => {
        domString += `<h1>${local.Image}</h1>
        <h1>${local.Name}</h1>
        <h1>${local.Address}</h1>
        <h1>${local.Time}</h1>
        `;
})
    $("#locationDiv").append(domString);
};

export {printLocals}

