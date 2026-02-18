document.addEventListener('DOMContentLoaded', function() {
    console.log("CV w języku polskim wczytane poprawnie.");

    // Obsługa wysyłania formularza (opcjonalnie - Formspree obsłuży to samo w HTML)
    const contactForm = document.getElementById('contact-form-pl');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            // Możesz tu dodać np. powiadomienie "Dziękuję za wiadomość"
            console.log("Formularz został wysłany.");
        });
    }

    // Możesz tu dodać dodatkowe skrypty specyficzne dla tej podstrony
});
