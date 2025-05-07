document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitBtn');
    const contactForm = document.getElementById('contactForm');

    submitButton.addEventListener('click', function(event) {
    
        event.preventDefault();

      
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        if (nameInput.value && emailInput.value) {
            alert('Thank you for your submission!');
      
        } else {
            alert('Please fill out all required fields.');
        }

        console.log('Submit button clicked!'); 
    });
});
