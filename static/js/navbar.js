document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('language') || 'tr'; // Varsayılan olarak Türkçe

    const NAVBAR_TR = `
            <nav class="navbar navbar-expand-xl">
            <div class="container-xl">
                <div>
                    <a href="index.html" class="navbar-brand ps-2 fs-4 fw-bolder">
                        <img src="./static/img/1.jpg" width="110" height="auto" alt="" class="navbar-brand-image">
                        <i style="margin-left:10px;">ERİŞİM REJİMİ DEPARTMANI</i>
                    </a>
                </div>
                <div class="d-flex justify-content-start align-items-center gap-2 flex-wrap justify-content-md-end">
                    <a href="#" data-lang="tr"
                    class="lang-btn btn btn-outline-primary d-flex align-items-center justify-content-center" 
                    style="gap: 5px; min-width: 100px; max-width: 140px; height: auto; padding: 5px 10px;">
                        <img src="./static/img/tr.png" alt="Türkçe" style="width: 20px; height: auto;">
                        <span style="font-size: 0.9rem;">Türkçe</span>
                    </a>
                    <a href="#" data-lang="ru"
                    class="lang-btn btn btn-outline-primary d-flex align-items-center justify-content-center" 
                    style="gap: 5px; min-width: 100px; max-width: 140px; height: auto; padding: 5px 10px;">
                        <img src="./static/img/rus.png" alt="Русский" style="width: 20px; height: auto;">
                        <span style="font-size: 0.9rem;">Русский</span>
                    </a>
                </div>
            </div>
        </nav>
        <nav class="navbar navbar-expand-xxl" style="background-color: #e6f5ff;">
            <div class="navbar-collapse">
                <div class="container-xxl">
                    <ul class="navbar-nav fs-4">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                    Yeni Personel
                                </span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-menu-column">
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                            Türk Personel
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="tBakanlik.html" class="dropdown-item">
                                                Bakanlık Evrakları
                                            </a>
                                            <a href="tgiris.html" class="dropdown-item">Giriş Evrakları</a>
                                        </div>
                                    </div>
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                            Yabancı Personel
                                        </a>
                                        <div class="dropdown-menu">
                                            <div class="dropend">
                                                <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                                    Bakanlık Evrakları
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="rusbelarus.html" class="dropdown-item">Rus-Belarus Vatandaşları</a>
                                                    <a href="cisulkeler.html" class="dropdown-item">CIS Ülkeleri</a>
                                                    <a href="digerulkeler.html" class="dropdown-item">Diğer Ülkeler</a>
                                                </div>
                                            </div>
                                            <a href="ygiris.html" class="dropdown-item">Giriş Evrakları</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                    Personel Kart İşlemleri
                                </span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="kyenileme.html">
                                        Kart Yenileme
                                    </a>
                                    <a class="dropdown-item" href="kiptal.html">
                                        Kart İptal
                                    </a>
                                    <a class="dropdown-item" href="ksureuzatma.html">
                                        Kart Süresi Uzatma
                                    </a>
                                    <a class="dropdown-item" href="90gunbloke.html">
                                        90 Gün Bloke Kaldırma
                                    </a>
                                    <a class="dropdown-item" href="vatandaslikdegisim.html">
                                        Vatandaşlık Değişimi
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                    Araç Kart İşlemleri
                                </span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="mektupbasvuru.html">
                                        Mektup Başvuru
                                    </a>
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                            Araç Kart Başvuru
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="aracyenibasvuru.html" class="dropdown-item">
                                                Yeni Başvuru
                                            </a>
                                            <a href="sofordegisikligi.html" class="dropdown-item">
                                                Şoför Değişikliği
                                            </a>
                                            <a href="arackirikkart.html" class="dropdown-item">
                                                Kırık Yıpranmış Arızalı Kart Başvurusu
                                            </a>
                                            <a href="arackayipkart.html" class="dropdown-item">
                                                Kayıp Kart Başvurusu
                                            </a>
                                            <a href="aracfirmadegisim.html" class="dropdown-item">
                                                Firma Değişimi
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <a class="dropdown-item" href="arackartsuresiuzatma.html">
                                        Kart Süresi Uzatma
                                    </a>
                                    <a class="dropdown-item" href="90gunblokearac.html">
                                        90 Gün Bloke Kaldırma
                                    </a>
                                    <a class="dropdown-item" href="akiptal.html">
                                        Kart İptali
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                    Malzeme Giriş Çıkış İşlemleri
                                </span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="malzeme.html">
                                        Malzeme Giriş Çıkış
                                    </a>
                                    <a class="dropdown-item" href="degerlimalzeme.html">
                                        Değerli Malzeme
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="aciltir.html"role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                    Acil Tır Araç
                                </span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                    Jeton İşlemleri
                                </span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="aylikJeton.html">
                                        1 Aylık Jeton
                                    </a>
                                    <a class="dropdown-item" href="yillikJeton.html">
                                        1 Yıllık Jeton
                                    </a>
                                    <a class="dropdown-item" href="jetoniptali.html">
                                        Jeton İptali
                                    </a>
                                    <a class="dropdown-item" href="kayipjeton.html">
                                        Kayıp Jeton İptali
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="abk.html"role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                    ABK Giriş
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="teslimnoktalari.html"role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                    Teslim Noktaları
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            `;
            const NAVBAR_RU = `
            <nav class="navbar navbar-expand-xl">
            <div class="container-xl">
                <div>
                    <a href="rus.html" class="navbar-brand ps-2 fs-4 fw-bolder">
                        <img src="./static/img/1.jpg" width="110" height="auto" alt="" class="navbar-brand-image">
                        <i style="margin-left:10px;">Система управления пропускным режимом</i>
                    </a>
                </div>
                <div class="d-flex justify-content-start align-items-center gap-2 flex-wrap justify-content-md-end">
                    <a href="#" data-lang="tr"
                    class="lang-btn btn btn-outline-primary d-flex align-items-center justify-content-center" 
                    style="gap: 5px; min-width: 100px; max-width: 140px; height: auto; padding: 5px 10px;">
                        <img src="./static/img/tr.png" alt="Türkçe" style="width: 20px; height: auto;">
                        <span style="font-size: 0.9rem;">Türkçe</span>
                    </a>
                    <a href="#" data-lang="ru"
                    class="lang-btn btn btn-outline-primary d-flex align-items-center justify-content-center" 
                    style="gap: 5px; min-width: 100px; max-width: 140px; height: auto; padding: 5px 10px;">
                        <img src="./static/img/rus.png" alt="Русский" style="width: 20px; height: auto;">
                        <span style="font-size: 0.9rem;">Русский</span>
                    </a>
                </div>
            </div>
        </nav>
        <nav class="navbar navbar-expand-xxl" style="background-color: #e6f5ff; word-break: break-word;">
            <div class="navbar-collapse">
                <div class="container-xxl">
                    <ul class="navbar-nav fs-5">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
                                        <path d="M12 12l8 -4.5"></path>
                                        <path d="M12 12l0 9"></path>
                                        <path d="M12 12l-8 -4.5"></path>
                                        <path d="M16 5.25l-8 4.5"></path>
                                    </svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                Оформление пропусков для нового персонала
                                </span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-menu-column">
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                        Регистрация турецкого персонала
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="rtBakanlik.html" class="dropdown-item">
                                            Подготовка документов для министерства
                                            </a>
                                            <a href="rtgiris.html" class="dropdown-item">Оформление документов на пропуск</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                Операции с пропусками персонала
                                </span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="rkyenileme.html">
                                    Обновление пропусков
                                    </a>
                                    <a class="dropdown-item" href="rkiptal.html">
                                    Аннулирование пропусков
                                    </a>
                                    <a class="dropdown-item" href="rksureuzatma.html">
                                    Продление срока действия пропусков
                                    </a>
                                    <a class="dropdown-item" href="r90gunbloke.html">
                                    Активация пропусков в связи с процедурой 90 дней
                                    </a>
                                    <a class="dropdown-item" href="rvatandaslikdegisim.html">
                                    Изменение гражданства
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                Операции с пропусками для транспортных средств
                                </span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="rmektupbasvuru.html">
                                    Подготовка заявок на письма
                                    </a>
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                        Оформление заявок на пропуск транспортного средства
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="raracyenibasvuru.html" class="dropdown-item">
                                            Регистрация новых заявок
                                            </a>
                                            <a href="rsofordegisikligi.html" class="dropdown-item">
                                            Смена водителя транспортного средства
                                            </a>
                                            <a href="rarackirikkart.html" class="dropdown-item">
                                            Оформление заявок на неисправные, поврежденные или изношенные пропуска
                                            </a>
                                            <a href="rarackayipkart.html" class="dropdown-item">
                                            Оформление заявок на утерянные пропуска
                                            </a>
                                            <a href="raracfirmadegisim.html" class="dropdown-item">
                                            Изменение данных компании
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <a class="dropdown-item" href="rarackartsuresiuzatma.html">
                                    Продление срока действия пропусков
                                    </a>
                                    <a class="dropdown-item" href="r90gunblokearac.html">
                                    Активация пропусков в связи с процедурой 90 дней
                                    </a>
                                    <a class="dropdown-item" href="rakiptal.html">
                                    Аннулирование пропусков
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                Операции по ввозу и вывозу материалов
                                </span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="rmalzeme.html">
                                    Ввоз и вывоз материалов
                                    </a>
                                    <a class="dropdown-item" href="rdegerlimalzeme.html">
                                    Регистрация ценных материалов
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="raciltir.html"role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                Оформление срочного грузового автомобиля
                                </span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                Операции с жетонами
                                </span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="raylikJeton.html">
                                    Выдача жетонов на 1 месяц
                                    </a>
                                    <a class="dropdown-item" href="ryillikJeton.html">
                                    Выдача годовых жетонов
                                    </a>
                                    <a class="dropdown-item" href="rjetoniptali.html">
                                    Аннулирование жетонов
                                    </a>
                                    <a class="dropdown-item" href="rkayipjeton.html">
                                    Аннулирование утерянных жетонов
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="rabk.html"role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                    Вход в здания АБК
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="rteslimnoktalari.html"role="button" aria-expanded="false">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                </span>
                                <span class="nav-link-title fw-bolder">
                                Пункты выдачи
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            `;

            document.getElementById('navbar').innerHTML = (currentLang === 'ru') ? NAVBAR_RU : NAVBAR_TR;
        
            // Dil değiştirme butonlarını ekle
            document.querySelectorAll('.lang-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    let selectedLang = button.getAttribute('data-lang');
                    localStorage.setItem('language', selectedLang);
                    location.reload(); // Sayfayı yenile ve yeni dili yükle
                });
            });
        
        });