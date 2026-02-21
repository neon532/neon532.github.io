document.addEventListener('DOMContentLoaded', function() {
    const languageOverlay = document.getElementById('language-overlay');
    const languageTitle = document.getElementById('language-title');
    const languageLinks = document.querySelectorAll('#language-selector a');
    const languageSections = document.querySelectorAll('.language-section');
    const body = document.body; // <--- Referencja do elementu <body>

    const translations = {
        'pl': 'Wybierz język',
        'en': 'Choose language',
        'it': 'Scegli lingua'
    };

    // Funkcja do pokazywania wybranej sekcji językowej i ukrywania pozostałych
    function showLanguageSection(lang) {
        languageSections.forEach(section => {
            section.classList.remove('active'); // Usuwa klasę 'active' ze wszystkich sekcji
            section.style.display = 'none';    // Ukrywa wszystkie sekcje
        });

        const activeSection = document.getElementById(lang);
        if (activeSection) {
            activeSection.classList.add('active'); // Dodaje klasę 'active' do wybranej sekcji
            activeSection.style.display = 'block'; // Weryfikuje czy wybrana sekcja jest widoczna
        }

        languageOverlay.style.display = 'none'; // Ukrywa overlay
        body.style.overflow = 'auto'; // Przywraca scrollowanie strony
        body.classList.remove('overlay-active'); // <--- Usuwa klasę z body, by stopka wróciła do normalnego miejsca
    }

    // --- Inicjalizacja strony ---
    // 1. Ukrwa wszystkie sekcje językowe na samym początku
    languageSections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // 2. Domyślnie pokazanie overlay z wyborem języka
    languageOverlay.style.display = 'flex';
    body.style.overflow = 'hidden'; // Blokada scrollowania strony
    body.classList.add('overlay-active'); // <--- Dodaje klasę do body, by stopka była na dole overlay'a

    // 3. Obsługa kliknięć na flagi
    languageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Zapobieganie domyślnej akcji linku
            const lang = this.dataset.lang; // Pobierz atrybut data-lang
            showLanguageSection(lang);
        });

        // Zmiana tekstu "Wybierz język" po najechaniu na flagę
        link.addEventListener('mouseover', function() {
            const lang = this.dataset.lang;
            languageTitle.textContent = translations[lang];
        });

    });
});
