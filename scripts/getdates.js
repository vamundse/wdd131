const currentyear = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified");

const today = new Date();

lastModified.innerHTML = `Last modified: ${alert(document.lastModified)}`;

currentyear.innerHTML = `${today.getFullYear()}`;