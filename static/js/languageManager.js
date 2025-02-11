document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('language') || 'tr'; // Varsayılan dil Türkçe

    // Navbar'daki dil butonlarına tıklanınca
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            let selectedLang = button.getAttribute('data-lang'); // Seçilen dili al
            localStorage.setItem('language', selectedLang); // Dili kaydet
            location.reload(); // Sayfayı yenile ve yeni dili yükle
        });
    });
});
