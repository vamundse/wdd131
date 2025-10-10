const opdateret = document.querySelector("#opdateret");
const year = document.querySelector("#year");

const today = new Date();
const lastmod = new Date(document.lastModified);

opdateret.innerHTML = `Sist opdateret: ${lastmod.getDate()}/${lastmod.getMonth()+1}/${lastmod.getFullYear()}`;
year.innerHTML = `Copyright &copy; ${today.getFullYear()}, Christina Gade.`;