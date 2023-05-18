const currentYear = new Date().getFullYear();
/* copy right */
const copyright = document.querySelector('#copyright')
copyright.textContent = `©️ ${currentYear}`;

/* Last Update */
const lastModDate = document.querySelector('#lastModDate')
const lastMod = new Date(document.lastModified);
lastModDate.textContent = `Last Updated: ${lastMod.toLocaleDateString("en-US")} ${lastMod.toLocaleTimeString()}`;

/* Date */
const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

/* Menu */
// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.mainNav')
const hambutton = document.querySelector('#hmbrgr-bttn');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
