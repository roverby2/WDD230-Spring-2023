/* copy right */
const copyright = document.querySelector('#copyright')

/* Last Update */
const currentYear = new Date().getFullYear();
copyright.textContent = `©️ ${currentYear}`;
const lastModDate = document.querySelector('#lastModDate')
const lastMod = new Date(document.lastModified);
lastModDate.textContent = `Last Updated: ${lastMod.toLocaleDateString("en-US")} ${lastMod.toLocaleTimeString()}`;

/* Menu */
const mainNav = document.querySelector('.mainNav');
const hambutton = document.querySelector('.hmbrgr');

hambutton.addEventListener('click', () => {
	
	mainNav.classList.toggle('responsive')
	hambutton.classList.toggle('responsive')

});

/* CleanerView Button */
const tryButtons = document.querySelectorAll('.tryBttn');

// Add a click event listener to each button
tryButtons.forEach(button => {
  button.addEventListener('click', function() {

    window.location.href = "fresh.html";
	
  });
});