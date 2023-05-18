const copyright = document.querySelector('#copyright')
const currentYear = new Date().getFullYear();
copyright.textContent = `©️ ${currentYear}`;


const lastModDate = document.querySelector('#lastModDate')
const lastMod = new Date(document.lastModified);
lastModDate.textContent = `Last Updated: ${lastMod.toLocaleDateString("en-US")} ${lastMod.toLocaleTimeString()}`;