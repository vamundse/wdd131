let firstName = "Antonia";
let lastName = "Francesca";

function fullName(fname, lname) {
    nameInFull = `${fname} ${lname}`;
    return nameInFull
}

const fullName2 = function(fname, lname) {
    nameInFull = `${fname} ${lname}`;
    return nameInFull
}

const fullName3 = (fname, lname) => `${fname} ${lname}`;

console.log(fullName(firstName, lastName));
console.log(fullName2(firstName, lastName));
console.log(fullName3(firstName, lastName));

const section = document.querySelector('#javascript');
section.innerHTML = fullName(firstName, lastName);