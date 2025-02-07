document.addEventListener('DOMContentLoaded', () => {
    function getLanguage() {
        return localStorage.getItem('language') || 'tr';
    }

    function renderFooter(lang) {
        const footers = {
            tr: `
                <footer class="footer footer-transparent d-print-none">
                    <div class="container-xl">
                        <div class="row text-center align-items-center flex-row-reverse">
                            <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                                <ul class="list-inline list-inline-dots mb-0">
                                    <li class="list-inline-item">
                                        Copyright © 2024
                                        <a href="mailto:selda.cetin@t2ic.com" class="link-secondary">Selda Çetin</a>.
                                        All rights reserved.
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="" class="link-secondary" rel="noopener">
                                        Version 1.0.0
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            `,
            ru: `
                <footer class="footer footer-transparent d-print-none">
                    <div class="container-xl">
                        <div class="row text-center align-items-center flex-row-reverse">
                            <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                                <ul class="list-inline list-inline-dots mb-0">
                                    <li class="list-inline-item">
                                        Авторское право © 2024
                                        <a href="mailto:selda.cetin@t2ic.com" class="link-secondary">Сельда Цетин</a>.
                                        Все права защищены.
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="" class="link-secondary" rel="noopener">
                                        Версия 1.0.0
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            `
        };

        document.getElementById('footer').innerHTML = footers[lang] || footers['tr'];
    }

    renderFooter(getLanguage());
});
