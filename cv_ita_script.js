document.addEventListener('DOMContentLoaded', function() {
    console.log("CV w języku polskim wczytane poprawnie.");

    // Obsługa wysyłania formularza
    const contactForm = document.getElementById('contact-form-pl');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            
            console.log("Formularz został wysłany.");
        });
    }

    
});
