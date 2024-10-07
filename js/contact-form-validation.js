document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        errorMessages.innerHTML = '';
        
        let isValid = true;
        
        // Validate Name
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            addError('Name is required');
            isValid = false;
        }
        
        // Validate Email
        const email = document.getElementById('email').value.trim();
        if (email === '') {
            addError('Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            addError('Please enter a valid email address');
            isValid = false;
        }
        
        // Validate Message
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            addError('Message is required');
            isValid = false;
        }
        
        // If all validations pass, show thank you message
        if (isValid) {
            showThankYouMessage();
        }
    });

    function addError(message) {
        const errorElement = document.createElement('p');
        errorElement.textContent = message;
        errorMessages.appendChild(errorElement);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showThankYouMessage() {
        const contactFormSection = document.getElementById('contact-form');
        contactFormSection.innerHTML = '<div class="thank-you-message"><h2>Thank you!</h2><p>We\'ve received your message and we\'ll get in touch with you within 2 business days.</p></div>';
    }
});
