document.addEventListener('DOMContentLoaded', function() {
    console.log("English CV loaded successfully.");

    // Form submission handling
    const contactForm = document.getElementById('contact-form-en');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            console.log("The form has been sent.");
        });
    }
});
