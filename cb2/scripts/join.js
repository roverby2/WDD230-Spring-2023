/* contact message */
function handleSubmit(event) {
	event.preventDefault(); // Prevent the form from being submitted and the page from refreshing
  
	// Display the thank you message
	const submitMessage = document.getElementById("submit-message");
	submitMessage.textContent = "Thank you for your submission!";
  
	// Clear the form fields
	const form = event.target;
	form.reset();
}

/* Join message */
function handleSubmit(event) {
	event.preventDefault(); // Prevent the form from being submitted and the page from refreshing
  
	// Display the thank you message
	const submitMessage = document.getElementById("submit-message");
	submitMessage.textContent = "Thank you for your submission!";
  
	// Clear the form fields
	const form = event.target;
	form.reset();
}