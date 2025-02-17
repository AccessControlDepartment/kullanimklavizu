const pageContents = {
    tBakanlik: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Türk Personeller İçin Bakanlık Başvurusu</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">Ziyaretçi ya da sürekli çalışan fark etmeksizin, saha giriş onayı süreci iki aşamadan oluşmaktadır:<br><br>
                <b> 1.Birinci Aşama: Evrakların Akkuyu tarafından incelenmesi.<br>
                    2.İkinci Aşama: Saha giriş onayının alınması.</b> (Bakanlık incelemesi tamamlandıktan sonra tarafınıza bilgi verilecek ve giriş için gerekli evraklar talep edilecektir.)<br><br>
                    <b>Güvenlik Direktörü Artem Zarodysh</b> ve <b>Güvenlik Eş Direktörü Selim Temren’in</b> dikkatine hitaben, şirket yöneticisi veya yetkili kişi (vekaletname ile) tarafından 
                    imzalanmış resmi bir mektubun onayının ardından, aşağıda listelenen evrakların e-posta yoluyla (<a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a> , <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a>) 
                    tarafımıza iletilmesi gerekmektedir:<br><br>
                    •	Kimlik Fotokopisi veya Tarama Görüntüsü<br>
                    •	Adli Sicil Kaydı<br>
                    •	Sahada Dikkat Edilecek Hususlarla İlgili Bilgilendirme<br>
                    •	Sahaya Girişe İlişkin Açık Rıza Formu<br>
                    •	Eksiksiz ve doğru şekilde doldurulmuş Personel Giriş Excel Tablosu<br><br>
                    <b>Fiziksel evrak teslimi zorunlu değildir.</b><br><br>
                    Ayrıca, evrakların doğru sıralamayla adlandırılması gerektiğini önemle hatırlatırız. Bu düzenleme, sistemlerin işleyişi ve süreçlerin hızlandırılması açısından oldukça önemlidir. 
                    Evrakların, personelin pasaportta yer aldığı şekliyle büyük harflerle isimlendirilmesi ve her bir kişi için ayrı bir dosya oluşturulması gerekmektedir. Dosyalar, kişinin Türkiye 
                    Cumhuriyeti Kimlik Numarası'nın son üç hanesi ile adlandırılmalı ve tüm evraklar 7Z formatında sıkıştırılıp PDF formatında iletilmelidir.<br><br>
                    Örnek: ALI KAYA 456 dosyası içerisinde;<br><br>
                    ALI KAYA KIMLIK<br>
                    ALI KAYA AÇIK RIZA<br>
                    ALI KAYA ADLI SICIL<br>
                    ALI KAYA YASAKLI FALIYETLER <br><br>
                    <u style="color: red;"><b>ÖNEMLİ:</b></u>Eğer personel başka bir firmadan geliyorsa, geldiği firmanın sahada çalışan bir firma ile yaptığı sözleşmenin ilk ve son sayfalarının 
                    da iletilmesi gerekmektedir.<br><br>
                    <b>Sağlık Durumu:</b> Sağlık takip formu (sağlık ve iş sağlığı güvenliği eğitimini geçtiğini kanıtlayan belge) olmadan, en fazla 5 iş günü süreyle ziyaretçi olarak saha 
                    girişi yapılabilir. Daha uzun süre sahada bulunacak kişilerin<a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a>  adresi ile iletişime geçmesi gerekmektedir.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder"  data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="false">Açık Rıza Beyanı</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div>
                            <p><b>Akkuyu Nükleer Güç Santrali (“NGS”) Sahasına Giriş İçin Yapılacak İşlemler Kapsamında Açık Rıza Beyanı</b><br><br>Bu belge, veri sorumlusu ve veri işleyen sıfatıyla, 
                                Akkuyu Nükleer Güç Santrali sahasına giriş için yapılacak işlemler çerçevesinde, kişisel verilerin kaydedilmesi, saklanması, güncellenmesi, sınıflandırılması ve 
                                işlenmesini; ayrıca ilgili mevzuatın izin verdiği hallerde, açık rıza gösterilmesi durumunda üçüncü kişilere açıklanmasını ve devredilmesini kabul ve beyan eder.<br><br>
                                1. Açık Rıza Beyanı toplamda 2 sayfadan oluşmaktadır. İlk sayfada, ok ile işaretlenmiş alana personelin adı ve soyadı eksiksiz olarak yazılmalıdır.</p>
                            <img src="./static/img/acikriza1.png">
                            <p><br>2. İkinci sayfanın alt kısmında, "Adı Soyadı" ibaresi <u>("1." numaralı ok ile işaretli alan)</u> bulunan iki bölüme, personelin adı ve soyadı eksiksiz bir şekilde yazılmalıdır.
                                <br>"İmza" ibaresi <u>("2." numaralı ok ile işaretli alan)</u> bulunan iki bölüme, personelin imzası atılmalıdır.
                                <br>"T.C. Kimlik Numarası" ibaresi <u>("3." numaralı ok ile işaretli alan)</u>bulunan kısma, personelin Türkiye Cumhuriyeti Kimlik Numarası yazılmalıdır.
                                <br>"Tarih" ibaresi <u>("4." numaralı ok ile işaretli alan)</u>bulunan kısma, belgenin hazırlandığı tarih yazılmalıdır.
                                <br>"Telefon Numarası" ibaresi <u>("5." numaralı ok ile işaretli alan)</u> bulunan kısma, personelin telefon numarası yazılmalıdır.
                                <br>"Elektronik Posta Adresi" ibaresi <u>("6." numaralı ok ile işaretli alan)</u> bulunan kısma, personelin e-posta adresi eksiksiz şekilde yazılmalıdır.</p>
                            <img src="./static/img/acikriza2.png">
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Yasaklı Faaliyetler Formu</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div>
                            <p><b>Akkuyu Nükleer Güç Santrali (“NGS”) Sahasında Uyulması Gereken Kurallara İlişkin Belge</b><br><br>
                                Bu belge, Akkuyu Nükleer Güç Santrali sahasında uyulması gereken kurallara ilişkin olup, iki kısımdan oluşmaktadır. Her iki kısımda da aynı bilgiler eksiksiz 
                                ve doğru şekilde doldurulmalıdır.<br>
                                <br>"Adı Soyadı" <u>("1." numaralı ok ile işaretli alan)</u> kısımlarına, personelin adı ve soyadı yazılmalıdır.
                                <br>"T.C./PAS No" <u>("2." numaralı ok ile işaretli alan)</u> kısımlarına, Türkiye Cumhuriyeti vatandaşı ise T.C. Kimlik Numarası, yabancı uyruklu ise pasaport numarası yazılmalıdır.
                                <br>"Firma" <u>("3." numaralı ok ile işaretli alan)</u> kısımlarına, Türkiye Cumhuriyeti vatandaşı ise T.C. Kimlik Numarası, yabancı uyruklu ise pasaport numarası yazılmalıdır.
                                <br>"Okudum, Anladım." <u>("4." numaralı ok ile işaretli alan)</u> kısımlarına ise belgenin doldurulduğu tarih yazılmalıdır.
                            </p>
                            <img src="./static/img/yasaklıfaaliyetler.png">
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Personel Giriş Excel</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Akkuyu Nükleer A.Ş. Şantiye Sahasına Giriş Yapan Personelin İkamet Bilgileri Hakkında</b><br><br>
                            Akkuyu Nükleer A.Ş. şantiye sahasına giriş yapan personelin güvenlik soruşturmalarının Enerji Bakanlığı tarafından gerçekleştirilebilmesi 
                            için, personelin ikamet adreslerinin tarafımıza bildirilmesi zorunludur. Giriş kartları, bu listelere göre çalışanlara teslim edilecek olup, 
                            bildirilmemiş olanlar için Akkuyu Nükleer A.Ş. tarafından kart teslimi yapılmayacağını önemle bildiririz.<br><br>
                            Bakanlık evraklarını kontrol amacıyla tarafımıza iletirken, eğer personelin ikamet adresi henüz belirlenmemişse ya da değişebilir bir durumda 
                            ise, saha giriş kart talebinde bulunurken ikamet bilgilerini güncellemeniz ya da eklemeniz MUTLAKA gerekmektedir.<br><br>
                            <b>Akkuyu Nükleer A.Ş. şantiye sahasında çalışacak personelin veri girişine yönelik eklenen sütunlar ve kullanım talimatları şu şekildedir:</b><br>
                            •	Personel giriş tablosunda, zorunlu olarak seçim yapılması gereken sütunlar mevcuttur. Bu sütunlarda seçim yapmak için <u>Seç/Выбрать</u> 
                            butonuna tıklamanız gerekmektedir. Bu alanlara manuel olarak veri girişi yapılamaz ve kopyalanmış bir metin yapıştırılamaz. Bu sütunlar boş 
                            bırakılamaz ve seçenek dışındaki bir veri kabul edilemez.<br><br>
                            •	<u>Seç/Выбрать</u> butonu bulunmayan sütunlar ise manuel olarak doldurulmalıdır. Bu sütunlardaki tüm bilgiler büyük Latin harfleriyle yazılmalıdır.
                        </p><br>
                        <img src="./static/img/2.jpg"><br><br>
                        <p><b>Seçilen Veriyi İlgili Sütuna Yapıştırma Talimatı:</b><br>
                            •	Sütundaki ilgili satır veya satırları seçmek için mouse imlecini kullanarak seçim yapın.<br>
                            •	Açılan pencerede “Seçili Hücrelere Görevi Ekle” butonuna tıklayın. Seçilen veri, seçilen satırlara eklenir. Ne kadar satır seçilirse, 
                            o kadar satıra veri eklenir.
                        </p><br>
                        <img src="./static/img/3.jpg"><br><br>    
                        <p><b>Girilen Veriyi Silme Talimatı:</b><br>
                            •	İlgili sütundaki veriyi silmek için “Seçili Hücreyi Temizle” butonuna tıklayın. </p><br>
                        <img src="./static/img/4.jpg"><br><br>
                        <p>•	DELETE komutuyla silme işlemi yapılamaz. DELETE komutuyla silme girişiminde uyarı mesajı alınır.
                        </p><br>
                        <img src="./static/img/5.jpg"><br><br>
                        <p><b>Veri Değişikliği Talimatı:</b><br>
                            •	İlgili veri üzerinde değişiklik yapmak için  <u>Seç/Выбрать</u> 
                            butonuna tıklayıp yeni bilgiyi seçin. Ardından “Seçili Hücrelere Görevi Ekle” butonuna tıklayarak değişiklikleri tamamlayın.
                        </p><br>
                        <img src="./static/img/6.jpg"><br><br>
                        <p><b>Tablonun En Sonuna Eklenen Yeni Sütunlar:</b><br>
                            <b>R sütunu:</b> Personelin Akkuyu’da çalışırken Türkiye Cumhuriyeti topraklarında ikamet ettiği yer. Bakanlık evraklarının 
                            kontrolünde bu sütunun doldurulması zorunlu değildir, ancak fiziki kart talebinde bulunurken bu alan doldurulmalıdır. 
                            Boş bırakılamaz ve personel Mersin il sınırı içerisinde yaşıyorsa, ilgili ikamet adresi seçilmelidir. Mersin il sınırları 
                            dışında yaşıyorsa “Mersin’de ikamet etmiyor” seçeneği kullanılmalıdır.
                        </p><br>
                        <img src="./static/img/25.png">
                        <img src="./static/img/26.png"><br>
                        <p><br><b>S sütunu:</b>Yabancı personel için çalışma izni başvuru numarası veya mavi kimlik numarası (99 ile başlayan kimlik) girilmelidir. 
                            Türk personeller veya görevlendirme ile saha ziyareti gerçekleştiren personeller için bu sütun doldurulması zorunlu değildir.
                        </p>
                        <img src="./static/img/27.png"><br>
                        <p><br><b>T sütunu:</b>Çalışma izni başvurusu yapılmışsa yabancı personel için bu sütun doldurulmalıdır. Fiziki kimlik mevcutsa doldurulmaz. 
                            Türk personeller ve saha ziyareti gerçekleştiren görevliler için doldurulması zorunlu değildir.
                        </p>
                        <img src="./static/img/28.png"><br>
                        <p><br><b>Doldurulacak Diğer Alanlar:</b><br>
                            1. Geliş Tarihi: Evrakların hazırlandığı tarih.<br>
                            2. Talep Eden: Firmanın personel sorumlusunun adı soyadı.<br>
                            3. Talep Eden İletişim Bilgileri: Firmanın personel sorumlusunun cep telefon numarası.<br>
                            4. Ad: Firmada göreve başlayacak personelin adı.<br>
                            5. Soyad: Firmada göreve başlayacak personelin soyadı.<br>
                            6. TC/PAS: Personelin kimlik veya pasaport numarası.<br>
                            7. Baba Adı: Yabancı personeller için baba adı.<br>
                            8. Doğum Yeri: Personelin doğum yeri.<br>
                            9. Doğum Tarihi: Personelin doğum tarihi.<br>
                        </p>
                        <img src="./static/img/personelgiris1.jpeg"><br><br>
                        <p> 10. Görevi: Personelin görev bilgisi.<br>
                            11. Firma: Personelin çalışacağı firma bilgisi.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Eğer firma listede yoksa bizimle iletişime geçin.<br><br>
                            12. Çalıştığı Yer: Personelin görev yapacağı yer.<br>
                            13. Cinsiyet: Personelin cinsiyet bilgisi.<br>
                            14. Çalışan Telefon Numarası: Personelin telefon numarası.<br>
                            15. Çalışan Yakını Telefon Numarası: Personelin yakınının telefon numarası.<br>
                            16. Adli Sicil Kaydı ve Sağlık Kısıtlamaları: Personelin varsa adli sicil kayıt ve sağlık kısıtlamaları.<br>
                            17. Uyruk: Personelin uyruk bilgisi.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Tüm alanlar talimatlara uygun olarak eksiksiz doldurulmalıdır.<br><br>
                        </p>
                        <img src="./static/img/personelgiris2.jpeg">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Adli Sicil</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div>
                            <p style="color: red;"><b><u>Not: Adli sicil belgesinin son 3 ay içinde alınmış olması gerekmektedir.</u></b></p>
                            <p><b><a href="https://www.turkiye.gov.tr/adli-sicil-kaydi" class="text-decoration-none"  target="_blank">Belge için tıklayınız.</a></b></p>
                            <p>Bu adımlar, e-Devlet üzerinden Adli Sicil Kaydı belgesinin nasıl alınacağını açık bir şekilde özetlemektedir. Firmanın ismi, başvuru amacınız 
                                ve diğer gerekli bilgilerin doğru girilmesi kritik önem taşır. İşte özetle yapılması gerekenler:<br><br>
                                1. <b>E-Devlet Girişi:</b> E-Devlet hesabınıza giriş yapın ve arama kısmına "adli sicil" yazarak ilgili sayfaya gidin.</p>
                            <img src="./static/img/adlisicil1.jpg">
                            <p><br>2. <b>İlk Bilgilendirme:</b> Karşınıza çıkan bilgilendirme metnini onaylayın ve "Devam Et"e basın.</p>
                            <img src="./static/img/adlisicil2.jpg">
                            <p><br>3. <b>Adli Sicil Formu:</b> Formda, "Kurum Türü"nü "Özel", "Belgenin Neden Verileceği"ni "Özel İş İşçi" olarak seçin.</p>
                            <img src="./static/img/adlisicil3.jpg"><br>
                            <img src="./static/img/adlisicil4.jpg"><br>
                            <p><br>4. <b>Firma İsmi:</b> "Belgenin Nereye Verileceği" kısmına çalışacağınız firmanın ismini tam olarak yazın ve "Devam Et"e basın.</p>
                            <img src="./static/img/adlisicil5.jpg">
                            <p><br>5. <b>Belge İndir:</b> Tüm işlemler tamamlandıktan sonra, belgeyi PDF formatında indirerek kaydedin.</p>
                            <img src="./static/img/adlisicil6.jpg">
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Kimlik</button>
                </div>
                <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">                                                        
                            <p><img src="./static/img/kimlikKartı.jpg" style="height: 400px; width: 300px; margin-right: 40px;"><br><br>
                            Türkiye Cumhuriyeti Kimlik Kartı'nın fotokopisinin veya taranmış halinin ön ve arka yüzleri, belirtilen görseldeki gibi alt alta 
                                ve net bir şekilde görünmelidir. Bu belgelerin okunabilir ve eksiksiz olması önemlidir, böylece tüm bilgiler doğru bir şekilde görülebilir. 
                                Tarama veya fotokopi işlemini yaparken, özellikle kimlik bilgileri ve fotoğrafın net olduğuna emin olun.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-6" aria-expanded="true">Mektup</button>
                </div>
                <div id="faq-1-6" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Akkuyu NGS inşaat alanına giriş izni ve personel giriş kartlarının düzenlenmesi için, şirket yöneticisi veya yetkili kişi tarafından imzalanmış (vekaletname ile) ve 
                            <b>Güvenlik Direktörü Artem Zarodysh</b> ve <b>Güvenlik Eş Direktörü Selim Temren’in</b> dikkatine yazılmış bir yazı gereklidir. Bu yazı, gerekli mektup ekleriyle 
                            birlikte aşağıdaki adımlar izlenerek gönderilmelidir:<br><br>
                            <b>1. Yazının Gönderimi:</b><br>
                            Güvenlik Direktörü Artem Zarodysh ve Güvenlik Eş Direktörü Selim Temren’e hitaben yazılan yazı, <a href="mailto:office@t2ic.com">office@t2ic.com</a> adresine iletilmelidir.<br><br>
                            <b>2. Belgelerin Kontrolü:</b><br>
                            Resmi yazı ve ekleri, yabancı personeller için <a href="mailto:id@t2ic.com">id@t2ic.com</a> , Türk personeller için <a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a> ve <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a> 
                            e-posta adreslerine gönderilmelidir.<br><br>
                            <b>3. Personel Listesi Tablosu:</b><br>
                            •	Tablo, şirket yöneticisi veya yetkili kişi tarafından kaşe ve imzalanmış olmalıdır.
                            •	Tablo, ekli belgelerde yer alan personel isimleriyle birebir eşleşmelidir. Aksi takdirde, belgeler işleme alınmayacaktır.<br><br>
                            Bu süreçlerin eksiksiz ve doğru bir şekilde tamamlanması, giriş izni ve kart düzenlemeleri için zorunludur.<br><br>
                            <img src="./static/img/personelist.png"><br><br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Заявление в министерство для турецкого персонала</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">Независимо от того, посетитель это или постоянный сотрудник, процесс получения разрешения входа на площадку состоит из двух этапов:<br><br>
                <b> 1. Первый этап: проверка документов Аккую.<br>
                    2. Второй этап: Получение разрешения на вход на площадку.</b>(После завершения рассмотрения в Министерстве вам известят и будут запрошены необходимые документы для офомления пропуска).<br><br>
                    После утверждения официального письма на имя Директора по безопасности Артема Зародыша и Со-директора по безопасности Селима Темрена, подписанного директором компании или уполномоченным лицом 
                    (с доверенностью), необходимо отправить нижеперечисленные документы по электронной почте <a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a> , <a href="mailto:hafize.isin@t2ic.co">hafize.isin@t2ic.com</a> <br><br>
                    • Копия или скан-копия удостоверения личности<br>
                    • Справка о наличии /отсутствии судимости<br>
                    • Информационная справка о вопросах, которые необходимо учитывать на площадке<br>
                    • Прямое выраженное согласие на вход на площадку<br>
                    • Полностью и правильно заполненная таблица Excel для оформления разрешения на вход на площадку персонала<br><br>
                    <b>Подача оригинала документов не требуется.</b><br><br>
                    Напоминаем также, что документы должны быть проименованы в правильном порядке. Данное оформление крайне важно для поддержания работы порядка и ускорения процесса. Документы должны быть 
                    названы заглавными буквами так, как они указаны в паспорте, и по каждому лицу должен быть создан отдельный файл. Файлы должны быть обозначены последними тремя цифрами идентификационного 
                    номера гражданина Турецкой Республики, все документы должны быть сжаты в формате 7Z и отправлены в формате PDF.<br><br>
                    Пример: файл ALI KAYA 456;<br><br>
                    ALI KAYA KIMLIK<br>
                    ALI KAYA AÇIK RIZA<br>
                    ALI KAYA ADLI SICIL<br>
                    ALI KAYA YASAKLI FALIYETLER <br><br>
                    <u style="color: red;"><b>ВАЖНО:</b></u> В случае, если работник переходит из другой компании, необходимо также предоставить первую и последнюю страницы договора, заключенного между ,
                    работником и компанией.<br><br>
                    <b>О состоянии здоровья:</b> При отсутствии медицинской формы (документа, подтверждающего прохождение обучения по охране труда и технике безопасности), вход на площадку в качестве 
                    посетителя оформлен будет не более чем на 5 рабочих дней. Те, кто будет находиться на площадке более длительное время, должны обратиться по адресу
                    <a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a> .
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder"  data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="false">Прямое выраженное согласие</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div>
                            <p><b>Заявление о прямом выраженном согласии в рамках процедур оформления, которые необходимо выполнить для входа на площадку атомной электростанции Аккую (АЭС)</b><br><br>
                                Настоящий документ предусматривает, в качестве ответственного за обработку данных и обработчика персональных данных, регистрацию, хранение, актуализацию, классификацию и 
                                обработку персональных данных в рамках процедур, необходимых для получения пропуска к сайту атомной электростанции Аккую, а также разглашение и передачу третьим лицам в 
                                случаях, разрешенных соответствующим законодательством, в случае прямо выраженного согласия.<br><br>
                                1. Прямое выраженное согласие состоит из 2 страниц. На первой странице в поле, отмеченном стрелкой, необходимо вписать имя и фамилию работника.</p>
                            <img src="./static/img/acikriza1.png">
                            <p><br>2. В нижней части второй страницы необходимо полностью указать имя и фамилию работника в двух разделах, обозначенных словами « имя и фамилия» ( поле, отмеченное стрелкой с цифрой 1.).
                                <br>В двух разделах, помеченных словом «Подпись» ( поле, отмеченное стрелкой с цифрой 2.), должна быть поставлена подпись работника.
                                <br>В разделе «Идентификационный номер гражданина Турецкой Республики» ( поле, отмеченное стрелкой с цифрой 3.) следует указать идентификационный номер гражданина Турецкой Республики.
                                <br>В разделе «Дата» ( поле, отмеченное стрелкой с цифрой 4.) следует указать дату составления документа.
                                <br>В разделе «Номер телефона» ( поле, отмеченное стрелкой с цифрой 5.) следует указать номер телефона работника.
                                <br>В разделе «Адрес электронной почты» (поле, отмеченное стрелкой с цифрой 6.) адрес электронной почты работника должен быть указан полностью.</p>
                            <img src="./static/img/acikriza2.png">
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Форма о запрещенной деятельности</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div>
                            <p><b>Документ о правилах, которые должны соблюдаться на площадке атомной электростанции Аккую (АЭС)</b><br><br>
                                Этот документ касается правил, которые должны соблюдаться на площадке АЭС «Аккую», и состоит из двух разделов. В обоих разделах необходимо полностью 
                                и правильно заполнить одну и ту же информацию.<br>
                                <br>Имя и фамилия сотрудника должны быть написаны в разделе «Имя и фамилия» ( поле, обозначенное стрелкой с цифрой 1.).
                                <br>«Номер удостоверения личности гражданина ТР/паспорта» ( поле, обозначенное стрелкой с цифрой 2.), если гражданин Турецкой Республики, то указать номер 
                                удостоверения личности гражданина Турции, если гражданин другого государства, следует указать номер паспорта.
                                <br>«Компания» (поле, обозначенное стрелкой с цифрой 3.),если гражданин Турецкой Республики, то указать номер удостоверения личности гражданина Турции, 
                                если гражданин другого государства, следует указать номер паспорта.
                                <br>В разделе «Ознакомился» ( поле, обозначенное стрелкой с цифрой 4.) следует указать дату заполнения документа.
                            </p>
                            <img src="./static/img/yasaklıfaaliyetler.png">
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Таблица Excel для допуска персонала</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Аккую Нуклеар А.Ш. Сведения о месте жительства работника, осуществляющего вход на территорию строительной площадки</b><br><br>
                            Для проведения службой безопасности Министерства энергетики проверки работника, осуществляющего вход на территорию строительной площадки Аккую Нуклеер А.Ш., 
                            необходимо предоставить нам информацию об адресах места жительства работника. Пропуска выдаются работникам в соответствии с этими списками. Напоминаем, что 
                            компания Аккую Нуклеер А.Ш. не выдает пропуска тем, кто не был указан в списке.<br><br>
                            При направлении документов Министерства в наш адрес для проверки, если адрес места жительства работников еще не определен или может быть изменен, необходимо 
                            ОБЯЗАТЕЛЬНО обновить или добавить информацию о месте жительства при запросе пропуска.<br><br>
                            <b>Для внесения данных о работниках, которые будут трудоустроены на строительной площадке Аккую Нуклеер А.Ш., используются следующие столбцы и инструкции по их заполнению:</b><br>
                            •	В таблице работников, осуществляющего вход на территорию строительной площадки есть столбцы, из которых обязательно должен быть сделан фильтр. Для выделения фильтра в 
                            этих столбцах необходимо нажать "Выбрать". В эти поля нельзя ввести данные вручную, а также невозможно вставить скопированный текст. Эти столбцы нельзя оставлять пустыми, 
                            и данные, отличные от выбранного варианта, не принимаются.<br><br>
                            •	Столбцы, для которых нет функции "Выбрать", необходимо заполнить вручную. Вся информация в этих столбцах должна быть написана заглавными латинскими буквами.<br><br>
                        </p><br>
                        <img src="./static/img/2.jpg"><br><br>
                        <p><b>Инструкция по вставке выбранных данных в соответствующий столбец:</b><br>
                            • С помощью курсора мыши выберите соответствующую строку или строки в столбце.<br>
                            • В открывшемся окне нажать «Добавить задачу в выделенные ячейки». Выбранные данные вставляются в выбранные строки. Сколько строк будет выбрано, в такое же количество строк будут добавлены данные.
                        </p><br>
                        <img src="./static/img/3.jpg"><br><br>    
                        <p><b>Инструкция по удалению введенных данных:</b><br>
                            • Нажмите “Очистить выбранную ячейку”, чтобы удалить данные из соответствующего столбца.</p><br>
                        <img src="./static/img/4.jpg"><br><br>
                        <p>• Удаление невозможно выполнить с помощью команды DELETE. При попытке удаления с помощью команды DELETE появляется предупреждающее сообщение.
                        </p><br>
                        <img src="./static/img/5.jpg"><br><br>
                        <p><b>Инструкция по изменению данных:</b><br>
                            • Чтобы внести изменения в соответствующие данные, нажмите "Выбрать" и выберите новую информацию. Затем завершите изменения, нажав ”Добавить задачу в выбранные ячейки".
                        </p><br>
                        <img src="./static/img/6.jpg"><br><br>
                        <p><b>Новые столбцы, добавленные в самый конец таблицы:</b><br>
                            <b>Столбец R:</b> Место жительства работника на территории Турецкой Республики во время работы на Аккую. Заполнение этого столбца не является 
                            обязательным при проверке документов министерства, но это поле должно быть заполнено при запросе физического пропуска. Данный пункт не должен 
                            быть пустым, и если работник проживает в провинции Мерсин, необходимо выбрать соответствующий адрес места жительства. Если работник проживает 
                            за пределами провинции Мерсин, следует выбрать вариант «Не проживает в Мерсине».
                        </p><br>
                        <img src="./static/img/25.png">
                        <img src="./static/img/26.png"><br>
                        <p><br><b>Колонка S:</b> Для иностранного персонала необходимо ввести номер заявления на получение разрешения на работу или номер удостоверения 
                            личности синего цвета ( номер удостоверения личности начинается с 99). Данная колонка не является обязательной для турецкого персонала или 
                            работников, посещающих площадку временно.
                        </p>
                        <img src="./static/img/27.png"><br>
                        <p><br><b>Колонка T:</b> В случае если заявление на получение разрешения на работу было подано, эта колонка должна заполняться для иностранного персонала. Если разрешение на работу выдано, то заполнять колонку не нужно. Для турецких работников и должностных лиц, осуществляющих вход на площадку, данная колонка является не обязательной.
                        </p>
                        <img src="./static/img/28.png"><br>
                        <p><br><b>Прочие поля для заполнения:</b><br>
                            1. Дата входа: дата подготовки документов.<br>
                            2. Заявитель: ФИО работника отдела кадров компании.<br>
                            3. Контактная информация заявителя: номер мобильного телефона работника отдела кадров компании.<br>
                            4. Имя: имя кандидата, который будет работать в компании.<br>
                            5. Фамилия: фамилия кандидата, который будет работать в компании.<br>
                            6. № кимлика/паспорта: идентификационный номер гражданина ТР или номер паспорта работника.<br>
                            7. Имя отца: имя отца для иностранного персонала.<br>
                            8. Место рождения: место рождения работника.<br>
                            9. Дата рождения: Дата рождения работника. <br>
                        </p>
                        <img src="./static/img/personelgiris1.jpeg"><br><br>
                        <p> 10. Должность: информация о должности работника.<br>
                            11. Компания: информация о компании, в которой будет работать работник.<br><br>
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Если компании нет в списке, свяжитесь с нами.<br><br> 
                            12. Место работы: место, где будет выполнять свою работу персонал.<br>
                            13. Пол: указать пол работника.<br>
                            14. Номер телефона работника: номер телефона работника.<br>
                            15. Номер телефона родственника работника: номер телефона родственника работника.<br>
                            16. Справка о наличии /отсутствии судимости и ограничения по здоровью: справка о наличии /отсутствии судимости и ограничения по здоровью персонала, если таковые имеются.<br>
                            17. Национальность: информация о национальности работника. <br>
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Все поля должны быть полностью заполнены в соответствии с инструкциями.<br><br>
                        </p>
                        <img src="./static/img/personelgiris2.jpeg">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Справка о наличии /отсутствии судимости</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div>
                            <p style="color: red;"><b><u>Примечание: справка о наличии /отсутствии судимости должна быть получена в течение последних 3 месяцев.</u></b></p>
                            <p><b><a href="https://www.turkiye.gov.tr/adli-sicil-kaydi" class="text-decoration-none"  target="_blank">Нажмите для перехода к документу.</a></b></p>
                            <p>ЭЭти шаги четко описывают, как получить справку о наличии /отсутствии судимости через приложение  e-Devlet. Очень важно правильно ввести название фирмы, цель вашего заявления и прочую необходимую информацию. Ниже приводится краткое описание действий, которые необходимо выполнить:<br><br> 
                                1. <b>Вход в систему приложения E-Devlet:</b> Войти в свою учетную запись E-Devlet и перейти на соответствующую страницу, набрав в поле поиска «справка о наличии /отсутствии судимости».</p>
                            <img src="./static/img/adlisicil1.jpg">
                            <p><br>2. <b>Первое уведомление:</b> подтвердить текст уведомления и нажать "Продолжить".</p>
                            <img src="./static/img/adlisicil2.jpg">
                            <p><br>3. <b>Форма справки о наличии /отсутствии судимости:</b> В форме выберите «Тип организации» как «Частная» и «Причина выдачи документа» как « Работник частного сектора».</p>
                            <img src="./static/img/adlisicil3.jpg"><br>
                            <img src="./static/img/adlisicil4.jpg"><br>
                            <p><br>4. <b>Название компании:</b> указать полное название компании, в которой вы будете работать, в разделе «Место требования документа» и нажмите «Продолжить».</p>
                            <img src="./static/img/adlisicil5.jpg">
                            <p><br>5. <b>Выгрузка документа:</b> по завершении всех операций сохраните документ, скачав его в формате PDF.</p>
                            <img src="./static/img/adlisicil6.jpg">
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Удостоверение личности( кимлик)</button>
                </div>
                <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">                                                        
                            <p><img src="./static/img/kimlikKartı.jpg" style="height: 400px; width: 300px; margin-right: 40px;"><br><br>
                                Лицевая и оборотная стороны копии или отсканированной копии удостоверения личности Турецкой Республики должны быть четко отображены, одна под другой, как показано на указанном ниже изображении. Важно, чтобы эти документы были читаемыми и полными, чтобы вся информация была видна корректно. При сканировании или ксерокопировании убедитесь, что персональные данные и, в особенности, фотография были четко видны.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-6" aria-expanded="true">Официальное письмо</button>
                </div>
                <div id="faq-1-6" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Для получения разрешения на вход на строительную площадку АЭС «Аккую» и выдачи пропусков работникам необходимо наличия письма, подписанного директором компании или уполномоченным лицом (с доверенностью) и адресованного директору по безопасности Артему Зародышу и со-директору по безопасности Селиму Темрену. Данное письмо следует направить с необходимыми приложениями к письму, выполнив следующие действия:<br><br>
                            <b>1.  Отправка письма:</b><br>
                            Письмо на имя директора по безопасности Артема Зародыша и содиректора по безопасности Селима Темрена следует отправить по адресу <a href="mailto:office@t2ic.com">office@t2ic.com</a>.<br><br>
                            <b>2. Проверка документов:</b><br>
                            Официальное письмо и приложения к нему должны быть отправлены на электронные адреса <a href="mailto:id@t2ic.com">id@t2ic.com</a>, в отношении иностранных работников, <a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a> и <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a> в отношении турецких работников.<br><br>
                            <b>3. Таблица со списком работников:</b><br>
                            • Таблица должна быть заверена печатью и подписью руководителя компании или уполномоченного лица.<br>
                            • Таблица должна соответствовать фамилиям работников в прилагаемых документах. В противном случае документы не будут приняты к обработке.<br><br>
                            Полное и точное выполнение этих условий является обязательным требованием для оформления разрешения на вход и выдачи пропуска.<br><br>                                                    
                            <img src="./static/img/personelist.png"><br><br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    },
    tgiris: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Türk Personeller İçin Giriş Talebi</i>
            <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
                <div class="accordion-item">
                    <p class="ps-4 mt-3">
                        Akkuyu NGS inşaat alanına personel giriş işlemleri için aşağıda listelenen evraklar, (<a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a> , <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a>) 
                        e-posta adreslerine gönderilmelidir:<br><br>
                        •	Personel Giriş Excel Tablosu (eksiksiz ve doğru doldurulmalıdır)<br>
                        •	Takip Formu<br>
                        •	SGK Belgesi<br>
                        •	Fotoğraf<br><br>
                        Fiziki evrak teslimi gerekmemektedir.<br><br>
                        Belgelerin isimlendirilmesi: Evraklar, personelin pasaporttaki adı ve soyadı ile büyük harflerle, doğru sırayla ve TC kimlik numarasının son üç hanesiyle adlandırılmalıdır. 
                        Her personel için ayrı bir dosya oluşturulmalı ve belgeler 7Z zip formatında sıkıştırılarak gönderilmelidir.<br><br>
                        Örnek isimlendirme:<br>
                        ALI KAYA TAKIP FORMU<br>
                        ALI KAYA SGK<br>
                        ALI KAYA FOTOGRAF<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Eğer personel başka bir firmadan geliyorsa, geldiği firma ile sahadan bir firmanın sözleşmesinin ilk ve son sayfasının da gönderilmesi gereklidir.<br><br>

                        •	<b>Sağlık Takip Formu</b> olmadan, maksimum 5 iş günü boyunca ziyaretçi girişi yapılabilir. Daha uzun süre kalacak personel için <a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a> 
                        adresi ile iletişime geçilmelidir.
                    </p>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Personel Giriş Excel</button>
                    </div>
                    
                    <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p><b>Akkuyu Nükleer A.Ş. Şantiye Sahasına Giriş Yapan Personelin İkamet Bilgileri Hakkında</b><br><br>
                                Akkuyu Nükleer A.Ş. şantiye sahasına giriş yapan personelin güvenlik soruşturmalarının Enerji Bakanlığı tarafından gerçekleştirilebilmesi 
                                için, personelin ikamet adreslerinin tarafımıza bildirilmesi zorunludur. Giriş kartları, bu listelere göre çalışanlara teslim edilecek olup, 
                                bildirilmemiş olanlar için Akkuyu Nükleer A.Ş. tarafından kart teslimi yapılmayacağını önemle bildiririz.<br><br>
                                Bakanlık evraklarını kontrol amacıyla tarafımıza iletirken, eğer personelin ikamet adresi henüz belirlenmemişse ya da değişebilir bir durumda 
                                ise, saha giriş kart talebinde bulunurken ikamet bilgilerini güncellemeniz ya da eklemeniz MUTLAKA gerekmektedir.<br><br>
                                <b>Akkuyu Nükleer A.Ş. şantiye sahasında çalışacak personelin veri girişine yönelik eklenen sütunlar ve kullanım talimatları şu şekildedir:</b><br>
                                •	Personel giriş tablosunda, zorunlu olarak seçim yapılması gereken sütunlar mevcuttur. Bu sütunlarda seçim yapmak için <u>Seç/Выбрать</u> 
                                butonuna tıklamanız gerekmektedir. Bu alanlara manuel olarak veri girişi yapılamaz ve kopyalanmış bir metin yapıştırılamaz. Bu sütunlar boş 
                                bırakılamaz ve seçenek dışındaki bir veri kabul edilemez.<br><br>
                                •	<u>Seç/Выбрать</u> butonu bulunmayan sütunlar ise manuel olarak doldurulmalıdır. Bu sütunlardaki tüm bilgiler büyük Latin harfleriyle yazılmalıdır.
                            </p><br>
                            <img src="./static/img/2.jpg"><br><br>
                            <p><b>Seçilen Veriyi İlgili Sütuna Yapıştırma Talimatı:</b><br>
                                •	Sütundaki ilgili satır veya satırları seçmek için mouse imlecini kullanarak seçim yapın.<br>
                                •	Açılan pencerede “Seçili Hücrelere Görevi Ekle” butonuna tıklayın. Seçilen veri, seçilen satırlara eklenir. Ne kadar satır seçilirse, 
                                o kadar satıra veri eklenir.
                            </p><br>
                            <img src="./static/img/3.jpg"><br><br>    
                            <p><b>Girilen Veriyi Silme Talimatı:</b><br>
                                •	İlgili sütundaki veriyi silmek için “Seçili Hücreyi Temizle” butonuna tıklayın. </p><br>
                            <img src="./static/img/4.jpg"><br><br>
                            <p>•	DELETE komutuyla silme işlemi yapılamaz. DELETE komutuyla silme girişiminde uyarı mesajı alınır.
                            </p><br>
                            <img src="./static/img/5.jpg"><br><br>
                            <p><b>Veri Değişikliği Talimatı:</b><br>
                                •	İlgili veri üzerinde değişiklik yapmak için  <u>Seç/Выбрать</u> 
                                butonuna tıklayıp yeni bilgiyi seçin. Ardından “Seçili Hücrelere Görevi Ekle” butonuna tıklayarak değişiklikleri tamamlayın.
                            </p><br>
                            <img src="./static/img/6.jpg"><br><br>
                            <p><b>Tablonun En Sonuna Eklenen Yeni Sütunlar:</b><br>
                                <b>R sütunu:</b> Personelin Akkuyu’da çalışırken Türkiye Cumhuriyeti topraklarında ikamet ettiği yer. Bakanlık evraklarının 
                                kontrolünde bu sütunun doldurulması zorunlu değildir, ancak fiziki kart talebinde bulunurken bu alan doldurulmalıdır. 
                                Boş bırakılamaz ve personel Mersin il sınırı içerisinde yaşıyorsa, ilgili ikamet adresi seçilmelidir. Mersin il sınırları 
                                dışında yaşıyorsa “Mersin’de ikamet etmiyor” seçeneği kullanılmalıdır.
                            </p><br>
                            <img src="./static/img/25.png">
                            <img src="./static/img/26.png"><br>
                            <p><br><b>S sütunu:</b>Yabancı personel için çalışma izni başvuru numarası veya mavi kimlik numarası (99 ile başlayan kimlik) girilmelidir. 
                                Türk personeller veya görevlendirme ile saha ziyareti gerçekleştiren personeller için bu sütun doldurulması zorunlu değildir.
                            </p>
                            <img src="./static/img/27.png"><br>
                            <p><br><b>T sütunu:</b>Çalışma izni başvurusu yapılmışsa yabancı personel için bu sütun doldurulmalıdır. Fiziki kimlik mevcutsa doldurulmaz. 
                                Türk personeller ve saha ziyareti gerçekleştiren görevliler için doldurulması zorunlu değildir.
                            </p>
                            <img src="./static/img/28.png"><br>
                            <p><br><b>Doldurulacak Diğer Alanlar:</b><br>
                                1. Geliş Tarihi: Evrakların hazırlandığı tarih.<br>
                                2. Talep Eden: Firmanın personel sorumlusunun adı soyadı.<br>
                                3. Talep Eden İletişim Bilgileri: Firmanın personel sorumlusunun cep telefon numarası.<br>
                                4. Ad: Firmada göreve başlayacak personelin adı.<br>
                                5. Soyad: Firmada göreve başlayacak personelin soyadı.<br>
                                6. TC/PAS: Personelin kimlik veya pasaport numarası.<br>
                                7. Baba Adı: Yabancı personeller için baba adı.<br>
                                8. Doğum Yeri: Personelin doğum yeri.<br>
                                9. Doğum Tarihi: Personelin doğum tarihi.<br>
                            </p>
                            <img src="./static/img/personelgiris1.jpeg"><br><br>
                            <p> 10. Görevi: Personelin görev bilgisi.<br>
                                11. Firma: Personelin çalışacağı firma bilgisi.<br><br>
                                <u style="color: red;"><b>NOT:</b></u> Eğer firma listede yoksa bizimle iletişime geçin.<br><br>
                                12. Çalıştığı Yer: Personelin görev yapacağı yer.<br>
                                13. Cinsiyet: Personelin cinsiyet bilgisi.<br>
                                14. Çalışan Telefon Numarası: Personelin telefon numarası.<br>
                                15. Çalışan Yakını Telefon Numarası: Personelin yakınının telefon numarası.<br>
                                16. Adli Sicil Kaydı ve Sağlık Kısıtlamaları: Personelin varsa adli sicil kayıt ve sağlık kısıtlamaları.<br>
                                17. Uyruk: Personelin uyruk bilgisi.<br><br>
                                <u style="color: red;"><b>NOT:</b></u> Tüm alanlar talimatlara uygun olarak eksiksiz doldurulmalıdır.<br><br>
                            </p>
                            <img src="./static/img/personelgiris2.jpeg">
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Takip Formu</button>
                    </div>
                    <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            Akkuyu NGS inşaat sahasında, çalışanlar 5 günden fazla sahada kalmayı planlıyorlarsa, sağlık muayenesinden geçmeleri zorunludur. Genel Yüklenici İK 
                            departmanının yeni düzenlemeleri uyarınca, saha geçiş kartı başvuruları, İK bölümü, sağlık bölümü ve iş sağlığı ve güvenliği bölümü tarafından imzalanmış 
                            ve onaylanmış "Gözetim ve Kayıt Formu" (ekli form) olmadan işleme alınmayacaktır.<br><br>
                            <b>Prosedür:</b><br>
                            •	Saha geçiş kartı başvurusunun yapılabilmesi için, çalışanın evraklarının işveren tarafından kontrol edildiğine dair tarafınıza 
                            bildirim geldikten sonra, bu formun ayrıca tarafımıza gönderilmesi gerekmektedir.<br>
                            •	Bu prosedür, çalışma izni (Çİ) başvurusu olan çalışanlar ile sahaya 30 günden fazla kalmamak üzere görevlendirilip sonrasında Çİ 
                            alacak çalışanları da kapsamaktadır.<br><br>
                            <b>Gözetim ve Kayıt Formu ile ilgili:</b> Formun nasıl alınacağı, kim tarafından verileceği gibi sorularınızı, çalıştığınız veya sözleşmeli 
                            olduğunuz şirketin İK departmanı çalışanlarına yöneltmenizi rica ederiz.<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u>  Eğer başka bir firma ile sözleşmeniz varsa, o firmanın kaşeli ve imzalı ilk ve son 
                            sayfalarını da eklemeniz gerekmektedir.<br><br>
                            <b>TİTAN 2 IC İÇTAŞ İNŞAAT A.Ş Ekibi</b>
                            <div id="team1"></div>
                            <b>TSM ENERJİ Ekibi</b>
                            <div id="team2"></div>
                            <b>IC İÇTAŞ NÜKLEER Ekibi</b>
                            <div id="team3"></div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">SGK</button>
                    </div>
                    <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>SGK belgenizi, kişisel E-Devlet hesabınızdan aşağıda verilen link üzerinden veya firmanızın İnsan Kaynakları departmanından temin edebilirsiniz:<br><br>
                            <b><a href="https://www.turkiye.gov.tr/sgk-tescil-ve-hizmet-dokumu" class="text-decoration-none" target="_blank">SGK Belgesi için E-Devlet</a></b></p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Fotoğraf</button>
                    </div>
                    <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p><img src="./static/img/foto.png" style="margin-right: 40px;">
                                <br><br>Akkuyu Nükleer Güç Sahasına giriş kartınıza basılmak üzere fotoğraf göndermeniz gerekmektedir.<br><br>
                                    Lütfen aşağıdaki kurallara dikkat edin:<br>
                                    1. Fotoğrafın arka planı beyaz olmalı ve fotoğraf net olmalıdır (flu, parlak veya gölgeli yüzler kabul edilmeyecektir).<br>
                                    2. Fotoğraf kırpılmış olmalı ve yalnızca .jpg formatında gönderilmelidir.<br>
                                    3. Fotoğraf isimlendirmesi, İngilizce küçük harflerle ve TC Kimlik numarasının son 3 hanesi ile yapılmalıdır.<br>
                                    Örnek : MEHMET ŞAHİN >> mehmetsahin123.jpg<br><br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Запрос на вход для турецких сотрудников</i>
            <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
                <div class="accordion-item">
                    <p class="ps-4 mt-3">
                        Для оформления входа персонала на строительную площадку Akkuyu NPP, следующие документы должны быть отправлены на электронные почты (<a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a>, <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a>):<br><br>
                        • Excel таблица с данными о персонале (должна быть заполнена полностью и правильно)<br>
                        • Форма отслеживания<br>
                        • Документ SGK<br>
                        • Фотография<br><br>
                        Физическая доставка документов не требуется.<br><br>
                        Имя документов: Документы должны быть названы в соответствии с именем и фамилией сотрудника, как указано в паспорте, большими буквами, в правильном порядке и с последними тремя цифрами номера TC. Для каждого сотрудника должен быть создан отдельный файл, и документы должны быть сжаты в формате 7Z и отправлены.<br><br>
                        Пример именования:<br>
                        ALI KAYA TAKIP FORMU<br>
                        ALI KAYA SGK<br>
                        ALI KAYA FOTOGRAF<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Если сотрудник приходит от другой компании, необходимо отправить первую и последнюю страницы контракта между компанией и полевой фирмой.<br><br>
                        • <b>Форма медицинского наблюдения</b> не требуется для входа посетителей на срок до 5 рабочих дней. Для сотрудников, которые будут находиться дольше, следует связаться с <a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a>.                                                   
                    </p>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Excel для Входа Сотрудников</button>
                    </div>
                    <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p><b>О Проживании Персонала, Который Проходит На Строительную Площадку Akkuyu Nükleer A.Ş.</b><br><br>
                                Для проведения проверки безопасности персонала, который проходит на строительную площадку Akkuyu Nükleer A.Ş. Министерством энергетики, необходимо предоставить 
                                информацию о месте жительства сотрудников. Пропускные карты будут выданы сотрудникам согласно этим спискам, и важно отметить, что для тех, чьи данные не будут 
                                предоставлены, Akkuyu Nükleer A.Ş. не будет выдавать карты.<br><br>
                                При отправке документов для проверки в Министерство, если адрес проживания сотрудника ещё не определён или может измениться, ОБЯЗАТЕЛЬНО необходимо обновить 
                                или добавить информацию о месте жительства при запросе пропускной карты для доступа на площадку.<br><br>
                                <b>На строительной площадке Akkuyu Nükleer A.Ş. для сотрудников, которые будут работать, добавлены следующие столбцы для ввода данных и инструкции по их использованию:</b><br>
                                •	В таблице ввода данных сотрудников есть столбцы, в которых необходимо выбрать значение. Чтобы выбрать значение в этих столбцах, нужно нажать кнопку "Seç/Выбрать". 
                                В эти поля нельзя вводить данные вручную, и нельзя вставлять скопированный текст. Эти столбцы не могут быть оставлены пустыми, и данные, не входящие в список вариантов, 
                                не будут приняты.<br><br>
                                •	Столбцы, в которых нет кнопки "Seç/Выбрать", должны быть заполнены вручную. Все данные в этих столбцах должны быть написаны большими латинскими буквами.
                            </p><br>
                            <img src="./static/img/2.jpg"><br><br>
                            <p><b>Инструкция по вставке выбранных данных в соответствующий столбец:</b><br>
                                •	Для выбора соответствующих строк в столбце используйте указатель мыши.<br>
                                •	В открывшемся окне нажмите кнопку "Добавить задачу в выбранные ячейки". 
                                Выбранные данные будут добавлены в выбранные строки. Чем больше строк будет выбрано, тем больше строк будет заполнено данными.
                            </p><br>
                            <img src="./static/img/3.jpg"><br><br>    
                            <p><b>Инструкция по удалению введенных данных:</b><br>
                                •	Чтобы удалить данные в соответствующем столбце, нажмите кнопку "Очистить выбранную ячейку". </p><br>
                            <img src="./static/img/4.jpg"><br><br>
                            <p>•	Операция удаления с помощью команды DELETE невозможна. При попытке удаления с помощью команды DELETE будет выведено сообщение об ошибке.
                            </p><br>
                            <img src="./static/img/5.jpg"><br><br>
                            <p><b>Инструкция по изменению данных:</b><br>
                                •	Чтобы внести изменения в соответствующие данные, нажмите кнопку "Seç/Выбрать" и выберите новую информацию. Затем нажмите кнопку 
                                "Добавить задачу в выбранные ячейки", чтобы завершить изменения.
                            </p><br>
                            <img src="./static/img/6.jpg"><br><br>
                            <p><b>Новые столбцы, добавленные в конец таблицы:</b><br>
                                <b>Столбец R:</b> Место проживания сотрудника на территории Турецкой Республики, пока он работает на Акуйской АЭС. Заполнение этого столбца 
                                не обязательно при проверке документов для Министерства, однако должно быть заполнено при запросе физической карты. Это поле не может быть 
                                оставлено пустым, и если сотрудник проживает в пределах границ Мерсина, следует выбрать соответствующий адрес проживания. Если он проживает 
                                за пределами границ Мерсина, следует выбрать вариант "Не проживает в Мерсине".
                            </p><br>
                            <img src="./static/img/25.png">
                            <img src="./static/img/26.png"><br>
                            <p><br><b>Столбец S:</b> Для иностранных сотрудников следует ввести номер заявки на рабочее разрешение или номер синего удостоверения личности 
                                (номер удостоверения, начинающийся с 99). Для турецких сотрудников или сотрудников, выполняющих визит на площадку по направлению, заполнение 
                                этого столбца не является обязательным.
                            </p>
                            <img src="./static/img/27.png"><br>
                            <p><br><b>Столбец T:</b> Если заявка на рабочее разрешение была подана, этот столбец должен быть заполнен для иностранных сотрудников. 
                                Если имеется физический идентификатор, то столбец не заполняется. Для турецких сотрудников и сотрудников, выполняющих визит на площадку, 
                                заполнение этого столбца не обязательно.
                            </p>
                            <img src="./static/img/28.png"><br>
                            <p><br><b>Заполняемые другие поля:</b><br>
                                1. Дата поступления: Дата подготовки документов.<br> 
                                2. Запрашивающий: Имя и фамилия ответственного за персонал компании.<br> 
                                3. Контактная информация запрашивающего: Мобильный номер телефона ответственного за персонал компании.<br> 
                                4. Имя: Имя сотрудника, который начнет работу в компании.<br> 
                                5. Фамилия: Фамилия сотрудника, который начнет работу в компании.<br> 
                                6. ТС/ПАС: Номер удостоверения личности или паспорта сотрудника.<br> 
                                7. Имя отца: Имя отца для иностранных сотрудников.<br> 
                                8. Место рождения: Место рождения сотрудника.<br> 
                                9. Дата рождения: Дата рождения сотрудника.<br>
                            </p>
                            <img src="./static/img/personelgiris1.jpeg"><br><br>
                            <p> 10. Должность: Должностная информация о сотруднике.<br> 
                                11. Компания: Информация о компании, в которой будет работать сотрудник.<br><br> 
                                <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Если компании нет в списке, пожалуйста, свяжитесь с нами.<br><br> 
                                12. Место работы: Место, где сотрудник будет работать.<br> 
                                13. Пол: Информация о поле сотрудника.<br> 
                                14. Номер телефона сотрудника: Телефонный номер сотрудника.<br> 
                                15. Номер телефона родственника сотрудника: Телефонный номер родственника сотрудника.<br> 
                                16. Судимость и ограничения по здоровью: Судимость и ограничения по здоровью сотрудника, если они имеются.<br> 
                                17. Национальность: Информация о национальности сотрудника.<br><br> 
                                <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Все поля должны быть заполнены полностью в соответствии с инструкциями.<br><br>
                            </p>
                            <img src="./static/img/personelgiris2.jpeg">
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Форма мониторинга</button>
                    </div>
                    <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            На строительной площадке Akkuyu NPP, если сотрудники планируют находиться на объекте более 5 дней, они обязаны пройти медицинское обследование. Согласно новым правилам департамента кадров Генерального подрядчика, заявки на получение пропуска на площадку не будут обработаны без "Формы мониторинга и учета" (см. приложенную форму), подписанной и утвержденной отделами кадров, медицинским и отделом охраны труда.<br><br>
                            <b>Процедура:</b><br>
                            • Для подачи заявки на пропуск на площадку, после получения уведомления о том, что документы сотрудника проверены работодателем, эта форма также должна быть отправлена нам.<br>
                            • Эта процедура также касается сотрудников, у которых есть заявка на рабочее разрешение (Çİ), а также сотрудников, которые назначены на работу на площадке на срок до 30 дней и затем получат рабочее разрешение.<br><br>
                            <b>О Форме мониторинга и учета:</b> По вопросам о том, как получить форму и кто ее выдает, пожалуйста, обращайтесь к сотрудникам отдела кадров вашей компании или с которой у вас есть контракт.<br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> Если у вас есть контракт с другой компанией, необходимо приложить первую и последнюю страницы договора этой компании с печатью и подписью.<br><br>
                            <b>Команда TİTAN 2 IC İÇTAŞ İNŞAAT A.Ş</b>
                            <div id="team1"></div>
                            <b>Команда TSM ENERJİ</b>
                            <div id="team2"></div>
                            <b>Команда IC İÇTAŞ NÜKLEER</b>
                            <div id="team3"></div>
                        </div>
                        
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">СГК</button>
                    </div>
                    <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>Вы можете получить ваш документ SGK через вашу личную учетную запись в системе E-Devlet по следующей ссылке или через отдел кадров вашей компании:<br><br>
                                <b><a href="https://www.turkiye.gov.tr/sgk-tescil-ve-hizmet-dokumu" class="text-decoration-none" target="_blank">Документ SGK через E-Devlet</a></b></p>                                                    
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Фотография</button>
                    </div>
                    <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p><img src="./static/img/foto.png" style="margin-right: 40px;">
                                <br><br>Для получения пропуска на вход на строительную площадку Akkuyu NPP необходимо отправить фотографию для нанесения на пропуск.<br><br>
                                    Пожалуйста, обратите внимание на следующие правила:<br>
                                    1. Фон фотографии должен быть белым, а сама фотография должна быть четкой (не допускаются размытые, яркие или затененные изображения лиц).<br>
                                    2. Фотография должна быть обрезана и отправлена в формате .jpg.<br>
                                    3. Название фотографии должно быть на английском языке с использованием строчных букв и последних трех цифр номера TC.<br>
                                    Пример: MEHMET ŞAHİN >> mehmetsahin123.jpg<br><br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                                        
            </div>
        </div>`
    },
    rusbelarus: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Rusya-Belarus Uyruklu Personeller İçin Bakanlık Başvurusu</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">Saha giriş onayı alınması için (ziyaretçi ya da sürekli çalışanlar için aynı prosedür geçerlidir), iki aşamalı bir süreç uygulanmaktadır.<br><br>
                    <b>1. Aşama:</b><br>Şirket yöneticisi veya yetkili kişi tarafından imzalanmış (vekaletname ile) ve <b>Güvenlik Direktörü Artem Zarodysh</b> ve 
                    <b>Güvenlik Eş Direktörü Selim Temren’in</b>dikkatine yazılmış resmi mektup onayı gerekmektedir.<br><br>
                    <b>2. Aşama:</b><br>Onayın ardından, aşağıda listelenen belgeler tarafımıza <a href="mailto:id@t2ic.com">id@t2ic.com</a> e-posta adresi üzerinden gönderilmelidir:<br><br>
                    •	Pasaport Taraması<br>
                    •	Resmi mektup<br>
                    •   Eğer mevcutsa mavi kimlik taraması, yoksa:<br> 
                        &nbsp&nbsp&nbsp - Çalışma izni başvurusu ve ekran görüntüsü, yoksa:<br>
                        &nbsp&nbsp&nbsp - Görevlendirme ve çalışma defteri<br>
                    •	Sahada Dikkat Edilecek Hususlar İle İlgili Bilgilendirme<br>
                    •	Sahaya Girişe İlişkin Açık Rıza Formu<br>       
                    •	Personel Giriş Excel Tablosu (eksiksiz ve talimatlara uygun doldurulmalıdır)<br><br>
                    <u style="color: red;"><b>NOT:</b></u> Görevlendirmeli personeller için kart veya geçiş süresi, görevlendirme süresi kadar olacaktır.<br><br>
                    <b>Fiziksel evrak teslimi gerekli değildir.</b><br><br>
                    Belgelerin doğru sıralama ve isimlendirme kurallarına uygun olması önemlidir. Bu, belgelerin işleme alınma sürecini hızlandıracaktır. Belgeleri, 
                    pasaporttaki gibi ad-soyad ile büyük harflerle isimlendirip, her bir kişi için ayrı dosyalar oluşturmalısınız. Evraklarınızı pasaport numarası 
                    ile isimlendirip, 7Z zip formatında ve PDF dosyası olarak göndermeniz rica olunur.<br><br>
                    <u style="color: red;"><b>NOT:</b></u> Personel sayısı birden fazla ise belgeleri dosya ismi ile isimlendirmesi gerekmektedir. Örneğin, bütün pasaport taramaları "PASAPORT" adında 
                    tek bir dosya içinde olmalıdır.<br><br>
                    Örneğin: KARINA SAZANOVA dosyasında:<br><br>
                    KARINA SAZANOVA PASAPORT<br>
                    KARINA SAZANOVA AÇIK RIZA<br>
                    KARINA SAZANOVA YASAKLI FALIYETLER<br><br>
                    <u style="color: red;"><b>ÖNEMLİ:</b></u> Eğer personel başka bir firmadan geliyorsa, geldiği firma ile sahadaki bir firmanın sözleşmesi de 
                    eklenmelidir (ilk ve son sayfa).<br><br>

                    •	Ayrıca, sağlık takip formu olmadan maksimum 5 iş günü ziyaretçi girişi verilebilir. Daha uzun süreli girişler için, <a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a>  
                    adresiyle iletişime geçilmelidir.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button collapsed fw-bolder fs-3" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Açık Rıza Beyanı</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Akkuyu Nükleer Güç Santrali (“NGS”) Sahasına Giriş İçin Yapılacak İşlemler Kapsamında Açık Rıza Beyanı</b><br><br>Bu belge, veri sorumlusu ve veri işleyen sıfatıyla, 
                            Akkuyu Nükleer Güç Santrali sahasına giriş için yapılacak işlemler çerçevesinde, kişisel verilerin kaydedilmesi, saklanması, güncellenmesi, sınıflandırılması ve 
                            işlenmesini; ayrıca ilgili mevzuatın izin verdiği hallerde, açık rıza gösterilmesi durumunda üçüncü kişilere açıklanmasını ve devredilmesini kabul ve beyan eder.<br>
                            <br><br>
                            1. Belge toplamda 2 sayfadan oluşur.<br>
                            &nbsp&nbsp&nbsp - İlk sayfada, ok ile işaretlenen alana personelin Adı ve Soyadı yazılmalıdır.<br></p>
                        <img src="./static/img/acikriza3.png"><br><br>
                        <p>2. İkinci sayfa, personelin kişisel bilgilerinin ve imzasının bulunduğu alanlar içerir:<br>
                            &nbsp&nbsp&nbsp - 1. numaralı ok ile işaretlenen iki alana, personelin Adı Soyadı yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 2. numaralı ok ile işaretlenen iki alana, personel tarafından imza atılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 3. numaralı ok ile işaretlenen alana, personelin TC Kimlik Numarası yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 4. numaralı ok ile işaretlenen alana, belgenin hazırlandığı tarih yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 5. numaralı ok ile işaretlenen alana, personelin telefon numarası yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 6. numaralı ok ile işaretlenen alana, personelin e-posta adresi yazılmalıdır.<br>
                        <img src="./static/img/acikriza4.png">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Yasaklı Faaliyet Formu</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Akkuyu Nükleer Güç Santrali (“NGS”) sahasında uyulması gereken kurallara dair belge ile ilgili bilgiler aşağıdaki gibidir:<br><br>
                            Belge iki kısımdan oluşur ve her iki kısımda da aynı bilgiler doldurulacaktır:<br>
                            •	"Adı Soyadı" (1. numaralı ok ile işaretli alan): Personelin adı ve soyadı bu alanlara yazılmalıdır.<br>
                            •	"TC/PAS Nu" (2. numaralı ok ile işaretli alan): Personelin TC Kimlik Numarası veya Pasaport Numarası (TC vatandaşı değilse) yazılmalıdır.<br>
                            •	"Firma" (3. numaralı ok ile işaretli alan): Personelin görev yapacağı firmanın adı eksiksiz ve doğru bir şekilde bu alanlara yazılmalıdır.<br>
                            •	"Okudum, anladım." (4. numaralı ok ile işaretli alan): Bu alanlara belgenin doldurulduğu tarih yazılacak ve personel imzasını atmalıdır.</p>
                        <img src="./static/img/yasaklıfaaliyetler1.png">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Pasaport Taraması</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p><img src="./static/img/pasaport.jpg" style="height: 400px; width: 300px; margin-right: 40px;">
                            <br><br>Pasaport belgenizin ön ve arka yüzünün, yandaki görselde gösterildiği gibi alt alta ve net olacak şekilde bir kopyası (fotokopi) 
                                veya taraması gerekmektedir. Bu taramada, her iki yüz de net olmalı, herhangi bir bulanıklık veya gölge olmamalıdır, böylece pasaport 
                                bilgileri kolayca okunabilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Personel Giriş Excel</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Akkuyu Nükleer A.Ş. Şantiye Sahasına Giriş Yapan Personelin İkamet Bilgileri Hakkında</b><br><br>
                            Akkuyu Nükleer A.Ş. şantiye sahasına giriş yapan personelin güvenlik soruşturmalarının Enerji Bakanlığı tarafından gerçekleştirilebilmesi 
                            için, personelin ikamet adreslerinin tarafımıza bildirilmesi zorunludur. Giriş kartları, bu listelere göre çalışanlara teslim edilecek olup, 
                            bildirilmemiş olanlar için Akkuyu Nükleer A.Ş. tarafından kart teslimi yapılmayacağını önemle bildiririz.<br><br>
                            Bakanlık evraklarını kontrol amacıyla tarafımıza iletirken, eğer personelin ikamet adresi henüz belirlenmemişse ya da değişebilir bir durumda 
                            ise, saha giriş kart talebinde bulunurken ikamet bilgilerini güncellemeniz ya da eklemeniz MUTLAKA gerekmektedir.<br><br>
                            <b>Akkuyu Nükleer A.Ş. şantiye sahasında çalışacak personelin veri girişine yönelik eklenen sütunlar ve kullanım talimatları şu şekildedir:</b><br>
                            •	Personel giriş tablosunda, zorunlu olarak seçim yapılması gereken sütunlar mevcuttur. Bu sütunlarda seçim yapmak için <u>Seç/Выбрать</u> 
                            butonuna tıklamanız gerekmektedir. Bu alanlara manuel olarak veri girişi yapılamaz ve kopyalanmış bir metin yapıştırılamaz. Bu sütunlar boş 
                            bırakılamaz ve seçenek dışındaki bir veri kabul edilemez.<br><br>
                            •	<u>Seç/Выбрать</u> butonu bulunmayan sütunlar ise manuel olarak doldurulmalıdır. Bu sütunlardaki tüm bilgiler büyük Latin harfleriyle yazılmalıdır.
                        </p><br>
                        <img src="./static/img/2.jpg"><br><br>
                        <p><b>Seçilen Veriyi İlgili Sütuna Yapıştırma Talimatı:</b><br>
                            •	Sütundaki ilgili satır veya satırları seçmek için mouse imlecini kullanarak seçim yapın.<br>
                            •	Açılan pencerede “Seçili Hücrelere Görevi Ekle” butonuna tıklayın. Seçilen veri, seçilen satırlara eklenir. Ne kadar satır seçilirse, 
                            o kadar satıra veri eklenir.
                        </p><br>
                        <img src="./static/img/3.jpg"><br><br>    
                        <p><b>Girilen Veriyi Silme Talimatı:</b><br>
                            •	İlgili sütundaki veriyi silmek için “Seçili Hücreyi Temizle” butonuna tıklayın. </p><br>
                        <img src="./static/img/4.jpg"><br><br>
                        <p>•	DELETE komutuyla silme işlemi yapılamaz. DELETE komutuyla silme girişiminde uyarı mesajı alınır.
                        </p><br>
                        <img src="./static/img/5.jpg"><br><br>
                        <p><b>Veri Değişikliği Talimatı:</b><br>
                            •	İlgili veri üzerinde değişiklik yapmak için  <u>Seç/Выбрать</u> 
                            butonuna tıklayıp yeni bilgiyi seçin. Ardından “Seçili Hücrelere Görevi Ekle” butonuna tıklayarak değişiklikleri tamamlayın.
                        </p><br>
                        <img src="./static/img/6.jpg"><br><br>
                        <p><b>Tablonun En Sonuna Eklenen Yeni Sütunlar:</b><br>
                            <b>R sütunu:</b> Personelin Akkuyu’da çalışırken Türkiye Cumhuriyeti topraklarında ikamet ettiği yer. Bakanlık evraklarının 
                            kontrolünde bu sütunun doldurulması zorunlu değildir, ancak fiziki kart talebinde bulunurken bu alan doldurulmalıdır. 
                            Boş bırakılamaz ve personel Mersin il sınırı içerisinde yaşıyorsa, ilgili ikamet adresi seçilmelidir. Mersin il sınırları 
                            dışında yaşıyorsa “Mersin’de ikamet etmiyor” seçeneği kullanılmalıdır.
                        </p><br>
                        <img src="./static/img/25.png">
                        <img src="./static/img/26.png"><br>
                        <p><br><b>S sütunu:</b>Yabancı personel için çalışma izni başvuru numarası veya mavi kimlik numarası (99 ile başlayan kimlik) girilmelidir. 
                            Türk personeller veya görevlendirme ile saha ziyareti gerçekleştiren personeller için bu sütun doldurulması zorunlu değildir.
                        </p>
                        <img src="./static/img/27.png"><br>
                        <p><br><b>T sütunu:</b>Çalışma izni başvurusu yapılmışsa yabancı personel için bu sütun doldurulmalıdır. Fiziki kimlik mevcutsa doldurulmaz. 
                            Türk personeller ve saha ziyareti gerçekleştiren görevliler için doldurulması zorunlu değildir.
                        </p>
                        <img src="./static/img/28.png"><br>
                        <p><br><b>Doldurulacak Diğer Alanlar:</b><br>
                            1. Geliş Tarihi: Evrakların hazırlandığı tarih.<br>
                            2. Talep Eden: Firmanın personel sorumlusunun adı soyadı.<br>
                            3. Talep Eden İletişim Bilgileri: Firmanın personel sorumlusunun cep telefon numarası.<br>
                            4. Ad: Firmada göreve başlayacak personelin adı.<br>
                            5. Soyad: Firmada göreve başlayacak personelin soyadı.<br>
                            6. TC/PAS: Personelin kimlik veya pasaport numarası.<br>
                            7. Baba Adı: Yabancı personeller için baba adı.<br>
                            8. Doğum Yeri: Personelin doğum yeri.<br>
                            9. Doğum Tarihi: Personelin doğum tarihi.<br>
                        </p>
                        <img src="./static/img/personelgiris1.jpeg"><br><br>
                        <p> 10. Görevi: Personelin görev bilgisi.<br>
                            11. Firma: Personelin çalışacağı firma bilgisi.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Eğer firma listede yoksa bizimle iletişime geçin.<br><br>
                            12. Çalıştığı Yer: Personelin görev yapacağı yer.<br>
                            13. Cinsiyet: Personelin cinsiyet bilgisi.<br>
                            14. Çalışan Telefon Numarası: Personelin telefon numarası.<br>
                            15. Çalışan Yakını Telefon Numarası: Personelin yakınının telefon numarası.<br>
                            16. Adli Sicil Kaydı ve Sağlık Kısıtlamaları: Personelin varsa adli sicil kayıt ve sağlık kısıtlamaları.<br>
                            17. Uyruk: Personelin uyruk bilgisi.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Tüm alanlar talimatlara uygun olarak eksiksiz doldurulmalıdır.<br><br>
                        </p>
                        <img src="./static/img/personelgiris2.jpeg">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Mektup</button>
                </div>
                <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Akkuyu NGS inşaat alanına giriş izni ve personel giriş kartlarının düzenlenmesi için, şirket yöneticisi veya yetkili kişi tarafından imzalanmış (vekaletname ile) ve 
                            <b>Güvenlik Direktörü Artem Zarodysh</b> ve <b>Güvenlik Eş Direktörü Selim Temren’in</b> dikkatine yazılmış bir yazı gereklidir. Bu yazı, gerekli mektup ekleriyle 
                            birlikte aşağıdaki adımlar izlenerek gönderilmelidir:<br><br>
                            <b>1. Yazının Gönderimi:</b><br>
                            Güvenlik Direktörü Artem Zarodysh ve Güvenlik Eş Direktörü Selim Temren’e hitaben yazılan yazı, <a href="mailto:office@t2ic.com">office@t2ic.com</a> adresine iletilmelidir.<br><br>
                            <b>2. Belgelerin Kontrolü:</b><br>
                            Resmi yazı ve ekleri, yabancı personeller için <a href="mailto:id@t2ic.com">id@t2ic.com</a> , Türk personeller için <a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a> ve <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a> 
                            e-posta adreslerine gönderilmelidir.<br><br>
                            <b>3. Personel Listesi Tablosu:</b><br>
                            •	Tablo, şirket yöneticisi veya yetkili kişi tarafından kaşe ve imzalanmış olmalıdır.
                            •	Tablo, ekli belgelerde yer alan personel isimleriyle birebir eşleşmelidir. Aksi takdirde, belgeler işleme alınmayacaktır.<br><br>
                            Bu süreçlerin eksiksiz ve doğru bir şekilde tamamlanması, giriş izni ve kart düzenlemeleri için zorunludur.<br><br>
                            <img src="./static/img/personelist.png"><br><br>
                        </p>
                    </div>
                </div>
            </div>                                                                   
        </div>
        </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Заявка министерства для российско-белорусского персонала</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">Для получения разрешения на доступ на территорию (та же процедура применяется как для посетителей, так и для постоянных сотрудников) применяется двухэтапный процесс.<br><br>
                    <b>Этап 1:</b><br>Необходимо официальное письмо, подписанное руководителем компании или уполномоченным лицом (с доверенностью), адресованное <b>Директору по безопасности Артему Зародышу</b> и 
                    <b>Заместителю директора по безопасности Селиму Темрену</b> для получения согласования.<br><br>
                    <b>Этап 2:</b><br>После получения согласования необходимо отправить следующие документы на электронную почту <a href="mailto:id@t2ic.com">id@t2ic.com</a>:<br><br>
                    •	Скан паспорта<br>
                    •	Официальное письмо<br>
                    •	Если есть, скан синих удостоверений личности, если нет:<br> 
                        &nbsp&nbsp&nbsp - Заявка на разрешение на работу и скриншот, если нет:<br>
                        &nbsp&nbsp&nbsp - Направление и рабочая тетрадь<br>
                    •	Информация о мерах безопасности на территории<br>
                    •	Форма явного согласия для доступа на территорию<br>       
                    •	Таблица Excel для входа персонала (должна быть заполнена в соответствии с инструкциями)<br><br>
                    <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Срок действия пропуска или срок действия для командированного персонала будет равен сроку командировки.<br><br>
                    <b>Подача оригинала документов не требуется.</b><br><br>
                    Важно, чтобы в документах соблюдалась правильная последовательность и их описание. Это ускорит процесс оформления документов. Документы следует именовать именами и фамилиями с заглавной буквы, как в паспорте, и создавать отдельные файлы для каждого лица. Просим вас именовать документы с указанием номера паспорта и присылать их в формате 7Z zip и в формате PDF.<br><br>
                    <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Если количество работников больше одного, документы должны быть указаны названием файла. Например, все сканы паспортов должны находиться в одном файле под названием "ПАСПОРТ".<br><br>
                    Например: файл KARINA SAZANOVA:<br><br>
                    КАРИНА САЗАНОВА ПАСПОРТ<br>
                    КАРИНА САЗАНОВА ЯВНОЕ СОГЛАСИЕ<br>
                    КАРИНА САЗАНОВА ЗАПРЕЩЕННЫЕ ДЕЙСТВИЯ<br><br>
                    <u style="color: red;"><b>ВАЖНО:</b></u> Если работник переходит из другой компании, необходимо также приложить договор между компанией, работающей на площадке, из которой переходит работник,(первая и последняя страницы).<br><br>
                    • Кроме этого, без медицинской формы посетители могут посещать территорию площадки не более 5 рабочих дней. Для более длительных посещений площадки, необходимо обратиться по адресу <a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a>.
                </p>                                        
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button collapsed fw-bolder fs-3" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Прямое выраженное согласие</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Заявление о прямом выраженном согласии в рамках процедур оформления, которые необходимо выполнить для входа на площадку атомной электростанции Аккую (АЭС)</b><br><br>
                            Настоящий документ предусматривает, в качестве ответственного за обработку данных и обработчика персональных данных, регистрацию, хранение, актуализацию, классификацию и обработку персональных данных в рамках процедур, необходимых для получения пропуска к сайту атомной электростанции Аккую, а также разглашение и передачу третьим лицам в случаях, разрешенных соответствующим законодательством, в случае прямо выраженного согласия.<br>
                        <br><br>
                        1. Документ состоит из 2 страниц.<br>
                        &nbsp&nbsp&nbsp -На первой странице в поле, отмеченном стрелкой, необходимо вписать имя и фамилию работника.<br></p>
                        <img src="./static/img/acikriza3.png"><br><br>
                        <p>2. На второй странице находятся поля для персональных данных и подписи работника:<br>
                            &nbsp&nbsp&nbsp - В двух полях, отмеченных стрелкой с цифрой 1, следует указать имя и фамилию работника.<br>
                            &nbsp&nbsp&nbsp - Два поля, отмеченные стрелкой с цифрой 2, должны быть подписаны работником.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 3, следует указать номер турецкого удостоверения личности работника.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 4, следует указать дату составления документа.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 5, следует указать номер телефона работника.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 6, следует указать адрес электронной почты работника.<br>
                        </p>
                        <img src="./static/img/acikriza4.png">
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Форма о запрещенной деятельности</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Ниже приведена информация, касающаяся документа о правилах, которые необходимо соблюдать на площадке атомной электростанции Аккую (АЭС):<br><br>
                            Документ состоит из двух разделов, и в обоих разделах необходимо заполнить одну и ту же информацию:<br>
                            • Имя и фамилия сотрудника должны быть написаны в разделе «Имя и фамилия» ( поле, обозначенное стрелкой с цифрой 1.).<br>
                            • № кимлика/паспорта (поле, отмеченное стрелкой с цифрой 2): Следует указать номер турецкого удостоверения личности или номер паспорта работника (если он/она не является гражданином Турции).<br>
                            • Компания (поле, отмеченное стрелкой с цифрой 3): В этих полях необходимо полностью и правильно написать название компании, в которой будет работать работник.<br>
                            • Раздел «Ознакомился»  (поле, отмеченное стрелкой с цифрой 4): В этих полях проставляется дата заполнения документа, и работник должен поставить свою подпись.<br>
                        </p>
                        <img src="./static/img/yasaklıfaaliyetler1.png">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Скан паспорта</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p><img src="./static/img/pasaport.jpg" style="height: 400px; width: 300px; margin-right: 40px;">
                            <br><br>Требуется копия (ксерокопия) или скан лицевой и оборотной сторон документа, удостоверяющего личность,сканы должны быть четко отображены, сторона документа расположена одна под другой,как показано на рисунке. При сканировании лицо должно быть четким, без размытостей и теней, чтобы паспортные данные были легко читаемы.</p>
                        </div>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Excel для Входа Сотрудников</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>О Проживании Персонала, Который Проходит На Строительную Площадку Akkuyu Nükleer A.Ş.</b><br><br>
                            Для проведения проверки безопасности персонала, который проходит на строительную площадку Akkuyu Nükleer A.Ş. Министерством энергетики, необходимо предоставить 
                            информацию о месте жительства сотрудников. Пропускные карты будут выданы сотрудникам согласно этим спискам, и важно отметить, что для тех, чьи данные не будут 
                            предоставлены, Akkuyu Nükleer A.Ş. не будет выдавать карты.<br><br>
                            При отправке документов для проверки в Министерство, если адрес проживания сотрудника ещё не определён или может измениться, ОБЯЗАТЕЛЬНО необходимо обновить 
                            или добавить информацию о месте жительства при запросе пропускной карты для доступа на площадку.<br><br>
                            <b>На строительной площадке Akkuyu Nükleer A.Ş. для сотрудников, которые будут работать, добавлены следующие столбцы для ввода данных и инструкции по их использованию:</b><br>
                            •	В таблице ввода данных сотрудников есть столбцы, в которых необходимо выбрать значение. Чтобы выбрать значение в этих столбцах, нужно нажать кнопку "Seç/Выбрать". 
                            В эти поля нельзя вводить данные вручную, и нельзя вставлять скопированный текст. Эти столбцы не могут быть оставлены пустыми, и данные, не входящие в список вариантов, 
                            не будут приняты.<br><br>
                            •	Столбцы, в которых нет кнопки "Seç/Выбрать", должны быть заполнены вручную. Все данные в этих столбцах должны быть написаны большими латинскими буквами.
                        </p><br>
                        <img src="./static/img/2.jpg"><br><br>
                        <p><b>Инструкция по вставке выбранных данных в соответствующий столбец:</b><br>
                            •	Для выбора соответствующих строк в столбце используйте указатель мыши.<br>
                            •	В открывшемся окне нажмите кнопку "Добавить задачу в выбранные ячейки". 
                            Выбранные данные будут добавлены в выбранные строки. Чем больше строк будет выбрано, тем больше строк будет заполнено данными.
                        </p><br>
                        <img src="./static/img/3.jpg"><br><br>    
                        <p><b>Инструкция по удалению введенных данных:</b><br>
                            •	Чтобы удалить данные в соответствующем столбце, нажмите кнопку "Очистить выбранную ячейку". </p><br>
                        <img src="./static/img/4.jpg"><br><br>
                        <p>•	Операция удаления с помощью команды DELETE невозможна. При попытке удаления с помощью команды DELETE будет выведено сообщение об ошибке.
                        </p><br>
                        <img src="./static/img/5.jpg"><br><br>
                        <p><b>Инструкция по изменению данных:</b><br>
                            •	Чтобы внести изменения в соответствующие данные, нажмите кнопку "Seç/Выбрать" и выберите новую информацию. Затем нажмите кнопку 
                            "Добавить задачу в выбранные ячейки", чтобы завершить изменения.
                        </p><br>
                        <img src="./static/img/6.jpg"><br><br>
                        <p><b>Новые столбцы, добавленные в конец таблицы:</b><br>
                            <b>Столбец R:</b> Место проживания сотрудника на территории Турецкой Республики, пока он работает на Акуйской АЭС. Заполнение этого столбца 
                            не обязательно при проверке документов для Министерства, однако должно быть заполнено при запросе физической карты. Это поле не может быть 
                            оставлено пустым, и если сотрудник проживает в пределах границ Мерсина, следует выбрать соответствующий адрес проживания. Если он проживает 
                            за пределами границ Мерсина, следует выбрать вариант "Не проживает в Мерсине".
                        </p><br>
                        <img src="./static/img/25.png">
                        <img src="./static/img/26.png"><br>
                        <p><br><b>Столбец S:</b> Для иностранных сотрудников следует ввести номер заявки на рабочее разрешение или номер синего удостоверения личности 
                            (номер удостоверения, начинающийся с 99). Для турецких сотрудников или сотрудников, выполняющих визит на площадку по направлению, заполнение 
                            этого столбца не является обязательным.
                        </p>
                        <img src="./static/img/27.png"><br>
                        <p><br><b>Столбец T:</b> Если заявка на рабочее разрешение была подана, этот столбец должен быть заполнен для иностранных сотрудников. 
                            Если имеется физический идентификатор, то столбец не заполняется. Для турецких сотрудников и сотрудников, выполняющих визит на площадку, 
                            заполнение этого столбца не обязательно.
                        </p>
                        <img src="./static/img/28.png"><br>
                        <p><br><b>Заполняемые другие поля:</b><br>
                            1. Дата поступления: Дата подготовки документов.<br> 
                            2. Запрашивающий: Имя и фамилия ответственного за персонал компании.<br> 
                            3. Контактная информация запрашивающего: Мобильный номер телефона ответственного за персонал компании.<br> 
                            4. Имя: Имя сотрудника, который начнет работу в компании.<br> 
                            5. Фамилия: Фамилия сотрудника, который начнет работу в компании.<br> 
                            6. ТС/ПАС: Номер удостоверения личности или паспорта сотрудника.<br> 
                            7. Имя отца: Имя отца для иностранных сотрудников.<br> 
                            8. Место рождения: Место рождения сотрудника.<br> 
                            9. Дата рождения: Дата рождения сотрудника.<br>
                        </p>
                        <img src="./static/img/personelgiris1.jpeg"><br><br>
                        <p> 10. Должность: Должностная информация о сотруднике.<br> 
                            11. Компания: Информация о компании, в которой будет работать сотрудник.<br><br> 
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Если компании нет в списке, пожалуйста, свяжитесь с нами.<br><br> 
                            12. Место работы: Место, где сотрудник будет работать.<br> 
                            13. Пол: Информация о поле сотрудника.<br> 
                            14. Номер телефона сотрудника: Телефонный номер сотрудника.<br> 
                            15. Номер телефона родственника сотрудника: Телефонный номер родственника сотрудника.<br> 
                            16. Судимость и ограничения по здоровью: Судимость и ограничения по здоровью сотрудника, если они имеются.<br> 
                            17. Национальность: Информация о национальности сотрудника.<br><br> 
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Все поля должны быть заполнены полностью в соответствии с инструкциями.<br><br>
                        </p>
                        <img src="./static/img/personelgiris2.jpeg">
                    </div>
                </div>
            </div>                                   
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Официальное письмо</button>
                </div>
                <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Для получения разрешения на вход на строительную площадку Akkuyu NPP и оформления пропусков для персонала требуется письмо, подписанное директором компании или уполномоченным лицом (с доверенностью) и адресованное <b>Директору по безопасности Артему Зародыщу</b> и <b>Со-директору по безопасности Селиму Темрену</b>. Это письмо должно быть отправлено по следующей процедуре, с необходимыми приложениями:<br><br>
                            <b>1. Отправка письма:</b><br>
                            Письмо, адресованное Директору по безопасности Артему Зародыщу и Со-директору по безопасности Селиму Темрену, должно быть отправлено на электронную почту <a href="mailto:office@t2ic.com">office@t2ic.com</a>.<br><br>
                            <b>2. Проверка документов:</b><br>
                            Официальное письмо и его приложения должны быть отправлены на электронные почты: для иностранных сотрудников — <a href="mailto:id@t2ic.com">id@t2ic.com</a>, для турецких сотрудников — <a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a> и <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a>.<br><br>
                            <b>3. Таблица с перечнем сотрудников:</b><br>
                            • Таблица должна быть подписана и скреплена печатью руководителем компании или уполномоченным лицом.<br>
                            • Таблица должна точно соответствовать именам сотрудников, указанным в приложенных документах. В противном случае документы не будут обработаны.<br><br>
                            Завершение этих процедур в полном объеме и правильно является обязательным для получения разрешения на вход и оформления пропусков для персонала.<br><br>                                                    
                            <img src="./static/img/personelist.png"><br><br>
                        </p>
                    </div>
                </div>
            </div>                                                                                            
        </div>
        </div>`
    },
    cisulkeler: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">CIS Ülke Vatandaşlı Personeller İçin Bakanlık Başvurusu</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">Saha giriş onayı alınması için (ziyaretçi ya da sürekli çalışanlar için aynı prosedür geçerlidir), iki aşamalı bir süreç uygulanmaktadır.<br><br>
                    <b>1. Aşama:</b><br>Şirket yöneticisi veya yetkili kişi tarafından imzalanmış (vekaletname ile) ve <b>Güvenlik Direktörü Artem Zarodysh</b> ve 
                    <b>Güvenlik Eş Direktörü Selim Temren’in</b>dikkatine yazılmış resmi mektup onayı gerekmektedir.<br><br>
                    <b>2. Aşama:</b><br>Onayın ardından, aşağıda listelenen belgeler tarafımıza <a href="mailto:id@t2ic.com">id@t2ic.com</a> e-posta adresi üzerinden gönderilmelidir:<br><br>
                    •	Pasaport Taraması<br>
                    •	Resmi mektup<br>
                    •   Eğer mevcutsa mavi kimlik taraması, yoksa:<br> 
                        &nbsp&nbsp&nbsp - Çalışma izni başvurusu ve ekran görüntüsü, yoksa:<br>
                        &nbsp&nbsp&nbsp - Görevlendirme ve çalışma defteri / <br>
                    •   Sahada Dikkat Edilecek Hususlar İle İlgili Bilgilendirme<br>
                    •	Sahaya Girişe İlişkin Açık Rıza Formu<br>       
                    •	Personel Giriş Excel Tablosu (eksiksiz ve talimatlara uygun doldurulmalıdır)<br><br>
                    <u style="color: red;"><b>NOT:</b></u> Görevlendirmeli personeller için kart veya geçiş süresi, görevlendirme süresi kadar olacaktır.<br><br>
                    <b>Fiziksel evrak teslimi gerekli değildir.</b><br><br>
                    Belgelerin doğru sıralama ve isimlendirme kurallarına uygun olması önemlidir. Bu, belgelerin işleme alınma sürecini hızlandıracaktır. Belgeleri, 
                    pasaporttaki gibi ad-soyad ile büyük harflerle isimlendirip, her bir kişi için ayrı dosyalar oluşturmalısınız. Evraklarınızı pasaport numarası 
                    ile isimlendirip, 7Z zip formatında ve PDF dosyası olarak göndermeniz rica olunur.<br><br>
                    <u style="color: red;"><b>NOT:</b></u> Personel sayısı birden fazla ise belgeleri dosya ismi ile isimlendirmesi gerekmektedir. Örneğin, bütün pasaport taramaları "PASAPORT" adında 
                    tek bir dosya içinde olmalıdır.<br><br>
                    Örneğin: KARINA SAZANOVA dosyasında:<br><br>
                    KARINA SAZANOVA PASAPORT<br>
                    KARINA SAZANOVA AÇIK RIZA<br>
                    KARINA SAZANOVA YASAKLI FALIYETLER<br><br>
                    <u style="color: red;"><b>ÖNEMLİ:</b></u> Eğer personel başka bir firmadan geliyorsa, geldiği firma ile sahadaki bir firmanın sözleşmesi de 
                    eklenmelidir (ilk ve son sayfa).<br><br>
                    •	Ayrıca, sağlık takip formu olmadan maksimum 5 iş günü ziyaretçi girişi verilebilir. Daha uzun süreli girişler için, <a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a>  
                    adresiyle iletişime geçilmelidir.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button collapsed fw-bolder fs-3" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Açık Rıza Beyanı</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Akkuyu Nükleer Güç Santrali (“NGS”) Sahasına Giriş İçin Yapılacak İşlemler Kapsamında Açık Rıza Beyanı</b><br><br>Bu belge, veri sorumlusu ve veri işleyen sıfatıyla, 
                            Akkuyu Nükleer Güç Santrali sahasına giriş için yapılacak işlemler çerçevesinde, kişisel verilerin kaydedilmesi, saklanması, güncellenmesi, sınıflandırılması ve 
                            işlenmesini; ayrıca ilgili mevzuatın izin verdiği hallerde, açık rıza gösterilmesi durumunda üçüncü kişilere açıklanmasını ve devredilmesini kabul ve beyan eder.<br>
                            <br><br>
                            1. Belge toplamda 2 sayfadan oluşur.<br>
                            &nbsp&nbsp&nbsp - İlk sayfada, ok ile işaretlenen alana personelin Adı ve Soyadı yazılmalıdır.<br></p>
                        <img src="./static/img/acikriza3.png"><br><br>
                        <p>2. İkinci sayfa, personelin kişisel bilgilerinin ve imzasının bulunduğu alanlar içerir:<br>
                            &nbsp&nbsp&nbsp - 1. numaralı ok ile işaretlenen iki alana, personelin Adı Soyadı yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 2. numaralı ok ile işaretlenen iki alana, personel tarafından imza atılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 3. numaralı ok ile işaretlenen alana, personelin TC Kimlik Numarası yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 4. numaralı ok ile işaretlenen alana, belgenin hazırlandığı tarih yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 5. numaralı ok ile işaretlenen alana, personelin telefon numarası yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 6. numaralı ok ile işaretlenen alana, personelin e-posta adresi yazılmalıdır.<br>
                        <img src="./static/img/acikriza4.png">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Yasaklı Faaliyet Formu</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Akkuyu Nükleer Güç Santrali (“NGS”) sahasında uyulması gereken kurallara dair belge ile ilgili bilgiler aşağıdaki gibidir:<br><br>
                            Belge iki kısımdan oluşur ve her iki kısımda da aynı bilgiler doldurulacaktır:<br>
                            •	"Adı Soyadı" (1. numaralı ok ile işaretli alan): Personelin adı ve soyadı bu alanlara yazılmalıdır.<br>
                            •	"TC/PAS Nu" (2. numaralı ok ile işaretli alan): Personelin TC Kimlik Numarası veya Pasaport Numarası (TC vatandaşı değilse) yazılmalıdır.<br>
                            •	"Firma" (3. numaralı ok ile işaretli alan): Personelin görev yapacağı firmanın adı eksiksiz ve doğru bir şekilde bu alanlara yazılmalıdır.<br>
                            •	"Okudum, anladım." (4. numaralı ok ile işaretli alan): Bu alanlara belgenin doldurulduğu tarih yazılacak ve personel imzasını atmalıdır.</p>
                        <img src="./static/img/yasaklıfaaliyetler1.png">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Pasaport Taraması</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p><img src="./static/img/pasaport.jpg" style="height: 400px; width: 300px; margin-right: 40px;">
                                <br><br>Pasaport belgenizin ön ve arka yüzünün, yandaki görselde gösterildiği gibi alt alta ve net olacak şekilde bir kopyası (fotokopi) 
                                    veya taraması gerekmektedir. Bu taramada, her iki yüz de net olmalı, herhangi bir bulanıklık veya gölge olmamalıdır, böylece pasaport 
                                    bilgileri kolayca okunabilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Personel Giriş Excel</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Akkuyu Nükleer A.Ş. Şantiye Sahasına Giriş Yapan Personelin İkamet Bilgileri Hakkında</b><br><br>
                            Akkuyu Nükleer A.Ş. şantiye sahasına giriş yapan personelin güvenlik soruşturmalarının Enerji Bakanlığı tarafından gerçekleştirilebilmesi 
                            için, personelin ikamet adreslerinin tarafımıza bildirilmesi zorunludur. Giriş kartları, bu listelere göre çalışanlara teslim edilecek olup, 
                            bildirilmemiş olanlar için Akkuyu Nükleer A.Ş. tarafından kart teslimi yapılmayacağını önemle bildiririz.<br><br>
                            Bakanlık evraklarını kontrol amacıyla tarafımıza iletirken, eğer personelin ikamet adresi henüz belirlenmemişse ya da değişebilir bir durumda 
                            ise, saha giriş kart talebinde bulunurken ikamet bilgilerini güncellemeniz ya da eklemeniz MUTLAKA gerekmektedir.<br><br>
                            <b>Akkuyu Nükleer A.Ş. şantiye sahasında çalışacak personelin veri girişine yönelik eklenen sütunlar ve kullanım talimatları şu şekildedir:</b><br>
                            •	Personel giriş tablosunda, zorunlu olarak seçim yapılması gereken sütunlar mevcuttur. Bu sütunlarda seçim yapmak için <u>Seç/Выбрать</u> 
                            butonuna tıklamanız gerekmektedir. Bu alanlara manuel olarak veri girişi yapılamaz ve kopyalanmış bir metin yapıştırılamaz. Bu sütunlar boş 
                            bırakılamaz ve seçenek dışındaki bir veri kabul edilemez.<br><br>
                            •	<u>Seç/Выбрать</u> butonu bulunmayan sütunlar ise manuel olarak doldurulmalıdır. Bu sütunlardaki tüm bilgiler büyük Latin harfleriyle yazılmalıdır.
                        </p><br>
                        <img src="./static/img/2.jpg"><br><br>
                        <p><b>Seçilen Veriyi İlgili Sütuna Yapıştırma Talimatı:</b><br>
                            •	Sütundaki ilgili satır veya satırları seçmek için mouse imlecini kullanarak seçim yapın.<br>
                            •	Açılan pencerede “Seçili Hücrelere Görevi Ekle” butonuna tıklayın. Seçilen veri, seçilen satırlara eklenir. Ne kadar satır seçilirse, 
                            o kadar satıra veri eklenir.
                        </p><br>
                        <img src="./static/img/3.jpg"><br><br>    
                        <p><b>Girilen Veriyi Silme Talimatı:</b><br>
                            •	İlgili sütundaki veriyi silmek için “Seçili Hücreyi Temizle” butonuna tıklayın. </p><br>
                        <img src="./static/img/4.jpg"><br><br>
                        <p>•	DELETE komutuyla silme işlemi yapılamaz. DELETE komutuyla silme girişiminde uyarı mesajı alınır.
                        </p><br>
                        <img src="./static/img/5.jpg"><br><br>
                        <p><b>Veri Değişikliği Talimatı:</b><br>
                            •	İlgili veri üzerinde değişiklik yapmak için  <u>Seç/Выбрать</u> 
                            butonuna tıklayıp yeni bilgiyi seçin. Ardından “Seçili Hücrelere Görevi Ekle” butonuna tıklayarak değişiklikleri tamamlayın.
                        </p><br>
                        <img src="./static/img/6.jpg"><br><br>
                        <p><b>Tablonun En Sonuna Eklenen Yeni Sütunlar:</b><br>
                            <b>R sütunu:</b> Personelin Akkuyu’da çalışırken Türkiye Cumhuriyeti topraklarında ikamet ettiği yer. Bakanlık evraklarının 
                            kontrolünde bu sütunun doldurulması zorunlu değildir, ancak fiziki kart talebinde bulunurken bu alan doldurulmalıdır. 
                            Boş bırakılamaz ve personel Mersin il sınırı içerisinde yaşıyorsa, ilgili ikamet adresi seçilmelidir. Mersin il sınırları 
                            dışında yaşıyorsa “Mersin’de ikamet etmiyor” seçeneği kullanılmalıdır.
                        </p><br>
                        <img src="./static/img/25.png">
                        <img src="./static/img/26.png"><br>
                        <p><br><b>S sütunu:</b>Yabancı personel için çalışma izni başvuru numarası veya mavi kimlik numarası (99 ile başlayan kimlik) girilmelidir. 
                            Türk personeller veya görevlendirme ile saha ziyareti gerçekleştiren personeller için bu sütun doldurulması zorunlu değildir.
                        </p>
                        <img src="./static/img/27.png"><br>
                        <p><br><b>T sütunu:</b>Çalışma izni başvurusu yapılmışsa yabancı personel için bu sütun doldurulmalıdır. Fiziki kimlik mevcutsa doldurulmaz. 
                            Türk personeller ve saha ziyareti gerçekleştiren görevliler için doldurulması zorunlu değildir.
                        </p>
                        <img src="./static/img/28.png"><br>
                        <p><br><b>Doldurulacak Diğer Alanlar:</b><br>
                            1. Geliş Tarihi: Evrakların hazırlandığı tarih.<br>
                            2. Talep Eden: Firmanın personel sorumlusunun adı soyadı.<br>
                            3. Talep Eden İletişim Bilgileri: Firmanın personel sorumlusunun cep telefon numarası.<br>
                            4. Ad: Firmada göreve başlayacak personelin adı.<br>
                            5. Soyad: Firmada göreve başlayacak personelin soyadı.<br>
                            6. TC/PAS: Personelin kimlik veya pasaport numarası.<br>
                            7. Baba Adı: Yabancı personeller için baba adı.<br>
                            8. Doğum Yeri: Personelin doğum yeri.<br>
                            9. Doğum Tarihi: Personelin doğum tarihi.<br>
                        </p>
                        <img src="./static/img/personelgiris1.jpeg"><br><br>
                        <p> 10. Görevi: Personelin görev bilgisi.<br>
                            11. Firma: Personelin çalışacağı firma bilgisi.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Eğer firma listede yoksa bizimle iletişime geçin.<br><br>
                            12. Çalıştığı Yer: Personelin görev yapacağı yer.<br>
                            13. Cinsiyet: Personelin cinsiyet bilgisi.<br>
                            14. Çalışan Telefon Numarası: Personelin telefon numarası.<br>
                            15. Çalışan Yakını Telefon Numarası: Personelin yakınının telefon numarası.<br>
                            16. Adli Sicil Kaydı ve Sağlık Kısıtlamaları: Personelin varsa adli sicil kayıt ve sağlık kısıtlamaları.<br>
                            17. Uyruk: Personelin uyruk bilgisi.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Tüm alanlar talimatlara uygun olarak eksiksiz doldurulmalıdır.<br><br>
                        </p>
                        <img src="./static/img/personelgiris2.jpeg">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Mektup</button>
                </div>
                <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Akkuyu NGS inşaat alanına giriş izni ve personel giriş kartlarının düzenlenmesi için, şirket yöneticisi veya yetkili kişi tarafından imzalanmış (vekaletname ile) ve 
                            <b>Güvenlik Direktörü Artem Zarodysh</b> ve <b>Güvenlik Eş Direktörü Selim Temren’in</b> dikkatine yazılmış bir yazı gereklidir. Bu yazı, gerekli mektup ekleriyle 
                            birlikte aşağıdaki adımlar izlenerek gönderilmelidir:<br><br>
                            <b>1. Yazının Gönderimi:</b><br>
                            Güvenlik Direktörü Artem Zarodysh ve Güvenlik Eş Direktörü Selim Temren’e hitaben yazılan yazı, <a href="mailto:office@t2ic.com">office@t2ic.com</a> adresine iletilmelidir.<br><br>
                            <b>2. Belgelerin Kontrolü:</b><br>
                            Resmi yazı ve ekleri, yabancı personeller için <a href="mailto:id@t2ic.com">id@t2ic.com</a> , Türk personeller için <a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a> ve <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a> 
                            e-posta adreslerine gönderilmelidir.<br><br>
                            <b>3. Personel Listesi Tablosu:</b><br>
                            •	Tablo, şirket yöneticisi veya yetkili kişi tarafından kaşe ve imzalanmış olmalıdır.
                            •	Tablo, ekli belgelerde yer alan personel isimleriyle birebir eşleşmelidir. Aksi takdirde, belgeler işleme alınmayacaktır.<br><br>
                            Bu süreçlerin eksiksiz ve doğru bir şekilde tamamlanması, giriş izni ve kart düzenlemeleri için zorunludur.<br><br>
                            <img src="./static/img/personelist.png"><br><br>
                        </p>
                    </div>
                </div>
            </div>            
        </div>
        </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Заявление в министерство для работников, имеющих гражданство стран СНГ</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">Для получения разрешения на доступ на территорию (та же процедура применяется как для посетителей, так и для постоянных сотрудников) применяется двухэтапный процесс.<br><br>
                    <b>Этап 1:</b><br>Необходимо официальное письмо, подписанное руководителем компании или уполномоченным лицом (с доверенностью), адресованное <b>Директору по безопасности Артему Зародышу</b> и 
                    <b>Заместителю директора по безопасности Селиму Темрену</b> для получения согласования.<br><br>
                    <b>Этап 2:</b><br>После получения согласования необходимо отправить следующие документы на электронную почту <a href="mailto:id@t2ic.com">id@t2ic.com</a>:<br><br>
                    • Скан паспорта<br>
                    • Официальное письмо<br>
                    • Информационная справка о вопросах, которые необходимо учитывать на площадке<br>
                    • Прямое выраженное согласие на вход на площадку<br>
                    • Таблица Excel для оформления разрешения на вход на площадку персонала(должна быть заполнена полностью и в соответствии с инструкциями)<br>
                    <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Срок действия пропуска или срок действия для командированного персонала будет равен сроку командировки.<br><br>
                    <b>Подача оригинала документов не требуется.</b><br><br>
                    Важно, чтобы в документах соблюдалась правильная последовательность и их описание. Это ускорит процесс оформления документов. Документы следует именовать именами и фамилиями с заглавной буквы, как в паспорте, и создавать отдельные файлы для каждого лица. Просим вас именовать документы с указанием номера паспорта и присылать их в формате 7Z zip и в формате PDF.<br><br>
                    <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Если количество работников больше одного, документы должны быть указаны названием файла. Например, все сканы паспортов должны находиться в одном файле под названием "ПАСПОРТ".<br><br>
                    Например: файл KARINA SAZANOVA:<br><br>
                    КАРИНА САЗАНОВА ПАСПОРТ<br>
                    КАРИНА САЗАНОВА ЯВНОЕ СОГЛАСИЕ<br>
                    КАРИНА САЗАНОВА ЗАПРЕЩЕННЫЕ ДЕЙСТВИЯ<br><br>
                    <u style="color: red;"><b>ВАЖНО:</b></u> Если работник переходит из другой компании, необходимо также приложить договор между компанией, работающей на площадке, из которой переходит работник,(первая и последняя страницы).<br><br>
                    • Кроме этого, без медицинской формы посетители могут посещать территорию площадки не более 5 рабочих дней. Для более длительных посещений площадки, необходимо обратиться по адресу <a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a>.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button collapsed fw-bolder fs-3" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Прямое выраженное согласие</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Заявление о прямом выраженном согласии в рамках процедур оформления, которые необходимо выполнить для входа на площадку атомной электростанции Аккую (АЭС)</b><br><br>
                            Настоящий документ предусматривает, в качестве ответственного за обработку данных и обработчика персональных данных, регистрацию, хранение, актуализацию, классификацию и обработку персональных данных в рамках процедур, необходимых для получения пропуска к сайту атомной электростанции Аккую, а также разглашение и передачу третьим лицам в случаях, разрешенных соответствующим законодательством, в случае прямо выраженного согласия.<br>
                        <br><br>
                        1. Документ состоит из 2 страниц.<br>
                        &nbsp&nbsp&nbsp -На первой странице в поле, отмеченном стрелкой, необходимо вписать имя и фамилию работника.<br></p>
                        <img src="./static/img/acikriza3.png"><br><br>
                        <p>2. На второй странице находятся поля для персональных данных и подписи работника:<br>
                            &nbsp&nbsp&nbsp - В двух полях, отмеченных стрелкой с цифрой 1, следует указать имя и фамилию работника.<br>
                            &nbsp&nbsp&nbsp - Два поля, отмеченные стрелкой с цифрой 2, должны быть подписаны работником.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 3, следует указать номер турецкого удостоверения личности работника.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 4, следует указать дату составления документа.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 5, следует указать номер телефона работника.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 6, следует указать адрес электронной почты работника.<br>
                        </p>
                        <img src="./static/img/acikriza4.png">
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Форма о запрещенной деятельности</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Ниже приведена информация, касающаяся документа о правилах, которые необходимо соблюдать на площадке атомной электростанции Аккую (АЭС):<br><br>
                            Документ состоит из двух разделов, и в обоих разделах необходимо заполнить одну и ту же информацию:<br>
                            • Имя и фамилия сотрудника должны быть написаны в разделе «Имя и фамилия» ( поле, обозначенное стрелкой с цифрой 1.).<br>
                            • № кимлика/паспорта (поле, отмеченное стрелкой с цифрой 2): Следует указать номер турецкого удостоверения личности или номер паспорта работника (если он/она не является гражданином Турции).<br>
                            • Компания (поле, отмеченное стрелкой с цифрой 3): В этих полях необходимо полностью и правильно написать название компании, в которой будет работать работник.<br>
                            • Раздел «Ознакомился»  (поле, отмеченное стрелкой с цифрой 4): В этих полях проставляется дата заполнения документа, и работник должен поставить свою подпись.<br>
                        </p>
                        <img src="./static/img/yasaklıfaaliyetler1.png">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Скан паспорта</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p><img src="./static/img/pasaport.jpg" style="height: 400px; width: 300px; margin-right: 40px;">
                            <br><br>Требуется копия (ксерокопия) или скан лицевой и оборотной сторон документа, удостоверяющего личность,сканы должны быть четко отображены, сторона документа расположена одна под другой,как показано на рисунке. При сканировании лицо должно быть четким, без размытостей и теней, чтобы паспортные данные были легко читаемы.</p>
                        </div>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Excel для Входа Сотрудников</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>О Проживании Персонала, Который Проходит На Строительную Площадку Akkuyu Nükleer A.Ş.</b><br><br>
                            Для проведения проверки безопасности персонала, который проходит на строительную площадку Akkuyu Nükleer A.Ş. Министерством энергетики, необходимо предоставить 
                            информацию о месте жительства сотрудников. Пропускные карты будут выданы сотрудникам согласно этим спискам, и важно отметить, что для тех, чьи данные не будут 
                            предоставлены, Akkuyu Nükleer A.Ş. не будет выдавать карты.<br><br>
                            При отправке документов для проверки в Министерство, если адрес проживания сотрудника ещё не определён или может измениться, ОБЯЗАТЕЛЬНО необходимо обновить 
                            или добавить информацию о месте жительства при запросе пропускной карты для доступа на площадку.<br><br>
                            <b>На строительной площадке Akkuyu Nükleer A.Ş. для сотрудников, которые будут работать, добавлены следующие столбцы для ввода данных и инструкции по их использованию:</b><br>
                            •	В таблице ввода данных сотрудников есть столбцы, в которых необходимо выбрать значение. Чтобы выбрать значение в этих столбцах, нужно нажать кнопку "Seç/Выбрать". 
                            В эти поля нельзя вводить данные вручную, и нельзя вставлять скопированный текст. Эти столбцы не могут быть оставлены пустыми, и данные, не входящие в список вариантов, 
                            не будут приняты.<br><br>
                            •	Столбцы, в которых нет кнопки "Seç/Выбрать", должны быть заполнены вручную. Все данные в этих столбцах должны быть написаны большими латинскими буквами.
                        </p><br>
                        <img src="./static/img/2.jpg"><br><br>
                        <p><b>Инструкция по вставке выбранных данных в соответствующий столбец:</b><br>
                            •	Для выбора соответствующих строк в столбце используйте указатель мыши.<br>
                            •	В открывшемся окне нажмите кнопку "Добавить задачу в выбранные ячейки". 
                            Выбранные данные будут добавлены в выбранные строки. Чем больше строк будет выбрано, тем больше строк будет заполнено данными.
                        </p><br>
                        <img src="./static/img/3.jpg"><br><br>    
                        <p><b>Инструкция по удалению введенных данных:</b><br>
                            •	Чтобы удалить данные в соответствующем столбце, нажмите кнопку "Очистить выбранную ячейку". </p><br>
                        <img src="./static/img/4.jpg"><br><br>
                        <p>•	Операция удаления с помощью команды DELETE невозможна. При попытке удаления с помощью команды DELETE будет выведено сообщение об ошибке.
                        </p><br>
                        <img src="./static/img/5.jpg"><br><br>
                        <p><b>Инструкция по изменению данных:</b><br>
                            •	Чтобы внести изменения в соответствующие данные, нажмите кнопку "Seç/Выбрать" и выберите новую информацию. Затем нажмите кнопку 
                            "Добавить задачу в выбранные ячейки", чтобы завершить изменения.
                        </p><br>
                        <img src="./static/img/6.jpg"><br><br>
                        <p><b>Новые столбцы, добавленные в конец таблицы:</b><br>
                            <b>Столбец R:</b> Место проживания сотрудника на территории Турецкой Республики, пока он работает на Акуйской АЭС. Заполнение этого столбца 
                            не обязательно при проверке документов для Министерства, однако должно быть заполнено при запросе физической карты. Это поле не может быть 
                            оставлено пустым, и если сотрудник проживает в пределах границ Мерсина, следует выбрать соответствующий адрес проживания. Если он проживает 
                            за пределами границ Мерсина, следует выбрать вариант "Не проживает в Мерсине".
                        </p><br>
                        <img src="./static/img/25.png">
                        <img src="./static/img/26.png"><br>
                        <p><br><b>Столбец S:</b> Для иностранных сотрудников следует ввести номер заявки на рабочее разрешение или номер синего удостоверения личности 
                            (номер удостоверения, начинающийся с 99). Для турецких сотрудников или сотрудников, выполняющих визит на площадку по направлению, заполнение 
                            этого столбца не является обязательным.
                        </p>
                        <img src="./static/img/27.png"><br>
                        <p><br><b>Столбец T:</b> Если заявка на рабочее разрешение была подана, этот столбец должен быть заполнен для иностранных сотрудников. 
                            Если имеется физический идентификатор, то столбец не заполняется. Для турецких сотрудников и сотрудников, выполняющих визит на площадку, 
                            заполнение этого столбца не обязательно.
                        </p>
                        <img src="./static/img/28.png"><br>
                        <p><br><b>Заполняемые другие поля:</b><br>
                            1. Дата поступления: Дата подготовки документов.<br> 
                            2. Запрашивающий: Имя и фамилия ответственного за персонал компании.<br> 
                            3. Контактная информация запрашивающего: Мобильный номер телефона ответственного за персонал компании.<br> 
                            4. Имя: Имя сотрудника, который начнет работу в компании.<br> 
                            5. Фамилия: Фамилия сотрудника, который начнет работу в компании.<br> 
                            6. ТС/ПАС: Номер удостоверения личности или паспорта сотрудника.<br> 
                            7. Имя отца: Имя отца для иностранных сотрудников.<br> 
                            8. Место рождения: Место рождения сотрудника.<br> 
                            9. Дата рождения: Дата рождения сотрудника.<br>
                        </p>
                        <img src="./static/img/personelgiris1.jpeg"><br><br>
                        <p> 10. Должность: Должностная информация о сотруднике.<br> 
                            11. Компания: Информация о компании, в которой будет работать сотрудник.<br><br> 
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Если компании нет в списке, пожалуйста, свяжитесь с нами.<br><br> 
                            12. Место работы: Место, где сотрудник будет работать.<br> 
                            13. Пол: Информация о поле сотрудника.<br> 
                            14. Номер телефона сотрудника: Телефонный номер сотрудника.<br> 
                            15. Номер телефона родственника сотрудника: Телефонный номер родственника сотрудника.<br> 
                            16. Судимость и ограничения по здоровью: Судимость и ограничения по здоровью сотрудника, если они имеются.<br> 
                            17. Национальность: Информация о национальности сотрудника.<br><br> 
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Все поля должны быть заполнены полностью в соответствии с инструкциями.<br><br>
                        </p>
                        <img src="./static/img/personelgiris2.jpeg">
                    </div>
                </div>
            </div>                                   
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Официальное письмо</button>
                </div>
                <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Для получения разрешения на вход на строительную площадку Akkuyu NPP и оформления пропусков для персонала требуется письмо, подписанное директором компании или уполномоченным лицом (с доверенностью) и адресованное <b>Директору по безопасности Артему Зародыщу</b> и <b>Со-директору по безопасности Селиму Темрену</b>. Это письмо должно быть отправлено по следующей процедуре, с необходимыми приложениями:<br><br>
                            <b>1. Отправка письма:</b><br>
                            Письмо, адресованное Директору по безопасности Артему Зародыщу и Со-директору по безопасности Селиму Темрену, должно быть отправлено на электронную почту <a href="mailto:office@t2ic.com">office@t2ic.com</a>.<br><br>
                            <b>2. Проверка документов:</b><br>
                            Официальное письмо и его приложения должны быть отправлены на электронные почты: для иностранных сотрудников — <a href="mailto:id@t2ic.com">id@t2ic.com</a>, для турецких сотрудников — <a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a> и <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a>.<br><br>
                            <b>3. Таблица с перечнем сотрудников:</b><br>
                            • Таблица должна быть подписана и скреплена печатью руководителем компании или уполномоченным лицом.<br>
                            • Таблица должна точно соответствовать именам сотрудников, указанным в приложенных документах. В противном случае документы не будут обработаны.<br><br>
                            Завершение этих процедур в полном объеме и правильно является обязательным для получения разрешения на вход и оформления пропусков для персонала.<br><br>                                                    
                            <img src="./static/img/personelist.png"><br><br>
                        </p>
                    </div>
                </div>
            </div>                                                
        </div>
        </div>`
    },
    digerulkeler: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Diğer Ülke Vatandaşlı Personeller İçin Bakanlık Başvurusu</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">Saha giriş onayı alınması için (ziyaretçi ya da sürekli çalışanlar için aynı prosedür geçerlidir), iki aşamalı bir süreç uygulanmaktadır.<br><br>
                    <b>1. Aşama:</b><br>Şirket yöneticisi veya yetkili kişi tarafından imzalanmış (vekaletname ile) ve <b>Güvenlik Direktörü Artem Zarodysh</b> ve 
                    <b>Güvenlik Eş Direktörü Selim Temren’in</b>dikkatine yazılmış resmi mektup onayı gerekmektedir.<br><br>
                    <b>2. Aşama:</b><br>Onayın ardından, aşağıda listelenen belgeler tarafımıza <a href="mailto:id@t2ic.com">id@t2ic.com</a> e-posta adresi üzerinden gönderilmelidir:<br><br>
                    •	Pasaport Taraması (Tüm Sayfalar, PDF formatında)<br>
                    •	Diploma/Sertifika<br>
                    •   Eğer mevcutsa mavi kimlik taraması, yoksa:<br> 
                        &nbsp&nbsp&nbsp - Çalışma izni başvurusu ve ekran görüntüsü, yoksa:<br>
                        &nbsp&nbsp&nbsp - Görevlendirme ve çalışma defteri / Personelin Firmada Çalıştığını Kanıtlayan Belge<br>
                    •	Sahada Dikkat Edilecek Hususlar İle İlgili Bilgilendirme<br>
                    •	Sahaya Girişe İlişkin Açık Rıza Formu<br>    
                    •	Personel Giriş Excel tablosu (Eksiksiz ve talimatlara uygun doldurulmalıdır)<br><br>
                    <u style="color: red;"><b>NOT:</b></u> Görevlendirmeli personeller için kart veya geçiş süresi, görevlendirme süresi kadar olacaktır.<br><br>
                    <b>Fiziksel evrak teslimi gerekli değildir.</b><br><br>
                    Belgelerin doğru sıralama ve isimlendirme kurallarına uygun olması önemlidir. Bu, belgelerin işleme alınma sürecini hızlandıracaktır. Belgeleri, 
                    pasaporttaki gibi ad-soyad ile büyük harflerle isimlendirip, her bir kişi için ayrı dosyalar oluşturmalısınız. Evraklarınızı pasaport numarası 
                    ile isimlendirip, 7Z zip formatında ve PDF dosyası olarak göndermeniz rica olunur.<br><br>
                    <u style="color: red;"><b>NOT:</b></u> Personel sayısı birden fazla ise belgeleri dosya ismi ile isimlendirmesi gerekmektedir. Örneğin, bütün pasaport taramaları "PASAPORT" adında 
                    tek bir dosya içinde olmalıdır.<br><br>
                    Örneğin: KARINA SAZANOVA dosyasında:<br><br>
                    KARINA SAZANOVA PASAPORT<br>
                    KARINA SAZANOVA AÇIK RIZA<br>
                    KARINA SAZANOVA YASAKLI FALIYETLER<br><br>
                    <u style="color: red;"><b>ÖNEMLİ:</b></u> Eğer personel başka bir firmadan geliyorsa, geldiği firma ile sahadaki bir firmanın sözleşmesi de 
                    eklenmelidir (ilk ve son sayfa).<br><br>
                    •	Ayrıca, sağlık takip formu olmadan maksimum 5 iş günü ziyaretçi girişi verilebilir. Daha uzun süreli girişler için, <a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a>  
                    adresiyle iletişime geçilmelidir.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Açık Rıza Beyanı</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Akkuyu Nükleer Güç Santrali (“NGS”) Sahasına Giriş İçin Yapılacak İşlemler Kapsamında Açık Rıza Beyanı</b><br><br>Bu belge, veri sorumlusu ve veri işleyen sıfatıyla, 
                            Akkuyu Nükleer Güç Santrali sahasına giriş için yapılacak işlemler çerçevesinde, kişisel verilerin kaydedilmesi, saklanması, güncellenmesi, sınıflandırılması ve 
                            işlenmesini; ayrıca ilgili mevzuatın izin verdiği hallerde, açık rıza gösterilmesi durumunda üçüncü kişilere açıklanmasını ve devredilmesini kabul ve beyan eder.<br>
                            <br><br>
                            1. Belge toplamda 2 sayfadan oluşur.<br>
                            &nbsp&nbsp&nbsp - İlk sayfada, ok ile işaretlenen alana personelin Adı ve Soyadı yazılmalıdır.<br></p>
                        <img src="./static/img/acikriza3.png"><br><br>
                        <p>2. İkinci sayfa, personelin kişisel bilgilerinin ve imzasının bulunduğu alanlar içerir:<br>
                            &nbsp&nbsp&nbsp - 1. numaralı ok ile işaretlenen iki alana, personelin Adı Soyadı yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 2. numaralı ok ile işaretlenen iki alana, personel tarafından imza atılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 3. numaralı ok ile işaretlenen alana, personelin TC Kimlik Numarası yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 4. numaralı ok ile işaretlenen alana, belgenin hazırlandığı tarih yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 5. numaralı ok ile işaretlenen alana, personelin telefon numarası yazılmalıdır.<br>
                            &nbsp&nbsp&nbsp - 6. numaralı ok ile işaretlenen alana, personelin e-posta adresi yazılmalıdır.<br>
                        <img src="./static/img/acikriza4.png">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Yasaklı Faaliyet Formu</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Akkuyu Nükleer Güç Santrali (“NGS”) sahasında uyulması gereken kurallara dair belge ile ilgili bilgiler aşağıdaki gibidir:<br><br>
                            Belge iki kısımdan oluşur ve her iki kısımda da aynı bilgiler doldurulacaktır:<br>
                            •	"Adı Soyadı" (1. numaralı ok ile işaretli alan): Personelin adı ve soyadı bu alanlara yazılmalıdır.<br>
                            •	"TC/PAS Nu" (2. numaralı ok ile işaretli alan): Personelin TC Kimlik Numarası veya Pasaport Numarası (TC vatandaşı değilse) yazılmalıdır.<br>
                            •	"Firma" (3. numaralı ok ile işaretli alan): Personelin görev yapacağı firmanın adı eksiksiz ve doğru bir şekilde bu alanlara yazılmalıdır.<br>
                            •	"Okudum, anladım." (4. numaralı ok ile işaretli alan): Bu alanlara belgenin doldurulduğu tarih yazılacak ve personel imzasını atmalıdır.</p>
                        <img src="./static/img/yasaklıfaaliyetler1.png">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Pasaport Taraması</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p><img src="./static/img/pasaport.jpg" style="height: 400px; width: 300px; margin-right: 40px;">
                                <br><br>Pasaport belgenizin ön ve arka yüzünün, yandaki görselde gösterildiği gibi alt alta ve net olacak şekilde bir kopyası (fotokopi) 
                                    veya taraması gerekmektedir. Bu taramada, her iki yüz de net olmalı, herhangi bir bulanıklık veya gölge olmamalıdır, böylece pasaport 
                                    bilgileri kolayca okunabilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Diploma/Sertifika</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Son mezun olunan okuldan teslim alınan diploma belgesinin PDF formatında taranmış bir kopyası gerekmektedir.
                        </p>        
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Görev Yazısı/Görevlendirme</button>
                </div>
                <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Eğer çalışan görevlendirme yazısı ile gelmiş ise, yetkili kişi tarafından imzalanmış ve kaşelenmiş bir görevlendirme belgesi ile 
                            birlikte, çalışanın bu işyerinde istihdam edildiğini doğrulayan iş sözleşmesi veya çalışma defteri gönderilmelidir.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-6" aria-expanded="true">Personel Giriş Excel</button>
                </div>
                <div id="faq-1-6" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Akkuyu Nükleer A.Ş. Şantiye Sahasına Giriş Yapan Personelin İkamet Bilgileri Hakkında</b><br><br>
                            Akkuyu Nükleer A.Ş. şantiye sahasına giriş yapan personelin güvenlik soruşturmalarının Enerji Bakanlığı tarafından gerçekleştirilebilmesi 
                            için, personelin ikamet adreslerinin tarafımıza bildirilmesi zorunludur. Giriş kartları, bu listelere göre çalışanlara teslim edilecek olup, 
                            bildirilmemiş olanlar için Akkuyu Nükleer A.Ş. tarafından kart teslimi yapılmayacağını önemle bildiririz.<br><br>
                            Bakanlık evraklarını kontrol amacıyla tarafımıza iletirken, eğer personelin ikamet adresi henüz belirlenmemişse ya da değişebilir bir durumda 
                            ise, saha giriş kart talebinde bulunurken ikamet bilgilerini güncellemeniz ya da eklemeniz MUTLAKA gerekmektedir.<br><br>
                            <b>Akkuyu Nükleer A.Ş. şantiye sahasında çalışacak personelin veri girişine yönelik eklenen sütunlar ve kullanım talimatları şu şekildedir:</b><br>
                            •	Personel giriş tablosunda, zorunlu olarak seçim yapılması gereken sütunlar mevcuttur. Bu sütunlarda seçim yapmak için <u>Seç/Выбрать</u> 
                            butonuna tıklamanız gerekmektedir. Bu alanlara manuel olarak veri girişi yapılamaz ve kopyalanmış bir metin yapıştırılamaz. Bu sütunlar boş 
                            bırakılamaz ve seçenek dışındaki bir veri kabul edilemez.<br><br>
                            •	<u>Seç/Выбрать</u> butonu bulunmayan sütunlar ise manuel olarak doldurulmalıdır. Bu sütunlardaki tüm bilgiler büyük Latin harfleriyle yazılmalıdır.
                        </p><br>
                        <img src="./static/img/2.jpg"><br><br>
                        <p><b>Seçilen Veriyi İlgili Sütuna Yapıştırma Talimatı:</b><br>
                            •	Sütundaki ilgili satır veya satırları seçmek için mouse imlecini kullanarak seçim yapın.<br>
                            •	Açılan pencerede “Seçili Hücrelere Görevi Ekle” butonuna tıklayın. Seçilen veri, seçilen satırlara eklenir. Ne kadar satır seçilirse, 
                            o kadar satıra veri eklenir.
                        </p><br>
                        <img src="./static/img/3.jpg"><br><br>    
                        <p><b>Girilen Veriyi Silme Talimatı:</b><br>
                            •	İlgili sütundaki veriyi silmek için “Seçili Hücreyi Temizle” butonuna tıklayın. </p><br>
                        <img src="./static/img/4.jpg"><br><br>
                        <p>•	DELETE komutuyla silme işlemi yapılamaz. DELETE komutuyla silme girişiminde uyarı mesajı alınır.
                        </p><br>
                        <img src="./static/img/5.jpg"><br><br>
                        <p><b>Veri Değişikliği Talimatı:</b><br>
                            •	İlgili veri üzerinde değişiklik yapmak için  <u>Seç/Выбрать</u> 
                            butonuna tıklayıp yeni bilgiyi seçin. Ardından “Seçili Hücrelere Görevi Ekle” butonuna tıklayarak değişiklikleri tamamlayın.
                        </p><br>
                        <img src="./static/img/6.jpg"><br><br>
                        <p><b>Tablonun En Sonuna Eklenen Yeni Sütunlar:</b><br>
                            <b>R sütunu:</b> Personelin Akkuyu’da çalışırken Türkiye Cumhuriyeti topraklarında ikamet ettiği yer. Bakanlık evraklarının 
                            kontrolünde bu sütunun doldurulması zorunlu değildir, ancak fiziki kart talebinde bulunurken bu alan doldurulmalıdır. 
                            Boş bırakılamaz ve personel Mersin il sınırı içerisinde yaşıyorsa, ilgili ikamet adresi seçilmelidir. Mersin il sınırları 
                            dışında yaşıyorsa “Mersin’de ikamet etmiyor” seçeneği kullanılmalıdır.
                        </p><br>
                        <img src="./static/img/25.png">
                        <img src="./static/img/26.png"><br>
                        <p><br><b>S sütunu:</b>Yabancı personel için çalışma izni başvuru numarası veya mavi kimlik numarası (99 ile başlayan kimlik) girilmelidir. 
                            Türk personeller veya görevlendirme ile saha ziyareti gerçekleştiren personeller için bu sütun doldurulması zorunlu değildir.
                        </p>
                        <img src="./static/img/27.png"><br>
                        <p><br><b>T sütunu:</b>Çalışma izni başvurusu yapılmışsa yabancı personel için bu sütun doldurulmalıdır. Fiziki kimlik mevcutsa doldurulmaz. 
                            Türk personeller ve saha ziyareti gerçekleştiren görevliler için doldurulması zorunlu değildir.
                        </p>
                        <img src="./static/img/28.png"><br>
                        <p><br><b>Doldurulacak Diğer Alanlar:</b><br>
                            1. Geliş Tarihi: Evrakların hazırlandığı tarih.<br>
                            2. Talep Eden: Firmanın personel sorumlusunun adı soyadı.<br>
                            3. Talep Eden İletişim Bilgileri: Firmanın personel sorumlusunun cep telefon numarası.<br>
                            4. Ad: Firmada göreve başlayacak personelin adı.<br>
                            5. Soyad: Firmada göreve başlayacak personelin soyadı.<br>
                            6. TC/PAS: Personelin kimlik veya pasaport numarası.<br>
                            7. Baba Adı: Yabancı personeller için baba adı.<br>
                            8. Doğum Yeri: Personelin doğum yeri.<br>
                            9. Doğum Tarihi: Personelin doğum tarihi.<br>
                        </p>
                        <img src="./static/img/personelgiris1.jpeg"><br><br>
                        <p> 10. Görevi: Personelin görev bilgisi.<br>
                            11. Firma: Personelin çalışacağı firma bilgisi.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Eğer firma listede yoksa bizimle iletişime geçin.<br><br>
                            12. Çalıştığı Yer: Personelin görev yapacağı yer.<br>
                            13. Cinsiyet: Personelin cinsiyet bilgisi.<br>
                            14. Çalışan Telefon Numarası: Personelin telefon numarası.<br>
                            15. Çalışan Yakını Telefon Numarası: Personelin yakınının telefon numarası.<br>
                            16. Adli Sicil Kaydı ve Sağlık Kısıtlamaları: Personelin varsa adli sicil kayıt ve sağlık kısıtlamaları.<br>
                            17. Uyruk: Personelin uyruk bilgisi.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Tüm alanlar talimatlara uygun olarak eksiksiz doldurulmalıdır.<br><br>
                        </p>
                        <img src="./static/img/personelgiris2.jpeg">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-7" aria-expanded="true">Mektup</button>
                </div>
                <div id="faq-1-7" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Akkuyu NGS inşaat alanına giriş izni ve personel giriş kartlarının düzenlenmesi için, şirket yöneticisi veya yetkili kişi tarafından imzalanmış (vekaletname ile) ve 
                            <b>Güvenlik Direktörü Artem Zarodysh</b> ve <b>Güvenlik Eş Direktörü Selim Temren’in</b> dikkatine yazılmış bir yazı gereklidir. Bu yazı, gerekli mektup ekleriyle 
                            birlikte aşağıdaki adımlar izlenerek gönderilmelidir:<br><br>
                            <b>1. Yazının Gönderimi:</b><br>
                            Güvenlik Direktörü Artem Zarodysh ve Güvenlik Eş Direktörü Selim Temren’e hitaben yazılan yazı, <a href="mailto:office@t2ic.com">office@t2ic.com</a> adresine iletilmelidir.<br><br>
                            <b>2. Belgelerin Kontrolü:</b><br>
                            Resmi yazı ve ekleri, yabancı personeller için <a href="mailto:id@t2ic.com">id@t2ic.com</a> , Türk personeller için <a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a> ve <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a> 
                            e-posta adreslerine gönderilmelidir.<br><br>
                            <b>3. Personel Listesi Tablosu:</b><br>
                            •	Tablo, şirket yöneticisi veya yetkili kişi tarafından kaşe ve imzalanmış olmalıdır.
                            •	Tablo, ekli belgelerde yer alan personel isimleriyle birebir eşleşmelidir. Aksi takdirde, belgeler işleme alınmayacaktır.<br><br>
                            Bu süreçlerin eksiksiz ve doğru bir şekilde tamamlanması, giriş izni ve kart düzenlemeleri için zorunludur.<br><br>
                            <img src="./static/img/personelist.png"><br><br>
                        </p>
                    </div>
                </div>
            </div>  
        </div>
        </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Заявление в министерство для работников, имеющих гражданство прочих стран</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">Для получения разрешения на доступ на территорию (та же процедура применяется как для посетителей, так и для постоянных сотрудников) применяется двухэтапный процесс.<br><br>
                    <b>Этап 1:</b><br>Необходимо официальное письмо, подписанное руководителем компании или уполномоченным лицом (с доверенностью), адресованное <b>Директору по безопасности Артему Зародышу</b> и 
                    <b>Заместителю директора по безопасности Селиму Темрену</b> для получения согласования.<br><br>
                    <b>Этап 2:</b><br>После получения согласования необходимо отправить следующие документы на электронную почту <a href="mailto:id@t2ic.com">id@t2ic.com</a>:<br><br>
                    • Скан паспорта (все страницы в формате PDF)<br>
                    • Диплом/сертификат<br>
                    • Командировочный лист<br>
                    • Информационная справка о вопросах, которые необходимо учитывать на площадке<br>
                    • Прямое выраженное согласие на вход на площадку<br>
                    • Таблица Excel для оформления разрешения на вход на площадку персонала(должна быть заполнена полностью и в соответствии с инструкциями)<br>
                    • Справка с места работы<br><br>
                    <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Срок действия пропуска или срок действия для командированного персонала будет равен сроку командировки.<br><br>
                    <b>Подача оригинала документов не требуется.</b><br><br>
                    Важно, чтобы в документах соблюдалась правильная последовательность и их описание. Это ускорит процесс оформления документов. Документы следует именовать именами и фамилиями с заглавной буквы, как в паспорте, и создавать отдельные файлы для каждого лица. Просим вас именовать документы с указанием номера паспорта и присылать их в формате 7Z zip и в формате PDF.<br><br>
                    <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Если количество работников больше одного, документы должны быть указаны названием файла. Например, все сканы паспортов должны находиться в одном файле под названием "ПАСПОРТ".<br><br>
                    Например: файл KARINA SAZANOVA:<br><br>
                    КАРИНА САЗАНОВА ПАСПОРТ<br>
                    КАРИНА САЗАНОВА ЯВНОЕ СОГЛАСИЕ<br>
                    КАРИНА САЗАНОВА ЗАПРЕЩЕННЫЕ ДЕЙСТВИЯ<br><br>
                    <u style="color: red;"><b>ВАЖНО:</b></u> Если работник переходит из другой компании, необходимо также приложить договор между компанией, работающей на площадке, из которой переходит работник,(первая и последняя страницы).<br><br>
                    • Кроме этого, без медицинской формы посетители могут посещать территорию площадки не более 5 рабочих дней. Для более длительных посещений площадки, необходимо обратиться по адресу <a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a>.
                </p>                                        
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button collapsed fw-bolder fs-3" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Прямое выраженное согласие</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Заявление о прямом выраженном согласии в рамках процедур оформления, которые необходимо выполнить для входа на площадку атомной электростанции Аккую (АЭС)</b><br><br>
                            Настоящий документ предусматривает, в качестве ответственного за обработку данных и обработчика персональных данных, регистрацию, хранение, актуализацию, классификацию и обработку персональных данных в рамках процедур, необходимых для получения пропуска к сайту атомной электростанции Аккую, а также разглашение и передачу третьим лицам в случаях, разрешенных соответствующим законодательством, в случае прямо выраженного согласия.<br>
                        <br><br>
                        1. Документ состоит из 2 страниц.<br>
                        &nbsp&nbsp&nbsp -На первой странице в поле, отмеченном стрелкой, необходимо вписать имя и фамилию работника.<br></p>
                        <img src="./static/img/acikriza3.png"><br><br>
                        <p>2. На второй странице находятся поля для персональных данных и подписи работника:<br>
                            &nbsp&nbsp&nbsp - В двух полях, отмеченных стрелкой с цифрой 1, следует указать имя и фамилию работника.<br>
                            &nbsp&nbsp&nbsp - Два поля, отмеченные стрелкой с цифрой 2, должны быть подписаны работником.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 3, следует указать номер турецкого удостоверения личности работника.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 4, следует указать дату составления документа.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 5, следует указать номер телефона работника.<br>
                            &nbsp&nbsp&nbsp - В поле, отмеченном стрелкой с цифрой 6, следует указать адрес электронной почты работника.<br>
                        </p>
                        <img src="./static/img/acikriza4.png">
                    </div>
                </div>
            </div>                                  
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Форма о запрещенной деятельности</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Ниже приведена информация, касающаяся документа о правилах, которые необходимо соблюдать на площадке атомной электростанции Аккую (АЭС):<br><br>
                            Документ состоит из двух разделов, и в обоих разделах необходимо заполнить одну и ту же информацию:<br>
                            • Имя и фамилия сотрудника должны быть написаны в разделе «Имя и фамилия» ( поле, обозначенное стрелкой с цифрой 1.).<br>
                            • № кимлика/паспорта (поле, отмеченное стрелкой с цифрой 2): Следует указать номер турецкого удостоверения личности или номер паспорта работника (если он/она не является гражданином Турции).<br>
                            • Компания (поле, отмеченное стрелкой с цифрой 3): В этих полях необходимо полностью и правильно написать название компании, в которой будет работать работник.<br>
                            • Раздел «Ознакомился»  (поле, отмеченное стрелкой с цифрой 4): В этих полях проставляется дата заполнения документа, и работник должен поставить свою подпись.<br>
                        </p>
                        <img src="./static/img/yasaklıfaaliyetler1.png">
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Скан паспорта</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p><img src="./static/img/pasaport.jpg" style="height: 400px; width: 300px; margin-right: 40px;">
                            <br><br>Требуется копия (ксерокопия) или скан лицевой и оборотной сторон документа, удостоверяющего личность,сканы должны быть четко отображены, сторона документа расположена одна под другой,как показано на рисунке. При сканировании лицо должно быть четким, без размытостей и теней, чтобы паспортные данные были легко читаемы.</p>
                        </div>
                    </div>
                </div>
            </div>                                         
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Диплом/сертификат</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Необходимо предоставить отсканированную копию диплома об окончании последнего учебного заведения в формате PDF.
                        </p>        
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Командировочный лист</button>
                </div>
                <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Если работник прибыл с командировочным листом, вместе с трудовым договором или трудовой книжкой необходимо направить письмо с подписью и печатью уполномоченного лица, подтверждающее, что работник трудоустроен на данном рабочем месте.
                        </p>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-6" aria-expanded="true">Excel для Входа Сотрудников</button>
                </div>
                <div id="faq-1-6" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>О Проживании Персонала, Который Проходит На Строительную Площадку Akkuyu Nükleer A.Ş.</b><br><br>
                            Для проведения проверки безопасности персонала, который проходит на строительную площадку Akkuyu Nükleer A.Ş. Министерством энергетики, необходимо предоставить 
                            информацию о месте жительства сотрудников. Пропускные карты будут выданы сотрудникам согласно этим спискам, и важно отметить, что для тех, чьи данные не будут 
                            предоставлены, Akkuyu Nükleer A.Ş. не будет выдавать карты.<br><br>
                            При отправке документов для проверки в Министерство, если адрес проживания сотрудника ещё не определён или может измениться, ОБЯЗАТЕЛЬНО необходимо обновить 
                            или добавить информацию о месте жительства при запросе пропускной карты для доступа на площадку.<br><br>
                            <b>На строительной площадке Akkuyu Nükleer A.Ş. для сотрудников, которые будут работать, добавлены следующие столбцы для ввода данных и инструкции по их использованию:</b><br>
                            •	В таблице ввода данных сотрудников есть столбцы, в которых необходимо выбрать значение. Чтобы выбрать значение в этих столбцах, нужно нажать кнопку "Seç/Выбрать". 
                            В эти поля нельзя вводить данные вручную, и нельзя вставлять скопированный текст. Эти столбцы не могут быть оставлены пустыми, и данные, не входящие в список вариантов, 
                            не будут приняты.<br><br>
                            •	Столбцы, в которых нет кнопки "Seç/Выбрать", должны быть заполнены вручную. Все данные в этих столбцах должны быть написаны большими латинскими буквами.
                        </p><br>
                        <img src="./static/img/2.jpg"><br><br>
                        <p><b>Инструкция по вставке выбранных данных в соответствующий столбец:</b><br>
                            •	Для выбора соответствующих строк в столбце используйте указатель мыши.<br>
                            •	В открывшемся окне нажмите кнопку "Добавить задачу в выбранные ячейки". 
                            Выбранные данные будут добавлены в выбранные строки. Чем больше строк будет выбрано, тем больше строк будет заполнено данными.
                        </p><br>
                        <img src="./static/img/3.jpg"><br><br>    
                        <p><b>Инструкция по удалению введенных данных:</b><br>
                            •	Чтобы удалить данные в соответствующем столбце, нажмите кнопку "Очистить выбранную ячейку". </p><br>
                        <img src="./static/img/4.jpg"><br><br>
                        <p>•	Операция удаления с помощью команды DELETE невозможна. При попытке удаления с помощью команды DELETE будет выведено сообщение об ошибке.
                        </p><br>
                        <img src="./static/img/5.jpg"><br><br>
                        <p><b>Инструкция по изменению данных:</b><br>
                            •	Чтобы внести изменения в соответствующие данные, нажмите кнопку "Seç/Выбрать" и выберите новую информацию. Затем нажмите кнопку 
                            "Добавить задачу в выбранные ячейки", чтобы завершить изменения.
                        </p><br>
                        <img src="./static/img/6.jpg"><br><br>
                        <p><b>Новые столбцы, добавленные в конец таблицы:</b><br>
                            <b>Столбец R:</b> Место проживания сотрудника на территории Турецкой Республики, пока он работает на Акуйской АЭС. Заполнение этого столбца 
                            не обязательно при проверке документов для Министерства, однако должно быть заполнено при запросе физической карты. Это поле не может быть 
                            оставлено пустым, и если сотрудник проживает в пределах границ Мерсина, следует выбрать соответствующий адрес проживания. Если он проживает 
                            за пределами границ Мерсина, следует выбрать вариант "Не проживает в Мерсине".
                        </p><br>
                        <img src="./static/img/25.png">
                        <img src="./static/img/26.png"><br>
                        <p><br><b>Столбец S:</b> Для иностранных сотрудников следует ввести номер заявки на рабочее разрешение или номер синего удостоверения личности 
                            (номер удостоверения, начинающийся с 99). Для турецких сотрудников или сотрудников, выполняющих визит на площадку по направлению, заполнение 
                            этого столбца не является обязательным.
                        </p>
                        <img src="./static/img/27.png"><br>
                        <p><br><b>Столбец T:</b> Если заявка на рабочее разрешение была подана, этот столбец должен быть заполнен для иностранных сотрудников. 
                            Если имеется физический идентификатор, то столбец не заполняется. Для турецких сотрудников и сотрудников, выполняющих визит на площадку, 
                            заполнение этого столбца не обязательно.
                        </p>
                        <img src="./static/img/28.png"><br>
                        <p><br><b>Заполняемые другие поля:</b><br>
                            1. Дата поступления: Дата подготовки документов.<br> 
                            2. Запрашивающий: Имя и фамилия ответственного за персонал компании.<br> 
                            3. Контактная информация запрашивающего: Мобильный номер телефона ответственного за персонал компании.<br> 
                            4. Имя: Имя сотрудника, который начнет работу в компании.<br> 
                            5. Фамилия: Фамилия сотрудника, который начнет работу в компании.<br> 
                            6. ТС/ПАС: Номер удостоверения личности или паспорта сотрудника.<br> 
                            7. Имя отца: Имя отца для иностранных сотрудников.<br> 
                            8. Место рождения: Место рождения сотрудника.<br> 
                            9. Дата рождения: Дата рождения сотрудника.<br>
                        </p>
                        <img src="./static/img/personelgiris1.jpeg"><br><br>
                        <p> 10. Должность: Должностная информация о сотруднике.<br> 
                            11. Компания: Информация о компании, в которой будет работать сотрудник.<br><br> 
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Если компании нет в списке, пожалуйста, свяжитесь с нами.<br><br> 
                            12. Место работы: Место, где сотрудник будет работать.<br> 
                            13. Пол: Информация о поле сотрудника.<br> 
                            14. Номер телефона сотрудника: Телефонный номер сотрудника.<br> 
                            15. Номер телефона родственника сотрудника: Телефонный номер родственника сотрудника.<br> 
                            16. Судимость и ограничения по здоровью: Судимость и ограничения по здоровью сотрудника, если они имеются.<br> 
                            17. Национальность: Информация о национальности сотрудника.<br><br> 
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Все поля должны быть заполнены полностью в соответствии с инструкциями.<br><br>
                        </p>
                        <img src="./static/img/personelgiris2.jpeg">
                    </div>
                </div>
            </div>                                   
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Официальное письмо</button>
                </div>
                <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Для получения разрешения на вход на строительную площадку Akkuyu NPP и оформления пропусков для персонала требуется письмо, подписанное директором компании или уполномоченным лицом (с доверенностью) и адресованное <b>Директору по безопасности Артему Зародыщу</b> и <b>Со-директору по безопасности Селиму Темрену</b>. Это письмо должно быть отправлено по следующей процедуре, с необходимыми приложениями:<br><br>
                            <b>1. Отправка письма:</b><br>
                            Письмо, адресованное Директору по безопасности Артему Зародыщу и Со-директору по безопасности Селиму Темрену, должно быть отправлено на электронную почту <a href="mailto:office@t2ic.com">office@t2ic.com</a>.<br><br>
                            <b>2. Проверка документов:</b><br>
                            Официальное письмо и его приложения должны быть отправлены на электронные почты: для иностранных сотрудников — <a href="mailto:id@t2ic.com">id@t2ic.com</a>, для турецких сотрудников — <a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a> и <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a>.<br><br>
                            <b>3. Таблица с перечнем сотрудников:</b><br>
                            • Таблица должна быть подписана и скреплена печатью руководителем компании или уполномоченным лицом.<br>
                            • Таблица должна точно соответствовать именам сотрудников, указанным в приложенных документах. В противном случае документы не будут обработаны.<br><br>
                            Завершение этих процедур в полном объеме и правильно является обязательным для получения разрешения на вход и оформления пропусков для персонала.<br><br>                                                    
                            <img src="./static/img/personelist.png"><br><br>
                        </p>
                    </div>
                </div>
            </div>                                    
        </div>
        </div>`
    },
    ygiris: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Yabancı Personeller İçin Giriş Talebi</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">
                    Akkuyu Nükleer Güç Santrali sahasına giriş için, aşağıda belirtilen evrakların eksiksiz şekilde hazırlanıp (<a href="mailto:id@t2ic.com">id@t2ic.com</a>) adresine mail yoluyla iletilmesi gerekmektedir:<br><br>
                    •	Personel Giriş Excel Tablosu (eksiksiz ve doğru doldurulmuş)<br>
                    •	Takip Formu<br>
                    •	Fotoğraf<br>
                    •   Eğer mevcutsa Mavi Kimlik Taraması, yoksa<br> 
                        &nbsp&nbsp&nbsp - Çalışma İzni Başvurusu ve Ekran Görüntüsü, yoksa:<br>
                        &nbsp&nbsp&nbsp - Görevlendirme ve Çalışma Defteri<br><br>
                        Belgelerin doğru bir sıralamayla ve adlandırılarak iletilmesi önem arz etmektedir. Belgelerin düzenlenmesi ve işveren onay sürecinin hızlandırılması için evraklar, ,
                        pasaporttaki gibi büyük harflerle adlandırılmalı ve her bir kişi için ayrı bir dosya oluşturulmalıdır. Dosyalar, Pasaport numarası ile isimlendirilmelidir. Tüm belgeler 
                        7Z zip ile sıkıştırılarak PDF formatında gönderilmelidir.<br><br>
                    Örnek isimlendirme:<br>
                    KARINA SAZANOVA PASAPORT 123456789<br>
                    karinasazanoca789.jpg FOTOĞRAF<br><br>
                    <u style="color: red;"><b>ÖNEMLİ:</b></u> Eğer personel başka bir firmadan geliyor ise, sahadan bir firma ile yapılan sözleşmenin kaşeli ve imzalı ilk ve son sayfası eklenmelidir.<br><br>

                    •	Sağlık Takip Formu olmadan maksimum 5 iş günü ziyaretçi girişi verilebilir. Daha uzun süre sahada kalacak personel için <a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a>
                    adresi ile iletişime geçilmelidir.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Personel Giriş Excel</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Akkuyu Nükleer A.Ş. Şantiye Sahasına Giriş Yapan Personelin İkamet Bilgileri Hakkında</b><br><br>
                            Akkuyu Nükleer A.Ş. şantiye sahasına giriş yapan personelin güvenlik soruşturmalarının Enerji Bakanlığı tarafından gerçekleştirilebilmesi 
                            için, personelin ikamet adreslerinin tarafımıza bildirilmesi zorunludur. Giriş kartları, bu listelere göre çalışanlara teslim edilecek olup, 
                            bildirilmemiş olanlar için Akkuyu Nükleer A.Ş. tarafından kart teslimi yapılmayacağını önemle bildiririz.<br><br>
                            Bakanlık evraklarını kontrol amacıyla tarafımıza iletirken, eğer personelin ikamet adresi henüz belirlenmemişse ya da değişebilir bir durumda 
                            ise, saha giriş kart talebinde bulunurken ikamet bilgilerini güncellemeniz ya da eklemeniz MUTLAKA gerekmektedir.<br><br>
                            <b>Akkuyu Nükleer A.Ş. şantiye sahasında çalışacak personelin veri girişine yönelik eklenen sütunlar ve kullanım talimatları şu şekildedir:</b><br>
                            •	Personel giriş tablosunda, zorunlu olarak seçim yapılması gereken sütunlar mevcuttur. Bu sütunlarda seçim yapmak için <u>Seç/Выбрать</u> 
                            butonuna tıklamanız gerekmektedir. Bu alanlara manuel olarak veri girişi yapılamaz ve kopyalanmış bir metin yapıştırılamaz. Bu sütunlar boş 
                            bırakılamaz ve seçenek dışındaki bir veri kabul edilemez.<br><br>
                            •	<u>Seç/Выбрать</u> butonu bulunmayan sütunlar ise manuel olarak doldurulmalıdır. Bu sütunlardaki tüm bilgiler büyük Latin harfleriyle yazılmalıdır.
                        </p><br>
                        <img src="./static/img/2.jpg"><br><br>
                        <p><b>Seçilen Veriyi İlgili Sütuna Yapıştırma Talimatı:</b><br>
                            •	Sütundaki ilgili satır veya satırları seçmek için mouse imlecini kullanarak seçim yapın.<br>
                            •	Açılan pencerede “Seçili Hücrelere Görevi Ekle” butonuna tıklayın. Seçilen veri, seçilen satırlara eklenir. Ne kadar satır seçilirse, 
                            o kadar satıra veri eklenir.
                        </p><br>
                        <img src="./static/img/3.jpg"><br><br>    
                        <p><b>Girilen Veriyi Silme Talimatı:</b><br>
                            •	İlgili sütundaki veriyi silmek için “Seçili Hücreyi Temizle” butonuna tıklayın. </p><br>
                        <img src="./static/img/4.jpg"><br><br>
                        <p>•	DELETE komutuyla silme işlemi yapılamaz. DELETE komutuyla silme girişiminde uyarı mesajı alınır.
                        </p><br>
                        <img src="./static/img/5.jpg"><br><br>
                        <p><b>Veri Değişikliği Talimatı:</b><br>
                            •	İlgili veri üzerinde değişiklik yapmak için  <u>Seç/Выбрать</u> 
                            butonuna tıklayıp yeni bilgiyi seçin. Ardından “Seçili Hücrelere Görevi Ekle” butonuna tıklayarak değişiklikleri tamamlayın.
                        </p><br>
                        <img src="./static/img/6.jpg"><br><br>
                        <p><b>Tablonun En Sonuna Eklenen Yeni Sütunlar:</b><br>
                            <b>R sütunu:</b> Personelin Akkuyu’da çalışırken Türkiye Cumhuriyeti topraklarında ikamet ettiği yer. Bakanlık evraklarının 
                            kontrolünde bu sütunun doldurulması zorunlu değildir, ancak fiziki kart talebinde bulunurken bu alan doldurulmalıdır. 
                            Boş bırakılamaz ve personel Mersin il sınırı içerisinde yaşıyorsa, ilgili ikamet adresi seçilmelidir. Mersin il sınırları 
                            dışında yaşıyorsa “Mersin’de ikamet etmiyor” seçeneği kullanılmalıdır.
                        </p><br>
                        <img src="./static/img/25.png">
                        <img src="./static/img/26.png"><br>
                        <p><br><b>S sütunu:</b>Yabancı personel için çalışma izni başvuru numarası veya mavi kimlik numarası (99 ile başlayan kimlik) girilmelidir. 
                            Türk personeller veya görevlendirme ile saha ziyareti gerçekleştiren personeller için bu sütun doldurulması zorunlu değildir.
                        </p>
                        <img src="./static/img/27.png"><br>
                        <p><br><b>T sütunu:</b>Çalışma izni başvurusu yapılmışsa yabancı personel için bu sütun doldurulmalıdır. Fiziki kimlik mevcutsa doldurulmaz. 
                            Türk personeller ve saha ziyareti gerçekleştiren görevliler için doldurulması zorunlu değildir.
                        </p>
                        <img src="./static/img/28.png"><br>
                        <p><br><b>Doldurulacak Diğer Alanlar:</b><br>
                            1. Geliş Tarihi: Evrakların hazırlandığı tarih.<br>
                            2. Talep Eden: Firmanın personel sorumlusunun adı soyadı.<br>
                            3. Talep Eden İletişim Bilgileri: Firmanın personel sorumlusunun cep telefon numarası.<br>
                            4. Ad: Firmada göreve başlayacak personelin adı.<br>
                            5. Soyad: Firmada göreve başlayacak personelin soyadı.<br>
                            6. TC/PAS: Personelin kimlik veya pasaport numarası.<br>
                            7. Baba Adı: Yabancı personeller için baba adı.<br>
                            8. Doğum Yeri: Personelin doğum yeri.<br>
                            9. Doğum Tarihi: Personelin doğum tarihi.<br>
                        </p>
                        <img src="./static/img/personelgiris1.jpeg"><br><br>
                        <p> 10. Görevi: Personelin görev bilgisi.<br>
                            11. Firma: Personelin çalışacağı firma bilgisi.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Eğer firma listede yoksa bizimle iletişime geçin.<br><br>
                            12. Çalıştığı Yer: Personelin görev yapacağı yer.<br>
                            13. Cinsiyet: Personelin cinsiyet bilgisi.<br>
                            14. Çalışan Telefon Numarası: Personelin telefon numarası.<br>
                            15. Çalışan Yakını Telefon Numarası: Personelin yakınının telefon numarası.<br>
                            16. Adli Sicil Kaydı ve Sağlık Kısıtlamaları: Personelin varsa adli sicil kayıt ve sağlık kısıtlamaları.<br>
                            17. Uyruk: Personelin uyruk bilgisi.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Tüm alanlar talimatlara uygun olarak eksiksiz doldurulmalıdır.<br><br>
                        </p>
                        <img src="./static/img/personelgiris2.jpeg">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Takip Formu</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        Akkuyu NGS inşaat sahasında, çalışanlar 5 günden fazla sahada kalmayı planlıyorlarsa, sağlık muayenesinden geçmeleri zorunludur. Genel Yüklenici İK 
                        departmanının yeni düzenlemeleri uyarınca, saha geçiş kartı başvuruları, İK bölümü, sağlık bölümü ve iş sağlığı ve güvenliği bölümü tarafından imzalanmış 
                        ve onaylanmış "Gözetim ve Kayıt Formu" (ekli form) olmadan işleme alınmayacaktır.<br><br>
                        <b>Prosedür:</b><br>
                        •	Saha geçiş kartı başvurusunun yapılabilmesi için, çalışanın evraklarının işveren tarafından kontrol edildiğine dair tarafınıza 
                        bildirim geldikten sonra, bu formun ayrıca tarafımıza gönderilmesi gerekmektedir.<br>
                        •	Bu prosedür, çalışma izni (Çİ) başvurusu olan çalışanlar ile sahaya 30 günden fazla kalmamak üzere görevlendirilip sonrasında Çİ 
                        alacak çalışanları da kapsamaktadır.<br><br>
                        <b>Gözetim ve Kayıt Formu ile ilgili:</b> Formun nasıl alınacağı, kim tarafından verileceği gibi sorularınızı, çalıştığınız veya sözleşmeli 
                        olduğunuz şirketin İK departmanı çalışanlarına yöneltmenizi rica ederiz.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u>  Eğer başka bir firma ile sözleşmeniz varsa, o firmanın kaşeli ve imzalı ilk ve son 
                        sayfalarını da eklemeniz gerekmektedir.<br><br>
                        <b>TİTAN 2 IC İÇTAŞ İNŞAAT A.Ş Ekibi</b>
                        <div id="team1"></div>
                        <b>TSM ENERJİ Ekibi</b>
                        <div id="team2"></div>
                        <b>IC İÇTAŞ NÜKLEER Ekibi</b>
                        <div id="team3"></div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Fotoğraf</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p><img src="./static/img/foto.png" style="margin-right: 40px;">
                                <br><br>Akkuyu Nükleer Güç Sahasına giriş kartınıza basılmak üzere fotoğraf göndermeniz gerekmektedir.<br><br>
                                    Lütfen aşağıdaki kurallara dikkat edin:<br>
                                    1. Fotoğrafın arka planı beyaz olmalı ve fotoğraf net olmalıdır (flu, parlak veya gölgeli yüzler kabul edilmeyecektir).<br>
                                    2. Fotoğraf kırpılmış olmalı ve yalnızca .jpg formatında gönderilmelidir.<br>
                                    3. Fotoğraf isimlendirmesi, İngilizce küçük harflerle ve TC Kimlik numarasının son 3 hanesi ile yapılmalıdır.<br>
                                    Örnek : MEHMET ŞAHİN >> mehmetsahin123.jpg<br><br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                                      
        </div>
        </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Запрос на осуществления входа для экспатов</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">
                    Для входа на территорию атомной электростанции Аккую необходимо подготовить следующие документы в полном объеме и направить их по электронной почте на адрес (<a href="mailto:id@t2ic.com">id@t2ic.com</a>):<br><br>
                    • Таблица Excel для оформления разрешения на вход на площадку персонала (полная и правильно заполненная)<br>
                    • Форма отслеживания<br>
                    • Фотография<br>
                    • Скан голубого удостоверения личности, если есть, если нет то:<br>
                    &nbsp&nbsp&nbsp - Заявление на получение разрешения на работу и скриншот, если нет то:<br>
                    &nbsp&nbsp&nbsp - Командировочный лист и трудовая книжка<br><br>
                    Важно, чтобы документы были направлены в надлежащем порядке и проименованы по регламенту. Для оформления документов и ускорения процесса согласования с заказчиком их следует именовать заглавными буквами, как в паспорте, и создать для каждого лица отдельный файл. Файлы должны быть названы по номеру паспорта. Все документы должны быть сжаты в формате 7Z zip и отправлены в формате PDF.<br><br>
                    Пример названия документа:<br>
                    KARINA SAZANOVA PASAPORT 123456789<br>
                    karinasazanoca789.jpg FOTOĞRAF<br><br>
                    <u style="color: red;"><b>ВАЖНО:</b></u> Если работник приезжает из другой компании, необходимо приложить первую и последнюю страницы подписанного и заверенного печатью договора с компанией, работающей на площадке.<br><br>
                    • Без медицинской формы посетители могут посещать территорию площадки не более 5 рабочих дней. Если работник будет посещать площадку в течение длительного времени, пожалуйста, обратитесь по адресу <a href="mailto:subcontractor@t2ic.com">subcontractor@t2ic.com</a>.
                </p>                                        
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Excel для Входа Сотрудников</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>О Проживании Персонала, Который Проходит На Строительную Площадку Akkuyu Nükleer A.Ş.</b><br><br>
                            Для проведения проверки безопасности персонала, который проходит на строительную площадку Akkuyu Nükleer A.Ş. Министерством энергетики, необходимо предоставить 
                            информацию о месте жительства сотрудников. Пропускные карты будут выданы сотрудникам согласно этим спискам, и важно отметить, что для тех, чьи данные не будут 
                            предоставлены, Akkuyu Nükleer A.Ş. не будет выдавать карты.<br><br>
                            При отправке документов для проверки в Министерство, если адрес проживания сотрудника ещё не определён или может измениться, ОБЯЗАТЕЛЬНО необходимо обновить 
                            или добавить информацию о месте жительства при запросе пропускной карты для доступа на площадку.<br><br>
                            <b>На строительной площадке Akkuyu Nükleer A.Ş. для сотрудников, которые будут работать, добавлены следующие столбцы для ввода данных и инструкции по их использованию:</b><br>
                            •	В таблице ввода данных сотрудников есть столбцы, в которых необходимо выбрать значение. Чтобы выбрать значение в этих столбцах, нужно нажать кнопку "Seç/Выбрать". 
                            В эти поля нельзя вводить данные вручную, и нельзя вставлять скопированный текст. Эти столбцы не могут быть оставлены пустыми, и данные, не входящие в список вариантов, 
                            не будут приняты.<br><br>
                            •	Столбцы, в которых нет кнопки "Seç/Выбрать", должны быть заполнены вручную. Все данные в этих столбцах должны быть написаны большими латинскими буквами.
                        </p><br>
                        <img src="./static/img/2.jpg"><br><br>
                        <p><b>Инструкция по вставке выбранных данных в соответствующий столбец:</b><br>
                            •	Для выбора соответствующих строк в столбце используйте указатель мыши.<br>
                            •	В открывшемся окне нажмите кнопку "Добавить задачу в выбранные ячейки". 
                            Выбранные данные будут добавлены в выбранные строки. Чем больше строк будет выбрано, тем больше строк будет заполнено данными.
                        </p><br>
                        <img src="./static/img/3.jpg"><br><br>    
                        <p><b>Инструкция по удалению введенных данных:</b><br>
                            •	Чтобы удалить данные в соответствующем столбце, нажмите кнопку "Очистить выбранную ячейку". </p><br>
                        <img src="./static/img/4.jpg"><br><br>
                        <p>•	Операция удаления с помощью команды DELETE невозможна. При попытке удаления с помощью команды DELETE будет выведено сообщение об ошибке.
                        </p><br>
                        <img src="./static/img/5.jpg"><br><br>
                        <p><b>Инструкция по изменению данных:</b><br>
                            •	Чтобы внести изменения в соответствующие данные, нажмите кнопку "Seç/Выбрать" и выберите новую информацию. Затем нажмите кнопку 
                            "Добавить задачу в выбранные ячейки", чтобы завершить изменения.
                        </p><br>
                        <img src="./static/img/6.jpg"><br><br>
                        <p><b>Новые столбцы, добавленные в конец таблицы:</b><br>
                            <b>Столбец R:</b> Место проживания сотрудника на территории Турецкой Республики, пока он работает на Акуйской АЭС. Заполнение этого столбца 
                            не обязательно при проверке документов для Министерства, однако должно быть заполнено при запросе физической карты. Это поле не может быть 
                            оставлено пустым, и если сотрудник проживает в пределах границ Мерсина, следует выбрать соответствующий адрес проживания. Если он проживает 
                            за пределами границ Мерсина, следует выбрать вариант "Не проживает в Мерсине".
                        </p><br>
                        <img src="./static/img/25.png">
                        <img src="./static/img/26.png"><br>
                        <p><br><b>Столбец S:</b> Для иностранных сотрудников следует ввести номер заявки на рабочее разрешение или номер синего удостоверения личности 
                            (номер удостоверения, начинающийся с 99). Для турецких сотрудников или сотрудников, выполняющих визит на площадку по направлению, заполнение 
                            этого столбца не является обязательным.
                        </p>
                        <img src="./static/img/27.png"><br>
                        <p><br><b>Столбец T:</b> Если заявка на рабочее разрешение была подана, этот столбец должен быть заполнен для иностранных сотрудников. 
                            Если имеется физический идентификатор, то столбец не заполняется. Для турецких сотрудников и сотрудников, выполняющих визит на площадку, 
                            заполнение этого столбца не обязательно.
                        </p>
                        <img src="./static/img/28.png"><br>
                        <p><br><b>Заполняемые другие поля:</b><br>
                            1. Дата поступления: Дата подготовки документов.<br> 
                            2. Запрашивающий: Имя и фамилия ответственного за персонал компании.<br> 
                            3. Контактная информация запрашивающего: Мобильный номер телефона ответственного за персонал компании.<br> 
                            4. Имя: Имя сотрудника, который начнет работу в компании.<br> 
                            5. Фамилия: Фамилия сотрудника, который начнет работу в компании.<br> 
                            6. ТС/ПАС: Номер удостоверения личности или паспорта сотрудника.<br> 
                            7. Имя отца: Имя отца для иностранных сотрудников.<br> 
                            8. Место рождения: Место рождения сотрудника.<br> 
                            9. Дата рождения: Дата рождения сотрудника.<br>
                        </p>
                        <img src="./static/img/personelgiris1.jpeg"><br><br>
                        <p> 10. Должность: Должностная информация о сотруднике.<br> 
                            11. Компания: Информация о компании, в которой будет работать сотрудник.<br><br> 
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Если компании нет в списке, пожалуйста, свяжитесь с нами.<br><br> 
                            12. Место работы: Место, где сотрудник будет работать.<br> 
                            13. Пол: Информация о поле сотрудника.<br> 
                            14. Номер телефона сотрудника: Телефонный номер сотрудника.<br> 
                            15. Номер телефона родственника сотрудника: Телефонный номер родственника сотрудника.<br> 
                            16. Судимость и ограничения по здоровью: Судимость и ограничения по здоровью сотрудника, если они имеются.<br> 
                            17. Национальность: Информация о национальности сотрудника.<br><br> 
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Все поля должны быть заполнены полностью в соответствии с инструкциями.<br><br>
                        </p>
                        <img src="./static/img/personelgiris2.jpeg">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Форма мониторинга</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        На строительной площадке Akkuyu NPP, если сотрудники планируют находиться на объекте более 5 дней, они обязаны пройти медицинское обследование. Согласно новым правилам департамента кадров Генерального подрядчика, заявки на получение пропуска на площадку не будут обработаны без "Формы мониторинга и учета" (см. приложенную форму), подписанной и утвержденной отделами кадров, медицинским и отделом охраны труда.<br><br>
                        <b>Процедура:</b><br>
                        • Для подачи заявки на пропуск на площадку, после получения уведомления о том, что документы сотрудника проверены работодателем, эта форма также должна быть отправлена нам.<br>
                        • Эта процедура также касается сотрудников, у которых есть заявка на рабочее разрешение (Çİ), а также сотрудников, которые назначены на работу на площадке на срок до 30 дней и затем получат рабочее разрешение.<br><br>
                        <b>О Форме мониторинга и учета:</b> По вопросам о том, как получить форму и кто ее выдает, пожалуйста, обращайтесь к сотрудникам отдела кадров вашей компании или с которой у вас есть контракт.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Если у вас есть контракт с другой компанией, необходимо приложить первую и последнюю страницы договора этой компании с печатью и подписью.<br><br>
                        <b>Команда TİTAN 2 IC İÇTAŞ İNŞAAT A.Ş</b>
                        <div id="team1"></div>
                        <b>Команда TSM ENERJİ</b>
                        <div id="team2"></div>
                        <b>Команда IC İÇTAŞ NÜKLEER</b>
                        <div id="team3"></div>
                    </div>
                    
                </div>
            </div>                                  
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Фотография</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p><img src="./static/img/foto.png" style="margin-right: 40px;">
                            <br><br>Для получения пропуска на вход на строительную площадку Akkuyu NPP необходимо отправить фотографию для нанесения на пропуск.<br><br>
                                Пожалуйста, обратите внимание на следующие правила:<br>
                                1. Фон фотографии должен быть белым, а сама фотография должна быть четкой (не допускаются размытые, яркие или затененные изображения лиц).<br>
                                2. Фотография должна быть обрезана и отправлена в формате .jpg.<br>
                                3. Название фотографии должно быть на английском языке с использованием строчных букв и последних трех цифр номера TC.<br>
                                Пример: MEHMET ŞAHİN >> mehmetsahin123.jpg<br><br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                                                                   
        </div>
        </div>`
    },
    kyenileme: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Personeller İçin Kart Yenileme İşlemleri</i>
            <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
                <div class="accordion-item">
                    <p class="ps-3"><br>Kart işlemlerine ilişkin dikkat edilmesi gereken adımlar şu şekildedir:<br><br>
                        <b>1. Fiziksel Kart Teslimi:</b> Maille gönderilen evraklar, kart fiziksel olarak tarafımıza teslim edildiğinde kontrol edilmekte olup, eksiksiz ve doğru 
                        olması durumunda işleme alınır.<br><br>
                        <b>2. Tutanak Gerektiren İşlemler:</b> Tutanak gereken işlemler için tutanakların mutlaka ıslak imzalı ve kaşeli olarak fiziki teslimi gereklidir.<br><br>
                        <b>3. Evrak Adlandırması:</b> Mail ile iletilmesi gereken belgeler, personelin adı ve soyadı pasaport veya kimlikte yazdığı gibi büyük latin harfleri ile yazılmalı, 
                        konu başlığı ise uygun şekilde belirtilmelidir.<br><br>
                        <b>4. Mail Adresleri:</b> Kart işlemleri için gerekli tüm evraklar eş zamanlı olarak aşağıdaki iki mail adresine gönderilmelidir:<br>
                        •	<a href="mailto:tugbahan.karakaya@t2ic.com">tugbahan.karakaya@t2ic.com</a><br>
                        •	<a href="mailto:muslum.elibol@t2ic.com">muslum.elibol@t2ic.com</a><br><br>
                        <b>5. Kart Dağıtımı:</b> Basılan kartlar dağıtıma hazır olduğunda, personeller bizzat ana nizamiyedeki kart dağıtım konteynerinden kartlarını teslim alabilirler:<br>
                        •	Türk vatandaşları TC kimlikleriyle,<br>
                        •	Yabancı personeller dış pasaportları ile teslim alacaklardır.<br>
                        <b>6. İşten Çıkış İşlemleri:</b> İş çıkışı alan personeller kartlarını iptal ettirmekle yükümlüdür. Kart iptali, kart iptal prosedürüne uygun olarak fiziken yapılmalıdır. Personeller, ilişki kesme formlarıyla geldiklerinde evraklar imzalandıktan sonra, fotokopileri ile birlikte AKKUYU NGS şantiyesinden çıkış yapabilirler.<br><br>
                    </p>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Arızalı, Kırık, Yıpranmış Kart İşlemleri</button>
                    </div>
                    <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>Akkuyu geçici giriş kartının arıza, kırılma veya üzerindeki bilgilerin okunamaz hale gelmesi durumunda, kart Güvenlik Departmanı ofisine teslim edilmeli ve aşağıdaki 
                                belgeler mail yoluyla gönderilmelidir:<br><br>
                                <b>Mail Konu Başlığı:</b><br>
                                Mailin konusu personelin adı ve soyadı büyük, latin harfleri ile yazılmalıdır:<br>
                                •	Örneğin: "ARIZALI KART ANTON ANTONOV" veya "KIRIK KART ALİ KAYA"<br><br>
                                <b>Gerekli Belgeler:</b><br>
                                <b>1. Personel Fotoğrafı:</b> Arka fonu beyaz olan, net ve düz bir fotoğraf olmalıdır.<br>
                                <b>2. SGK 4A İşe Giriş Bildirgesi:</b> E-devlet hesabından alınabilir, PDF formatında olmalıdır.<br>
                                <b>3. Personel Giriş Excel Tablosu:</b> Tam ve eksiksiz doldurulmuş olmalıdır.<br><br>
                                <b>Ek Belgeler (Yabancı Personeller İçin):</b><br>
                                <b>4. Mavi Kimlik Taraması:</b> Arkalı önlü şekilde birleştirilmiş tek PDF formatında olmalıdır. Eğer mavi kimlik hazır değilse çalışma izni başvurusu ve ekran 
                                görüntüsü iletilmelidir.<br>
                                &nbsp&nbsp&nbsp •	Görevlendirme Durumu: Personel görevlendirme ile sahaya geldiyse, görevlendirme belgesi ve çalışma defteri de PDF formatında gönderilmelidir.<br>
                                <b>5. Pasaport Taraması:</b> Mevcut dış pasaportun PDF taraması yapılmalıdır. Pasaport değişikliği varsa hem eski hem de yeni pasaport taramaları gönderilmelidir.<br><br>
                                <u style="color: red;"><b>ÖNEMLİ:</b></u>  Belgelerin isimlendirilmesi, dosyalama sisteminde kolaylık sağlamak amacıyla yukarıdaki talimatlara uygun olarak yapılmalıdır.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="true">Kayıp Kart İşlemleri</button>
                    </div>
                    <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>Personel Akkuyu geçici giriş kartını saha içinde veya dışında kaybettiğinde, firmasının veya personelin kendisinin düzenlediği imzalı ve kaşeli bir 
                                tutanak Güvenlik Departmanı ofisine fiziksel olarak teslim edilmeli ve aşağıdaki belgeler belirtilen e-posta adreslerine gönderilmelidir.<br><br>
                                <b>Mail Konu Başlığı:</b><br>
                                Mailin konusu personelin adı ve soyadı büyük, latin harfleri ile yazılmalıdır:<br>
                                •	Örneğin: "ARIZALI KART ANTON ANTONOV" veya "KIRIK KART ALİ KAYA"<br><br>
                                <b>Gerekli Belgeler:</b><br>
                                <b>1. Personel Fotoğrafı:</b> Arka fonu beyaz olan, net ve düz bir fotoğraf olmalıdır.<br>
                                <b>2. SGK 4A İşe Giriş Bildirgesi:</b> E-devlet hesabından alınabilir, PDF formatında olmalıdır.<br>
                                <b>3. Personel Giriş Excel Tablosu:</b> Tam ve eksiksiz doldurulmuş olmalıdır.<br>
                                <b>4. Kayıp Kart Tutanağı:</b> İmzalı ve kaşeli olarak teslim edilmelidir.<br><br>
                                <b>Ek Belgeler (Yabancı Personeller İçin):</b><br>
                                <b>4. Mavi Kimlik Taraması:</b> Arkalı önlü şekilde birleştirilmiş tek PDF formatında olmalıdır. Eğer mavi kimlik hazır değilse çalışma izni başvurusu ve ekran 
                                görüntüsü iletilmelidir.<br>
                                &nbsp&nbsp&nbsp •	Görevlendirme Durumu: Personel görevlendirme ile sahaya geldiyse, görevlendirme belgesi ve çalışma defteri de PDF formatında gönderilmelidir.<br>
                                <b>5. Pasaport Taraması:</b> Mevcut dış pasaportun PDF taraması yapılmalıdır. Pasaport değişikliği varsa hem eski hem de yeni pasaport taramaları gönderilmelidir.<br><br>
                                <u style="color: red;"><b>ÖNEMLİ:</b></u>  Belgelerin isimlendirilmesi, dosyalama sisteminde kolaylık sağlamak amacıyla yukarıdaki talimatlara uygun olarak yapılmalıdır.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Hatalı Başvuru</button>
                    </div>
                    <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>Hatalı basılan kartlar, ana nizamiyedeki kart dağıtım konteynerında personele teslim edilmeyebilir. Teslim edilmişse, kartın değişimi için kartın 
                                fiziksel olarak Güvenlik Departmanına götürülmesi gereklidir. İşlemlerin tamamlanabilmesi için aşağıdaki belgelerin, yukarıda belirtilen e-posta 
                                adreslerine gönderilmesi gerekmektedir.<br><br>
                               KONU: Hatalı işlem, mail konusunda belirtilir ,örneğin "HATALI FOTO", "HATALI FİRMA ADI", "HATALI İSİM", "HATALI SOYİSİM", "HATALI TC", 
                               <b>Mail Konu Başlığı:</b><br>
                                Mailin konusu personelin adı ve soyadı büyük, latin harfleri ile yazılmalıdır:<br>
                                •	Örneğin: "HATALI FOTO ANTON ANTONOV" veya "HATALI FİRMA İSMİ ALİ KAYA"<br><br>
                                <b>1. Personel Fotoğrafı:</b> Arka fonu beyaz olan, net ve düz bir fotoğraf olmalıdır.<br>
                                <b>2. SGK 4A İşe Giriş Bildirgesi:</b> E-devlet hesabından alınabilir, PDF formatında olmalıdır.<br>
                                <b>3. Personel Giriş Excel Tablosu:</b> Tam ve eksiksiz doldurulmuş olmalıdır.<br>
                                <b>4. TC Kimlik Taraması:</b> Her iki tarafı taranmış PDF olarak iletilmelidir. Her iki tarafı taranmış PDF olarak iletilmelidir.<br><br>
                                <b>Ek Belgeler (Yabancı Personeller İçin):</b><br>
                                <b>5. Mavi Kimlik Taraması:</b> Arkalı önlü şekilde birleştirilmiş tek PDF formatında olmalıdır. Eğer mavi kimlik hazır değilse çalışma izni başvurusu ve ekran 
                                görüntüsü iletilmelidir.<br>
                                &nbsp&nbsp&nbsp •	Görevlendirme Durumu: Personel görevlendirme ile sahaya geldiyse, görevlendirme belgesi ve çalışma defteri de PDF formatında gönderilmelidir.<br>
                                <b>6. Pasaport Taraması:</b> Mevcut dış pasaportun PDF taraması yapılmalıdır. Pasaport değişikliği varsa hem eski hem de yeni pasaport taramaları gönderilmelidir.<br><br>
                                <u style="color: red;"><b>ÖNEMLİ:</b></u>  Belgelerin isimlendirilmesi, dosyalama sisteminde kolaylık sağlamak amacıyla yukarıdaki talimatlara uygun olarak yapılmalıdır.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Firma Değişimi</button>
                    </div>
                    <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p>Akkuyu NGS şantiyesinde firma değişikliği yapmak isteyen personelin, bu değişikliği gerçekleştirebilmesi için firma değişikliği prosedürünü tamamlaması gerekmektedir. 
                                    Bu süreçte, personelin eski firmasından çıkış işlemi yaparak yeni firmasında işe başlaması sağlanacaktır.<br><br>
                                    <b>İşlem Adımları</b><br>
                                    <b>Eski Firma:</b> Personel veya firması, ilişik kesme formu veya çıkış bildirgesi ile birlikte Akkuyu geçici kartını Güvenlik Departmanına teslim etmelidir.<br>
                                    <b>Yeni Firma:</b> Gerekli belgeleri mail yoluyla iletmelidir. Sağlık takibi zorunlu olan firmalar, ek olarak Sağlık Takip Formunu da mail yoluyla göndermelidir.<br>
                                    <b>Mail Konu Başlığı:</b><br>
                                    Mailin konusu personelin adı ve soyadı büyük, latin harfleri ile yazılmalıdır:<br>
                                    •	Örneğin: "FİRMA DEĞİŞİKLİĞİ ANTON ANTONOV" veya "FİRMA DEĞİŞİKLİĞİ ALİ KAYA"<br><br>
                                    <b>1. Personel Fotoğrafı:</b> Arka fonu beyaz olan, net ve düz bir fotoğraf olmalıdır.<br>
                                    <b>2. SGK 4A İşe Giriş Bildirgesi:</b> E-devlet hesabından alınabilir, PDF formatında olmalıdır.<br>
                                    <b>3. Personel Giriş Excel Tablosu:</b> Tam ve eksiksiz doldurulmuş olmalıdır.<br>
                                    <b>4. TC Kimlik Taraması:</b> Her iki tarafı taranmış PDF olarak iletilmelidir. Her iki tarafı taranmış PDF olarak iletilmelidir.<br><br>
                                    <b>Ek Belgeler (Yabancı Personeller İçin):</b><br>
                                    <b>5. Mavi Kimlik Taraması:</b> Arkalı önlü şekilde birleştirilmiş tek PDF formatında olmalıdır. Eğer mavi kimlik hazır değilse çalışma izni başvurusu ve ekran 
                                    görüntüsü iletilmelidir.<br>
                                    &nbsp&nbsp&nbsp •	Görevlendirme Durumu: Personel görevlendirme ile sahaya geldiyse, görevlendirme belgesi ve çalışma defteri de PDF formatında gönderilmelidir.<br>
                                    <b>6. Pasaport Taraması:</b> Mevcut dış pasaportun PDF taraması yapılmalıdır. Pasaport değişikliği varsa hem eski hem de yeni pasaport taramaları gönderilmelidir.<br><br>
                                    <u style="color: red;"><b>ÖNEMLİ:</b></u>  Belgelerin isimlendirilmesi, dosyalama sisteminde kolaylık sağlamak amacıyla yukarıdaki talimatlara uygun olarak yapılmalıdır.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">İsim Soyisim Değişikliği</button>
                    </div>
                    <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p>Saha içerisinde çalışan bir personelin pasaport veya kimlik bilgilerinde ad veya soyadı değişikliği olması durumunda, ilgili belgelerin eksiksiz olarak mail yoluyla 
                                    iletilmesi gerekmektedir. Ayrıca, personelin geçici giriş kartını Güvenlik Departmanı ofisine fiziksel olarak teslim etmesi zorunludur.<br><br> 
                                    <b>Mail Konu Başlığı:</b><br>
                                    Mailin konusu personelin adı ve soyadı büyük, latin harfleri ile yazılmalıdır:<br>
                                    •	Örneğin: "İSİM DEĞİŞİKLİĞİ ANTON ANTONOV" veya "SOYİSİM DEĞİŞİKLİĞİ ALİ KAYA"<br><br>
                                    <b>1. Personel Fotoğrafı:</b> Arka fonu beyaz olan, net ve düz bir fotoğraf olmalıdır.<br>
                                    <b>2. SGK 4A İşe Giriş Bildirgesi:</b> E-devlet hesabından alınabilir, PDF formatında olmalıdır.<br>
                                    <b>3. Personel Giriş Excel Tablosu:</b> Tam ve eksiksiz doldurulmuş olmalıdır.<br><br>
                                    <b>Ek Belgeler (Yabancı Personeller İçin):</b><br>
                                    <b>5. Mavi Kimlik Taraması:</b> Arkalı önlü şekilde birleştirilmiş tek PDF formatında olmalıdır. Eğer mavi kimlik hazır değilse çalışma izni başvurusu ve ekran 
                                    görüntüsü iletilmelidir.<br>
                                    &nbsp&nbsp&nbsp •	Görevlendirme Durumu: Personel görevlendirme ile sahaya geldiyse, görevlendirme belgesi ve çalışma defteri de PDF formatında gönderilmelidir.<br>
                                    <b>6. Pasaport Taraması:</b> Mevcut dış pasaportun PDF taraması yapılmalıdır. Pasaport değişikliği varsa hem eski hem de yeni pasaport taramaları gönderilmelidir.<br><br>
                                    <u style="color: red;"><b>ÖNEMLİ:</b></u>  Belgelerin isimlendirilmesi, dosyalama sisteminde kolaylık sağlamak amacıyla yukarıdaki talimatlara uygun olarak yapılmalıdır.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-6" aria-expanded="true">Pasaport Değişimi</button>
                    </div>
                    <div id="faq-1-6" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>Saha içinde çalışan bir personelin pasaport değişikliği durumunda, gerekli belgelerin eksiksiz bir şekilde mail yoluyla iletilmesi ve geçici giriş 
                                kartının Güvenlik Departmanı ofisine fiziksel olarak teslim edilmesi gerekmektedir.<br><br> 
                                <b>Mail Konu Başlığı:</b><br>
                                Mailin konusu personelin adı ve soyadı büyük, latin harfleri ile yazılmalıdır:<br>
                                •	Örneğin: "PASAPORT DEĞİŞİKLİĞİ ANTON ANTONOV"<br><br>
                                <b>1. Personel Fotoğrafı:</b> Arka fonu beyaz olan, net ve düz bir fotoğraf olmalıdır.<br>
                                <b>2. SGK 4A İşe Giriş Bildirgesi:</b> E-devlet hesabından alınabilir, PDF formatında olmalıdır.<br>
                                <b>3. Personel Giriş Excel Tablosu:</b> Tam ve eksiksiz doldurulmuş olmalıdır.<br><br>
                                <b>Ek Belgeler (Yabancı Personeller İçin):</b><br>
                                <b>5. Mavi Kimlik Taraması:</b> Arkalı önlü şekilde birleştirilmiş tek PDF formatında olmalıdır. Eğer mavi kimlik hazır değilse çalışma izni başvurusu ve ekran 
                                görüntüsü iletilmelidir.<br>
                                &nbsp&nbsp&nbsp •	Görevlendirme Durumu: Personel görevlendirme ile sahaya geldiyse, görevlendirme belgesi ve çalışma defteri de PDF formatında gönderilmelidir.<br>
                                <b>6. Pasaport Taraması:</b> Mevcut dış pasaportun PDF taraması yapılmalıdır. Pasaport değişikliği varsa hem eski hem de yeni pasaport taramaları gönderilmelidir.<br><br>
                                <u style="color: red;"><b>ÖNEMLİ:</b></u> Eski ve yeni pasaportlar, personelin adı ve soyadı büyük harflerle ve Latin harfleriyle isimlendirilmiş olarak iletilmelidir.<br>
                                •	Örneğin: "ESKİ PASAPORT ANTON ANTONOV" veya "YENİ PASAPORT ANTON ANTONOV"<br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                                                       
        </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Процедура продления пропуска для персонала</i>
            <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
                <div class="accordion-item">
                    <p class="ps-3"><br>Ниже перечислены действия, которые необходимо предпринять в отношении оформления пропусков:<br><br>
                        <b>1. Физическая передача пропуска:</b> отправленные по почте документы проходят проверку, после того как пропуск будет передан в наш адрес, проводится проверка их полноты и правильности оформления.<br><br>
                        <b>2. Действия, требующие составления актов:</b> для процедур, требующих составления акта, акт должен быть доставлен нарочно,с оригинальной подписью и печатью.<br><br>
                        <b>3. Наименование документов:</b> для документов, направляемых по электронной почте, имя и фамилия сотрудника должны быть написаны заглавными латинскими буквами так, как они написаны в паспорте или удостоверении личности, а заголовок темы необходимо указать соответствующим образом.<br><br>
                        <b>4. Адреса электронной почты:</b> все документы, необходимые для оформления пропусков, должны быть отправлены одновременно на следующие два адреса электронной почты:<br>
                        • <a href="mailto:tugbahan.karakaya@t2ic.com">tugbahan.karakaya@t2ic.com</a><br>
                        • <a href="mailto:muslum.elibol@t2ic.com">muslum.elibol@t2ic.com</a><br><br>
                        <b>5. Выдача пропусков:</b> когда напечатанные пропуска готовы к выдаче, работники лично забирают их из контейнера для выдачи пропусков:<br>
                        • Граждане Турции с кимликами,<br>
                        • Иностранный персонал получает пропуск по своему заграничному паспорту.<br>
                        <b>6. Порядок оформления увольнений:</b> Работники, которые увольняются с работы, обязаны аннулировать свои пропуска. Аннулирование пропуска должно осуществляться физически в соответствии с правилами аннулирования пропуска. По прибытии на строительную площадку АЭС Аккую работник с формами увольнения, после подписания документов, может покинуть строительную площадку АЭС Аккую со своими ксерокопиями.<br><br>
                    </p>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Порядок работы с поврежденными, сломанными, поношенными пропусками</button>
                    </div>
                    <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>В случае если временный пропуск Аккую вышел из строя, сломался или информация на нем стала нечитаемой, необходимо сдать пропуск в офис Управления безопасности и отправить следующие документы по электронной почте:<br><br>
                                <b>Заголовок темы электронного письма:</b><br>
                                Имя и фамилия работника касательного которого направляется письмо, должны быть указаны заглавными и латинскими буквами:<br>
                                • Например: НЕИСПРАВНЫЙ ПРОПУСК ANTON ANTONOV или СЛОМАННЫЙ ПРОПУСК ALİ KAYA.<br><br>
                                <b>Необходимые документы:</b><br>
                                1. Фотография работника должна быть четкой и четкой, на белом фоне.<br>
                                <b>2. Уведомление о приеме на работу СГК форма 4 A:</b> ведомление можно получить в приложении E-devlet, в формате PDF.<br>
                                <b>3. Таблица Excel для оформления разрешения на вход на площадку персонала:</b> должна быть заполнена полностью и правильно.<br><br>
                                <b>Дополнительные документы (для экспатов):</b><br>
                                <b>4. Скан голубого удостоверения личности:</b> скан лицевой и обратной стороны должен быть сделан в одном файле формата PDF. Если голубое удостоверение личности не готово, необходимо предоставить заявление на получение разрешения на работу и скриншот изображения.<br>
                                &nbsp&nbsp&nbsp • Порядок оформления при командировании: в случае, если работник прибыл на объект по командировке, необходимо направить командировочный лист и трудовую книжку в формате PDF.<br>
                                <b>5.  Скан паспорта:</b> необходимо выполнить скан существующего заграничного паспорта в формате PDF. При смене паспорта необходимо отправить скан как старого, так и нового паспорта.<br><br>
                                <u style="color: red;"><b>ВАЖНО:</b></u> Наименование документов должно соответствовать вышеуказанным инструкциям для упрощения системы файлов.
                            </p>
                        </div>
                    </div>
                </div>                                        
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="true">Процедура утерянных карт</button>
                    </div>
                    <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>Если сотрудник потерял временную карту Akkuyu на территории или за её пределами, необходимо предоставить подписанный и заверенный протокол, оформленный фирмой или самим сотрудником, в офис отдела безопасности. Протокол должен быть физически передан, а следующие документы отправлены на указанные электронные адреса:<br><br>
                                <b>Тема письма:</b><br>
                                Тема письма должна быть написана с использованием имени и фамилии сотрудника большими латинскими буквами:<br>
                                • Например: "ПОТЕРЯННАЯ КАРТА АНТОН АНТОНОВ" или "ПОТЕРЯННАЯ КАРТА АЛИ КАЯ"<br><br>
                                <b>Необходимые документы:</b><br>
                                <b>1. Фотография сотрудника:</b> Четкая фотография на белом фоне.<br>
                                <b>2. Рабочая регистрация 4A (SGK):</b> Может быть получена через аккаунт в E-Devlet, должна быть в формате PDF.<br>
                                <b>3. Excel файл для сотрудников:</b> Должен быть полностью и корректно заполнен.<br>
                                <b>4. Протокол утери карты:</b> Должен быть подписан и заверен, передан физически.<br><br>
                                <b>Дополнительные документы (для иностранных сотрудников):</b><br>
                                <b>5. Сканирование синего удостоверения:</b> Должно быть объединено в один PDF файл с обеими сторонами. Если синее удостоверение еще не готово, необходимо отправить заявку на разрешение на работу и скриншот заявки.<br>
                                &nbsp&nbsp&nbsp • Статус назначения: Если сотрудник направляется на площадку, необходимо также отправить документ о назначении и рабочую книгу в формате PDF.<br>
                                <b>6. Сканирование паспорта:</b> Необходимо отправить скан текущего заграничного паспорта в формате PDF. Если паспорт был заменен, отправьте сканы старого и нового паспортов.<br><br>
                                <u style="color: red;"><b>ВАЖНО:</b></u> Для удобства системы хранения документов их названия должны указываться в соответствии с приведенными выше инструкциями.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Ошибочный запрос</button>
                    </div>
                    <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>Ошибочно напечатанные пропуска могут быть не выданы работнику в контейнере для выдачи пропусков, расположенного на главном КПП. Если пропуск был выдан, то пропуск необходимо лично передать в Управление безопасности для замены. Для завершения оформления необходимо отправить следующие документы на указанные выше адреса электронной почты.<br><br>
                                ТЕМА: В теме письма указывается Ошибка в пропуске, например, ОШИБОЧНОЕ ФОТО, ОШИБКА В НАЗВАНИИ КОМПАНИИ, ОШИБКА В ИМЕНИ, ОШИБКА В ФАМИЛИИ, ОШИБКА В КИМЛИКЕ; Заголовок темы письма:<br>
                                Имя и фамилия работника касательного которого направляется письмо, должны быть указаны заглавными и латинскими буквами:<br>
                                • Например: ОШИБОЧНОЕ ФОТО ANTON ANTONOV или ОШИБКА В НАЗВАНИИ КОМПАНИИ ALİ KAYA.<br><br>
                                <b>Необходимые документы:</b><br>
                                <b>1. Фотография сотрудника:</b> Четкая фотография на белом фоне.<br>
                                <b>2. Рабочая регистрация 4A (SGK):</b> Может быть получена через аккаунт в E-Devlet, должна быть в формате PDF.<br>
                                <b>3. Excel файл для сотрудников:</b> Должен быть полностью и корректно заполнен.<br>
                                <b>4. Скан турецкого удостоверения личности(кимплика):</b> обе стороны должны быть направлены в отсканированном виде в формате PDF. Обе стороны должны быть направлены в отсканированном виде в формате PDF.<br><br>
                                <b>Дополнительные документы (для иностранных сотрудников):</b><br>
                                <b>5. Сканирование синего удостоверения:</b> Должно быть объединено в один PDF файл с обеими сторонами. Если синее удостоверение еще не готово, необходимо отправить заявку на разрешение на работу и скриншот заявки.<br>
                                &nbsp&nbsp&nbsp • Статус назначения: Если сотрудник направляется на площадку, необходимо также отправить документ о назначении и рабочую книгу в формате PDF.<br>
                                <b>6. Сканирование паспорта:</b> Необходимо отправить скан текущего заграничного паспорта в формате PDF. Если паспорт был заменен, отправьте сканы старого и нового паспортов.<br><br>
                                <u style="color: red;"><b>ВАЖНО:</b></u> Для удобства системы хранения документов их названия должны указываться в соответствии с приведенными выше инструкциями.
                            </p>
                        </div>
                    </div>
                </div>                                        
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Замена фирмы</button>
                    </div>
                    <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p>Работник, намеревающийся сменить компанию на строительной площадке АЭС Аккую, должен пройти процедуру замены компании. В этом процессе будет выполнено оформление увольнение из прошлой компании и трудоустройство работника в новой компании.<br><br>
                                    <b>Порядок действий</b><br>
                                    Прежняя компания: работник или его/ее компания должны предоставить временный пропуск Аккую в Управление безопасности вместе с обходным листом или заявлением об увольнении.<br>
                                    Новая компания должна направить необходимые документы по электронной почте. Компании с обязательным медицинским сопровождением должны также направить медицинскую форму по электронной почте.<br>
                                    <b>Заголовок темы электронного письма:</b><br>
                                    Имя и фамилия работника касательного которого направляется письмо, должны быть указаны заглавными и латинскими буквами:<br>
                                    • Например: "ЗАМЕНА ФИРМЫ АНТОН АНТОНОВ" или "ЗАМЕНА ФИРМЫ ALİ KAYA"<br><br>
                                    <b>Необходимые документы:</b><br>
                                    <b>1. Фотография сотрудника:</b> Четкая фотография на белом фоне.<br>
                                    <b>2. Рабочая регистрация 4A (SGK):</b> Может быть получена через аккаунт в E-Devlet, должна быть в формате PDF.<br>
                                    <b>3. Excel файл для сотрудников:</b> Должен быть полностью и корректно заполнен.<br>
                                    <b>4. Скан турецкого удостоверения личности(кимплика):</b> обе стороны должны быть направлены в отсканированном виде в формате PDF. Обе стороны должны быть направлены в отсканированном виде в формате PDF.<br><br>
                                    <b>Дополнительные документы (для иностранных сотрудников):</b><br>
                                    <b>5. Сканирование синего удостоверения:</b> Должно быть объединено в один PDF файл с обеими сторонами. Если синее удостоверение еще не готово, необходимо отправить заявку на разрешение на работу и скриншот заявки.<br>
                                    &nbsp&nbsp&nbsp • Статус назначения: Если сотрудник направляется на площадку, необходимо также отправить документ о назначении и рабочую книгу в формате PDF.<br>
                                    <b>6. Сканирование паспорта:</b> Необходимо отправить скан текущего заграничного паспорта в формате PDF. Если паспорт был заменен, отправьте сканы старого и нового паспортов.<br><br>
                                    <u style="color: red;"><b>ВАЖНО:</b></u> Для удобства системы хранения документов их названия должны указываться в соответствии с приведенными выше инструкциями.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Замена фамилии и имени</button>
                    </div>
                    <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p>В случае замены имени или фамилии в паспорте или кимлике работника, работающего на территории площадки, соответствующие документы должны быть отправлены по электронной почте в полном объеме. Кроме этого, работник должен лично предоставить временный пропуск в офис Управления безопасности.<br><br> 
                                    <b>Заголовок темы электронного письма:</b><br>
                                    Имя и фамилия работника касательного которого направляется письмо, должны быть указаны заглавными и латинскими буквами:<br>
                                    • Например: "ЗАМЕНА ИМЕНИ ANTON ANTONOV" или "ЗАМЕНА  ФАМИЛИИ ALİ KAYA"<br><br>
                                    <b>1. Фотография сотрудника:</b> Четкая фотография на белом фоне.<br>
                                    <b>2. Рабочая регистрация 4A (SGK):</b> Может быть получена через аккаунт в E-Devlet, должна быть в формате PDF.<br>
                                    <b>3. Excel файл для сотрудников:</b> Должен быть полностью и корректно заполнен.<br>
                                    <b>Дополнительные документы (для иностранных сотрудников):</b><br>
                                    <b>4. Сканирование синего удостоверения:</b> Должно быть объединено в один PDF файл с обеими сторонами. Если синее удостоверение еще не готово, необходимо отправить заявку на разрешение на работу и скриншот заявки.<br>
                                    &nbsp&nbsp&nbsp • Статус назначения: Если сотрудник направляется на площадку, необходимо также отправить документ о назначении и рабочую книгу в формате PDF.<br>
                                    <b>5. Сканирование паспорта:</b> Необходимо отправить скан текущего заграничного паспорта в формате PDF. Если паспорт был заменен, отправьте сканы старого и нового паспортов.<br><br>
                                    <u style="color: red;"><b>ВАЖНО:</b></u> Для удобства системы хранения документов их названия должны указываться в соответствии с приведенными выше инструкциями.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-6" aria-expanded="true">Замена паспорта</button>
                    </div>
                    <div id="faq-1-6" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>В случае замены паспорта работника, работающего на территории площадки, необходимые документы должны быть отправлены по электронной почте в полном объеме, а временный пропуск должна быть лично предоставлен в офис Управления безопасности.<br><br> 
                                <b>Заголовок темы электронного письма:</b><br>
                                Имя и фамилия работника касательного которого направляется письмо, должны быть указаны заглавными и латинскими буквами:<br>
                                • Например: "ЗАМЕНА ПАСПОРТА ANTON ANTONOV"<br><br>
                                <b>1. Фото сотрудника:</b> Фото с белым фоном, четкое и ровное.<br>
                                <b>2. Уведомление о начале работы по форме SGK 4A:</b> Может быть получено через учетную запись на e-Devlet, в формате PDF.<br>
                                <b>3. Таблица входа персонала:</b> Должна быть полностью и правильно заполнена.<br><br>
                                <b>Дополнительные документы (для иностранных сотрудников):</b><br>
                                <b>5. Копия синего удостоверения личности:</b> Сканы с обеих сторон, объединенные в один PDF файл. Если синее удостоверение еще не готово, необходимо отправить заявку на разрешение на работу и скриншот.<br>
                                &nbsp&nbsp&nbsp •	Статус назначения: Если сотрудник приехал на объект по назначению, необходимо также отправить документы, связанные с назначением и рабочей книгой, в формате PDF.<br>
                                <b>6. Копия паспорта:</b> Необходимо отправить скан действующего внешнего паспорта. Если паспорт был заменен, отправляются сканы как старого, так и нового паспорта.<br><br>
                                <u style="color: red;"><b>ВАЖНО:</b></u> Старый и новый паспорта должны быть представлены с именем и фамилией работника, указанными заглавными буквами и латинскими буквами.<br>
                                • Например: "ПРЕЖНИЙ ПАСПОРТ ANTON ANTONOV" или "НОВЫЙ ПАСПОРТ ANTON ANTONOV"
                            </p>
                        </div>
                    </div>
                </div>                                        
            </div>                                                                       
        
        </div>`
    },
    kiptal: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Kart İptal İşlemleri</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
          <div class="accordion-item">
            <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
              <div class="accordion-body pt-0">
                <p class="ps-4"><br><br>Akkuyu Geçici Kart İptal İşlemleri farklı durumlara göre değişiklik göstermekte olup, her bir duruma uygun tutanak hazırlanması gerekmektedir. 
                    Aşağıda her bir iptal durumu için gereken belgeler ve teslim prosedürleri açıklanmıştır.<br><br>
                    <b>Genel Prosedür</b><br>Tüm kart iptalleri, ilişik kesme formu ile birlikte fiziksel olarak teslim edilen kartlar için geçerlidir.<br><br>
                    <b>1. İşten Çıkış Yapan Personelin Kart İptali</b><br>
                    •	Firma, personelin kartını iptal tutanağı ile birlikte teslim etmelidir.<br>
                    •	<b>Gerekli Belgeler:</b> Kart iptal tutanağı, firma kaşesi ve imzalı olarak teslim edilmelidir.<br>
                    •	<b>Açıklama:</b> Tutanak, personelin ilgili firmadan çıkış yaptığını ve artık çalışmadığını belirtmelidir.<br><br>
                    <b>2. Kartını Teslim Etmeden Firmadan Çıkış Yapan Personelin Kart İptali</><br>
                                  •	Firma, personelin kartını teslim etmediğine dair tutanağı ve SGK çıkış bildirgesini ofisimize iletmelidir.<br>
                                  •	<b>Gerekli Belgeler:</b> Kart teslim etmeme tutanağı (firma kaşeli ve imzalı) ve SGK çıkış bildirgesi<br>
                                  •	<b>Açıklama:</b> Tutanakta, personelin kartını teslim etmeden firmadan çıkış yaptığı belirtilmelidir.<br><br>
                                  <b>3. Kartını Teslim Almadan Firmadan Çıkış Yapan Personelin Kart İptali</b><br>
                                  •	Firma, personelin kartını hiç teslim almadığına dair bir tutanağı ve SGK çıkış bildirgesini iletmelidir.<br>
                                  •	<b>Gerekli Belgeler:</b> Kart teslim almama tutanağı (firma kaşeli ve imzalı) ve SGK çıkış bildirgesi.<br>
                                  •	<b>Açıklama:</b> Tutanakta, personelin kartını teslim almadan çıkış yaptığı belirtilmelidir.<br><br>
                                  <b>4. Kayıp Kart İptali</b><br>
                                  •	Firma, personelin kartının kaybolduğu ve personelin çıkış yaptığına dair bir tutanağı teslim etmelidir.<br>
                                  •	<b>Gerekli Belgeler:</b> Kayıp kart tutanağı (imzalı ve kaşeli) ve SGK çıkış bildirgesi.<br>
                                  •	<b>Açıklama:</b> Tutanakta, kartın kayıp olduğu ve personelin çıkışı sebebiyle iptal talep edildiği belirtilmelidir.<br><br>
                                  <b>5. Arşive Düşen Kartın İptali</b><br>
                                  •	Basıldıktan sonra 2-3 ay içinde teslim alınmayan kartlar, erişim rejimi kuralları gereği arşive aktarılır ve personele teslim edilemez.<br>
                                  •	<b>Gerekli Belgeler:</b> Arşiv iptal tutanağı (firma kaşeli ve imzalı).<br>
                                  •	<b>Açıklama:</b> Firmanın tutanakla birlikte iptal talebinde bulunması gereklidir. Eğer personel aynı firmada çalışmaya devam edecekse, firma yeni bir kart talep etmelidir.<br><br>
                                  <u style="color: red;"><b>ÖNEMLİ:</b></u>  Her durumda tüm belgelerin fiziksel olarak teslim edilmesi ve firma kaşesi ile imzalanmış olması gerekmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">АННУЛИРОВАНИЕ КАРТ СОТРУДНИКОВ</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
          <div class="accordion-item">
            <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
              <div class="accordion-body pt-0">
                <p class="ps-4"><br><br>Процедуры отмены временных карт Akkuyu различаются в зависимости от ситуации, и для каждой ситуации необходимо подготовить соответствующий акт. 
                  Ниже описаны требуемые документы и процедуры подачи для каждого случая отмены.<br><br>
                  <b>Общая Процедура</b><br>Все отмены карт действительны только для карт, которые физически переданы с формой о прекращении связи.<br><br>
                  <b>1. Отмена карты сотрудника, уволившегося с работы</b><br>
                  • Компания должна передать карту сотрудника вместе с актом отмены карты.<br>
                  • <b>Необходимые документы:</b> Акт отмены карты, который должен быть подписан и прошнурован печатью компании.<br>
                  • <b>Описание:</b> В акте должно быть указано, что сотрудник уволился из соответствующей компании и больше не работает в ней.<br><br>
                  <b>2. Отмена карты сотрудника, покинувшего компанию без сдачи карты</b><br>
                  • Компания должна передать акт о том, что сотрудник не сдал свою карту, и отчет о выходе из соцстраха (SGK) в наш офис.<br>
                  • <b>Необходимые документы:</b> Акт о ненаправлении карты (с печатью и подписью компании) и отчет о выходе из SGK.<br>
                  • <b>Описание:</b> В акте должно быть указано, что сотрудник покинул компанию, не сдав карту.<br><br>
                  <b>3. Отмена карты сотрудника, который не получил свою карту при выходе из компании</b><br>
                  • Компания должна передать акт о том, что сотрудник не получил свою карту, и отчет о выходе из SGK.<br>
                  • <b>Необходимые документы:</b> Акт о ненаправлении карты (с печатью и подписью компании) и отчет о выходе из SGK.<br>
                  • <b>Описание:</b> В акте должно быть указано, что сотрудник покинул компанию, не получив карту.<br><br>
                  <b>4. Отмена карты, потерянной сотрудником</b><br>
                  • Компания должна передать акт о том, что карта сотрудника потеряна, и акт о выходе из SGK.<br>
                  • <b>Необходимые документы:</b> Акт о потере карты (с подписью и печатью) и отчет о выходе из SGK.<br>
                  • <b>Описание:</b> В акте должно быть указано, что карта потеряна и отмена требуется из-за увольнения сотрудника.<br><br>
                  <b>5. Отмена карты, переведенной в архив</b><br>
                  • Карты, не полученные в течение 2-3 месяцев после выпуска, переводятся в архив в соответствии с правилами доступа, и не могут быть переданы сотрудникам.<br>
                  • <b>Необходимые документы:</b> Акт об отмене карты из архива (с печатью и подписью компании).<br>
                  • <b>Описание:</b> Компания должна подать акт с запросом на отмену. Если сотрудник продолжает работать в той же компании, компания должна запросить новую карту.<br><br>
                  <u style="color: red;"><b>ВАЖНО:</b></u> Во всех случаях все документы должны быть физически переданы и подписаны с печатью компании.
                </p>                      
              </div>
            </div>
          </div>
        </div>
      </div>`
    },
    ksureuzatma: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Kart Süresi Uzatma</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">
                    Akkuyu NGS erişim rejimi kurallarındaki değişiklik nedeniyle, kart süresi dolan personelin kartının süresinin uzatılabilmesi için aşağıdaki belgelerin gönderilmesi gerekmektedir.<br><br>
                    <b>Konu Başlığı</b><br>
                    E-posta konu başlığı ve dosya adlandırmaları, personelin ad ve soyadını büyük ve Latin harflerle içermelidir:<br>
                    •	<b>Konu Başlığı Örneği:</b> "KART SÜRESİ UZATMA ANTON ANTONOV" veya "KART SÜRESİ UZATMA ALİ KAYA"<br>
                    •	<b>Dosya Adlandırması:</b> Belgeler, personelin adı ve soyadı büyük ve Latin harfleriyle yazılarak adlandırılmalıdır.<br><br>
                    <b>Gönderilecek Belgeler</b><br>
                    Kart süresi uzatma talebi için gerekli belgeleri listeleyin ve aşağıdaki e-posta adreslerine tek bir e-posta olarak iletin:<br><br>
                    İlgili E-Posta Adresleri<br>•	<a href="mailto:tugbahan.karakaya@t2ic.com">tugbahan.karakaya@t2ic.com</a><br> •	  <a href="mailto:muslum.elibol@t2ic.com">muslum.elibol@t2ic.com</a><br><br>
                    <u style="color: red;"><b>ÖNEMLİ:</b></u> Her bir belgenin eksiksiz hazırlanması ve yukarıdaki yönergelere uygun şekilde gönderilmesi, 
                    sürecin hızlı ve sorunsuz ilerlemesi için önemlidir.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Türk Personel için Gerekli Belgeler</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p> Kart süresi uzatma işlemleri kapsamında, Türk personel için aşağıdaki belgelerin hazırlanarak e-posta ile iletilmesi gerekmektedir:<br><br>
                            1. SGK 4A İşe Giriş Bildirgesi<br>
                            &nbsp&nbsp&nbsp •	Personelin 4A işe giriş bildirgesi PDF formatında iletilmelidir.<br>
                            &nbsp&nbsp&nbsp •	Bu belgeye E-Devlet hesabınızdan ulaşabilirsiniz.<br>
                            2. Personel Giriş Excel<br>
                            &nbsp&nbsp&nbsp •	Personel Giriş Excel dosyası tam ve eksiksiz doldurulmuş olarak hazırlanmalıdır.<br>
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="true">Yabancı Personel için Gerekli Belgeler</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Kart süresi uzatma talebi için, yabancı personel durumuna göre aşağıdaki belgelerin hazırlanarak e-posta ile iletilmesi gerekmektedir:<br><br>
                            <b>Standart Belgeler</b><br>
                            <b>1. Mavi Kimlik Tarama</b><br>
                            &nbsp&nbsp&nbsp •	Mavi kimlik, birleştirilmiş tek PDF formatında, arkalı önlü olacak şekilde hazırlanmalıdır (1 ya da 2 sayfa).<br>
                            &nbsp&nbsp&nbsp •	Mavi kimlik henüz hazır değilse, çalışma izni başvurusu ve başvuru ekran görüntüsü iletilmelidir.<br>
                            &nbsp&nbsp&nbsp •	Personel sahaya görevlendirme ile geliyorsa, Görevlendirme Belgesi ve Çalışma Defteri de PDF olarak iletilmelidir.<br><br>
                            <b>2. Pasaport Tarama</b><br>
                            &nbsp&nbsp&nbsp •	Mevcut dış pasaportun taraması PDF formatında gönderilmelidir.<br>
                            &nbsp&nbsp&nbsp •	Pasaport değişikliği yapılmışsa, hem eski hem yeni pasaportun taramaları PDF formatında iletilmelidir.<br><br>
                            <b>3. Personel Giriş Excel</b><br>
                            &nbsp&nbsp&nbsp •	Excel dosyası tam ve eksiksiz doldurulmalıdır.<br><br>
                            <b>Görevlendirme ile Saha Girişi Yapan Yabancı Personel için Ek Belgeler</b><br>
                            Eğer personel görevlendirme ile sahaya gelecekse, kart süresi uzatma talebi için aşağıdaki ek belgeler de hazırlanmalıdır ve en az 5-7 iş günü öncesinde gönderilmelidir:<br>
                            <b>1. Görevlendirme Bildirisi: </b>Görevlendirme süresi maksimum 30 gün ile sınırlıdır.<br>
                            <b>2. Çalışma Defteri: </b>Çalışma defterinin tüm sayfaları taranmış şekilde veya elektronik formatta gönderilmelidir.<br>
                            <b>3. Pasaport İlk Sayfasının Taraması: </b>Pasaportun ilk sayfasının PDF taraması gereklidir.<br><br>
                            Belirtilen tüm belgeler, aşağıdaki e-posta adresine tek bir e-posta ile gönderilmelidir:<br>
                            <a href="mailto:id@t2ic.com">id@t2ic.com</a><br>
                            İşlem onaylandığında, tarafınıza e-posta yoluyla bilgilendirme yapılacaktır.
                        </p>
                    </div>
                </div>
            </div>                                                                       
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Продление пропусков</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4 mt-3">
                    В связи с изменениями в правилах доступа на АЭС Аккую, для продления срока действия карт сотрудников, необходимо предоставить следующие документы.<br><br>
                    <b>Тема письма</b><br>
                    Тема письма и наименование файлов должны включать имя и фамилию сотрудника, написанные заглавными латинскими буквами:<br>
                    • <b>Пример темы:</b> "ПРОДЛЕНИЕ СРОКА КАРТЫ АНТОН АНТОНОВ" или "ПРОДЛЕНИЕ СРОКА КАРТЫ АЛИ КАЯ"<br>
                    • <b>Наименование файлов:</b> Документы должны быть названы с использованием имени и фамилии сотрудника, написанных заглавными латинскими буквами.<br><br>
                    <b>Необходимые документы</b><br>
                    Для продления срока действия карты необходимо отправить следующие документы в одном письме на следующие адреса электронной почты:<br><br>
                    Адреса электронной почты:<br>• <a href="mailto:tugbahan.karakaya@t2ic.com">tugbahan.karakaya@t2ic.com</a><br> • <a href="mailto:muslum.elibol@t2ic.com">muslum.elibol@t2ic.com</a><br><br>
                    <u style="color: red;"><b>ВАЖНО:</b></u> Каждый документ должен быть подготовлен полностью и отправлен в соответствии с вышеуказанными инструкциями, чтобы процесс прошел быстро и без проблем.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Необходимые документы для турецких сотрудников</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p> Для продления срока карты для турецких сотрудников необходимо подготовить и отправить следующие документы:<br><br>
                            1. Рабочая регистрация 4A (SGK)<br>
                            &nbsp&nbsp&nbsp • Рабочая регистрация 4A должна быть отправлена в формате PDF.<br>
                            &nbsp&nbsp&nbsp • Этот документ можно получить через аккаунт в системе E-Devlet.<br>
                            2. Excel файл для сотрудников<br>
                            &nbsp&nbsp&nbsp • Excel файл для сотрудников должен быть полностью и корректно заполнен.<br>
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="true">Необходимые документы для иностранных сотрудников</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p> Для продления срока карты для иностранных сотрудников необходимо подготовить и отправить следующие документы в зависимости от их статуса:<br><br>
                            <b>Стандартные документы</b><br>
                            <b>1. Сканирование синего удостоверения личности</b><br>
                            &nbsp&nbsp&nbsp • Синее удостоверение должно быть отправлено в едином PDF файле (лицевая и обратная стороны).<br>
                            &nbsp&nbsp&nbsp • Если синее удостоверение еще не готово, отправьте заявку на разрешение на работу и скриншот заявки.<br>
                            &nbsp&nbsp&nbsp • Если сотрудник направляется на площадку по направлению, необходимо также отправить документ о направлении и рабочую книгу в формате PDF.<br><br>
                            <b>2. Сканирование паспорта</b><br>
                            &nbsp&nbsp&nbsp • Сканирование текущего внешнего паспорта должно быть отправлено в формате PDF.<br>
                            &nbsp&nbsp&nbsp • Если паспорт был заменен, отправьте сканирования старого и нового паспортов.<br><br>
                            <b>3. Excel файл для сотрудников</b><br>
                            &nbsp&nbsp&nbsp • Excel файл должен быть полностью и корректно заполнен.<br><br>
                            <b>Дополнительные документы для иностранных сотрудников, направляемых на площадку</b><br>
                            Если сотрудник направляется на площадку, то для продления срока карты необходимо подготовить следующие дополнительные документы, которые должны быть отправлены за 5-7 рабочих дней до подачи заявки:<br>
                            <b>1. Документ о направлении:</b> Срок направления ограничен 30 днями.<br>
                            <b>2. Рабочая книга:</b> Все страницы рабочей книги должны быть отсканированы или отправлены в электронном виде.<br>
                            <b>3. Сканирование первой страницы паспорта:</b> Требуется сканирование первой страницы паспорта в формате PDF.<br><br>
                            Все эти документы должны быть отправлены одним письмом на следующий адрес электронной почты:<br>
                            <a href="mailto:id@t2ic.com">id@t2ic.com</a><br>
                            После подтверждения процесса вам будет отправлено уведомление по электронной почте.
                        </p>
                    </div>
                </div>
            </div>                                                                                                      
        </div>
    </div>`
    },
    doksangunbloke: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">90 Gün Bloke Kaldırma İşlemi</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><b><br>90 Günden Fazla Sahaya Giriş Yapmayan Personeller için Bloke Kaldırma İşlemi</b><br><br>
                    Akkuyu NGS sahasına 90 günden uzun süredir giriş yapmayan çalışanların giriş kartları otomatik olarak bloke edilmektedir. 
                    Şantiyeye tekrar girişte sorun yaşanmaması adına aşağıdaki adımlar takip edilmelidir:<br><br>
                    <b>Bloke Kaldırma Başvurusu İçin Gerekli Adımlar</b><br>
                    <b>1. Başvuru Yazısı Hazırlama</b><br>
                    &nbsp&nbsp&nbsp •	Şirket antetli kağıdında, RUSÇA ve TÜRKÇE olarak "90 Gün Pasif Kart Aktivasyonu" başlıklı bir mektup hazırlayınız.<br>
                    &nbsp&nbsp&nbsp •	Mektubu, en az 3 iş günü öncesinde <a href="mailto:access@t2ic.com">access@t2ic.com</a> ve <a href="mailto:id@t2ic.com">id@t2ic.com</a>e-posta adreslerine gönderiniz.<br>
                    &nbsp&nbsp&nbsp •	<b>TSM, JV, ICTAS NUKLEER</b> firmalarının mektup yazma zorunluluğu bulunmamaktadır.<br><br>
                    <b>2. Ek Belgeler</b><br>
                    &nbsp&nbsp&nbsp •	Ekteki Excel formunu eksiksiz ve tam olarak doldurunuz.<br>
                    &nbsp&nbsp&nbsp •	Personelin 4A İşe Giriş Bildirgesini PDF formatında ekleyiniz.<br><br>
                    <b>3. E-posta Konusu</b><br>
                    &nbsp&nbsp&nbsp •	E-posta konusuna "90 GÜN BLOKE KALDIRMA TALEBİ" yazılmalıdır. Personelin adı ve soyadı, büyük ve Latin harflerle yazılmalıdır (örneğin: "90 GÜN BLOKE KALDIRMA TALEBİ ANTON ANTONOV").<br><br>
                    <b>4. Kart Durumu Kontrolü</b><br>
                    &nbsp&nbsp&nbsp •	Personelin girişine engel bir durum olmaması için, kartın pasif/aktif durumuna göre gelişlerini organize ediniz.<br>
                    &nbsp&nbsp&nbsp •	Kartın personelin elinde olduğundan emin olunuz. Aksi bir durum varsa, ana girişe gelmeden önce teyit edilmesi gerekmektedir.<br><br>
                    <b>5. Eksik Evrak Durumu</b><br>
                    &nbsp&nbsp&nbsp •	Eksik evrakla yapılan başvurular işleme alınmayacaktır.<br><br>
                    <b>İlgili E-Posta Adresleri</b><br>&nbsp&nbsp&nbsp •	<a href="mailto:tugbahan.karakaya@t2ic.com">tugbahan.karakaya@t2ic.com</a><br> &nbsp&nbsp&nbsp •	  <a href="mailto:muslum.elibol@t2ic.com">muslum.elibol@t2ic.com</a><br><br>
                    <u style="color: red;"><b>ÖNEMLİ:</b></u> Her bir belgenin eksiksiz hazırlanması ve yukarıdaki yönergelere uygun şekilde gönderilmesi, 
                    sürecin hızlı ve sorunsuz ilerlemesi için önemlidir.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Türk Personel için Gerekli Belgeler</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div>
                            <p> Kart süresi uzatma işlemleri kapsamında, Türk personel için aşağıdaki belgelerin hazırlanarak e-posta ile iletilmesi gerekmektedir:<br><br>
                                1. SGK 4A İşe Giriş Bildirgesi<br>
                                &nbsp&nbsp&nbsp •	Personelin 4A işe giriş bildirgesi PDF formatında iletilmelidir.<br>
                                &nbsp&nbsp&nbsp •	Bu belgeye E-Devlet hesabınızdan ulaşabilirsiniz.<br>
                                2. Personel Giriş Excel<br>
                                &nbsp&nbsp&nbsp •	Personel Giriş Excel dosyası tam ve eksiksiz doldurulmuş olarak hazırlanmalıdır.<br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="false">Yabancı Personeller İçin Gerekli Evraklar</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div>
                            <p>
                                1. 90 Gün Talep Excel<br>
                                &nbsp&nbsp&nbsp •	Formun tamamı eksiksiz doldurulmalı ve aşağıdaki uygun durumlara göre gerekli belgeler hazırlanarak iletilmelidir.<br><br>
                                2. Yabancı Personel Görevlendirme ile Geliyorsa:<br>
                                &nbsp&nbsp&nbsp <b>•	Çalışma Defteri:</b> Tüm sayfaların taranmış veya elektronik versiyonu gönderilmelidir.<br>
                                &nbsp&nbsp&nbsp <b>•	Görevlendirme Belgesi:</b> En fazla 30 gün süreli görevlendirme belgesi gerekmektedir.<br><br>
                                <u style="color: red;"><b>ÖNEMLİ:</b></u> Giriş kartları yalnızca görevlendirme süresi kadar aktif olacaktır. Süre uzatımı sadece resmi 
                                mektup ile yapılır. Personel her gelişinde güncel görevlendirme belgesi ile işlem görmelidir.<br><br>
                                3. Çalışma İzni Olan Yabancı Personeller:<br>
                                &nbsp&nbsp&nbsp <b>•	Mavi Kimlik:</b> Mavi kimlik hazır ise, arkalı önlü taranmış, tek bir PDF dosyasında ve personelin ismiyle isimlendirilmiş olarak iletilmelidir.<br>
                                &nbsp&nbsp&nbsp <b>•	Çalışma İzni Başvurusu/Onayı:</b> Mavi kimlik henüz hazır değilse, çalışma izni başvurusu veya onay belgesi ile sistemden başvuru ekran görüntüsü gönderilmelidir.<br><br>
                                4.  30 Günden Fazla Süreyle Sahada Bulunacak Yabancı Personeller (Çalışma İzni Zorunluluğu Yoksa):<br>
                                &nbsp&nbsp&nbsp <b>•	Muafiyet Belgesi:</b> Eğer çalışma izni zorunluluğu bulunmuyorsa, <a target="_blank" href="https://emuafiyet.csgb.gov.tr/welcome">https://emuafiyet.csgb.gov.tr/welcome</a> adresinden alınan muafiyet belgesi tarafımıza iletilmelidir.<br><br>
                                Tüm belgeler uygun formatlarda ve doğru şekilde hazırlandıktan sonra tarafımıza gönderilmelidir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Процедура снятия блокировки на 90 дней</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><b><br>Процедура снятия блокировки для сотрудников, не входивших на площадку более 90 дней</b><br><br>
                    Входные карты сотрудников, не входивших на строительную площадку Akkuyu NPP более 90 дней, автоматически блокируются. 
                    Для предотвращения проблем при повторном входе необходимо выполнить следующие шаги:<br><br>
                    <b>Необходимые шаги для подачи заявки на снятие блокировки</b><br>
                    <b>1. Подготовка заявки</b><br>
                    &nbsp&nbsp&nbsp • Подготовьте письмо на бланке компании на русском и турецком языках с заголовком "Активация пассивной карты на 90 дней".<br>
                    &nbsp&nbsp&nbsp • Отправьте письмо на адреса <a href="mailto:access@t2ic.com">access@t2ic.com</a> и <a href="mailto:id@t2ic.com">id@t2ic.com</a> не позднее чем за 3 рабочих дня.<br>
                    &nbsp&nbsp&nbsp • <b>TSM, JV, ICTAS NUKLEER</b> компании не обязаны писать письмо.<br><br>
                    <b>2. Дополнительные документы</b><br>
                    &nbsp&nbsp&nbsp • Заполните прилагаемую форму Excel полностью и правильно.<br>
                    &nbsp&nbsp&nbsp • Приложите PDF-версию документа о приеме на работу 4A сотрудника.<br><br>
                    <b>3. Тема письма</b><br>
                    &nbsp&nbsp&nbsp • В теме письма должно быть указано "ЗАПРОС НА СНЯТИЕ БЛОКИРОВКИ НА 90 ДНЕЙ". Имя и фамилия сотрудника должны быть написаны заглавными латинскими буквами (например: "ЗАПРОС НА СНЯТИЕ БЛОКИРОВКИ НА 90 ДНЕЙ АНТОН АНТОНОВ").<br><br>
                    <b>4. Проверка состояния карты</b><br>
                    &nbsp&nbsp&nbsp • Организуйте вход сотрудника в зависимости от статуса карты (пассивная/активная), чтобы не возникало препятствий.<br>
                    &nbsp&nbsp&nbsp • Убедитесь, что карта находится у сотрудника. Если это не так, необходимо подтвердить это до того, как он прибудет на главный вход.<br><br>
                    <b>5. Неполные документы</b><br>
                    &nbsp&nbsp&nbsp • Заявки с неполными документами не будут рассмотрены.<br><br>
                    <b>Соответствующие электронные адреса</b><br>&nbsp&nbsp&nbsp • <a href="mailto:tugbahan.karakaya@t2ic.com">tugbahan.karakaya@t2ic.com</a><br> &nbsp&nbsp&nbsp • <a href="mailto:muslum.elibol@t2ic.com">muslum.elibol@t2ic.com</a><br><br>
                    <u style="color: red;"><b>ВАЖНО:</b></u> Полная подготовка каждого документа и отправка в соответствии с указанными инструкциями важна для быстрого и бесперебойного прохождения процесса.
                </p>                                        
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Необходимые документы для турецкого персонала</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div>
                            <p> В рамках продления срока действия карт, для турецкого персонала необходимо подготовить следующие документы и отправить их по электронной почте:<br><br>
                                1. Документ о приеме на работу 4A SGK<br>
                                &nbsp&nbsp&nbsp • Документ о приеме на работу 4A должен быть отправлен в формате PDF.<br>
                                &nbsp&nbsp&nbsp • Этот документ можно получить через вашу учетную запись на E-Devlet.<br>
                                2. Excel таблица для входа персонала<br>
                                &nbsp&nbsp&nbsp • Excel таблица для входа персонала должна быть заполнена полностью и без ошибок.<br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="false">Необходимые документы для иностранных работников</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div>
                            <p>
                                1. Excel форма для запроса 90 дней<br>
                                &nbsp&nbsp&nbsp • Форма должна быть полностью заполнена, и необходимые документы должны быть подготовлены и отправлены в соответствии с нижеуказанными требованиями.<br><br>
                                2. Если работник приезжает по командировке:<br>
                                &nbsp&nbsp&nbsp <b>• Рабочая книжка:</b> Отсканированные или электронные версии всех страниц рабочей книжки должны быть отправлены.<br>
                                &nbsp&nbsp&nbsp <b>• Командировочное удостоверение:</b> Требуется командировочное удостоверение на срок не более 30 дней.<br><br>
                                <u style="color: red;"><b>ВАЖНО:</b></u> Карты доступа будут активны только на срок командировки. Продление срока возможно только официальным письмом. Работник должен предоставлять актуальное командировочное удостоверение при каждом приезде.<br><br>
                                3. Иностранные работники с разрешением на работу:<br>
                                &nbsp&nbsp&nbsp <b>• Голубой идентификационный номер:</b> Если голубой идентификационный номер готов, его сканированные копии с обеих сторон должны быть отправлены в одном PDF файле с именем работника.<br>
                                &nbsp&nbsp&nbsp <b>• Заявка/одобрение на работу:</b> Если голубой идентификационный номер еще не готов, необходимо отправить заявку на работу или одобрение вместе с экраном заявки из системы.<br><br>
                                4. Иностранные работники, которые будут находиться на площадке более 30 дней (если разрешение на работу не требуется):<br>
                                &nbsp&nbsp&nbsp <b>• Свидетельство об освобождении:</b> Если разрешение на работу не требуется, необходимо отправить свидетельство об освобождении, полученное по адресу <a href="https://emuafiyet.csgb.gov.tr/welcome">https://emuafiyet.csgb.gov.tr/welcome</a>.<br><br>
                                Все документы должны быть подготовлены в соответствующих форматах и отправлены нам.
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                    
        </div>
    </div>`
    },
    vatandaslikdegisim: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Türkiye Cumhuriyeti Vatandaşlığına Geçiş Yapan Personeller İçin Gerekli İşlemler</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4"><br>
                  Akkuyu NGS inşaat sahasında, daha önce yabancı pasaport ile çalışmakta olup sonradan Türkiye Cumhuriyeti vatandaşlığına geçmiş personellerin, 
                  geçiş kartı kaybı veya değişikliği durumunda sorun yaşamaması adına ilgili belgelerin sunulması gerekmektedir. Bu belgeler <b>TITAN2 IC İÇTAŞ İNŞAAT 
                  ANONİM ŞİRKETİ (‘T2IC’)</b> Güvenlik Direktörlüğü Saha Geçiş İzin Rejimi Departmanına iletilmelidir.<br><br> 
                  <b>İletilecek E-posta Adresleri:</b><br> &nbsp&nbsp&nbsp •	Muge Dundar <a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a><br> 
                  &nbsp&nbsp&nbsp •	Hafize Isin <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a><br><br>
                  <b>Konu Başlığı:</b><br>“VATANDAŞLIK DEĞİŞTİREN PERSONEL KART DEĞİŞİMİ [İSİM SOYİSİM]” (Büyük ve Latin harflerle yazılmalıdır).<br>
                   Örneğin: "VATANDAŞLIK DEĞİŞTİREN PERSONEL KART DEĞİŞİMİ ANTON ANTONOV".<br><br>
                   <b>Gerekli Belgeler</b><br>
                   <b>1. Personelin Fotoğrafı: </b>Beyaz arka planlı, yüz net ve düz çekilmiş olmalıdır.<br>
                   <b>2. SGK 4A İşe Giriş Bildirgesi: </b>E-Devlet üzerinden erişilebilen bu belge PDF formatında sunulmalıdır.<br>
                   <b>3. TC Kimlik Kartı Taraması: </b>Her iki tarafı taranarak PDF formatında sunulmalıdır.<br>
                   <b>4. Personel Giriş Excel Formu: </b>Eksiksiz olarak doldurulmalıdır.<br><br>
                   <b>Ek Belgeler (Yabancı Kimlik Sahibi Personel İçin)</b><br>
                   <b>5. Mavi Kimlik Taraması: </b>Arkalı önlü tek PDF olarak sunulmalıdır. Eğer mavi kimlik hazır değilse, çalışma izni başvurusu ve onay ekran 
                   görüntüsü gerekmektedir. Sahaya görevlendirme ile gelen personel için görevlendirme belgesi ve çalışma defteri eklenmelidir.<br>
                   <b>6. Pasaport Taraması: </b><br>Mevcut pasaportun PDF taraması yapılmalı; pasaport değişikliği varsa, hem eski hem de yeni pasaport 
                   taramaları sunulmalıdır.<br><br>
                   <u style="color: red;"><b>ÖNEMLİ:</b></u> Belgeler eksiksiz olarak tamamlandıktan sonra departmana iletilmelidir.<br><br>
                <p>
            </div>                                                                       
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Процедуры, необходимые для персонала, переходящего в гражданство Турецкой Республики</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
              <p class="ps-4"><br>
                На строительной площадке Akkuyu NGS сотрудники, которые ранее работали по иностранному паспорту, а затем стали гражданами Турецкой Республики, 
                должны предоставить соответствующие документы в случае потери или изменения пропускной карты, чтобы избежать проблем. Эти документы должны быть отправлены в 
                <b>TITAN2 IC İÇTAŞ İNŞAAT ANONİM ŞİRKETİ (‘T2IC’)</b> Департамент безопасности, Отдел разрешений на проход на территорию.<br><br> 
                <b>Адреса для отправки электронной почты:</b><br> &nbsp&nbsp&nbsp • Муге Дундар <a href="mailto:muge.dundar@t2ic.com">muge.dundar@t2ic.com</a><br> 
                &nbsp&nbsp&nbsp • Хафизе Исин <a href="mailto:hafize.isin@t2ic.com">hafize.isin@t2ic.com</a><br><br>
                <b>Тема письма:</b><br>“СМЕНА ПРОПУСКА ДЛЯ СОТРУДНИКА С ИЗМЕНЕНИЕМ ГРАЖДАНСТВА [ИМЯ ФАМИЛИЯ]” (Написано большими латинскими буквами).<br>
                Например: "СМЕНА ПРОПУСКА ДЛЯ СОТРУДНИКА С ИЗМЕНЕНИЕМ ГРАЖДАНСТВА АНТОН АНТОНОВ".<br><br>
                <b>Необходимые документы:</b><br>
                <b>1. Фотография сотрудника:</b> На белом фоне, лицо должно быть четко видно, фото должно быть сделано прямо.<br>
                <b>2. Документ о приеме на работу SGK 4A:</b> Этот документ должен быть предоставлен в формате PDF и доступен через электронное правительство (E-Devlet).<br>
                <b>3. Сканирование ID-карты гражданина Турции:</b> Должны быть сканированы обе стороны карты и представлены в формате PDF.<br>
                <b>4. Excel-форма для входа сотрудника:</b> Должна быть заполнена полностью.<br><br>
                <b>Дополнительные документы (для сотрудников с иностранным паспортом):</b><br>
                <b>5. Сканирование синего ID:</b> Должно быть предоставлено в формате одного PDF с обеих сторон. Если синий ID еще не готов, необходимо предоставить снимок с экрана заявки на рабочее разрешение и его одобрение. Для сотрудников, прибывших по назначению, необходимо также предоставить документ о назначении и рабочую книжку.<br>
                <b>6. Сканирование паспорта:</b><br> Скан паспорта должен быть предоставлен в формате PDF. Если паспорт был заменен, должны быть представлены сканы как старого, так и нового паспорта.<br><br>
                <u style="color: red;"><b>ВАЖНО:</b></u> Документы должны быть отправлены в департамент после их полного оформления.<br><br>
            </p>                                    
            </div>                                                                       
        </div>
    </div>`
    },
    mektupbasvuru: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Araç Mektup Başvurusu</i>
            <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
                <div class="accordion-item">
                    <p class="ps-3"><br>
                        <b>Akkuyu NGS Sahasında Geçiş Kartı Başvurusu İçin Gerekli Adımlar ve Belgeler</b><br>
                        Akkuyu NGS sahasında geçiş kartı başvurusunda bulunacak personelin, süreci başarıyla tamamlayabilmesi için belirli adımları takip etmesi ve aşağıda 
                        listelenen belgeleri hazırlayarak sunması gerekmektedir. Eksik bilgi veya belge içeren başvurular işleme alınmayacaktır.<br><br>
                        <b>1. Başvuru Mektubu Hazırlığı</b><br>
                        Başvuru öncesinde, T2-IC JV Güvenlik Direktörü Artem Zarodysh ve Eş Direktör Selim Temren'e hitaben bir mektup hazırlayın. Bu mektupta, firmanızın 
                        personel ve araç bilgilerini detaylandırarak, aşağıdaki ayrıntılara yer verin:<br>
                        &nbsp&nbsp&nbsp •	Personel sayısını beyaz yaka ve mavi yaka olarak ayrı ayrı belirtin.<br>
                        &nbsp&nbsp&nbsp •	Araçları, beyaz kart ve sarı kart olmak üzere ayrıştırarak hafif araç, kamyonet, ve servis araçları için bilgiler verin.<br><br>
                        Hazırlanan mektubu,<a href="mailto:office@t2ic.com">office@t2ic.com</a> adresine gönderin ve e-posta gönderirken Cc bölümüne <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a>  ve 
                        <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> adreslerini ekleyin.<br><br>
                        <b>2. Başvuru Belgeleri</b><br>
                        Başvuru sırasında aşağıdaki belgelerin eksiksiz olarak iletilmesi gerekmektedir:<br>
                        &nbsp&nbsp&nbsp •	<b>Araç Ruhsatı:</b> Her araç için ruhsat fotokopisi<br>
                        &nbsp&nbsp&nbsp •	<b>Araç Mektup Formu:</b> Excel formatında doldurulmuş ve firma tarafından kaşe-imzalı olmalıdır.<br>
                        &nbsp&nbsp&nbsp •	<b>İki Dilli Başvuru Mektubu:</b> Rusça ve Türkçe hazırlanmış, PDF formatında<br>
                        &nbsp&nbsp&nbsp •	<b>Araç Fotoğrafları:</b> Aracın dört yanından çekilmiş fotoğraflar<br><br>
                        <b>3. Geçiş Kartı Türleri ve Kullanım Koşulları</b><br>
                        Akkuyu NGS sahasında binek araçlar için iki tür elektronik geçiş kartı kullanılmaktadır:<br>
                        &nbsp&nbsp&nbsp •	<b>Beyaz Elektronik Geçiş Kartı:</b> 7/24 giriş-çıkış yapılabilen kart türüdür.<br>
                        &nbsp&nbsp&nbsp •	<b>Sarı Elektronik Geçiş Kartı:</b> Giriş-çıkış saatleri kısıtlıdır.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp -	<b>Giriş ve çıkış saatleri:</b> 06:00 - 10:00 ve 16:00 - 20:00 saatleri dışında kullanım yasaktır.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp -	<b>Yük taşıma araçları için yalnızca sarı kart verilmektedir; beyaz kart verilmez.</b><br><br>
                        <b>4. Başvuru Pozisyonu Şartı</b><br>
                        Başvuruda bulunacak personelin Bölüm Müdürü veya Saha Şefi (saha adı belirtilerek) seviyesinde veya daha yüksek bir pozisyonda olması gerekmektedir. 
                        Bu pozisyonlardan daha düşük pozisyonda olan kişilerin başvuruları işleme alınmayacaktır.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u>Belirtilen saatler dışında sarı kartlı araçların nizamiye giriş ve çıkışı YASAKTIR.
                    </p>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Mektup</button>
                    </div>
                    <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p class="ps-4 mt-4">
                                    <img src="./static/img/ornekmektup.png">
                                    <br><br><b>Başvuru Mektubu Gereksinimleri</b><br>
                                        Akkuyu NGS sahasında geçiş kartı başvurusu için hazırlayacağınız mektubun aşağıdaki gereksinimleri karşılaması gerekmektedir. 
                                        Eksik veya hatalı bilgi içeren talepler işleme alınmayacak, başvurular geri iade edilecektir.<br><br>
                                        <b>1. Firma Bilgileri ve Personel Detayları</b><br>
                                        &nbsp&nbsp&nbsp •	Personel Sayısı: Beyaz yaka ve mavi yaka çalışan sayısı ayrı ayrı belirtilmelidir.<br>
                                        &nbsp&nbsp&nbsp •	Araç Sayıları: Hafif araç, kamyonet ve servis araçlarının sayısı beyaz kart ve sarı kart olarak ayrılarak belirtilmelidir.<br><br>
                                        <b>2. İhtiyaç Gerekçesi</b><br>
                                        &nbsp&nbsp&nbsp •	Beyaz elektronik geçiş kartı talep ediliyorsa, sarı kart hamili araçların yasak saatlerde geçiş ihtiyacı için neden ve gerekçe hatasız olarak yazılmalıdır.<br>
                                        &nbsp&nbsp&nbsp •	Yoğun saatlerde geçiş ihtiyacını detaylandırmayan ya da gerekçelendirmeyen başvurular işleme alınmayacaktır.<br><br>
                                        <b>3. Dil Gereksinimleri</b><br>
                                        &nbsp&nbsp&nbsp •	Mektubun Rusça ve Türkçe olarak hatasız şekilde tercüme edilmiş olması zorunludur.<br><br>
                                        <b>İşlem Süreci</b><br>
                                        Başvurular ay sonunda değerlendirmeye alınacaktır.<br>
                                        Onay Süreci: Akkuyu Nükleer A.Ş. İnşa Edilen NGS Direktörü Genel Müdür Birinci Yardımcısı S. Butskikh tarafından onay, başvuruyu takip eden ayın ikinci 
                                        haftasında gerçekleşecektir.<br><br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Araç Mektup Formu</button>
                    </div>
                    <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>Araç mektup formunda, Talep Durumu sütununda aşağıdaki seçeneklerden biri doğru olarak seçilmelidir:<br>
                                &nbsp&nbsp&nbsp •	<b>Yeni Talep:</b> İlk kez araç geçiş kartı başvurusu yapılıyorsa seçilmelidir.<br>
                                &nbsp&nbsp&nbsp •	<b>Şoför Değişikliği:</b> Mevcut araç için farklı bir şoför atanacaksa bu seçenek kullanılmalıdır.<br>
                                &nbsp&nbsp&nbsp •	<b>Araç Değişikliği:</b> Kartı kayıtlı aracı değiştirme durumu söz konusu ise seçilmelidir.<br>
                                &nbsp&nbsp&nbsp •	<b>Kart Tipi Değişimi:</b> Beyaz veya sarı kart tipi değişikliği gerekiyorsa bu seçenek seçilmelidir.<br>
                                &nbsp&nbsp&nbsp •	<b>Hatalı Başvuru:</b> Eksik veya yanlış bilgi içeren başvurular için kullanılacak seçenektir.<br><br>
                                Başvuru işlemlerinizin hızlı ve doğru bir şekilde yapılabilmesi için uygun seçeneği işaretlediğinizden emin olunuz.<br></p>
                            <img src="./static/img/17.jpg"><br><br>
                            <p>Akkuyu Giriş Kart Durumu sütununda belirtilen seçeneklerden biri doğru ve eksiksiz şekilde seçilmelidir. Bu, başvurunun 
                                doğru şekilde değerlendirilmesi için gereklidir. Uygun bir seçim yapılmadığında başvuru işleme alınmayabilir.</p>
                            <img src="./static/img/18.jpg"><br><br>
                            <p>Kart Türü seçiminizi Elektronik Beyaz veya Elektronik Sarı olarak belirtmelisiniz. Bu seçim, talep edilen kartın 
                                kullanım amacına ve izin verilen saatlere uygun şekilde değerlendirilmesi için gereklidir..</p>
                            <img src="./static/img/19.jpg"><br><br>
                            <p>Araç Mektup Formu Excel dosyasını, örnekte gösterildiği gibi ve aşağıdaki kurallara göre titizlikle doldurmalısınız:<br>
                                <b>1. Alıcının Görevi ve İsim Soyismi: </b>Formdaki alıcı alanında, ilgili kişinin görevi ve ad-soyad bilgileri eksiksiz ve doğru şekilde yazılmalıdır.<br>
                                <b>2. Personel Sayısı:</b> Sahadaki personel bilgilerini beyaz yaka/mavi yaka formatında, tam ve doğru sayılarla belirtmelisiniz.<br>
                                <b>3. Araç Bilgileri:</b> Kartı alınacak aracın markası ve plaka numarası eksiksiz olarak doğru biçimde yazılmalıdır.<br>
                            </p>
                            <img src="./static/img/21.jpg"><br><br>
                            <p>Mevcut Araç Mektup Formu'nda <b>halihazırda kullanılan kart sayısı</b> net bir şekilde belirtilmelidir. Eğer birden fazla beyaz kart 
                                varsa, <b>en son verilen kartın tarihinden itibaren</b> oluşan <b>personel artış oranı</b> hem yüzde hem de sayısal olarak detaylı şekilde 
                                eklenmelidir. Bu bilgilendirme, başvuru gerekliliklerine tam uyum sağlanması açısından zorunludur.
                            </p>
                            <img src="./static/img/20.jpg"><br><br>
                            
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Araç Ruhsatı</button>
                    </div>
                    <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                                Araç ruhsatı, tek sayfada olacak şekilde okunaklı ve renkli olarak fotoğraf ya da PDF dosyası formatında hazırlanmalıdır. 
                                    Dosyanın net ve anlaşılır olması gerekmekte olup, aksi durumda başvuru süreci olumsuz etkilenebilir.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Fotoğraf</button>
                    </div>
                    <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p class="ps-4"><img src="./static/img/aracfoto.png"><br><br>
                                 Aracın dört bir yanından net ve doğru açıyla fotoğrafları çekilmelidir. Fotoğrafların aracın tüm detaylarını 
                                    eksiksiz gösterecek şekilde olması, başvurunun sorunsuz bir şekilde değerlendirilmesi için önemlidir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Заявка на письмо</i>
            <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
                <div class="accordion-item">
                    <p class="ps-3"><br>
                        <b>Шаги и документы, необходимые для подачи заявки на пропуск в зону Akkuyu NGS</b><br>
                        Для того чтобы успешно подать заявку на пропуск в зону Akkuyu NGS, персонал должен следовать определенным шагам и предоставить документы, указанные ниже. 
                        Заявки с неполной информацией или документами не будут рассмотрены.<br><br>
                        <b>1. Подготовка письма-заявки</b><br>
                        Перед подачей заявки подготовьте письмо, адресованное директору по безопасности T2-IC JV Артему Зародышу и со-директору Селиму Темрену. 
                        В письме подробно укажите информацию о вашем персонале и транспортных средствах, а также укажите следующие данные:<br>
                        &nbsp&nbsp&nbsp • Укажите количество сотрудников, разделив их на белые и синие воротнички.<br>
                        &nbsp&nbsp&nbsp • Разделите информацию о транспортных средствах на белые и желтые карты, укажите данные о легковых автомобилях, фургонах и служебных автомобилях.<br><br>
                        Отправьте подготовленное письмо на адрес <a href="mailto:office@t2ic.com">office@t2ic.com</a> и добавьте в поле Cc адреса <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a> и <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a>.<br><br>
                        <b>2. Документы для подачи заявки</b><br>
                        Для подачи заявки необходимо предоставить следующие документы в полном объеме:<br>
                        &nbsp&nbsp&nbsp • <b>Регистрационное удостоверение автомобиля:</b> Копия регистрационного удостоверения каждого транспортного средства<br>
                        &nbsp&nbsp&nbsp • <b>Форма письма для автомобиля:</b> Заполненная в формате Excel форма, заверенная печатью и подписью компании.<br>
                        &nbsp&nbsp&nbsp • <b>Двуязычное письмо-заявка:</b> Письмо на русском и турецком языках в формате PDF<br>
                        &nbsp&nbsp&nbsp • <b>Фотографии автомобилей:</b> Фотографии автомобиля с четырех сторон<br><br>
                        <b>3. Типы пропусков и условия их использования</b><br>
                        На территории Akkuyu NGS используются два типа электронных пропусков для легковых автомобилей:<br>
                        &nbsp&nbsp&nbsp • <b>Белый электронный пропуск:</b> Пропуск, который позволяет осуществлять вход и выход 24/7.<br>
                        &nbsp&nbsp&nbsp • <b>Желтый электронный пропуск:</b> Пропуск с ограниченными часами входа и выхода.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - <b>Часы входа и выхода:</b> Использование разрешено только с 06:00 до 10:00 и с 16:00 до 20:00.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - <b>Для транспортных средств, перевозящих грузы, выдается только желтый пропуск; белый пропуск не выдается.</b><br><br>
                        <b>4. Требования к должности для подачи заявки</b><br>
                        Персонал, подающий заявку, должен занимать должность не ниже руководителя отдела или начальника участка (с указанием названия участка) или более высокую должность. 
                        Заявки сотрудников с более низкими должностями рассматриваться не будут.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Вход и выход транспортных средств с желтым пропуском вне указанных часов строго запрещены.
                    </p>                                            
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Письмо</button>
                    </div>
                    <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p class="ps-4 mt-4">
                                    <img src="./static/img/ornekmektup.png">
                                    <br><br><b>Требования к письму-заявке</b><br>
                                        Для подачи заявки на пропуск в зону Akkuyu NGS подготовленное письмо должно соответствовать следующим требованиям. 
                                        Заявки с неполной или ошибочной информацией не будут рассмотрены и будут возвращены.<br><br>
                                        <b>1. Информация о компании и данные о персонале</b><br>
                                        &nbsp&nbsp&nbsp • Количество сотрудников: следует указать количество белых и синих воротничков отдельно.<br>
                                        &nbsp&nbsp&nbsp • Количество транспортных средств: необходимо указать количество легковых автомобилей, фургонов и служебных автомобилей, разделив их на белые и желтые карты.<br><br>
                                        <b>2. Основания для заявки</b><br>
                                        &nbsp&nbsp&nbsp • Если требуется белый электронный пропуск, необходимо указать причину и обоснование необходимости прохода для транспортных средств с желтым пропуском в запрещенные часы.<br>
                                        &nbsp&nbsp&nbsp • Заявки, не поясняющие необходимость прохождения в часы пик или не обосновывающие причину, рассматриваться не будут.<br><br>
                                        <b>3. Требования к языкам</b><br>
                                        &nbsp&nbsp&nbsp • Письмо должно быть переведено на русский и турецкий языки без ошибок.<br><br>
                                        <b>Процесс обработки</b><br>
                                        Заявки будут рассмотрены в конце месяца.<br>
                                        Процесс утверждения: Утверждение будет осуществляться в первой половине следующего месяца генеральным директором строительства NGS компании Akkuyu Nuclear S. Butskikh.<br><br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                                        
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Форма письма для транспортных средств</button>
                    </div>
                    <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>В форме письма для транспортных средств в колонке "Статус запроса" должен быть выбран один из следующих вариантов:<br>
                                &nbsp&nbsp&nbsp • <b>Новый запрос:</b> Выбирается, если подается первый запрос на пропуск для транспортного средства.<br>
                                &nbsp&nbsp&nbsp • <b>Изменение водителя:</b> Этот вариант используется, если для существующего транспортного средства назначается новый водитель.<br>
                                &nbsp&nbsp&nbsp • <b>Изменение транспортного средства:</b> Выбирается, если требуется заменить зарегистрированное транспортное средство.<br>
                                &nbsp&nbsp&nbsp • <b>Изменение типа карты:</b> Выбирается, если требуется изменить тип карты на белую или желтую.<br>
                                &nbsp&nbsp&nbsp • <b>Неверная заявка:</b> Этот вариант используется для заявок с неполной или неправильной информацией.<br><br>
                                Убедитесь, что вы выбрали правильный вариант, чтобы ваши заявки были обработаны быстро и корректно.<br>
                            </p>
                            <img src="./static/img/17.jpg"><br><br>
                            <p>В колонке "Статус пропуска Akkuyu" должен быть выбран правильный и полный вариант. Это необходимо для правильной оценки заявки. Если выбор не будет сделан, заявка может быть отклонена.</p>
                            <img src="./static/img/18.jpg"><br><br>
                            <p>Выбор типа карты должен быть указан как Электронная Белая или Электронная Желтая. Этот выбор необходим для правильной оценки карты в соответствии с ее назначением и разрешенными часами использования.</p>
                            <img src="./static/img/19.jpg"><br><br>
                            <p>Форма письма для транспортных средств в Excel должна быть заполнена внимательно, как показано в примере, и в соответствии с нижеследующими правилами:<br>
                                <b>1. Должность и ФИО получателя:</b> В поле получателя формы должны быть правильно и полно указаны должность и ФИО соответствующего лица.<br>
                                <b>2. Количество сотрудников:</b> Необходимо указать информацию о персонале на объекте в формате белые воротнички/синие воротнички с точным числом.<br>
                                <b>3. Информация о транспортных средствах:</b> Необходимо правильно и полностью указать марку и номер транспортного средства, для которого запрашивается пропуск.<br>
                            </p>
                            <img src="./static/img/21.jpg"><br><br>
                            <p>В текущей форме письма для транспортных средств <b>необходимо четко указать количество использованных карт</b>. Если имеется несколько белых карт, <b>необходимо указать процентное и числовое увеличение персонала</b> с момента выдачи последней карты. Эта информация обязательна для полного соответствия требованиям заявки.</p>
                            <img src="./static/img/20.jpg"><br><br>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Регистрация транспортного средства</button>
                    </div>
                    <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                                Регистрация транспортного средства должна быть подготовлена в виде читаемого и цветного фото или PDF файла на одной странице. 
                                Документ должен быть четким и понятным, в противном случае процесс подачи заявки может быть затруднен.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Фотография</button>
                    </div>
                    <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p class="ps-4"><img src="./static/img/aracfoto.png"><br><br>
                                 Фото транспортного средства должно быть сделано с четырех сторон с четким и правильным углом. Фотографии должны показывать все детали автомобиля, 
                                    чтобы заявка могла быть обработана без проблем.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                                        
            </div>
    </div>`,
    },
    aracyenibasvuru: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Araç Kart Başvurusu</i>
            <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
                <div class="accordion-item">
                    <p class="ps-3"><br>
                        Araç kart başvurularının işleme alınabilmesi için, belirli koşullara ve evrak düzenlemelerine uymanız gerekmektedir:<br><br>
                        <b>1. Mektup Onayı Gereksinimi:</b><br>
                        &nbsp&nbsp&nbsp •	Hafif araç, çift kabin kamyonet, en fazla 21 koltuklu servis araçları için mektup onayı gereklidir.<br>
                        &nbsp&nbsp&nbsp •	İş makinesi, kamyon, otobüs, en az 22 koltuklu servis araçları için mektup onayı gerekmez.<br><br>
                        <b>2. İlgili Firma ile İrtibat:</b><br>
                        &nbsp&nbsp&nbsp •	Başvuru öncesinde, sözleşmeli olduğunuz firmanın (T2-IC JV, TSM Enerji, İÇTAŞ Nükleer, İÇ Endüstriyel, 
                        Akkuyu TST) mekanik birimiyle iletişime geçerek yeşil onay formu alınmalıdır.<br>
                        &nbsp&nbsp&nbsp •	İrtibat kişileri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	Senol Gungor <a href="">senol.gungor@tsm-enerji.com</a><br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	Ibrahimhan Gunsel <a href="">ibrahimhan.gunsel@tsm-enerji.com</a><br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	Muratcan Golgelioglu <a href="">muratcan.golgelioglu@tsm-enerji.com</a><br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	Melike Demir <a href="">melike.demir@ictasnukleer.com.tr</a><br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	İsmethan Bülbül  <a href="">ismethan.bulbul@ictasendustriyel.com</a><br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	Aigerim Nurgalieva <a href="">a.nurgalieva@akkuyutst.com.tr</a><br><br>
                        <b>3. Başvuru Belgeleri ve Dosya Düzeni:</b><br>
                        &nbsp&nbsp&nbsp •	Belgeleri tek bir Excel dosyası ile birlikte zip dosyasında ve plakaya göre isimlendirerek gönderin. Örnek dosya isimleri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 RUHSAT <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 SÖZLEŞME <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	RİFAT SEFA KÜÇÜK KİMLİK/EHLİYET (ŞOFÖR) <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	AKKUYU PERSONEL KARTI (ŞOFÖR)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	YEŞİL ONAY FORMU<br><br>
                        <b>4. Geçici Araç Girişi (Senelik Kart) Evrakları:</b><br>
                        &nbsp&nbsp&nbsp    •	Ruhsat<br>
                        &nbsp&nbsp&nbsp    •	Şoför Ehliyet, Kimlik, Akkuyu Personel Kartı<br>
                        &nbsp&nbsp&nbsp    •	Araç Kiralama Sözleşmesi<br>
                        &nbsp&nbsp&nbsp    •	Araç Kart Talep Formu Excel dosyası<br>
                        &nbsp&nbsp&nbsp    •	Mail Başvuru<br>
                        &nbsp&nbsp&nbsp    •	Yeşil Onay Formu<br><br>
                        <b>5. E-posta Düzeni:</b><br>
                        &nbsp&nbsp&nbsp • E-posta konusu: "FİRMA İSMİ – ARAÇ KART BAŞVURU – ARAÇ PLAKA" formatında yazılmalıdır. Örnek: NAZIM İNŞAAT – ARAÇ KART BAŞVURU – 33 ABC 333.<br>
                        &nbsp&nbsp&nbsp • Gönderilecek adresler: <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> ve <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a><br><br>
                        <b>6. Ek Belgeler:</b><br>
                        &nbsp&nbsp&nbsp    •	Araç Kart Başvuru Excel dosyası<br>
                        &nbsp&nbsp&nbsp    •	Ruhsat, ehliyet, kimlik belgeleri tek sayfada PDF olarak plakaya göre isimlendirilmiş (örn. 33 ABC 333 RUHSAT)<br>
                        &nbsp&nbsp&nbsp    •	Araç kiralama sözleşmesinin ilk ve son sayfası PDF formatında, sözleşme taraflarının isimleriyle isimlendirilmiş (örn. 33 ABC 333 SÖZLEŞME)<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Belgelerin okunaklı, tam ve renkli olması gerekmektedir.
                    </p>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Araç Ruhsatı</button>
                    </div>
                    <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                                Araç ruhsatı, tek sayfada olacak şekilde okunaklı ve renkli olarak fotoğraf ya da PDF dosyası formatında hazırlanmalıdır. 
                                    Dosyanın net ve anlaşılır olması gerekmekte olup, aksi durumda başvuru süreci olumsuz etkilenebilir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Şoför Ehliyet ve Kimliği</button>
                    </div>
                    <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>
                                Başvuru işlemlerinin sorunsuz ilerleyebilmesi için şoförün ehliyet ve kimlik fotokopisinin arkalı önlü, tek sayfada, okunaklı ve 
                                renkli olarak hazırlanması gerekmektedir. Bu belgeyi diğer başvuru dosyalarıyla birlikte eklemeyi unutmayınız.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Araç Kiralama Sözleşmesi</button>
                    </div>
                    <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                    Başka bir firmadan kiralanan araçlar için başvuru işlemlerinde, kiralama sözleşmesinin birinci ve son sayfasının tek bir PDF 
                                    dosyasında iletilmesi gerekmektedir. Bu belgede her iki tarafın imza ve kaşesi bulunmalı ve sözleşmenin başlangıç ve bitiş 
                                    tarihleri açıkça belirtilmiş olmalıdır. Bu detaylar eksiksiz sağlanmadığı takdirde başvurular işleme alınmayacaktır.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Araç Kart Talep Formu Exceli</button>
                    </div>
                    <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>Geçici araç başvuruları için hazırlanan Excel dosyasında aşağıdaki bilgilerin eksiksiz doldurulması zorunludur:<br><br>
                                <b>1. Talep Durumu:</b> Yeni Talep, Şoför Değişikliği, Araç Değişikliği, Kart Tipi Değişimi, Hatalı Başvuru gibi önceden belirlenmiş seçeneklerden birini kullanın.<br>
                                <b>2. Talep Edilen Kart Türü:</b> Elektronik Beyaz veya Elektronik Sarı gibi geçerli kart türlerinden biri seçilmelidir.<br>
                                <b>3. Halen Kullanılan Kart Çeşidi:</b> Halihazırda kullanılan kart çeşidi belirtilmelidir.<br>
                                <b>4. Araç Marka-Model:</b> Araç markası ve modeli eksiksiz ve doğru bir şekilde yazılmalıdır.<br>
                                <b>5. Araç Tipi:</b> Belirlenen seçenekler doğrultusunda yalnızca geçerli araç tipini giriniz.<br>
                                Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br></p>
                            <img src="./static/img/22.jpg"><br><br>
                            <img src="./static/img/23.jpg">
                        </div>
                    </div>
                </div>
            </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">ЗАЯВЛЕНИЕ НА ПОЛУЧЕНИЕ КАРТЫ ТРАНСПОРТНОГО СРЕДСТВА</i>
            <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
                <div class="accordion-item">
                    <p class="ps-3"><br>
                        Для того чтобы заявка на получение карты автомобиля была обработана, необходимо соблюдать определенные условия и требования к документам:<br><br>
                        <b>1. Требования к письму-согласованию:</b><br>
                        &nbsp&nbsp&nbsp • Для легковых автомобилей, пикапов с двойной кабиной, а также для служебных автомобилей с максимальной вместимостью 21 пассажира требуется письмо-согласование.<br>
                        &nbsp&nbsp&nbsp • Для строительной техники, грузовиков, автобусов и служебных автомобилей с количеством мест не менее 22, письмо-согласование не требуется.<br><br>
                        <b>2. Связь с соответствующей компанией:</b><br>
                        &nbsp&nbsp&nbsp • До подачи заявки необходимо связаться с механическим отделом вашей контрактной компании (T2-IC JV, TSM Enerji, İÇTAŞ Nükleer, İÇ Endüstriyel, Akkuyu TST) для получения зеленой формы согласования.<br>
                        &nbsp&nbsp&nbsp • Контактные лица:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	Шенол Гюнёр <a href="">senol.gungor@tsm-enerji.com</a><br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	Ибрахимхан Гюнсель <a href="">ibrahimhan.gunsel@tsm-enerji.com</a><br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	Мураджан Голгелийоглу <a href="">muratcan.golgelioglu@tsm-enerji.com</a><br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	Мелике Демир <a href="">melike.demir@ictasnukleer.com.tr</a><br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	Исметхан Бюлбюль <a href="">ismethan.bulbul@ictasendustriyel.com</a><br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	Айгерим Нургалиева <a href="">a.nurgalieva@akkuyutst.com.tr</a><br><br>
                        <b>3. Документы для подачи заявки и структура файлов:</b><br>
                        &nbsp&nbsp&nbsp • Отправьте документы в одном Excel файле, упакованном в архив, с именованием по номеру автомобиля. Примеры имен файлов:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 RUHSAT<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 SÖZLEŞME<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	РИФАТ СЕФА КЮЧЮК КИМЛИК/ПРАВА (ВОДИТЕЛЬ)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	АККУЮ ТРУДОВАЯ КАРТА (ВОДИТЕЛЬ)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	ЗЕЛЕНАЯ ФОРМА СОГЛАСОВАНИЯ<br><br>
                        <b>4. Документы для временного въезда автомобиля (ежегодная карта):</b><br>
                        &nbsp&nbsp&nbsp    •	Руководство автомобиля<br>
                        &nbsp&nbsp&nbsp    •	Водительские права, удостоверение личности, трудовая карта Akkuyu<br>
                        &nbsp&nbsp&nbsp    •	Договор аренды автомобиля<br>
                        &nbsp&nbsp&nbsp    •	Excel файл с заявкой на карту автомобиля<br>
                        &nbsp&nbsp&nbsp    •	Электронная заявка по почте<br>
                        &nbsp&nbsp&nbsp    •	Зеленая форма согласования<br><br>
                        <b>5. Структура электронной почты:</b><br>
                        &nbsp&nbsp&nbsp • Тема письма должна быть оформлена в формате "НАЗВАНИЕ КОМПАНИИ – ЗАЯВКА НА КАРТУ АВТОМОБИЛЯ – НОМЕР АВТОМОБИЛЯ". Пример: NAZIM İNŞAAT – ЗАЯВКА НА КАРТУ АВТОМОБИЛЯ – 33 ABC 333.<br>
                        &nbsp&nbsp&nbsp • Отправьте письма на адреса: <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> и <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a><br><br>
                        <b>6. Дополнительные документы:</b><br>
                        &nbsp&nbsp&nbsp    •	Excel файл с заявкой на карту автомобиля<br>
                        &nbsp&nbsp&nbsp    •	Руководство, водительские права, удостоверение личности в формате PDF с именованием по номеру автомобиля (например, 33 ABC 333 RUHSAT)<br>
                        &nbsp&nbsp&nbsp    •	Первая и последняя страницы договора аренды автомобиля в формате PDF, именованные по сторонам договора (например, 33 ABC 333 SÖZLEŞME)<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Документы должны быть четкими, полными и цветными.
                    </p>                                            
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Свидетельство о регистрации автомобиля</button>
                    </div>
                    <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                                Свидетельство о регистрации автомобиля должно быть подготовлено в виде фотографии или PDF-файла в одном экземпляре, четко читаемым и цветным. 
                                Файл должен быть четким и понятным, в противном случае процесс подачи заявки может быть затруднен.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                                        
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Водительские права и удостоверение личности водителя</button>
                    </div>
                    <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>
                                Для успешной обработки заявки необходимо подготовить копии водительских прав и удостоверения личности водителя, 
                                оформленные с обеих сторон на одном листе, четко читаемые и цветные. Не забудьте приложить этот документ вместе с 
                                другими файлами заявки.
                            </p>
                        </div>
                    </div>
                </div>                                        
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Договор аренды автомобиля</button>
                    </div>
                    <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <div style="display: flex;">
                                <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                    Для автомобилей, арендованных у другой компании, при подаче заявки необходимо предоставить первую и последнюю страницы договора аренды в одном PDF файле. 
                                    Этот документ должен содержать подписи и печати обеих сторон, а также должны быть четко указаны даты начала и окончания договора. 
                                    Если эти детали не будут предоставлены, заявка не будет обработана.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                                        
                <div class="accordion-item">
                    <div class="accordion-header" role="tab">
                        <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Форма запроса на карту автомобиля Excel</button>
                    </div>
                    <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div class="accordion-body pt-0">
                            <p>Для подачи заявки на временные автомобили необходимо заполнить следующие данные в Excel-файле:<br><br>
                                <b>1. Статус запроса:</b> Выберите один из заранее определенных вариантов: Новый запрос, Изменение водителя, Изменение автомобиля, Изменение типа карты, Неправильная заявка.<br>
                                <b>2. Запрашиваемый тип карты:</b> Должна быть выбрана одна из действительных карт, например, Электронная Белая или Электронная Желтая.<br>
                                <b>3. Текущий тип карты:</b> Укажите используемый тип карты.<br>
                                <b>4. Марка и модель автомобиля:</b> Марка и модель автомобиля должны быть написаны полностью и правильно.<br>
                                <b>5. Тип автомобиля:</b> Введите только действительный тип автомобиля в соответствии с предложенными вариантами.<br>
                                Пожалуйста, не добавляйте или не пишите текст, не входящий в указанные варианты, иначе это может отрицательно повлиять на процесс подачи заявки.<br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> Пожалуйста, не добавляйте или не пишите текст, не входящий в указанные варианты, иначе это может отрицательно повлиять на процесс подачи заявки.<br><br></p>
                            <img src="./static/img/22.jpg"><br><br>
                            <img src="./static/img/23.jpg">
                        </div>
                    </div>
                </div>                                        
            </div>
    </div>`,
    },
    sofordegisikligi: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Şoför Değişikliği</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><br>Araç geçiş kartı başvurularında, sorumlu şoförün işten ayrılması veya benzeri durumlar nedeniyle mevcut kartların kapıdan imza 
                    karşılığında teslim alınamaması durumunda, şoför değişikliği başvurusu yapılması gerekmektedir. Başvurunun tamamlanabilmesi için güncel şoför 
                    bilgileriyle birlikte gerekli evrakların hazırlanıp tarafınıza sunulması zorunludur.<br><br>
                    Başvurularınızı aşağıdaki kurallara göre hazırlayarak göndermeniz beklenmektedir:<br>
                    <b>1. Belgelerin Ziplenmesi ve Dosya İsimlendirme:</b><br>
                        &nbsp&nbsp&nbsp •	Belgeleri tek bir Excel dosyası ile birlikte zip dosyasında ve plakaya göre isimlendirerek gönderin. Örnek dosya isimleri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 RUHSAT <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 SÖZLEŞME <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	RİFAT SEFA KÜÇÜK KİMLİK/EHLİYET (ŞOFÖR) <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	AKKUYU PERSONEL KARTI (ŞOFÖR)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	YEŞİL ONAY FORMU<br><br>
                    <b>2. Geçici Araç Girişi (Senelik Kart) Evrakları:</b><br>
                        &nbsp&nbsp&nbsp    •	Ruhsat<br>
                        &nbsp&nbsp&nbsp    •	Şoför Ehliyet, Kimlik, Akkuyu Personel Kartı<br>
                        &nbsp&nbsp&nbsp    •	Araç Kiralama Sözleşmesi<br>
                        &nbsp&nbsp&nbsp    •	Araç Kart Talep Formu Excel dosyası<br>
                        &nbsp&nbsp&nbsp    •	Mail Başvuru<br>
                        &nbsp&nbsp&nbsp    •	Yeşil Onay Formu<br><br>
                    <b>3. E-posta Düzeni:</b><br>
                        &nbsp&nbsp&nbsp • E-posta konusu: "FİRMA İSMİ – ARAÇ KART BAŞVURU – ARAÇ PLAKA" formatında yazılmalıdır (Örnek: "NAZIM INSAAT – ARAÇ KART BAŞVURU – 33 ABC 333").<br>
                        &nbsp&nbsp&nbsp • E-posta ekleri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Araç Kart Başvuru Excel dosyası<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Ruhsat, ehliyet ve kimlik belgeleri (örneğin: "33 ABC 333 RUHSAT") tek sayfada PDF olarak.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Ruhsat sahibi firma ile araç kiralama sözleşmesinin birinci ve sonuncu sayfası tek PDF dosyasında, örneğin "33 ABC 333 SÖZLEŞME".<br>
                    Evrakları <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> ve <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a> -posta adreslerine göndererek başvuru sürecini başlatabilirsiniz.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Gönderilen belgelerin okunaklı, tam ve renkli fotokopileri olması gereklidir. 
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Araç Ruhsatı</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                            Araç ruhsatı, tek sayfada olacak şekilde okunaklı ve renkli olarak fotoğraf ya da PDF dosyası formatında hazırlanmalıdır. 
                                Dosyanın net ve anlaşılır olması gerekmekte olup, aksi durumda başvuru süreci olumsuz etkilenebilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Şoför Ehliyet ve Kimliği</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Başvuru işlemlerinin sorunsuz ilerleyebilmesi için şoförün ehliyet ve kimlik fotokopisinin arkalı önlü, tek sayfada, okunaklı ve 
                            renkli olarak hazırlanması gerekmektedir. Bu belgeyi diğer başvuru dosyalarıyla birlikte eklemeyi unutmayınız.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Araç Kiralama Sözleşmesi</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                Başka bir firmadan kiralanan araçlar için başvuru işlemlerinde, kiralama sözleşmesinin birinci ve son sayfasının tek bir PDF 
                                dosyasında iletilmesi gerekmektedir. Bu belgede her iki tarafın imza ve kaşesi bulunmalı ve sözleşmenin başlangıç ve bitiş 
                                tarihleri açıkça belirtilmiş olmalıdır. Bu detaylar eksiksiz sağlanmadığı takdirde başvurular işleme alınmayacaktır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Araç Kart Talep Formu Exceli</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Geçici araç başvuruları için hazırlanan Excel dosyasında aşağıdaki bilgilerin eksiksiz doldurulması zorunludur:<br><br>
                            <b>1. Talep Durumu:</b> Yeni Talep, Şoför Değişikliği, Araç Değişikliği, Kart Tipi Değişimi, Hatalı Başvuru gibi önceden belirlenmiş seçeneklerden birini kullanın.<br>
                            <b>2. Talep Edilen Kart Türü:</b> Elektronik Beyaz veya Elektronik Sarı gibi geçerli kart türlerinden biri seçilmelidir.<br>
                            <b>3. Halen Kullanılan Kart Çeşidi:</b> Halihazırda kullanılan kart çeşidi belirtilmelidir.<br>
                            <b>4. Araç Marka-Model:</b> Araç markası ve modeli eksiksiz ve doğru bir şekilde yazılmalıdır.<br>
                            <b>5. Araç Tipi:</b> Belirlenen seçenekler doğrultusunda yalnızca geçerli araç tipini giriniz.<br>
                            Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br></p>
                        <img src="./static/img/22.jpg"><br><br>
                        <img src="./static/img/23.jpg">
                    </div>
                </div>
            </div>                                                               
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Смена водителя транспортного средства</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><br>В случае, если карта для проезда не может быть получена с подписью у двери из-за увольнения водителя или других подобных ситуаций, необходимо подать заявку на замену водителя. Для завершения заявки необходимо подготовить все необходимые документы с актуальной информацией о водителе и предоставить их вам.<br><br>
                    Ожидается, что вы подготовите и отправите свои заявки в соответствии с следующими правилами:<br>
                    <b>1. Архивация документов и наименование файлов:</b><br>
                        &nbsp&nbsp&nbsp • Отправляйте документы в одном Excel файле, заархивированные и с именованием по номеру машины. Примеры имен файлов:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 РУХСАТ <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 СОГЛАШЕНИЕ <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	РИФАТ СЕФА КЮЧЮК УДОСТОВЕРЕНИЕ ЛИЧНОСТИ/ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ (ВОДИТЕЛЬ) <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	АККУЮЮ ПЕРСОНАЛЬНАЯ КАРТА (ВОДИТЕЛЬ)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	ЗЕЛЕНАЯ ФОРМА ПОДТВЕРЖДЕНИЯ<br><br>
                    <b>2. Документы для временного въезда на транспортное средство (годовая карта):</b><br>
                        &nbsp&nbsp&nbsp    •	Рухсат<br>
                        &nbsp&nbsp&nbsp    •	Водительское удостоверение, удостоверение личности, персональная карта Akkuyu<br>
                        &nbsp&nbsp&nbsp    •	Договор аренды автомобиля<br>
                        &nbsp&nbsp&nbsp    •	Форма заявки на автомобильный пропуск в Excel<br>
                        &nbsp&nbsp&nbsp    •	Заявка по электронной почте<br>
                        &nbsp&nbsp&nbsp    •	Зеленая форма подтверждения<br><br>
                    <b>3. Правила оформления электронной почты:</b><br>
                        &nbsp&nbsp&nbsp • Тема электронной почты должна быть в формате: "НАЗВАНИЕ КОМПАНИИ – ЗАЯВКА НА АВТОМОБИЛЬНУЮ КАРТУ – НОМЕР АВТОМОБИЛЯ" (Пример: "NAZIM INSAAT – ЗАЯВКА НА АВТОМОБИЛЬНУЮ КАРТУ – 33 ABC 333").<br>
                        &nbsp&nbsp&nbsp • Вложения к электронной почте:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Excel файл заявки на автомобильный пропуск<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Рухсат, водительское удостоверение и удостоверение личности (например: "33 ABC 333 РУХСАТ") в формате PDF на одном листе.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Договор аренды автомобиля с владельцем автомобиля и первая и последняя страницы в одном PDF файле, например "33 ABC 333 СОГЛАШЕНИЕ".<br>
                    Документы можно отправить по электронным адресам <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> и <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a> для начала процесса подачи заявки.<br><br>
                    <u style="color: red;"><b>ВАЖНО:</b></u> Отправленные документы должны быть читаемыми, полными и цветными копиями.
                </p>                                        
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Транспортное средство (Регистрация)</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                            Регистрация транспортного средства должна быть подготовлена в виде фото или PDF-документа на одной странице, читаемым и цветным. 
                            Документ должен быть четким и понятным, в противном случае процесс подачи заявки может быть затруднен.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Водительское удостоверение и удостоверение личности водителя</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Для успешного продолжения процесса подачи заявки необходимо предоставить читаемую и цветную копию водительского удостоверения и удостоверения личности водителя, на одной странице, с обеих сторон. 
                            Не забудьте прикрепить этот документ вместе с другими заявочными файлами.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Договор аренды автомобиля</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                Для автомобилей, арендованных у другой компании, необходимо предоставить первую и последнюю страницы договора аренды в одном PDF-файле. 
                                Этот документ должен содержать подписи и печати обеих сторон, а также должны быть четко указаны даты начала и окончания договора. 
                                В случае отсутствия этих данных, заявка не будет обработана.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Форма заявки на автомобильный пропуск (Excel)</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Для подачи заявки на временный автомобиль необходимо заполнить Excel-файл, указав следующие данные:<br><br>
                            <b>1. Статус заявки:</b> Выберите один из предустановленных вариантов: Новый запрос, Изменение водителя, Замена автомобиля, Изменение типа карты, Ошибка заявки.<br>
                            <b>2. Тип требуемой карты:</b> Выберите один из действующих типов карт, таких как Электронная Белая или Электронная Желтая.<br>
                            <b>3. Используемая в настоящее время карта:</b> Укажите тип карты, которая используется в данный момент.<br>
                            <b>4. Марка и модель автомобиля:</b> Укажите марку и модель автомобиля точно и правильно.<br>
                            <b>5. Тип автомобиля:</b> Введите только действительный тип автомобиля согласно предоставленным вариантам.<br>
                            Пожалуйста, не добавляйте или не пишите текст вне предложенных вариантов, так как это может повлиять на процесс подачи заявки.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Пожалуйста, не добавляйте или не пишите текст вне предложенных вариантов, так как это может повлиять на процесс подачи заявки.<br><br></p>
                        <img src="./static/img/22.jpg"><br><br>
                        <img src="./static/img/23.jpg">
                    </div>
                </div>
            </div>                                                                                                   
        </div>
    </div>`,
    },
    arackirikkart: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Kırık Yıpranmış Arızalı Kart Başvurusu</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><br>Araç geçiş kartları zamanla kullanım nedeniyle kırılma, yıpranma veya arızalanma gibi durumlarla karşılaşabilir. Bu tür durumlarda, 
                    ilgili kartın tarafımıza iadesi zorunludur. İade edilen kartın iptali gerçekleştirildikten sonra yenileme süreci başlatılacaktır.<br><br>
                    Yeniden kart başvurusunda bulunurken lütfen güncel yeşil onay formu ile birlikte başvurunuzu yapmayı unutmayınız.<br><br>
                    Başvurularınızı aşağıdaki kurallara göre hazırlayarak göndermeniz beklenmektedir:<br>
                    <b>1. Belgelerin Ziplenmesi ve Dosya İsimlendirme:</b><br>
                        &nbsp&nbsp&nbsp •	Belgeleri tek bir Excel dosyası ile birlikte zip dosyasında ve plakaya göre isimlendirerek gönderin. Örnek dosya isimleri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 RUHSAT <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 SÖZLEŞME <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	RİFAT SEFA KÜÇÜK KİMLİK/EHLİYET (ŞOFÖR) <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	AKKUYU PERSONEL KARTI (ŞOFÖR)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	YEŞİL ONAY FORMU<br><br>
                    <b>2. Geçici Araç Girişi (Senelik Kart) Evrakları:</b><br>
                        &nbsp&nbsp&nbsp    •	Ruhsat<br>
                        &nbsp&nbsp&nbsp    •	Şoför Ehliyet, Kimlik, Akkuyu Personel Kartı<br>
                        &nbsp&nbsp&nbsp    •	Araç Kiralama Sözleşmesi<br>
                        &nbsp&nbsp&nbsp    •	Araç Kart Talep Formu Excel dosyası<br>
                        &nbsp&nbsp&nbsp    •	Mail Başvuru<br>
                        &nbsp&nbsp&nbsp    •	Yeşil Onay Formu<br><br>
                    <b>3. E-posta Düzeni:</b><br>
                        &nbsp&nbsp&nbsp • E-posta konusu: "FİRMA İSMİ – ARAÇ KART BAŞVURU – ARAÇ PLAKA" formatında yazılmalıdır (Örnek: "NAZIM INSAAT – ARAÇ KART BAŞVURU – 33 ABC 333").<br>
                        &nbsp&nbsp&nbsp • E-posta ekleri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Araç Kart Başvuru Excel dosyası<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Ruhsat, ehliyet ve kimlik belgeleri (örneğin: "33 ABC 333 RUHSAT") tek sayfada PDF olarak.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Ruhsat sahibi firma ile araç kiralama sözleşmesinin birinci ve sonuncu sayfası tek PDF dosyasında, örneğin "33 ABC 333 SÖZLEŞME".<br>
                    Evrakları <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> ve <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a> -posta adreslerine göndererek başvuru sürecini başlatabilirsiniz.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Gönderilen belgelerin okunaklı, tam ve renkli fotokopileri olması gereklidir. 
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Araç Ruhsatı</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                                Araç ruhsatı, tek sayfada olacak şekilde okunaklı ve renkli olarak fotoğraf ya da PDF dosyası formatında hazırlanmalıdır. 
                                Dosyanın net ve anlaşılır olması gerekmekte olup, aksi durumda başvuru süreci olumsuz etkilenebilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Şoför Ehliyet ve Kimliği</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Başvuru işlemlerinin sorunsuz ilerleyebilmesi için şoförün ehliyet ve kimlik fotokopisinin arkalı önlü, tek sayfada, okunaklı ve 
                            renkli olarak hazırlanması gerekmektedir. Bu belgeyi diğer başvuru dosyalarıyla birlikte eklemeyi unutmayınız.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Araç Kiralama Sözleşmesi</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                Başka bir firmadan kiralanan araçlar için başvuru işlemlerinde, kiralama sözleşmesinin birinci ve son sayfasının tek bir PDF 
                                dosyasında iletilmesi gerekmektedir. Bu belgede her iki tarafın imza ve kaşesi bulunmalı ve sözleşmenin başlangıç ve bitiş 
                                tarihleri açıkça belirtilmiş olmalıdır. Bu detaylar eksiksiz sağlanmadığı takdirde başvurular işleme alınmayacaktır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Araç Kart Talep Formu Exceli</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Geçici araç başvuruları için hazırlanan Excel dosyasında aşağıdaki bilgilerin eksiksiz doldurulması zorunludur:<br><br>
                            <b>1. Talep Durumu:</b> Yeni Talep, Şoför Değişikliği, Araç Değişikliği, Kart Tipi Değişimi, Hatalı Başvuru gibi önceden belirlenmiş seçeneklerden birini kullanın.<br>
                            <b>2. Talep Edilen Kart Türü:</b> Elektronik Beyaz veya Elektronik Sarı gibi geçerli kart türlerinden biri seçilmelidir.<br>
                            <b>3. Halen Kullanılan Kart Çeşidi:</b> Halihazırda kullanılan kart çeşidi belirtilmelidir.<br>
                            <b>4. Araç Marka-Model:</b> Araç markası ve modeli eksiksiz ve doğru bir şekilde yazılmalıdır.<br>
                            <b>5. Araç Tipi:</b> Belirlenen seçenekler doğrultusunda yalnızca geçerli araç tipini giriniz.<br>
                            Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br></p>
                        <img src="./static/img/22.jpg"><br><br>
                        <img src="./static/img/23.jpg">
                    </div>
                </div>
            </div>                                                                     
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Заявка на неисправные поврежденные изношенные пропуска</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><br>Со временем карты доступа для транспортных средств могут сломаться, износиться или выйти из строя. 
                    В таких случаях обязательна сдача соответствующей карты обратно нам. После отмены возвращенной карты процесс обновления будет начат.<br><br>
                    Пожалуйста, не забудьте подать заявку на новую карту вместе с актуальной зеленой формой согласования.<br><br>
                    Подавая заявку, убедитесь, что она подготовлена в соответствии с нижеприведенными правилами:<br>
                    <b>1. Сжатие файлов и их именование:</b><br>
                        &nbsp&nbsp&nbsp •	Отправляйте документы в одном zip-архиве вместе с Excel-файлом, присваивая файлам имена в соответствии с номером автомобиля. Примеры имен файлов:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 RUHSAT <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 SÖZLEŞME <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	RİFAT SEFA KÜÇÜK КИМИК / ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ (ŞOFÖR) <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	АККУЮ ПЕРСОНАЛЬНАЯ КАРТА (ŞOFÖR)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	ЗЕЛЕНАЯ ФОРМА СОГЛАСОВАНИЯ<br><br>
                    <b>2. Документы для временного въезда автомобиля (годовая карта):</b><br>
                        &nbsp&nbsp&nbsp    •	Техпаспорт<br>
                        &nbsp&nbsp&nbsp    •	Водительское удостоверение, удостоверение личности, персональная карта Аккую<br>
                        &nbsp&nbsp&nbsp    •	Договор аренды автомобиля<br>
                        &nbsp&nbsp&nbsp    •	Excel-файл заявки на карту автомобиля<br>
                        &nbsp&nbsp&nbsp    •	Электронное письмо с заявкой<br>
                        &nbsp&nbsp&nbsp    •	Зеленая форма согласования<br><br>
                    <b>3. Формат электронной почты:</b><br>
                        &nbsp&nbsp&nbsp • Тема письма должна быть в формате: "НАЗВАНИЕ КОМПАНИИ – ЗАЯВКА НА КАРТУ АВТОМОБИЛЯ – НОМЕР АВТОМОБИЛЯ" (Пример: "NAZIM INSAAT – ЗАЯВКА НА КАРТУ АВТОМОБИЛЯ – 33 ABC 333").<br>
                        &nbsp&nbsp&nbsp • Вложения в письме:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Excel-файл заявки на карту автомобиля<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Техпаспорт, водительское удостоверение и удостоверение личности (например: "33 ABC 333 RUHSAT") в одном PDF файле.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Первые и последние страницы договора аренды автомобиля в одном PDF файле, например: "33 ABC 333 SÖZLEŞME".<br>
                    Для подачи заявки отправьте документы на адреса <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> и <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a>.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Представленные документы должны быть четкими, полными и цветными копиями.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Техпаспорт автомобиля</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                                Техпаспорт автомобиля должен быть подготовлен в виде четкой и цветной фотографии или PDF-файла на одной странице. 
                                Документ должен быть четким и разборчивым, иначе процесс подачи заявки может быть затруднен.
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Водительские права и удостоверение личности</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Чтобы процесс подачи заявки проходил без проблем, копия водительских прав и удостоверения личности водителя должна быть 
                            подготовлена в цвете, на одной странице и включать обе стороны документа. Пожалуйста, не забудьте приложить этот документ к другим файлам заявки.
                        </p>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Договор аренды автомобиля</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                Для автомобилей, арендованных у другой компании, необходимо предоставить первую и последнюю страницы договора аренды в одном PDF 
                                файле. На этом документе должны быть подписи и печати обеих сторон, а также четко указаны даты начала и окончания аренды. Если эти детали не будут 
                                предоставлены полностью, заявка не будет обработана.
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Форма заявки на карту автомобиля Excel</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Для временных заявок на автомобили необходимо полностью заполнить следующие данные в подготовленном Excel файле:<br><br>
                            <b>1. Статус заявки:</b> Выберите один из заранее определенных вариантов, таких как Новая заявка, Замена водителя, Замена автомобиля, Изменение типа карты, Ошибочная заявка.<br>
                            <b>2. Тип запрашиваемой карты:</b> Необходимо выбрать один из действующих типов карт, таких как Электронная Белая или Электронная Желтая.<br>
                            <b>3. Используемый тип карты:</b> Укажите текущий используемый тип карты.<br>
                            <b>4. Марка и модель автомобиля:</b> Марка и модель автомобиля должны быть указаны полностью и правильно.<br>
                            <b>5. Тип автомобиля:</b> Введите только допустимый тип автомобиля в соответствии с указанными вариантами.<br>
                            Пожалуйста, не добавляйте или не пишите текст, не указанный в списке, так как это может негативно повлиять на процесс подачи заявки.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Пожалуйста, не добавляйте или не пишите текст, не указанный в списке, так как это может негативно повлиять на процесс подачи заявки.<br><br></p>
                        <img src="./static/img/22.jpg"><br><br>
                        <img src="./static/img/23.jpg">
                    </div>
                </div>
            </div>                                                                                                       
        </div>
    </div>`,
    },
    arackayipkart: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Kayıp Kart Başvuru</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><br>Araç geçiş kartlarının kaybolması durumunda, Kayıp Kart Tutanağı ile birlikte tarafımıza başvuru yapılabileceğini bildirmek isteriz. 
                    Kayıp Kart Tutanağı'nın geçerli kabul edilebilmesi için, tutanak üzerinde Şoför Adı Soyadı, İmza, Yetkili Personel İmzası ve Firma Kaşesi bulunması 
                    zorunludur. <br><br>
                    Başvurularınızı aşağıdaki kurallara göre hazırlayarak göndermeniz beklenmektedir:<br>
                    <b>1. Belgelerin Ziplenmesi ve Dosya İsimlendirme:</b><br>
                        &nbsp&nbsp&nbsp •	Belgeleri tek bir Excel dosyası ile birlikte zip dosyasında ve plakaya göre isimlendirerek gönderin. Örnek dosya isimleri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 RUHSAT <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 SÖZLEŞME <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	RİFAT SEFA KÜÇÜK KİMLİK/EHLİYET (ŞOFÖR) <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	AKKUYU PERSONEL KARTI (ŞOFÖR)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	YEŞİL ONAY FORMU<br><br>
                    <b>2. Geçici Araç Girişi (Senelik Kart) Evrakları:</b><br>
                        &nbsp&nbsp&nbsp    •	Ruhsat<br>
                        &nbsp&nbsp&nbsp    •	Şoför Ehliyet, Kimlik, Akkuyu Personel Kartı<br>
                        &nbsp&nbsp&nbsp    •	Araç Kiralama Sözleşmesi<br>
                        &nbsp&nbsp&nbsp    •	Araç Kart Talep Formu Excel dosyası<br>
                        &nbsp&nbsp&nbsp    •	Mail Başvuru<br>
                        &nbsp&nbsp&nbsp    •	Kayıp Kart Tutanak<br>
                        &nbsp&nbsp&nbsp    •	Yeşil Onay Formu<br><br>
                    <b>3. E-posta Düzeni:</b><br>
                        &nbsp&nbsp&nbsp • E-posta konusu: "FİRMA İSMİ – ARAÇ KART BAŞVURU – ARAÇ PLAKA" formatında yazılmalıdır (Örnek: "NAZIM INSAAT – ARAÇ KART BAŞVURU – 33 ABC 333").<br>
                        &nbsp&nbsp&nbsp • E-posta ekleri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Araç Kart Başvuru Excel dosyası<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Ruhsat, ehliyet ve kimlik belgeleri (örneğin: "33 ABC 333 RUHSAT") tek sayfada PDF olarak.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Ruhsat sahibi firma ile araç kiralama sözleşmesinin birinci ve sonuncu sayfası tek PDF dosyasında, örneğin "33 ABC 333 SÖZLEŞME".<br>
                    Evrakları <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> ve <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a> -posta adreslerine göndererek başvuru sürecini başlatabilirsiniz.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Gönderilen belgelerin okunaklı, tam ve renkli fotokopileri olması gereklidir.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Araç Ruhsatı</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                                Araç ruhsatı, tek sayfada olacak şekilde okunaklı ve renkli olarak fotoğraf ya da PDF dosyası formatında hazırlanmalıdır. 
                                Dosyanın net ve anlaşılır olması gerekmekte olup, aksi durumda başvuru süreci olumsuz etkilenebilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Şoför Ehliyet ve Kimliği</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Başvuru işlemlerinin sorunsuz ilerleyebilmesi için şoförün ehliyet ve kimlik fotokopisinin arkalı önlü, tek sayfada, okunaklı ve 
                            renkli olarak hazırlanması gerekmektedir. Bu belgeyi diğer başvuru dosyalarıyla birlikte eklemeyi unutmayınız.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Araç Kiralama Sözleşmesi</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                Başka bir firmadan kiralanan araçlar için başvuru işlemlerinde, kiralama sözleşmesinin birinci ve son sayfasının tek bir PDF 
                                dosyasında iletilmesi gerekmektedir. Bu belgede her iki tarafın imza ve kaşesi bulunmalı ve sözleşmenin başlangıç ve bitiş 
                                tarihleri açıkça belirtilmiş olmalıdır. Bu detaylar eksiksiz sağlanmadığı takdirde başvurular işleme alınmayacaktır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Araç Kart Talep Formu Exceli</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Geçici araç başvuruları için hazırlanan Excel dosyasında aşağıdaki bilgilerin eksiksiz doldurulması zorunludur:<br><br>
                            <b>1. Talep Durumu:</b> Yeni Talep, Şoför Değişikliği, Araç Değişikliği, Kart Tipi Değişimi, Hatalı Başvuru gibi önceden belirlenmiş seçeneklerden birini kullanın.<br>
                            <b>2. Talep Edilen Kart Türü:</b> Elektronik Beyaz veya Elektronik Sarı gibi geçerli kart türlerinden biri seçilmelidir.<br>
                            <b>3. Halen Kullanılan Kart Çeşidi:</b> Halihazırda kullanılan kart çeşidi belirtilmelidir.<br>
                            <b>4. Araç Marka-Model:</b> Araç markası ve modeli eksiksiz ve doğru bir şekilde yazılmalıdır.<br>
                            <b>5. Araç Tipi:</b> Belirlenen seçenekler doğrultusunda yalnızca geçerli araç tipini giriniz.<br>
                            Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br></p>
                        <img src="./static/img/22.jpg"><br><br>
                        <img src="./static/img/23.jpg">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Kayıp Kart Tutanağı</button>
                </div>
                <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <img src="./static/img/24.jpg"><br><br>
                            <p class="ps-3">Müracaat Tutanağı<br><br>
                                1. Tutanağın Hazırlandığı Tarih: [Güncel Tarih Giriniz]<br>
                                2. Aracın Kayıtlı Olduğu Firma Bilgisi: [Firma Adı Giriniz]<br>
                                3. Aracın Plaka Bilgisi: [Araç Plaka Numarasını Giriniz]<br>
                                4. Araç Kart Numarası: [Kart Numarasını Giriniz]<br>
                                5. Araç Marka-Model: [Araç Marka ve Model Bilgilerini Giriniz]<br>
                                6. Araç Kartının Kayıp Tarihi: [Kayıp Tarihini Giriniz]<br>
                                7. Araç Kartının Kayıp Saati: [Kayıp Saatini Giriniz]<br>
                                8. Saat Bilgisi: [Kayıp Saati Giriniz]<br>
                                9. Müracaat Sahibi Ad Soyad ve İmza: [Başvuru Sahibinin Adı, Soyadı ve İmzası]<br>
                                10. Onay ve Kaşe: Tarafımızdan kaşe ve imza atılacaktır.<br><br>
                                <u style="color: red;"><b>ÖNEMLİ:</b></u> Bu bilgilerin eksiksiz ve doğru bir şekilde doldurulması, başvuru sürecinizin hızlı bir şekilde değerlendirilmesi için önemlidir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                                                  
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Заявка на утерянный пропуск</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><br>В случае утери карты доступа к автомобилю, сообщаем, что можно подать заявку с Протоколом утраты карты. 
                    Чтобы Протокол утраты карты был принят, на протоколе обязательно должны быть указаны Ф.И.О. водителя, подпись, подпись уполномоченного лица и печать компании. <br><br>
                    Пожалуйста, подготовьте и отправьте свою заявку согласно следующим правилам:<br>
                    <b>1. Упаковка документов и именование файлов:</b><br>
                        &nbsp&nbsp&nbsp • Отправьте документы в виде одного zip-архива с Excel файлом, именованным по номеру автомобиля. Примеры имен файлов:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 RUHSAT <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 СОГЛАШЕНИЕ <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	РИФАТ СЕФА КЮЧЮК УДОСТОВЕРЕНИЕ ЛИЧНОСТИ/ПРАВА (ВОДИТЕЛЬ) <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	АККУЮ ПОКУПАТЕЛЬСКАЯ КАРТА (ВОДИТЕЛЬ)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	ЗЕЛЕНАЯ ФОРМА СОГЛАСИЯ<br><br>
                    <b>2. Документы для временного доступа (годовая карта):</b><br>
                        &nbsp&nbsp&nbsp    •	Рухсат (техпаспорт)<br>
                        &nbsp&nbsp&nbsp    •	Права водителя, удостоверение личности, карта персонала Akkuyu<br>
                        &nbsp&nbsp&nbsp    •	Договор аренды автомобиля<br>
                        &nbsp&nbsp&nbsp    •	Форма запроса карты автомобиля в Excel файле<br>
                        &nbsp&nbsp&nbsp    •	Заявка по электронной почте<br>
                        &nbsp&nbsp&nbsp    •	Протокол утраты карты<br>
                        &nbsp&nbsp&nbsp    •	Зеленая форма согласия<br><br>
                    <b>3. Формат электронной почты:</b><br>
                        &nbsp&nbsp&nbsp • Тема письма: "НАЗВАНИЕ КОМПАНИИ – ЗАПРОС КАРТЫ АВТОМОБИЛЯ – НОМЕР АВТОМОБИЛЯ" (Пример: "NAZIM INSAAT – ЗАПРОС КАРТЫ АВТОМОБИЛЯ – 33 ABC 333").<br>
                        &nbsp&nbsp&nbsp • Вложения в письмо:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Excel файл запроса карты автомобиля<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Техпаспорт, водительские права и удостоверение личности (например: "33 ABC 333 RUHSAT") в одном PDF файле.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Первая и последняя страницы договора аренды автомобиля и техпаспорт компании, владельца автомобиля, в одном PDF файле, например "33 ABC 333 СОГЛАШЕНИЕ".<br>
                    Отправьте документы на электронные почты <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> и <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a>, чтобы начать процесс подачи заявки.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Отправленные документы должны быть четкими, полными и цветными копиями.
                </p>                                        
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Техпаспорт автомобиля</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                                Техпаспорт автомобиля должен быть подготовлен в формате фотографии или PDF файла, 
                                читаемым и цветным на одной странице. 
                                Документ должен быть четким и разборчивым, в противном случае процесс подачи заявки может быть затруднен.
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Водительские права и удостоверение личности</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Для беспрепятственного рассмотрения заявки необходимо подготовить копию водительских прав и удостоверения личности водителя. 
                            Документы должны быть размещены на одной странице, в цвете и легко читаемые с обеих сторон. 
                            Не забудьте приложить этот документ к остальным файлам заявки.
                        </p>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Договор аренды транспортного средства</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                Для подачи заявки на аренду автомобиля у другой компании необходимо предоставить договор аренды, 
                                включающий первую и последнюю страницы, в виде одного PDF-файла. 
                                На документе должны быть подписи и печати обеих сторон, а также четко указаны даты начала и окончания договора. 
                                В случае отсутствия этих данных заявки не будут рассматриваться.
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Excel-файл заявки на карту автомобиля</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Для временных заявок на транспортные средства в Excel-файле необходимо заполнить следующие данные:<br><br>
                            <b>1. Статус заявки:</b> Используйте один из заранее определенных вариантов, таких как Новый запрос, Замена водителя, Замена автомобиля, Смена типа карты, Ошибочная заявка.<br>
                            <b>2. Тип запрашиваемой карты:</b> Выберите один из допустимых типов карт, таких как Электронная белая или Электронная желтая.<br>
                            <b>3. Текущий тип карты:</b> Укажите тип карты, который используется в данный момент.<br>
                            <b>4. Марка и модель автомобиля:</b> Укажите марку и модель автомобиля точно и полностью.<br>
                            <b>5. Тип транспортного средства:</b> Введите только допустимый тип транспортного средства в соответствии с предложенными вариантами.<br>
                            Пожалуйста, не добавляйте и не пишите текст, не указанный в предложенных вариантах; в противном случае процесс подачи заявки может быть затруднен.<br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> Пожалуйста, не добавляйте и не пишите текст, не указанный в предложенных вариантах; в противном случае процесс подачи заявки может быть затруднен.<br><br>
                        </p>
                        <img src="./static/img/22.jpg"><br><br>
                        <img src="./static/img/23.jpg">
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-5" aria-expanded="true">Акт об утере карты</button>
                </div>
                <div id="faq-1-5" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <img src="./static/img/24.jpg"><br><br>
                            <p class="ps-3">Акт обращения<br><br>
                                1. Дата составления акта: [Введите текущую дату]<br>
                                2. Информация о компании, на которую зарегистрирован автомобиль: [Введите название компании]<br>
                                3. Номерной знак автомобиля: [Введите номерной знак автомобиля]<br>
                                4. Номер карты автомобиля: [Введите номер карты]<br>
                                5. Марка и модель автомобиля: [Введите марку и модель автомобиля]<br>
                                6. Дата утери карты: [Введите дату утери]<br>
                                7. Время утери карты: [Введите время утери]<br>
                                8. Время: [Введите точное время утери]<br>
                                9. ФИО и подпись заявителя: [Введите ФИО заявителя и подпись]<br>
                                10. Подтверждение и печать: Подпись и печать будут проставлены с нашей стороны.<br><br>
                                <u style="color: red;"><b>ВАЖНО:</b></u> Полное и правильное заполнение этой информации необходимо для оперативного рассмотрения вашей заявки.
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                                                                                   
        </div>
    </div>`,
    },
    aracfirmadegisim: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Firma Değişimi</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><br>Araçlara ait mevcut sözleşmelerin sona ermesi ve yeni bir firma ile sözleşme yapılması durumunda, araç giriş kartlarının güncellenmesi 
                    zorunludur. Mevcut araç giriş kartı üzerinde eski firmanın bilgileri bulunduğu sürece, kart ile saha giriş çıkış işlemleri gerçekleştirilemez. Bu durumda, 
                    ilgili kart tarafımıza iade edilerek iptal işlemi yapılmalı, ardından yeni firma ile yapılan güncel sözleşmeyle birlikte yeniden kart başvurusu yapılmalıdır.<br><br>
                    Başvurularınızı aşağıdaki kurallara göre hazırlayarak göndermeniz beklenmektedir:<br>
                    <b>1. Belgelerin Ziplenmesi ve Dosya İsimlendirme:</b><br>
                        &nbsp&nbsp&nbsp •	Belgeleri tek bir Excel dosyası ile birlikte zip dosyasında ve plakaya göre isimlendirerek gönderin. Örnek dosya isimleri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 RUHSAT <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 SÖZLEŞME <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	RİFAT SEFA KÜÇÜK KİMLİK/EHLİYET (ŞOFÖR) <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	AKKUYU PERSONEL KARTI (ŞOFÖR)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	YEŞİL ONAY FORMU<br><br>
                    <b>2. Geçici Araç Girişi (Senelik Kart) Evrakları:</b><br>
                        &nbsp&nbsp&nbsp    •	Ruhsat<br>
                        &nbsp&nbsp&nbsp    •	Şoför Ehliyet, Kimlik, Akkuyu Personel Kartı<br>
                        &nbsp&nbsp&nbsp    •	Araç Kiralama Sözleşmesi<br>
                        &nbsp&nbsp&nbsp    •	Araç Kart Talep Formu Excel dosyası<br>
                        &nbsp&nbsp&nbsp    •	Mail Başvuru<br>
                        &nbsp&nbsp&nbsp    •	Yeşil Onay Formu<br><br>
                    <b>3. E-posta Düzeni:</b><br>
                        &nbsp&nbsp&nbsp • E-posta konusu: "FİRMA İSMİ – ARAÇ KART BAŞVURU – ARAÇ PLAKA" formatında yazılmalıdır (Örnek: "NAZIM INSAAT – ARAÇ KART BAŞVURU – 33 ABC 333").<br>
                        &nbsp&nbsp&nbsp • E-posta ekleri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Araç Kart Başvuru Excel dosyası<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Ruhsat, ehliyet ve kimlik belgeleri (örneğin: "33 ABC 333 RUHSAT") tek sayfada PDF olarak.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Ruhsat sahibi firma ile araç kiralama sözleşmesinin birinci ve sonuncu sayfası tek PDF dosyasında, örneğin "33 ABC 333 SÖZLEŞME".<br>
                    Evrakları <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> ve <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a> -posta adreslerine göndererek başvuru sürecini başlatabilirsiniz.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Gönderilen belgelerin okunaklı, tam ve renkli fotokopileri olması gereklidir.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Araç Ruhsatı</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                                Araç ruhsatı, tek sayfada olacak şekilde okunaklı ve renkli olarak fotoğraf ya da PDF dosyası formatında hazırlanmalıdır. 
                                Dosyanın net ve anlaşılır olması gerekmekte olup, aksi durumda başvuru süreci olumsuz etkilenebilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Şoför Ehliyet ve Kimliği</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Başvuru işlemlerinin sorunsuz ilerleyebilmesi için şoförün ehliyet ve kimlik fotokopisinin arkalı önlü, tek sayfada, okunaklı ve 
                            renkli olarak hazırlanması gerekmektedir. Bu belgeyi diğer başvuru dosyalarıyla birlikte eklemeyi unutmayınız.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Araç Kiralama Sözleşmesi</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                Başka bir firmadan kiralanan araçlar için başvuru işlemlerinde, kiralama sözleşmesinin birinci ve son sayfasının tek bir PDF 
                                dosyasında iletilmesi gerekmektedir. Bu belgede her iki tarafın imza ve kaşesi bulunmalı ve sözleşmenin başlangıç ve bitiş 
                                tarihleri açıkça belirtilmiş olmalıdır. Bu detaylar eksiksiz sağlanmadığı takdirde başvurular işleme alınmayacaktır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Araç Kart Talep Formu Exceli</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Geçici araç başvuruları için hazırlanan Excel dosyasında aşağıdaki bilgilerin eksiksiz doldurulması zorunludur:<br><br>
                            <b>1. Talep Durumu:</b> Yeni Talep, Şoför Değişikliği, Araç Değişikliği, Kart Tipi Değişimi, Hatalı Başvuru gibi önceden belirlenmiş seçeneklerden birini kullanın.<br>
                            <b>2. Talep Edilen Kart Türü:</b> Elektronik Beyaz veya Elektronik Sarı gibi geçerli kart türlerinden biri seçilmelidir.<br>
                            <b>3. Halen Kullanılan Kart Çeşidi:</b> Halihazırda kullanılan kart çeşidi belirtilmelidir.<br>
                            <b>4. Araç Marka-Model:</b> Araç markası ve modeli eksiksiz ve doğru bir şekilde yazılmalıdır.<br>
                            <b>5. Araç Tipi:</b> Belirlenen seçenekler doğrultusunda yalnızca geçerli araç tipini giriniz.<br>
                            Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br></p>
                        <img src="./static/img/22.jpg"><br><br>
                        <img src="./static/img/23.jpg">
                    </div>
                </div>
            </div>                                                                   
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Изменение компании</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><br>В случае завершения действующих контрактов на транспортные средства и заключения нового контракта с другой компанией, необходимо обновить карты доступа для автомобилей. Пока на существующей карте доступа указаны данные старой компании, эта карта не может использоваться для входа и выхода на территорию. В таком случае карта должна быть возвращена нам для отмены, а затем с актуальным контрактом с новой компанией следует подать заявку на новую карту.<br><br>
                    Заявки должны быть подготовлены и отправлены в соответствии с нижеуказанными правилами:<br>
                    <b>1. Упаковка документов в архив и именование файлов:</b><br>
                      &nbsp&nbsp&nbsp • Отправляйте документы в одном файле Excel в формате ZIP, именуя их по номеру автомобиля. Примеры имен файлов:<br>
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 RUHSAT <br>
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 SÖZLEŞME <br>
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	РИФАТ СЕФА КЮЧЮК КИМЛИК/ЭХЛИЙЕТ (ШОФЕР) <br>
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	АККУЮЮ ПЕРСОНЕЛЬ КАРТЫ (ШОФЕР)<br>
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	ЗЕЛЕНАЯ ФОРМА ОДОБРЕНИЯ<br><br>
                    <b>2. Документы для временного доступа (годовая карта):</b><br>
                      &nbsp&nbsp&nbsp    •	Рухсат<br>
                      &nbsp&nbsp&nbsp    •	Водительские права, удостоверение личности, персональная карта Akkuyu<br>
                      &nbsp&nbsp&nbsp    •	Договор аренды автомобиля<br>
                      &nbsp&nbsp&nbsp    •	Форма заявки на карту для автомобиля в Excel<br>
                      &nbsp&nbsp&nbsp    •	Заявка по электронной почте<br>
                      &nbsp&nbsp&nbsp    •	Зеленая форма одобрения<br><br>
                    <b>3. Оформление электронной почты:</b><br>
                      &nbsp&nbsp&nbsp • Тема письма должна быть оформлена в формате "НАИМЕНОВАНИЕ КОМПАНИИ – ЗАЯВКА НА ТРАНСПОРТНУЮ КАРТУ – НОМЕР АВТОМОБИЛЯ" (например: "NAZIM INSAAT – ЗАЯВКА НА ТРАНСПОРТНУЮ КАРТУ – 33 ABC 333").<br>
                      &nbsp&nbsp&nbsp • Вложения к письму:<br>
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Excel файл заявки на транспортную карту<br>
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Рухсат, водительские права и удостоверение личности (например: "33 ABC 333 RUHSAT") в одном PDF файле.<br>
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Первая и последняя страница договора аренды автомобиля с владельцем карты в одном PDF файле, например "33 ABC 333 SÖZLEŞME".<br>
                      Документы можно отправить на адреса <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> и <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a>, чтобы начать процесс подачи заявки.<br><br>
                      <u style="color: red;"><b>ВАЖНО:</b></u> Отправленные документы должны быть четкими, полными и цветными копиями.
                </p>                                                                                      
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Автомобильная лицензия</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4">
                                <img src="./static/img/ruhsat.jpg"><br><br>
                                Регистрация автомобиля должна быть представлена в виде четкой и цветной фотографии или PDF файла на одном листе. 
                                Файл должен быть четким и понятным, в противном случае процесс подачи заявки может быть негативно затронут.
                            </p>                                                                                                          
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Водительские права и удостоверение личности</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Для успешного прохождения процесса подачи заявки необходимо, чтобы копия водительских прав и удостоверения личности водителя была подготовлена четко и в цвете, на одной странице, с обеих сторон и была читаемой. Не забудьте прикрепить этот документ вместе с другими файлами заявки.
                        </p>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Договор аренды автомобиля</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                Для автомобилей, арендованных у другой компании, при подаче заявки необходимо предоставить первую и последнюю страницу договора аренды в одном PDF файле. На этом документе должны быть подписи и печати обеих сторон, а также четко указаны даты начала и окончания договора. Если эти данные будут предоставлены не полностью, заявка не будет принята в обработку.
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Форма запроса на автомобильную карту Excel</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>В Excel файле для подачи заявки на временное использование автомобиля необходимо заполнить следующие данные:<br><br>
                            <b>1. Статус заявки:</b> Используйте один из заранее определенных вариантов, таких как "Новый запрос", "Изменение водителя", "Изменение автомобиля", "Изменение типа карты", "Неправильная заявка" и т.д.<br>
                            <b>2. Требуемый тип карты:</b> Необходимо выбрать один из действительных типов карт, таких как "Электронная Белая" или "Электронная Желтая".<br>
                            <b>3. Текущий тип карты:</b> Укажите тип карты, который в настоящее время используется.<br>
                            <b>4. Марка и модель автомобиля:</b> Укажите марку и модель автомобиля правильно и полностью.<br>
                            <b>5. Тип автомобиля:</b> Введите только допустимый тип автомобиля в соответствии с предложенными вариантами.<br>
                            Пожалуйста, не добавляйте или не пишите никакие другие тексты, кроме указанных вариантов; в противном случае процесс подачи заявки может быть нарушен.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Пожалуйста, не добавляйте или не пишите никакие другие тексты, кроме указанных вариантов; в противном случае процесс подачи заявки может быть нарушен.<br><br></p>
                        <img src="./static/img/22.jpg"><br><br>
                        <img src="./static/img/23.jpg">
                    </div>
                </div>
            </div>                                                                                                       
        </div>
    </div>`,
    },
    arackartsuresiuzatma: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Araç Kart Süresi Uzatma</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><br>Araç giriş kartlarının geçerlilik süresinin, araç kiralama sözleşmesinde belirtilen süre ile aynı olduğunu bildirmek isteriz. 
                    Kiralama sözleşmesinde belirtilen sürenin sona ermesi halinde, araçların mevcut kartları ile sahaya giriş ve çıkış yapmaları mümkün değildir. 
                    Bu durumlarda, mevcut kartın tarafımıza teslim edilmesi gerekmeden, güncel araç kiralama sözleşmesi ile yeniden kart başvurusunda bulunulabilir.<br><br>
                    Başvurularınızı aşağıdaki kurallara göre hazırlayarak göndermeniz beklenmektedir:<br>
                    <b>1. Belgelerin Ziplenmesi ve Dosya İsimlendirme:</b><br>
                        &nbsp&nbsp&nbsp •	Belgeleri tek bir Excel dosyası ile birlikte zip dosyasında ve plakaya göre isimlendirerek gönderin. Örnek dosya isimleri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 RUHSAT <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 SÖZLEŞME <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	RİFAT SEFA KÜÇÜK KİMLİK/EHLİYET (ŞOFÖR) <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	AKKUYU PERSONEL KARTI (ŞOFÖR)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	YEŞİL ONAY FORMU<br><br>
                    <b>2. Geçici Araç Girişi (Senelik Kart) Evrakları:</b><br>
                        &nbsp&nbsp&nbsp    •	Ruhsat<br>
                        &nbsp&nbsp&nbsp    •	Şoför Ehliyet, Kimlik, Akkuyu Personel Kartı<br>
                        &nbsp&nbsp&nbsp    •	Araç Kiralama Sözleşmesi<br>
                        &nbsp&nbsp&nbsp    •	Araç Kart Talep Formu Excel dosyası<br>
                        &nbsp&nbsp&nbsp    •	Mail Başvuru<br>
                        &nbsp&nbsp&nbsp    •	Yeşil Onay Formu<br><br>
                    <b>3. E-posta Düzeni:</b><br>
                        &nbsp&nbsp&nbsp • E-posta konusu: "FİRMA İSMİ – ARAÇ KART BAŞVURU – ARAÇ PLAKA" formatında yazılmalıdır (Örnek: "NAZIM INSAAT – ARAÇ KART BAŞVURU – 33 ABC 333").<br>
                        &nbsp&nbsp&nbsp • E-posta ekleri:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Araç Kart Başvuru Excel dosyası<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Ruhsat, ehliyet ve kimlik belgeleri (örneğin: "33 ABC 333 RUHSAT") tek sayfada PDF olarak.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Ruhsat sahibi firma ile araç kiralama sözleşmesinin birinci ve sonuncu sayfası tek PDF dosyasında, örneğin "33 ABC 333 SÖZLEŞME".<br>
                    Evrakları <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> ve <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a> -posta adreslerine göndererek başvuru sürecini başlatabilirsiniz.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Gönderilen belgelerin okunaklı, tam ve renkli fotokopileri olması gereklidir.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Araç Ruhsatı</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                                Araç ruhsatı, tek sayfada olacak şekilde okunaklı ve renkli olarak fotoğraf ya da PDF dosyası formatında hazırlanmalıdır. 
                                Dosyanın net ve anlaşılır olması gerekmekte olup, aksi durumda başvuru süreci olumsuz etkilenebilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Şoför Ehliyet ve Kimliği</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Başvuru işlemlerinin sorunsuz ilerleyebilmesi için şoförün ehliyet ve kimlik fotokopisinin arkalı önlü, tek sayfada, okunaklı ve 
                            renkli olarak hazırlanması gerekmektedir. Bu belgeyi diğer başvuru dosyalarıyla birlikte eklemeyi unutmayınız.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Araç Kiralama Sözleşmesi</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                Başka bir firmadan kiralanan araçlar için başvuru işlemlerinde, kiralama sözleşmesinin birinci ve son sayfasının tek bir PDF 
                                dosyasında iletilmesi gerekmektedir. Bu belgede her iki tarafın imza ve kaşesi bulunmalı ve sözleşmenin başlangıç ve bitiş 
                                tarihleri açıkça belirtilmiş olmalıdır. Bu detaylar eksiksiz sağlanmadığı takdirde başvurular işleme alınmayacaktır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Araç Kart Talep Formu Exceli</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Geçici araç başvuruları için hazırlanan Excel dosyasında aşağıdaki bilgilerin eksiksiz doldurulması zorunludur:<br><br>
                            <b>1. Talep Durumu:</b> Yeni Talep, Şoför Değişikliği, Araç Değişikliği, Kart Tipi Değişimi, Hatalı Başvuru gibi önceden belirlenmiş seçeneklerden birini kullanın.<br>
                            <b>2. Talep Edilen Kart Türü:</b> Elektronik Beyaz veya Elektronik Sarı gibi geçerli kart türlerinden biri seçilmelidir.<br>
                            <b>3. Halen Kullanılan Kart Çeşidi:</b> Halihazırda kullanılan kart çeşidi belirtilmelidir.<br>
                            <b>4. Araç Marka-Model:</b> Araç markası ve modeli eksiksiz ve doğru bir şekilde yazılmalıdır.<br>
                            <b>5. Araç Tipi:</b> Belirlenen seçenekler doğrultusunda yalnızca geçerli araç tipini giriniz.<br>
                            Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Lütfen belirtilen seçenekler dışında herhangi bir metin eklemeyiniz veya yazmayınız; aksi takdirde başvuru süreci olumsuz etkilenebilir.<br><br></p>
                        <img src="./static/img/22.jpg"><br><br>
                        <img src="./static/img/23.jpg">
                    </div>
                </div>
            </div>                                                                 
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Продление срока действия карточки транспортного средства</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-3"><br>Хотим сообщить, что срок действия карты для входа на территорию автомобиля совпадает с сроком, указанным в договоре аренды автомобиля. 
                    По истечении срока аренды, автомобиль не сможет пройти на территорию с текущей картой. 
                    В этом случае, без возврата карты, можно подать заявку на новую карту с актуальным договором аренды автомобиля.<br><br>
                    Ожидается, что вы подготовите и отправите свои заявки в соответствии с приведенными ниже правилами:<br>
                    <b>1. Архивирование документов и наименование файлов:</b><br>
                        &nbsp&nbsp&nbsp • Отправьте документы в виде архива, содержащего один файл Excel, и назовите его в соответствии с номером автомобиля. Примеры имен файлов:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 РУХСАТ <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	33 ABC 333 ДОГОВОР <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	РИФАТ СЕФА КЮЧЮК УДОСТОВЕРЕНИЕ ЛИЧНОСТИ/ВОДИТЕЛЬСКИЕ ПРАВА (ВОДИТЕЛЬ) <br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	КАРТА ПЕРСОНАЛА АККУЮ (ВОДИТЕЛЬ)<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    •	ФОРМА ЗЕЛЕНОГО ОДОБРЕНИЯ<br><br>
                    <b>2. Документы для временного въезда автомобиля (годовая карта):</b><br>
                        &nbsp&nbsp&nbsp    •	Рухсат<br>
                        &nbsp&nbsp&nbsp    •	Водительские права, удостоверение личности, карта персонала Akkuyu<br>
                        &nbsp&nbsp&nbsp    •	Договор аренды автомобиля<br>
                        &nbsp&nbsp&nbsp    •	Excel файл с заявкой на карту<br>
                        &nbsp&nbsp&nbsp    •	Заявка по электронной почте<br>
                        &nbsp&nbsp&nbsp    •	Форма зеленого одобрения<br><br>
                    <b>3. Формат электронной почты:</b><br>
                        &nbsp&nbsp&nbsp • Тема письма должна быть в формате "НАЗВАНИЕ КОМПАНИИ – ЗАЯВКА НА КАРТУ АВТОМОБИЛЯ – НОМЕР АВТОМОБИЛЯ" (Пример: "NAZIM INSAAT – ЗАЯВКА НА КАРТУ АВТОМОБИЛЯ – 33 ABC 333").<br>
                        &nbsp&nbsp&nbsp • Вложения электронной почты:<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Excel файл с заявкой на карту<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Рухсат, водительские права и удостоверение личности (например: "33 ABC 333 РУХСАТ") в одном PDF-файле.<br>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Первая и последняя страницы договора аренды автомобиля с владельцем руксата в одном PDF-файле, например "33 ABC 333 ДОГОВОР".<br>
                    Вы можете отправить документы на адреса <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> и <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a>, чтобы начать процесс подачи заявки.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Отправленные документы должны быть читаемыми, полными и цветными копиями.
                </p>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Регистрация автомобиля</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat.jpg"><br><br>
                                Регистрация автомобиля должна быть представлена в виде одного четкого и цветного изображения или PDF-файла. 
                                Документ должен быть четким и легко читаемым, в противном случае процесс подачи заявки может быть негативно затруднен.
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Водительское удостоверение и удостоверение личности водителя</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>
                            Для бесперебойного прохождения процесса подачи заявки необходимо предоставить копию водительского удостоверения и удостоверения личности водителя, с двух сторон, на одной странице, четко читаемую и цветную. 
                            Не забудьте прикрепить этот документ вместе с другими заявочными файлами.
                        </p>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="true">Договор аренды автомобиля</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <div style="display: flex;">
                            <p class="ps-4"><img src="./static/img/ruhsat1.jpg"><br><br>
                                Для автомобилей, арендованных у другой компании, в процессе подачи заявки необходимо предоставить первую и последнюю страницу договора аренды в одном PDF 
                                файле. В этом документе должны быть подписи и печати обеих сторон, а также четко указаны даты начала и окончания договора. Если эти детали не будут предоставлены в полном объеме, заявка не будет обработана.
                            </p>
                        </div>
                    </div>
                </div>
            </div>                                    
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="true">Форма запроса карты автомобиля в Excel</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Для временных заявок на автомобили необходимо полностью заполнить следующие поля в Excel файле:<br><br>
                            <b>1. Статус запроса:</b> Используйте один из заранее определенных вариантов, таких как Новый запрос, Изменение водителя, Изменение автомобиля, Изменение типа карты, Ошибочная заявка.<br>
                            <b>2. Запрашиваемый тип карты:</b> Должен быть выбран один из действующих типов карт, например, Электронная Белая или Электронная Желтая.<br>
                            <b>3. Текущий используемый тип карты:</b> Укажите текущий используемый тип карты.<br>
                            <b>4. Марка-модель автомобиля:</b> Марка и модель автомобиля должны быть написаны полностью и правильно.<br>
                            <b>5. Тип автомобиля:</b> Введите только действующий тип автомобиля согласно выбранным вариантам.<br>
                            Пожалуйста, не добавляйте или не пишите текст, не входящий в указанные варианты; в противном случае процесс подачи заявки может быть нарушен.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Пожалуйста, не добавляйте или не пишите текст, не входящий в указанные варианты; в противном случае процесс подачи заявки может быть нарушен.<br><br></p>
                        <img src="./static/img/22.jpg"><br><br>
                        <img src="./static/img/23.jpg">
                    </div>
                </div>
            </div>                                                                                                     
        </div>
    </div>`,
    },
    doksangunblokearac: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">90 Gün Bloke Kaldırma İşlemi</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br><br>Akkuyu NGS'de erişim rejimi kurallarının değişmesi sebebiyle, 90 günden fazla süredir Akkuyu NGS şantiyesine giriş yapmamış 
                            araçların giriş-çıkış kartları sistem tarafından otomatik olarak bloke edilmektedir. Bu durumun şantiyeye girişlerde sorun 
                            oluşturmaması için, 90 günden fazla giriş yapmamış araçlar için giriş yapılması gereken günden en az 1 iş günü öncesinde, ilgili 
                            firmanın antetli kağıdına Rusça ve Türkçe dillerinde resmi bir mektup hazırlanması gerekmektedir.<br><br>
                            Bu mektubu hazırlayarak <a href="mailto:access@t2ic.com">access@t2ic.com</a> , <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> ve <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a> 
                            adreslerine, e-posta konusu olarak  <u>“90 Gün pasif araç kart aktivasyonu”</u> yazarak gönderilmesi sürecin başlatılması için yeterli olacaktır.<br><br>
                            <img src="./static/img/aracmektup.jpg"><br><br>
                            90 gün bloke durumunda olan araç kartlarının aktivasyon işlemlerinin başlatılması için mektuba ek olarak, 90 Gün Bloke Excel dosyasının aşağıdaki 
                            bilgileri eksiksiz şekilde doldurulması gerekmektedir:<br><br>
                            1. AD SOYAD: (Excelde "1." numaralı okla gösterilmiş) Personelin tam adı.<br>
                            2. TC: (Excelde "2." numaralı okla gösterilmiş) Personelin kimlik numarası.<br>
                            3. KART NO: (Excelde "3." numaralı okla gösterilmiş) Araç kartının numarası.<br>
                            4. FİRMA: (Excelde "4." numaralı okla gösterilmiş) Araç kartında belirtilen firma bilgisi.<br>
                            5. AKTİVASYON ARALIĞI: (Excelde "5." numaralı okla gösterilmiş) Kartın aktif olacağı tarih aralığı.<br>
                            6. PLAKA: (Excelde "6." numaralı okla gösterilmiş) Aracın plaka bilgisi veya iş makinesi ise motor şase numarası.<br><br>
                            <img src="./static/img/90gunaracexcel.jpg"><br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> <b>Mektup Zorunluluğu:</b> TSM ENERJİ, JV ve ICTAS NUKLEER firmalarına ait araçlar için mektup yazma zorunluluğu yoktur.<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> <b>Kart Durum Kontrolü:</b> Gelen araçların kartlarının aktif/pasif durumunu önceden kontrol ediniz. Bu, girişte 
                            sorun yaşanmaması adına gelişleri organize etmek için önemlidir.<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> <b>Kartların Araçta Bulunması:</b> Eski kartlar aktif olacağından, araçların kartlarının yanlarında olduğundan emin olunuz. 
                            Eğer kartların araçta bulunmadığına dair bir şüphe varsa, araçlar ana girişe gelmeden bu durumu teyit ediniz.<br><br>
                            <b style="color: red;"><u>NOT:</u> <b>Eksik Evrak Durumu:</b> Eksik evrakla yapılan başvurular işleme alınmayacaktır.</b><br><br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Процедура снятия блокировки через 90 дней</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br><br>Из-за изменения правил доступа на строительную площадку Akkuyu NGS, карты доступа для транспортных средств, которые не использовались более 90 дней, автоматически блокируются системой. Чтобы избежать проблем с доступом на площадку, для транспортных средств, не использовавшихся более 90 дней, необходимо подготовить официальное письмо на фирменном бланке компании на русском и турецком языках не менее чем за 1 рабочий день до планируемого дня въезда.<br><br>
                        Подготовьте это письмо и отправьте его на адреса <a href="mailto:access@t2ic.com">access@t2ic.com</a>, <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> и <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a>, указав в теме письма <u>“Активизация пассивной карты автомобиля через 90 дней”</u>, чтобы начать процесс активации.<br><br>
                        <img src="./static/img/aracmektup.jpg"><br><br>
                        Для активации карт автомобилей, которые заблокированы более 90 дней, в письмо необходимо приложить файл Excel с данными, заполненными по следующим пунктам:<br><br>
                        1. ФИО: (в Excel указано стрелкой "1.") Полное имя сотрудника.<br>
                        2. ИНН: (в Excel указано стрелкой "2.") Номер удостоверения личности сотрудника.<br>
                        3. НОМЕР КАРТЫ: (в Excel указано стрелкой "3.") Номер карты автомобиля.<br>
                        4. КОМПАНИЯ: (в Excel указано стрелкой "4.") Информация о компании, указанная на карте автомобиля.<br>
                        5. ПЕРИОД АКТИВАЦИИ: (в Excel указано стрелкой "5.") Период времени, в течение которого карта будет активна.<br>
                        6. НОМЕР ТРАНСПОРТНОГО СРЕДСТВА: (в Excel указано стрелкой "6.") Номер автомобиля или номер шасси строительной машины.<br><br>
                        <img src="./static/img/90gunaracexcel.jpg"><br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> <b>Требование письма:</b> Для автомобилей компаний TSM ENERJİ, JV и ICTAS NUKLEER письма не требуются.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> <b>Проверка состояния карт:</b> Перед въездом проверьте состояние карт транспортных средств, чтобы избежать проблем с доступом. Это важно для правильной организации въезда.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> <b>Наличие карт в транспортном средстве:</b> Убедитесь, что старые карты находятся в транспортных средствах, так как они будут активированы. Если есть подозрения, что карты отсутствуют, подтвердите это до прибытия автомобилей на главный вход.<br><br>
                        <b style="color: red;"><u>ЗАМЕЧАНИЕ:</u> <b>Отсутствие документов:</b> Заявки с отсутствующими документами не будут обработаны.</b><br><br>
                    </p>
                </div>
            </div>
        </div>
    </div>       `,
    },
    akiptal: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Araç Kart İptali</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
          <div class="accordion-item">
            <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
              <div class="accordion-body pt-0">
                <p><br><br><b>Araç Geçiş Kartı İptal Prosedürü:</b><br><br>
                  <b>1. Kart Teslimi Zorunluluğu: </b>Araçların Akkuyu NGS şantiye sahasından çıkış yapması durumunda, geçiş kartlarının iadesi zorunludur.<br>
                  <b>2. İptal Süreci:</b> Kart iptal işlemi, İptal Tutanağı ile birlikte gerçekleştirilecektir. Bu tutanağın eksiksiz doldurulup tarafımıza 
                  teslim edilmesi gerekmektedir.<br>
                  <b>3. Kayıp Kart Durumu:</b> Kart kaybolmuşsa, Kayıp Kart İptal Başvurusu yapılabilir.<br>
                  <b>4. Başvuru Süreci:</b> Başvurular, <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> ve <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a>adreslerine gönderilmeli, 
                  e-posta konusu olarak “ARAÇ KART İPTALİ HK.” belirtilmelidir..<br>
                  <b>5. Belgelerin Doğruluğu ve Eksiksizlik:</b> Başvuruların eksiksiz ve doğru belgelerle yapılması, işlemlerin sorunsuz ilerlemesi için önemlidir.<br>
                  <b>6. Hatalı Kart Başvuruları:</b> Hatalı başvuru sonucu basılan kartların iptali için, kartların durumunu belirten bir Kart İptal Tutanağı ile 
                  tarafımıza teslim edilmesi gereklidir.<br><br>
                  <u style="color: red;"><b>ÖNEMLİ:</b></u> İşlemlerinizin sorunsuz ilerlemesi için başvurunuzu zamanında ve eksiksiz olarak gerçekleştirmeniz önem taşır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Отмена транспортной карты</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
          <div class="accordion-item">
            <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
              <div class="accordion-body pt-0">
                <p><br><br><b>Процедура отмены транспортной карты:</b><br><br>
                  <b>1. Обязанность сдачи карты:</b> В случае выезда транспортных средств с строительной площадки Akkuyu NGS, карта доступа должна быть сдана.<br>
                  <b>2. Процесс отмены:</b> Процесс отмены карты будет выполнен вместе с актом об отмене. Этот акт должен быть полностью заполнен и передан нам.<br>
                  <b>3. Утеряная карта:</b> Если карта потеряна, можно подать заявку на отмену утерянной карты.<br>
                  <b>4. Процесс подачи заявки:</b> Заявки должны быть отправлены на адреса <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> и <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a>, 
                  в теме письма следует указать «ОТМЕНА ТРАНСПОРТНОЙ КАРТЫ».<br>
                  <b>5. Точность и полнота документов:</b> Заявки должны быть поданы с полными и правильными документами для того, чтобы процесс проходил без проблем.<br>
                  <b>6. Ошибочные заявки на карты:</b> Для отмены карт, выданных по ошибочным заявкам, необходимо предоставить акт об отмене с указанием состояния карт.<br><br>
                  <u style="color: red;"><b>ВАЖНО:</b></u> Для беспроблемного выполнения вашей заявки важно подать её вовремя и в полном объеме.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>   `,
    },
    malzeme: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Malzeme Giriş-Çıkış İşlemleri</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4"><br><br><b>Akkuyu Nükleer Güç Sahasına Malzeme Giriş-Çıkış İşlemleri Talimatı:</b><br><br>
                    <b>1. Excel Formunun Doldurulması:</b> Akkuyu sahasına giriş-çıkış yapacak malzemelerle ilgili formu, aşağıdaki kurallara uygun şekilde 
                    eksiksiz doldurunuz.<br>
                    <b>2. Gönderim:</b> Doldurulan Excel dosyasını, e-posta konusu “Malzeme Talep Formu Hk.” olacak şekilde, Teoman Fazlı 
                    <a href="mailto:teoman.fazli@t2ic.com">teoman.fazli@t2ic.com</a> adresine iletiniz.<br>
                    <b>3. Güvenlik Departmanında İmza:</b> Form gönderildikten sonra yalnızca firmanızın malzeme işlemlerinden sorumlu yetkilisi, 
                    Güvenlik Departmanı Ofisine gelip malzeme giriş-çıkış evrağını imzalamalıdır. Şoförlerin imza atma yetkisi bulunmamaktadır.<br>
                    <b>4. İmza Saatleri:</b> İmza işlemleri en geç <b>15:30</b>’a kadar yapılmalıdır. Bu saatten sonra imza kabul edilmemektedir.<br><br>
                    <u style="color: red;"><b>ÖNEMLİ:</b></u> İlgili süreçlerin düzenli ve hızlı şekilde tamamlanabilmesi adına, belirtilen kurallara 
                    titizlikle uyulması gerekmektedir.<br><br>    
                </p>
            </div> 
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Malzeme Talep Excel</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Malzeme Giriş-Çıkış Formu Doldurma Talimatları:</b><br><br>
                            <b>1. "Giriş-Çıkış":</b> Malzeme talebinizdeki malzemeler sahaya girecekse "Giriş", sahadan çıkacaksa "Çıkış" olarak belirtilmelidir.<br>
                            <b>2. "Evrak Geliş Tarihi":</b> Malzeme evrağının hazırlandığı tarih bilgisi eklenmelidir.<br>
                            <b>3. "Firma":</b> T2-IC JV/FİRMA İSMİNİZ olacak şekilde yazılmalıdır.<br>
                            <b>4. "Ad":</b> Malzemeyi getirecek personelin adı yazılmalıdır.<br>
                            <b>5. "Soyad":</b> Malzemeyi getirecek personelin soyadı yazılmalıdır.<br>
                            <b>6. "Görevi":</b> Malzemeyi getirecek personelin görevi belirtilmelidir.<br>
                            <b>7. "TC":</b> Personel Türkiye Cumhuriyeti vatandaşıysa TC Kimlik Numarası girilmelidir.<br>
                            <b>8. "Pas":</b> Personel yabancı uyrukluysa Pasaport Numarası eklenmelidir.<br>
                            <b>9. "Malzeme":</b> Malzeme detayları açıkça yazılmalıdır.  <u style="color: red;">Örnek: "1 adet diz üstü bilgisayar, marka: HP, 
                            model: y12, renk: siyah, seri no: 5465465456."</u> Diğer malzemeler araya virgül konularak eklenmelidir.<br>
                            <b>10. "Araç Marka/Model/Renk":</b> Malzemeler izinli bir araçla taşınacaksa araç bilgileri marka/model/renk olarak yazılmalıdır. Taşıyacak araç izinsizse,
                            Tuğba Yay'a <a href="mailto:tugba.yay@t2ic.com">tugba.yay@t2ic.com</a> tek seferlik işlem için mail gönderilmelidir.<br>
                            <b>11. "Plaka":</b> Malzemeyi taşıyacak aracın plaka bilgisi belirtilmelidir.<br>
                            <b>12. "Dorse":</b> Dorse varsa dorse plakası eklenmelidir.<br>
                            <b>13. "İrsaliye":</b> İrsaliye varsa irsaliye numarası yazılmalı ve PDF olarak eklenmelidir.<br>
                            <b>14. "Tarih":</b> Malzemenin giriş veya çıkış yapacağı tarih açıkça belirtilmelidir.<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> Bu adımlara uygun doldurulmuş formun, işlemlerin hızla tamamlanması adına eksiksiz ve doğru bilgilerle 
                            hazırlanması önemlidir.<br><br> 
                            <img src="./static/img/12.jpg">
                        </p>
                    </div>
                </div>
            </div>      
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="true">Akkuyu NGS Sahasına Giriş İçin Onay Gerektiren Malzemeler</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>
                            1. Branda<br>
                            2. İnşaat ve montaj köpüğü<br>
                            3. Ahşaptan yapılan malzemeler</b><br><br>
                            <b>Dikkat Edilmesi Gereken Hususlar:</b><br>
                            &nbsp&nbsp&nbsp •	Branda ve inşaat-montaj köpüğü için:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Yanabilirlik değeri G-1’den az ve alev yayılma değeri RP-1’den az olmalıdır.<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Alternatif olarak, EN 13501-1 “İnşaat Ürünleri ve Malzemelerinin Yangın Tehlikesine 
                            Göre Sınıflandırılması” gereğince yanabilirlik değeri B-1’den az olan malzemeler kabul edilebilir.<br><br>
                            &nbsp&nbsp&nbsp •	Ahşap malzemeler için:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Yangına dayanıklı kaplama uygulanmamış ahşap malzemelerin sahaya girişi yasaktır.<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Yangına dayanıklı kaplama uygulanmış ahşap malzemelerin girişine izin verilir, ancak 
                            bunun kanıtı olarak HSE-AKU-P-104-21 “Akkuyu NGS İnşaat Tesislerinde Yanıcı Malzemelere Yangından Koruma İşlemlerinin 
                            Yapılması Prosedürü” çerçevesinde ilgili dokümanlarla desteklenmesi zorunludur.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Gerekli belgeler olmadan yapılacak başvurular işleme alınmayacaktır.
                        </p>
                    </div>
                </div>
            </div>                                                                      
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Операции по ввозу/ввывозу материала</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <p class="ps-4"><br><br><b>Инструкция по вводу/вывозу материалов на строительную площадку Akkuyu Nuclear Power Plant:</b><br><br>
                    <b>1. Заполнение Excel формы:</b> Заполните форму для материалов, которые будут ввозиться или вывозиться с площадки Akkuyu, в соответствии с нижеприведенными правилами.<br>
                    <b>2. Отправка:</b> Отправьте заполненный файл Excel по электронной почте с темой "Заявка на материалы Hk." на адрес Teoman Fazlı 
                    <a href="mailto:teoman.fazli@t2ic.com">teoman.fazli@t2ic.com</a>.<br>
                    <b>3. Подпись в отделе безопасности:</b> После отправки формы ответственное лицо за материалы вашей компании должно прийти в офис отдела безопасности для подписания документа на ввод/вывоз материалов. Водители не имеют права ставить подпись.<br>
                    <b>4. Время для подписания:</b> Подписания должны быть завершены до <b>15:30</b>. После этого подписи не принимаются.<br><br>
                    <u style="color: red;"><b>ВАЖНО:</b></u> Для того чтобы процессы выполнялись регулярно и быстро, необходимо строго соблюдать указанные правила.<br><br>    
                </p>
            </div> 
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="true">Excel для запроса материалов</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>Инструкция по заполнению формы ввода/вывода материалов:</b><br><br>
                            <b>1. "Ввод-Вывод":</b> Если материалы должны поступить на площадку, укажите "Ввод", если они должны быть выведены с площадки, укажите "Вывод".<br>
                            <b>2. "Дата поступления документа":</b> Укажите дату, когда был подготовлен документ на материалы.<br>
                            <b>3. "Компания":</b> Укажите название вашей компании в формате T2-IC JV/ВАША КОМПАНИЯ.<br>
                            <b>4. "Имя":</b> Укажите имя сотрудника, который привезет материалы.<br>
                            <b>5. "Фамилия":</b> Укажите фамилию сотрудника, который привезет материалы.<br>
                            <b>6. "Должность":</b> Укажите должность сотрудника, который привезет материалы.<br>
                            <b>7. "TC":</b> Если сотрудник является гражданином Турции, укажите номер удостоверения личности TC.<br>
                            <b>8. "Паспорт":</b> Если сотрудник иностранный гражданин, укажите номер паспорта.<br>
                            <b>9. "Материалы":</b> Детально укажите материалы. <u style="color: red;">Пример: "1 ноутбук, марка: HP, модель: y12, цвет: черный, серийный номер: 5465465456."</u> Другие материалы указываются через запятую.<br>
                            <b>10. "Марка/Модель/Цвет автомобиля":</b> Если материалы будут транспортироваться на разрешенном автомобиле, укажите информацию о транспортном средстве: марка/модель/цвет. Если транспортное средство не разрешено, отправьте электронное письмо Тугбе Яй <a href="mailto:tugba.yay@t2ic.com">tugba.yay@t2ic.com</a> для одноразовой операции.<br>
                            <b>11. "Номерной знак":</b> Укажите номерной знак транспортного средства, которое будет перевозить материалы.<br>
                            <b>12. "Прицеп":</b> Если есть прицеп, укажите его номерной знак.<br>
                            <b>13. "Накладная":</b> Если есть накладная, укажите ее номер и прикрепите PDF файл.<br>
                            <b>14. "Дата":</b> Укажите точную дату, когда материалы будут ввезены или выведены.<br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> Форма, заполненная в соответствии с этими шагами, должна быть представлена с точными и полными данными для быстрого выполнения процедуры.<br><br> 
                            <img src="./static/img/12.jpg">
                        </p>
                    </div>
                </div>
            </div>      
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="true">Материалы, для которых требуется разрешение для ввода на площадку Akkuyu NGS</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><b>
                            1. Ткань<br>
                            2. Строительный и монтажный пенопласт<br>
                            3. Деревянные материалы</b><br><br>
                            <b>Обращение внимания на следующие моменты:</b><br>
                            &nbsp&nbsp&nbsp • Для ткани и строительного/монтажного пенопласта:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Пожарная опасность не должна превышать значения G-1, и распространение огня не должно быть выше значения RP-1.<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • В качестве альтернативы могут быть приняты материалы с показателем горючести менее B-1 в соответствии с EN 13501-1 “Классификация строительных материалов и изделий по опасности пожара”.<br><br>
                            &nbsp&nbsp&nbsp • Для деревянных материалов:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Ввоз древесины, не обработанной огнезащитным покрытием, запрещен.<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Допускается ввоз деревянных материалов, обработанных огнезащитным покрытием, при условии, что это подтверждается документами согласно процедуре HSE-AKU-P-104-21 "Порядок проведения огнезащитных мероприятий для горючих материалов на строительных площадках Akkuyu NGS".<br><br>
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Заявки, поданные без необходимых документов, не будут обработаны.
                        </p>
                    </div>
                </div>
            </div>                                                                                                          
        </div>
    </div>`,
    },
    degerlimalzeme: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Değerli Malzeme Giriş-Çıkış İşlemleri</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div class="accordion-body pt-0">
                    <p><br><br><b>Akkuyu NGS İnşaat Alanından Ticari ve Maddi Kıymetlerin (TMK) Çıkışı İçin İzlenecek Süreçler</b><br><br>
                        <b>1. Yetkili Onayı Alınması</b><br> Değerli malzeme mektubunun hazırlanma sürecinde Ekonomi Güvenliği Birimi Müdürü Sayın <b>Andrei Shevchenko</b> ile görüşme yapılmalı, 
                        onayı alındıktan sonra süreç Erişim Kontrol Departmanı tarafından yürütülmeye başlanacaktır.<br>
                        <b>İletişim:</b> <a href="mailto:andrei.shevchenko@t2ic.com">andrei.shevchenko@t2ic.com</a><br><br>
                        <b>2. Gerekli Evraklar</b><br> TMK çıkışı için hazırlanan belgeler, Gonenc Can Caynak, Tuğba Yay ve Teoman Fazlı'ya, mail konusu "TMK Malzeme Çıkış Talep Formu Hk." olarak iletilmelidir:<br>
                        &nbsp&nbsp&nbsp•	Gonenc Can Caynak <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a><br>
                        &nbsp&nbsp&nbsp•	Tuğba Yay <a href="mailto:tugba.yay@t2ic.com">tugba.yay@t2ic.com</a><br>
                        &nbsp&nbsp&nbsp•	Teoman Fazlı <a href="mailto:teoman.fazli@t2ic.com">teoman.fazli@t2ic.com</a><br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Akkuyu Güvenlik Birimi'nin onaylı mektubu olmadan, talep edilen maddi değerli malzemelerin çıkışına izin verilmemektedir.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Gerekli belgeleri hazırladıktan sonra, sözleşmeli olduğunuz TSM, JV, ICN gibi ilgili firma temsilcisine mektubu ileterek süreci başlatabilirsiniz.<br><br>
                        <u style="color: red;"><b>ÖNEMLİ:</b></u> Onaylanmış değerli malzeme mektubunun orijinali Güvenlik Ofisi'ne teslim edildikten sonra değerli malzeme çıkış süreci başlatılacaktır.<br><br>
                        <b>3. Belge Alanları</b><br><br>
                        <b>1. Giriş-Çıkış:</b> Malzemeler Sahaya girecekse "Giriş", çıkacaksa "Çıkış" yazılmalıdır.<br>
                        <b>2. Evrak Geliş Tarihi:</b> Evrak hazırlık tarihi yazılmalıdır.<br>
                        <b>3. Firma:</b> T2-IC JV ya da kendi firma isminiz belirtilmelidir.<br>
                        <b>4. Ad :</b> Malzemeyi getirecek veya çıkaracak personelin adı.<br>
                        <b>5. Soyad :</b> Malzemeyi getirecek veya çıkaracak personelin soyadı.<br>
                        <b>6. Görevi :</b> Malzemeyi taşıyan personelin görevi.<br>
                        <b>7. TC :</b> Personel TC vatandaşı ise T.C. Kimlik Numarası yazılmalıdır.<br>
                        <b>8. Pas :</b> Personel yabancı uyruklu ise Pasaport Numarası yazılmalıdır.<br>
                        <b>9. Malzeme:</b> Malzemenin detaylı açıklaması yapılmalıdır.<br>
                        <b>10. Araç Marka/Model/Renk:</b> Malzeme izni olan bir araç ile taşınacaksa, aracın marka, model ve rengi, “/” ile ayrılarak yazılmalıdır. 
                        Araç izinsiz ise tek seferlik izin alınması için Tuğba Yay'a <a href="mailto:tugba.yay@t2ic.com">tugba.yay@t2ic.com</a>  e-posta gönderilmelidir.<br>
                        <b>11. Plaka:</b> Taşıyıcı aracın plaka numarası yazılmalıdır.<br>
                        <b>12. Dorse:</b> Taşıyıcı araca bağlı dorse var ise plaka numarası belirtilmelidir.<br>
                        <b>13. İrsaliye:</b> İrsaliye mevcut ise numarası yazılmalı ve PDF formatında eklenmelidir.<br>
                        <b>14. Tarih:</b> Malzemenin sahadan çıkış tarihi belirtilmelidir.<br><br>
                        <u style="color: red;"><b>NOT:</b></u> Sahadaki manliftler dışarıdan gelen tır ile çıkarılamaz; saha içindeki araçlarla taşınması zorunludur.<br><br>
                        <img src="./static/img/13.jpg"></p><br>
                        Verilen alan Türkçe olarak doldurulduktan sonra, aynı Excel dosyasındaki sarı alana bilgilerin Rusça olarak girilmesi gerekmektedir.<br><br>
                        <img src="./static/img/15.jpg"></p><br><br>
                    </p>
                </div>
            </div>
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Операции по ввозу-вывозу ценного материала</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div class="accordion-body pt-0">
                    <p><br><br><b>Процедуры выхода коммерческих и материальных ценностей (ТМК) с строительной площадки Akkuyu NGS</b><br><br>
                        <b>1. Получение разрешения от уполномоченного лица</b><br> В процессе подготовки письма о ценном материале необходимо провести встречу с руководителем подразделения экономической безопасности господином <b>Андреем Шевченко</b>, и после получения разрешения процесс будет продолжен Департаментом контроля доступа.<br>
                        <b>Контакты:</b> <a href="mailto:andrei.shevchenko@t2ic.com">andrei.shevchenko@t2ic.com</a><br><br>
                        <b>2. Необходимые документы</b><br> Документы для выхода ТМК должны быть отправлены следующим лицам с темой письма "Запрос на выход ТМК материал из склада":<br>
                        &nbsp&nbsp&nbsp• Гёненч Кан Чайнак <a href="mailto:gonenc.caynak@t2ic.com">gonenc.caynak@t2ic.com</a><br>
                        &nbsp&nbsp&nbsp• Тугба Яй <a href="mailto:tugba.yay@t2ic.com">tugba.yay@t2ic.com</a><br>
                        &nbsp&nbsp&nbsp• Теоман Фазлы <a href="mailto:teoman.fazli@t2ic.com">teoman.fazli@t2ic.com</a><br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> Без утвержденного письма от подразделения безопасности Akkuyu, выход запрашиваемых материальных ценностей не разрешается.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> После подготовки необходимых документов письмо должно быть отправлено представителю вашей компании, например, TSM, JV, ICN, для начала процесса.<br><br>
                        <u style="color: red;"><b>ВАЖНО:</b></u> После передачи оригинала утвержденного письма о ценном материале в офис безопасности, процесс выхода материалов с площадки будет начат.<br><br>
                        <b>3. Поля документов</b><br><br>
                        <b>1. Вход/Выход:</b> Если материалы должны поступить на площадку, пишите "Вход", если должны покинуть площадку - "Выход".<br>
                        <b>2. Дата получения документа:</b> Укажите дату подготовки документа.<br>
                        <b>3. Компания:</b> Укажите название компании T2-IC JV или вашей компании.<br>
                        <b>4. Имя:</b> Укажите имя сотрудника, который будет привозить или вывозить материалы.<br>
                        <b>5. Фамилия:</b> Укажите фамилию сотрудника, который будет привозить или вывозить материалы.<br>
                        <b>6. Должность:</b> Укажите должность сотрудника, который будет перевозить материалы.<br>
                        <b>7. TC:</b> Если сотрудник является гражданином Турции, укажите его номер T.C. удостоверения личности.<br>
                        <b>8. Паспорт:</b> Если сотрудник является иностранцем, укажите номер его паспорта.<br>
                        <b>9. Материалы:</b> Дайте подробное описание материалов.<br>
                        <b>10. Марка/модель/цвет автомобиля:</b> Если материалы будут перевозиться с разрешения на транспортное средство, укажите марку, модель и цвет автомобиля, разделенные символом “/”. Если автомобиль не имеет разрешения, необходимо отправить запрос на разовое разрешение Тугбе Яй на <a href="mailto:tugba.yay@t2ic.com">tugba.yay@t2ic.com</a>.<br>
                        <b>11. Номер автомобиля:</b> Укажите номер автомобиля, который будет перевозить материалы.<br>
                        <b>12. Полуприцеп:</b> Если у перевозчика есть полуприцеп, укажите его номер.<br>
                        <b>13. Накладная:</b> Если имеется накладная, укажите ее номер и прикрепите PDF-файл.<br>
                        <b>14. Дата:</b> Укажите дату выхода материалов с площадки.<br><br>
                        <u style="color: red;"><b>ЗАМЕЧАНИЕ:</b></u> Подъемники на площадке не могут быть вывезены с помощью грузовиков с внешней стороны; они должны быть перевезены внутренними транспортными средствами.<br><br>
                        <img src="./static/img/13.jpg"></p><br>
                        После заполнения полей на турецком языке, информация должна быть введена на русском языке в желтой области того же Excel файла.<br><br>
                        <img src="./static/img/15.jpg"></p><br><br>
                    </p>                                            
                </div>
            </div>
        </div>
    </div>`,
    },
    aciltir: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Tek Seferlik Araç Girişi (VİZİTÖR)</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br><br>Akkuyu Nükleer Güç Santrali sahasına günübirlik giriş-çıkış yapacak malzemeler için, tek seferlik araç taleplerinde aşağıdaki adımlar izlenmelidir:<br><br>
                            1. Talep edilen belgeler, mailin konu kısmına “Tek Seferlik Araç İzni” yazılarak gönderilmelidir. Konuda ayrıca listedeki ilk personelin adı, soyadı ve araç 
                            sayısı belirtilmelidir. (Örneğin: 6 KİŞİ - TEK SEFERLİK ARAÇ - ERDOĞAN YÜCEOĞLU - 33 ABC 123).<br>
                            2. E-postaya, "Tek Seferlik Araç İzni" Excel formu ve aracın plakası ile isimlendirilmiş ruhsat dosyası eklenmelidir.<br>
                            3. Bu belgeler Tuğba Yay'a <a href="mailto:tugba.yay@t2ic.com">tugba.yay@t2ic.com</a> gönderilmelidir.<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> <b>Araç Girişi Örnek Excel Formundaki</b> bilgilerin kimlik, ehliyet, pasaport ve ruhsattaki bilgilerle teyit edilerek 
                            eksiksiz ve büyük harflerle doldurulması gerekmektedir.<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> <b>Acil Tır Durumu:</b> Acil giriş yapan bir tır, malzemeyi indiremediği durumda saha içinde kalabilir; ancak şoför saha 
                            içinde kalamaz ve ertesi gün tekrardan giriş yapabilir.<br><br>
                            <b>Alan Doldurma Talimatları:</b><br>
                            <b>1. Talep Eden:</b> Talebi gerçekleştiren personelin Adı ve Soyadı belirtilmelidir.<br>
                            <b>2. Talep Eden İletişim Bilgileri:</b> Personelin cep telefon numarası yazılmalıdır.<br>
                            <b>3. Kuruluş:</b> Firma isimleri İngilizce karakterlerle belirtilmelidir (Ör: TSM ENERJI/USTA EL).<br>
                            <b>4. Sürücü:</b> Aracı kullanacak personelin Ad ve Soyadı yazılmalıdır.<br>
                            <b>5. TC/Pasaport:</b> Sürücünün TC Kimlik veya Pasaport bilgisi eklenmelidir.<br>
                            <b>6. Doğum Tarihi ve Yeri:</b> Sürücünün doğum tarihi gün, ay ve yıl olarak belirtilmelidir (Ör: ERZURUM 02.01.1998).<br>
                            <b>7. Görevi:</b> Sürücünün görev bilgisi doldurulmalıdır.<br>
                            <b>8. Adli Sicil Kaydı ve Sağlık Kısıtları:</b> Sürücünün adli sicil kaydı ve sağlık durumu hakkında bilgi verilmelidir.<br>
                            <b>9. İkamet Adresi:</b> Personelin mevcut ikamet adresi belirtilmelidir.<br>
                            <b>10. Araç Tipi (Marka-Model-Renk):</b> Araç tipi, marka, model ve renk olarak yazılmalıdır (Ör: SCANIA R500 N323 ÇEKİCİ (BEYAZ)).<br>
                            <b>11. Plaka Numarası-Dorse:</b> Dorseli araçlarda plaka bilgisi çekici-dorse şeklinde yazılmalıdır (Ör: 42 YN 999-42 YR 008).<br> 
                            <b>12. Refakatçi Ad Soyad:</b> Sürücünün personel kartı yoksa saha içinde eşlik edecek refakatçinin Ad ve Soyadı belirtilmelidir.<br> 
                            <b>13. Giriş Tarihi:</b> Aracın saha içine giriş yapacağı tarih eklenmelidir.<br> 
                            <b>14. Çıkış Tarihi:</b> Aracın saha içinden çıkış yapacağı tarih belirtilmelidir.<br><br>
                            <img src="./static/img/16.jpg"><br><br>
                            <b>Akkuyu Nükleer Güç Sahası Araç Giriş Talimatları ve Gereklilikler</b><br><br>
                            <u style="color: red;"><b>Önemli Bilgilendirme</b></u><br> 
                            &nbsp&nbsp&nbsp•	Otomobil, hafif ticari araç ve kamyonet şoförleri için vizitör izni veya Akkuyu Geçici Giriş Kartı bulundurma zorunluluğu vardır.<br>
                            &nbsp&nbsp&nbsp•	Tır ve kamyon şoförleri için bu zorunluluk bulunmamaktadır; ancak tır ve kamyon şoförleri Akkuyu NGS sahasına yalnızca en fazla 2 gün 
                            için vizitör kartı ile giriş yapabilir. Sahaya daha fazla giriş yapmaları gerekiyorsa, Bakanlık izin evrakları hazırlanarak başvuruda bulunulması gerekmektedir.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Araç giriş talepleri en fazla 2 gün ve toplamda 5 güne kadar yapılabilir. İşverenin talimatları doğrultusunda bu süre değişiklik gösterebilir.<br><br>
                            <u style="color: red;"><b>NOT:</b></u> Araç giriş tarihinden en az 1 iş günü öncesinde taleplerin iletilmesine dikkat edilmelidir.<br><br>
                            <b>Başvuru için Gerekli Belgeler:</b><br>
                            <b>1. Araç Ruhsatı:</b> Ruhsatın net okunur taraması veya fotoğrafı gereklidir. Dorseli araçlarda çekici ve dorse ruhsatları araç plakasıyla isimlendirilmelidir.<br>
                            &nbsp&nbsp&nbsp•	Örnek: 42 YN 999-42 YR 008<br><br>
                            <b>2. Sürücü Belge ve Kimlikleri:</b><br>
                            &nbsp&nbsp&nbsp•	Sürücü ehliyeti, kimlik veya pasaportun okunaklı taraması veya fotoğrafı.<br>
                            &nbsp&nbsp&nbsp•	Bu belgeler, sürücü adı-soyadı ve belge türü (ehliyet, kimlik veya pasaport) ile isimlendirilmelidir.<br>
                            &nbsp&nbsp&nbsp•	Örnek: HASAN YILMAZ EHLİYET<br><br>
                            <b>3. Dosya Düzenlemesi:</b><br>
                            &nbsp&nbsp&nbsp•	Yukarıdaki belgeler, sürücü adı-soyadı ile açılan bir klasörde toplanarak ZIP dosyası haline getirilmelidir.<br>
                            &nbsp&nbsp&nbsp•	Örnek: HASAN YILMAZ.zip<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> Mailde, araç sürücüsünün Akkuyu NGS'ye giriş izni olup olmadığı mutlaka belirtilmelidir.<br><br>
                            <b>Evrak Teslimi ve E-posta Gönderimi</b><br>
                            &nbsp&nbsp&nbsp•	Evraklar mail yoluyla gönderilmelidir.<br>
                            &nbsp&nbsp&nbsp•	E-posta hazırlanırken konu kısmına Tek Seferlik Araç İzni yazılmalı, ayrıca listedeki ilk personelin adı, soyadı ve araç sayısı eklenmelidir.<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•	Örnek: 6 KİŞİ - TEK SEFERLİK ARAÇ - ERDOĞAN YÜCEOĞLU - 33 ABC 123<br>
                            &nbsp&nbsp&nbsp•	E-postaya, Tek Seferlik Araç İzni Excel formu ve plaka ile isimlendirilmiş ruhsat dosyası eklenmelidir.<br><br>
                            Yukarıdaki aşamaları dikkate alarak ve ekli araç talep örnek formatını kullanarak araç taleplerinizi tamamlayabilirsiniz.<br><br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
        ru: ` <div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Однократный въезд для транспортных средств (ГОСТЬ)</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br><br>Для материалов, которые будут ввозиться на территорию Akkuyu NGS на один день, необходимо выполнить следующие шаги для запроса однократного въезда для транспортных средств:<br><br>
                            1. Запрашиваемые документы должны быть отправлены по электронной почте с темой "Однократный въезд для транспортных средств". В теме также должно быть указано имя, фамилия первого сотрудника из списка и количество транспортных средств. (Например: 6 ЧЕЛОВЕК - ОДНОКРАТНЫЙ ВЪЕЗД ДЛЯ ТРАНСПОРТНЫХ СРЕДСТВ - ERDOĞAN YÜCEOĞLU - 33 ABC 123).<br>
                            2. К письму должны быть прикреплены форма Excel "Однократный въезд для транспортных средств" и файл регистрации транспортного средства, названный по номеру его номера.<br>
                            3. Эти документы должны быть отправлены Тугбе Яй на адрес <a href="mailto:tugba.yay@t2ic.com">tugba.yay@t2ic.com</a>.<br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> <b>Информация в примере Excel для въезда транспортных средств</b> должна быть проверена и заполнена точно в соответствии с информацией в удостоверении личности, водительском удостоверении, паспорте и техпаспорте, с использованием заглавных букв.<br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> <b>Срочные грузовые автомобили:</b> В случае, если срочный грузовой автомобиль не может разгрузиться, он может остаться на территории, однако водитель не может находиться на территории и может войти снова на следующий день.<br><br>
                            <b>Инструкции по заполнению полей:</b><br>
                            <b>1. Запрашивающий:</b> Укажите полное имя и фамилию сотрудника, который подает запрос.<br>
                            <b>2. Контактные данные запрашивающего:</b> Укажите номер мобильного телефона сотрудника.<br>
                            <b>3. Организация:</b> Название фирмы должно быть указано с использованием английских символов (например: TSM ENERJI/USTA EL).<br>
                            <b>4. Водитель:</b> Укажите имя и фамилию водителя транспортного средства.<br>
                            <b>5. TC/Паспорт:</b> Укажите номер удостоверения личности или паспортные данные водителя.<br>
                            <b>6. Дата и место рождения:</b> Укажите дату рождения водителя в формате день, месяц, год (например: ERZURUM 02.01.1998).<br>
                            <b>7. Должность:</b> Укажите должность водителя.<br>
                            <b>8. Судимость и ограничения по здоровью:</b> Укажите информацию о судимости и состоянии здоровья водителя.<br>
                            <b>9. Адрес проживания:</b> Укажите текущий адрес проживания сотрудника.<br>
                            <b>10. Тип транспортного средства (Марка-Модель-Цвет):</b> Укажите тип транспортного средства, марку, модель и цвет (например: SCANIA R500 N323 ТЯГАЧ (БЕЛЫЙ)).<br>
                            <b>11. Номер регистрационного знака - прицеп:</b> Для транспортных средств с прицепом укажите регистрационные номера тягача и прицепа (например: 42 YN 999-42 YR 008).<br>
                            <b>12. Сопровождающий:</b> Если у водителя нет персональной карты, укажите имя и фамилию сопровождающего, который будет с ним на территории.<br>
                            <b>13. Дата въезда:</b> Укажите дату въезда транспортного средства на территорию.<br>
                            <b>14. Дата выезда:</b> Укажите дату выезда транспортного средства с территории.<br><br>
                            <img src="./static/img/16.jpg"><br><br>
                            <b>Инструкции и требования для въезда транспортных средств на территорию Akkuyu NGS</b><br><br>
                            <u style="color: red;"><b>Важное уведомление</b></u><br>
                            &nbsp&nbsp&nbsp•	Для водителей легковых автомобилей, коммерческих автомобилей и фургонов требуется наличие визитной карты или временной карты входа Akkuyu.<br>
                            &nbsp&nbsp&nbsp•	Для водителей грузовиков и прицепов нет обязательства, но они могут въехать на территорию Akkuyu NGS только на срок до 2 дней с визитной картой. Если необходимо большее количество дней, требуется подать заявку с документами от министерства.<br><br>
                            <u style="color: red;"><b>ЗАМЕЧАНИЕ:</b></u> Запросы на въезд транспортных средств могут быть поданы на срок не более 2 дней, в общей сложности на срок до 5 дней. Срок может изменяться в зависимости от указаний работодателя.<br><br>
                            <u style="color: red;"><b>ЗАМЕЧАНИЕ:</b></u> Запросы на въезд транспортных средств должны быть поданы не менее чем за 1 рабочий день до даты въезда.<br><br>
                            <b>Необходимые документы для подачи заявки:</b><br>
                            <b>1. Техпаспорт транспортного средства:</b> Требуется четкая копия или фотография техпаспорта. Для транспортных средств с прицепом техпаспорта тягача и прицепа должны быть названы по номеру автомобиля.<br>
                            &nbsp&nbsp&nbsp•	Пример: 42 YN 999-42 YR 008<br><br>
                            <b>2. Документы водителя и удостоверение личности:</b><br>
                            &nbsp&nbsp&nbsp•	Копия водительского удостоверения, удостоверения личности или паспорта водителя, четкая и разборчивая.<br>
                            &nbsp&nbsp&nbsp•	Эти документы должны быть названы в соответствии с фамилией водителя и типом документа (водительское удостоверение, удостоверение личности или паспорт).<br>
                            &nbsp&nbsp&nbsp•	Пример: HASAN YILMAZ ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ<br><br>
                            <b>3. Оформление файлов:</b><br>
                            &nbsp&nbsp&nbsp•	Указанные выше документы должны быть собраны в папке, названной по фамилии водителя, и упакованы в ZIP-формат.<br>
                            &nbsp&nbsp&nbsp•	Пример: HASAN YILMAZ.zip<br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> В письме обязательно укажите, имеется ли разрешение на въезд для водителя Akkuyu NGS.<br><br>
                            <b>Доставка документов и отправка электронных писем</b><br>
                            &nbsp&nbsp&nbsp•	Документы должны быть отправлены по электронной почте.<br>
                            &nbsp&nbsp&nbsp•	В теме письма должно быть указано "Однократный въезд для транспортных средств", а также имя, фамилия первого сотрудника и количество транспортных средств.<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•	Пример: 6 ЧЕЛОВЕК - ОДНОКРАТНЫЙ ВЪЕЗД ДЛЯ ТРАНСПОРТНЫХ СРЕДСТВ - ERDOĞAN YÜCEOĞLU - 33 ABC 123<br>
                            &nbsp&nbsp&nbsp•	К письму должны быть прикреплены Excel-форма "Однократный въезд для транспортных средств" и файл регистрации транспортного средства с именем, указанным по номеру его номера.<br><br>
                            Следуя указанным выше этапам и используя приведенный формат запроса транспортных средств, вы можете завершить свой запрос на транспортное средство.<br><br>
                        </p>
                    </div>
                </div>
            </div>
        </div>                            
    </div>`,
    },
    aylikJeton: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">1 Aylık Jeton Talebi</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br><br>Akkuyu Nükleer Güç Sahasına Malzeme Girişi ve Jeton Kartı Başvuru Talimatları<br><br>
                            <b>1. Jeton Kartı Başvurusu</b><br>
                            Akkuyu Nükleer Güç Sahasına sürekli giriş-çıkış yapacak veya yapılacak kısa süreli malzemeler için 1 aylık Jeton Kartı basılmaktadır. 
                            Süresi dolmuş olan Jeton Kartlarınızı yeniletmek için yeniden başvuru oluşturmanız gerekmektedir.<br><br>
                            <u style="color: red;"><b>Not:</b></u> Sarf malzemeleri (örneğin, vida, sprey boya vb.) için Jeton Kartı basılmamaktadır.<br><br>
                            <b>2. Malzeme Girişi için Gereklilikler</b><br>
                            &nbsp&nbsp&nbsp •	Elektrik-Sıhhi Tesisat, Jeodezi Ekipmanları, Kamp Malzemeleri, Kontrol ve Ölçüm Ekipmanları, Yemekhane Malzemeleri için, malzemelerin 
                            nerede ve ne amaçla kullanılacağı belirtilmeli ve malzemelerin fotoğrafları eklenerek aşağıdaki kişilere mail atılmalıdır:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Sevinç Kara <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Rıfat Sefa Küçük <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a><br><br>
                            &nbsp&nbsp&nbsp •	Kamera ve Drone Malzemeleri için, ilgili kişilere mail atılması gerekmektedir:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Berkay Oflaz <a href="mailto:berkay.oflaz@t2ic.com">berkay.oflaz@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Boris Popov'a <a href="mailto:boris.popov@t2ic.com">boris.popov@t2ic.com</a><br><br>
                            &nbsp&nbsp&nbsp •	Elektronik Malzemeler için Jeton talebinde bulunulacaksa, aşağıdaki firmalar ve kişilerden onay alınmalıdır:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Firmalar: EGN, AKKUYU TRST, AKKUYU TST, İÇTAŞ NÜKLEER, İÇTUR SERVİS, İÇTAŞ ENDÜSTRİEL, TİTAN-2, T2-IC JV, TSM ENERJI, ELENİA TRUZİM<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	E-posta Adresleri: <a href="mailto:office@t2ic.com">office@t2ic.com</a> , Andrei Shevchenko <a href="mailto:andrei.shevchenko@t2ic.com">andrei.shevchenko@t2ic.com</a><br><br>
                            Andrei Shevchenko Bey'in onayı sonrasında, açıklama kısmına malzeme hakkında detaylı bilgi (fotoğraf, sahaya giriş-çıkış sebebi vb.) eklenmeli ve mailin konu kısmına 
                            "FİRMA JETON TALEBİ HK" yazılmalıdır. Örnek: NAZIM İNŞAAT JETON TALEBİ HK. Mailin, Sevinç Kara <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a> 
                            ve Rıfat Sefa Küçük <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> adreslerine gönderilmesi gerekmektedir.<br><br>
                            <b>3. Yeni Pasaport ile Jeton Kartı Başvurusu</b><br>
                            JJeton kartı başvurusu yapılan personelin pasaportu değişmişse, başvurunun işleme alınabilmesi için aşağıdaki işlemlerin yapılması gerekmektedir:<br>
                            Başvuru için gerekli evraklar:<br>
                            &nbsp&nbsp&nbsp •  Personelin fotoğrafı.<br>
                            &nbsp&nbsp&nbsp •  Eski ve yeni pasaportların ilk sayfalarının taranmış kopyaları.<br>
                            &nbsp&nbsp&nbsp •  SGK 4A işe giriş çıkış bildirgesi (İnsan Kaynakları tarafından veya e-Devlet üzerinden alınabilir).<br>
                            &nbsp&nbsp&nbsp •  Mavi kimlik arkalı önlü taraması (ya da başvuru formu ve ekran görüntüsü; görevlendirme ile geliyorsa, görevlendirme belgesi ve çalışma defteri).<br><br>
                            Yukarıdaki belgeler <a href="mailto:tugbahan.karakaya@t2ic.com">tugbahan.karakaya@t2ic.com</a> , <a href="mailto:muslum.elibol@t2ic.com">muslum.elibol@t2ic.com</a> ve <a href="mailto:ezgi.kaygisiz@t2ic.com">ezgi.kaygisiz@t2ic.com</a> adreslerine iletilmelidir. 
                            Mailin konu kısmına "NEW PASSPORT/YENİ PASAPORT" yazılmalıdır. Ayrıca, eski giriş kartının teslim edilmesi gerekmektedir.<br><br>
                            <b>Adres:</b> Akkuyu ABK Binaları yanındaki Modül 3, 2 katlı Güvenlik Departmanı binası.<br><br>
                            <b>4. Bilgi Eksiklikleri ve Dikkat Edilmesi Gerekenler</b><br>
                            &nbsp&nbsp&nbsp •	Marka, Model, Seri No ve Renk bölümlerinin tam ve doğru şekilde doldurulması zorunludur. Bu bilgilerin eksik bırakılmaması gerekmektedir.<br>
                            &nbsp&nbsp&nbsp •	Sadece belirtilen firmalar yukarıdaki başvuru prosedürlerine uygun olarak işlem yapmalıdır.<br><br>
                            Jeton kartı başvuruları, yukarıda belirtilen adımlar dikkate alınarak ve gerekli tüm belgeler ile tamamlanmalıdır.<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> Sadece belirtilen firmalar aşağıda verilen mektubu içeriğinde yazan notlara dikkat ederek doldurulmalıdır.<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> Marka, Model, Seri No ve Renk bölümlerinde bilgi verilmesi zorunludur. Lütfen bu bilgileri boş bırakmayınız.<br><br>
                            <img src="./static/img/9.jpg"><br><br>
                            Ek olarak, aşağıda belirtilen Excel dosyası aşağıdaki kurallara dikkat edilerek doldurulmalıdır:<br>
                            &nbsp&nbsp&nbsp •  Personele yazılacak jeton talebi, TC kimlik numarası ile kart bilgilerine göre yapılmalıdır.<br>
                            &nbsp&nbsp&nbsp •  Yabancı personeller için "Zagran" pasaport numarasının yazılması zorunludur.<br>
                            &nbsp&nbsp&nbsp •  Çalışma kimlik numarası ile yapılan başvurular dikkate alınmayacaktır (99 ile başlayan çalışma kimlik numaraları).<br>
                            &nbsp&nbsp&nbsp •  Akkuyu giriş kartı olmayan personellerin jeton kartı başvuruları işleme alınmayacaktır.<br>
                            &nbsp&nbsp&nbsp •  Akkuyu giriş kartı firması ile jeton kartı firması aynı olmalıdır. Aksi durumda, giriş kartı firma değişikliği olarak yeniden düzenlenmelidir.<br><br>
                            <img src="./static/img/11.jpg"><br><br>
                            Gerekli Evraklar:<br>
                            &nbsp&nbsp&nbsp •  Jeton Başvuru Excel Dosyası<br>
                            &nbsp&nbsp&nbsp •  Mektup (Rusça-Türkçe) – Belirtilen Firmalar için<br>
                            &nbsp&nbsp&nbsp •  Personelin Akkuyu Giriş Kartı Fotoğrafı<br><br>
                            <u style="color: red;"><b>NOT:</b></u>  Eksik bilgi içeren talepler işleme alınmayacaktır.<br>
                        </p>
                    </div>
                </div>
            </div>
        </div>  
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Запрос токена на 1 месяц</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br><br>Инструкции по подаче заявок на карту для входа на Атомную электростанцию Аккую и заявку на жетон<br><br>
                            <b>1. Заявка на карту жетона</b><br>
                            Для постоянного входа-выхода на Атомную электростанцию Аккую или для временных материалов выдается карта жетона на 1 месяц. 
                            Для продления карты жетона после истечения срока действия необходимо подать новую заявку.<br><br>
                            <u style="color: red;"><b>Примечание:</b></u> Для расходных материалов (например, винтов, аэрозольной краски и т. д.) карта жетона не выдается.<br><br>
                            <b>2. Требования для ввоза материалов</b><br>
                            &nbsp&nbsp&nbsp • Для Электрического-санитарного оборудования, геодезических приборов, кемпинговых материалов, контрольно-измерительных приборов, столовой посуды необходимо указать, 
                            где и с какой целью будут использоваться материалы, и отправить фотографии материалов по электронной почте следующим лицам:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Севинч Кара <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Рыфат Сефа Кючюк <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a><br><br>
                            &nbsp&nbsp&nbsp • Для материалов камеры и дронов необходимо отправить письмо следующим лицам:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Беркей Офлаз <a href="mailto:berkay.oflaz@t2ic.com">berkay.oflaz@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Борис Попов <a href="mailto:boris.popov@t2ic.com">boris.popov@t2ic.com</a><br><br>
                            &nbsp&nbsp&nbsp • Для электронных материалов, если требуется запрос на жетон, необходимо получить одобрение от следующих компаний и лиц:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Компании: EGN, AKKUYU TRST, AKKUYU TST, İÇTAŞ NÜKLEER, İÇTUR SERVİS, İÇTAŞ ENDÜSTRİEL, TİTАН-2, T2-IC JV, TSM ENERJI, ELENİA TRUZİM<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Электронные адреса: <a href="mailto:office@t2ic.com">office@t2ic.com</a>, Андрей Шевченко <a href="mailto:andrei.shevchenko@t2ic.com">andrei.shevchenko@t2ic.com</a><br><br>
                            После одобрения господином Андреем Шевченко в разделе "Описание" необходимо предоставить подробную информацию о материале (фото, причина входа/выхода на объект и т. д.), и в теме письма должно быть указано "ЗАЯВКА НА ЖЕТОН ОТ ФИРМЫ". Пример: ЗАЯВКА НА ЖЕТОН НАЗЫМ ИНШААТ. Письмо должно быть отправлено Севинч Кара <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a> и Рыфату Сефа Кючюк <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a>.<br><br>
                            <b>3. Заявка на жетон с новым паспортом</b><br>
                            Если у сотрудника изменился паспорт, для обработки заявки на жетон необходимо выполнить следующие действия:<br>
                            Необходимые документы для заявки:<br>
                            &nbsp&nbsp&nbsp • Фото сотрудника.<br>
                            &nbsp&nbsp&nbsp • Отсканированные копии первых страниц старого и нового паспорта.<br>
                            &nbsp&nbsp&nbsp • Отчет о начале и окончании работы по SGK 4A (можно получить через кадровую службу или через электронное правительство).<br>
                            &nbsp&nbsp&nbsp • Скан задней и передней стороны синего удостоверения личности (или форма заявки и скриншот; если с командировкой, то командировочное удостоверение и рабочая книжка).<br><br>
                            Указанные документы должны быть отправлены на электронные адреса <a href="mailto:tugbahan.karakaya@t2ic.com">tugbahan.karakaya@t2ic.com</a>, <a href="mailto:muslum.elibol@t2ic.com">muslum.elibol@t2ic.com</a> и <a href="mailto:ezgi.kaygisiz@t2ic.com">ezgi.kaygisiz@t2ic.com</a>. 
                            В теме письма должно быть указано "NEW PASSPORT/НОВЫЙ ПАСПОРТ". Также необходимо вернуть старую карту входа.<br><br>
                            <b>Адрес:</b> Модуль 3, 2-этажное здание службы безопасности рядом с зданиями ABK на Аккую.<br><br>
                            <b>4. Недостающая информация и важные моменты</b><br>
                            &nbsp&nbsp&nbsp • Все поля "Марка", "Модель", "Серийный номер" и "Цвет" должны быть заполены правильно и полно. Эти данные не должны быть пропущены.<br>
                            &nbsp&nbsp&nbsp • Только указанные фирмы должны следовать заявленной процедуре подачи заявки.<br><br>
                            Заявки на жетоны должны быть завершены с учетом вышеуказанных шагов и всех необходимых документов.<br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> Только указанные фирмы должны заполнять нижеуказанное письмо, учитывая комментарии, указанные в содержании.<br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> Заполнение полей "Марка", "Модель", "Серийный номер" и "Цвет" обязательно. Пожалуйста, не оставляйте эти данные пустыми.<br><br>
                            <img src="./static/img/9.jpg"><br><br>
                            Дополнительно, Excel-файл, указанный ниже, должен быть заполнен с учетом следующих правил:<br>
                            &nbsp&nbsp&nbsp • Запрос на жетон для сотрудника должен быть сделан на основе номера его идентификационного номера и данных карты.<br>
                            &nbsp&nbsp&nbsp • Для иностранных сотрудников необходимо указать номер паспорта "Zagran".<br>
                            &nbsp&nbsp&nbsp • Заявки, поданные с номерами рабочих удостоверений, начинающимися с 99, не будут приниматься во внимание.<br>
                            &nbsp&nbsp&nbsp • Заявки на жетоны для сотрудников, не имеющих карты входа на Аккую, не будут обработаны.<br>
                            &nbsp&nbsp&nbsp • Фирма для карты входа на Аккую должна совпадать с фирмой для жетона. В противном случае, карта входа должна быть изменена на фирму для жетона.<br><br>
                            <img src="./static/img/11.jpg"><br><br>
                            Необходимые документы:<br>
                            &nbsp&nbsp&nbsp • Excel-файл для заявки на жетон<br>
                            &nbsp&nbsp&nbsp • Письмо (на русском и турецком языках) – для указанных фирм<br>
                            &nbsp&nbsp&nbsp • Фото карты входа сотрудника на Аккую<br><br>
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Заявки с недостающей информацией не будут обрабатываться.<br>
                        </p>                                                
                    </div>
                </div>
            </div>
        </div>  
    </div>`,
    },
    yillikJeton: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">1 Yıllık Jeton Talebi</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br><br>Akkuyu Nükleer Güç Sahasına Malzeme Girişi ve Jeton Kartı Başvuru Talimatları<br><br>
                            <b>1. Jeton Kartı Başvurusu</b><br>
                            Akkuyu Nükleer Güç Sahasına düzenli giriş-çıkış yapacak veya yapılması planlanan malzemeler için JETON kartı verilmektedir. 
                            Bu kartlar, talep edilen yılın sonuna kadar geçerli olup, yıl başında yenilenmesi için tekrar talepte bulunulmalıdır.<br><br>
                            <u style="color: red;"><b>Not:</b></u> Sarf malzemeleri (örneğin, vida, sprey boya vb.) için Jeton Kartı basılmamaktadır.<br><br>
                            <b>2. Malzeme Girişi için Gereklilikler</b><br>
                            &nbsp&nbsp&nbsp •	Elektrik-Sıhhi Tesisat, Jeodezi Ekipmanları, Kamp Malzemeleri, Kontrol ve Ölçüm Ekipmanları, Yemekhane Malzemeleri için, malzemelerin 
                            nerede ve ne amaçla kullanılacağı belirtilmeli ve malzemelerin fotoğrafları eklenerek aşağıdaki kişilere mail atılmalıdır:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Sevinç Kara <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Rıfat Sefa Küçük <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a><br><br>
                            &nbsp&nbsp&nbsp •	Kamera ve Drone Malzemeleri için, ilgili kişilere mail atılması gerekmektedir:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Berkay Oflaz <a href="mailto:berkay.oflaz@t2ic.com">berkay.oflaz@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Boris Popov'a <a href="mailto:boris.popov@t2ic.com">boris.popov@t2ic.com</a><br><br>
                            &nbsp&nbsp&nbsp •	Elektronik Malzemeler için Jeton talebinde bulunulacaksa, aşağıdaki firmalar ve kişilerden onay alınmalıdır:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	Firmalar: EGN, AKKUYU TRST, AKKUYU TST, İÇTAŞ NÜKLEER, İÇTUR SERVİS, İÇTAŞ ENDÜSTRİEL, TİTAN-2, T2-IC JV, TSM ENERJI, ELENİA TRUZİM<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp •	E-posta Adresleri: <a href="mailto:office@t2ic.com">office@t2ic.com</a> , Andrei Shevchenko <a href="mailto:andrei.shevchenko@t2ic.com">andrei.shevchenko@t2ic.com</a><br><br>
                            Andrei Shevchenko Bey'in onayı sonrasında, açıklama kısmına malzeme hakkında detaylı bilgi (fotoğraf, sahaya giriş-çıkış sebebi vb.) eklenmeli ve mailin konu kısmına 
                            "FİRMA JETON TALEBİ HK" yazılmalıdır. Örnek: NAZIM İNŞAAT JETON TALEBİ HK. Mailin, Sevinç Kara <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a> 
                            ve Rıfat Sefa Küçük <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> adreslerine gönderilmesi gerekmektedir.<br><br>
                            <b>3. Yeni Pasaport ile Jeton Kartı Başvurusu</b><br>
                            JJeton kartı başvurusu yapılan personelin pasaportu değişmişse, başvurunun işleme alınabilmesi için aşağıdaki işlemlerin yapılması gerekmektedir:<br>
                            Başvuru için gerekli evraklar:<br>
                            &nbsp&nbsp&nbsp •  Personelin fotoğrafı.<br>
                            &nbsp&nbsp&nbsp •  Eski ve yeni pasaportların ilk sayfalarının taranmış kopyaları.<br>
                            &nbsp&nbsp&nbsp •  SGK 4A işe giriş çıkış bildirgesi (İnsan Kaynakları tarafından veya e-Devlet üzerinden alınabilir).<br>
                            &nbsp&nbsp&nbsp •  Mavi kimlik arkalı önlü taraması (ya da başvuru formu ve ekran görüntüsü; görevlendirme ile geliyorsa, görevlendirme belgesi ve çalışma defteri).<br><br>
                            Yukarıdaki belgeler <a href="mailto:tugbahan.karakaya@t2ic.com">tugbahan.karakaya@t2ic.com</a> , <a href="mailto:muslum.elibol@t2ic.com">muslum.elibol@t2ic.com</a> ve <a href="">ezgi.kaygisiz@t2ic.com</a> adreslerine iletilmelidir. 
                            Mailin konu kısmına "NEW PASSPORT/YENİ PASAPORT" yazılmalıdır. Ayrıca, eski giriş kartının teslim edilmesi gerekmektedir.<br><br>
                            <b>Adres:</b> Akkuyu ABK Binaları yanındaki Modül 3, 2 katlı Güvenlik Departmanı binası.<br><br>
                            <b>4. Bilgi Eksiklikleri ve Dikkat Edilmesi Gerekenler</b><br>
                            &nbsp&nbsp&nbsp •	Marka, Model, Seri No ve Renk bölümlerinin tam ve doğru şekilde doldurulması zorunludur. Bu bilgilerin eksik bırakılmaması gerekmektedir.<br>
                            &nbsp&nbsp&nbsp •	Sadece belirtilen firmalar yukarıdaki başvuru prosedürlerine uygun olarak işlem yapmalıdır.<br><br>
                            Jeton kartı başvuruları, yukarıda belirtilen adımlar dikkate alınarak ve gerekli tüm belgeler ile tamamlanmalıdır.<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> Sadece belirtilen firmalar aşağıda verilen mektubu içeriğinde yazan notlara dikkat ederek doldurulmalıdır.<br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> Marka, Model, Seri No ve Renk bölümlerinde bilgi verilmesi zorunludur. Lütfen bu bilgileri boş bırakmayınız.<br><br>
                            <img src="./static/img/9.jpg"><br><br>
                            Ek olarak, aşağıda belirtilen Excel dosyası aşağıdaki kurallara dikkat edilerek doldurulmalıdır:<br>
                            &nbsp&nbsp&nbsp •  Personele yazılacak jeton talebi, TC kimlik numarası ile kart bilgilerine göre yapılmalıdır.<br>
                            &nbsp&nbsp&nbsp •  Yabancı personeller için "Zagran" pasaport numarasının yazılması zorunludur.<br>
                            &nbsp&nbsp&nbsp •  Çalışma kimlik numarası ile yapılan başvurular dikkate alınmayacaktır (99 ile başlayan çalışma kimlik numaraları).<br>
                            &nbsp&nbsp&nbsp •  Akkuyu giriş kartı olmayan personellerin jeton kartı başvuruları işleme alınmayacaktır.<br>
                            &nbsp&nbsp&nbsp •  Akkuyu giriş kartı firması ile jeton kartı firması aynı olmalıdır. Aksi durumda, giriş kartı firma değişikliği olarak yeniden düzenlenmelidir.<br><br>
                            <img src="./static/img/10.jpg"><br><br>
                            Gerekli Evraklar:<br>
                            &nbsp&nbsp&nbsp •  Jeton Başvuru Excel Dosyası<br>
                            &nbsp&nbsp&nbsp •  Mektup (Rusça-Türkçe) – Belirtilen Firmalar için<br>
                            &nbsp&nbsp&nbsp •  Personelin Akkuyu Giriş Kartı Fotoğrafı<br><br>
                            <u style="color: red;"><b>NOT:</b></u>  Eksik bilgi içeren talepler işleme alınmayacaktır.<br>
                        </p>
                    </div>
                </div>
            </div>                                                                       
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Годовой жетон</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br><br>Инструкция по подаче заявки на вход материалов и жетоны для Akkuyu Nuclear Power Plant<br><br>
                            <b>1. Заявка на жетонный пропуск</b><br>
                            Для регулярного входа и выхода материалов на строительную площадку Akkuyu Nuclear Power Plant или тех, которые планируется ввести, выдается жетонный пропуск. 
                            Эти пропуска действительны до конца запрашиваемого года и должны быть обновлены в начале года по новой заявке.<br><br>
                            <u style="color: red;"><b>Примечание:</b></u> Жетонный пропуск не выдается для расходных материалов (например, винты, аэрозольные краски и т.д.).<br><br>
                            <b>2. Требования для ввода материалов</b><br>
                            &nbsp&nbsp&nbsp • Для электро-санитарного оборудования, геодезических приборов, лагерного оборудования, контрольно-измерительных приборов и материалов для столовой необходимо указать, где и для какой цели будут использоваться материалы, и отправить фото материалов на следующие адреса:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Севинч Кара <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Рыфат Сефа Кючюк <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a><br><br>
                            &nbsp&nbsp&nbsp • Для материалов для камер и дронов необходимо отправить письмо соответствующим лицам:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Беркай Офлаз <a href="mailto:berkay.oflaz@t2ic.com">berkay.oflaz@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Борис Попов <a href="mailto:boris.popov@t2ic.com">boris.popov@t2ic.com</a><br><br>
                            &nbsp&nbsp&nbsp • Для запроса жетона для электронных материалов необходимо получить одобрение у следующих компаний и лиц:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Компании: EGN, AKKUYU TRST, AKKUYU TST, İÇTAŞ NÜKLEER, İÇTUR SERVİS, İÇTAŞ ENDÜSTRİEL, TİTAN-2, T2-IC JV, TSM ENERJI, ELENİA TRUZİM<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp • Электронные адреса: <a href="mailto:office@t2ic.com">office@t2ic.com</a>, Андрей Шевченко <a href="mailto:andrei.shevchenko@t2ic.com">andrei.shevchenko@t2ic.com</a><br><br>
                            После одобрения Андреем Шевченко в разделе объяснений должны быть добавлены подробности о материале (фото, причина для входа/выхода на площадку и т.д.), а в теме письма должно быть написано "ЗАПРОС ЖЕТОНА ОТ КОМПАНИИ". Пример: "ЗАПРОС ЖЕТОНА NAZIM İNŞAAT". Письмо должно быть отправлено Севинч Кара <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a> и Рыфату Сефа Кючюку <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a>.<br><br>
                            <b>3. Заявка на жетонный пропуск с новым паспортом</b><br>
                            Если у сотрудника, подающего заявку на жетон, был изменен паспорт, необходимо выполнить следующие действия для обработки заявки:<br>
                            Необходимые документы для заявки:<br>
                            &nbsp&nbsp&nbsp • Фотография сотрудника.<br>
                            &nbsp&nbsp&nbsp • Отсканированные копии первых страниц старого и нового паспортов.<br>
                            &nbsp&nbsp&nbsp • Документ SGK 4A о приеме на работу (можно получить через Управление человеческими ресурсами или через e-Devlet).<br>
                            &nbsp&nbsp&nbsp • Скан синих удостоверений личности с двух сторон (или форма заявки и снимок экрана; если приехал по назначению, необходимо предоставить документ о назначении и рабочую книжку).<br><br>
                            Эти документы должны быть отправлены на адреса: <a href="mailto:tugbahan.karakaya@t2ic.com">tugbahan.karakaya@t2ic.com</a>, <a href="mailto:muslum.elibol@t2ic.com">muslum.elibol@t2ic.com</a> и <a href="maito:ezgi.kaygisiz@t2ic.com">ezgi.kaygisiz@t2ic.com</a>. Тема письма должна быть "NEW PASSPORT/YENİ PASAPORT". Также необходимо сдать старую пропускную карту.<br><br>
                            <b>Адрес:</b> Модуль 3, двухэтажное здание охраны рядом с зданиями Akkuyu ABK.<br><br>
                            <b>4. Недостающая информация и важные замечания</b><br>
                            &nbsp&nbsp&nbsp • Разделы о марке, модели, серийном номере и цвете должны быть заполнены полностью и правильно. Эти данные не должны быть оставлены пустыми.<br>
                            &nbsp&nbsp&nbsp • Только указанные компании должны действовать в соответствии с вышеописанными процедурами подачи заявок.<br><br>
                            Заявки на жетоны должны быть завершены с учетом всех вышеуказанных шагов и при наличии всех необходимых документов.<br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> Только указанные компании должны заполнять письмо, соблюдая указанные в нем замечания.<br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> В разделе о марке, модели, серийном номере и цвете должна быть указана информация. Пожалуйста, не оставляйте эти поля пустыми.<br><br>
                            <img src="./static/img/9.jpg"><br><br>
                            Кроме того, нижеуказанный файл Excel должен быть заполнен с учетом следующих правил:<br>
                            &nbsp&nbsp&nbsp • Заявка на жетон для сотрудника должна быть сделана на основе его номера TC и данных о пропуске.<br>
                            &nbsp&nbsp&nbsp • Для иностранных сотрудников обязательно указывать номер паспорта "Zagran".<br>
                            &nbsp&nbsp&nbsp • Заявки, сделанные с рабочими идентификационными номерами, начинающимися с 99, не будут учитываться.<br>
                            &nbsp&nbsp&nbsp • Заявки на жетоны для сотрудников без пропусков Akkuyu не будут обработаны.<br>
                            &nbsp&nbsp&nbsp • Компания, выдавшая пропуск для Akkuyu, должна быть той же компанией, которая выдает жетоны. В противном случае необходимо внести изменения в компанию, выдавшую пропуск.<br><br>
                            <img src="./static/img/10.jpg"><br><br>
                            Необходимые документы:<br>
                            &nbsp&nbsp&nbsp • Excel-файл заявки на жетоны<br>
                            &nbsp&nbsp&nbsp • Письмо (на русском и турецком языках) – для указанных компаний<br>
                            &nbsp&nbsp&nbsp • Фото пропускной карты сотрудника для Akkuyu<br><br>
                            <u style="color: red;"><b>ПРИМЕЧАНИЕ:</b></u> Заявки с недостающей информацией не будут обработаны.<br>
                        </p>                                                
                    </div>
                </div>
            </div>                                                                       
        </div>
    </div>`,
    },
    jetoniptali: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Jeton İptali</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br><br>Firmanızda kullanılan jeton kartlarından herhangi birinin kullanılmaz hale gelmesi veya personelinizin işten ayrılması durumunda, 
                            ilgili jeton kartlarının iptali ve tarafımıza bildirilmesi gerekmektedir. Bu durumda, iptal talebinizi Sevinç Kara 
                            <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a> ve Rıfat Sefa Küçük <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a>adreslerine e-posta yoluyla iletiniz.<br><br> 
                            İptal edilmesi gereken jeton kartı/kartları Güvenlik Departmanı ofisinde Sevinç Kara veya Rıfat Sefa Küçük'e elden teslim edilmelidir.<br><br>
                            Ayrıca, aşağıda yer alan jeton kartı iptal excel formunu doldurarak belirtilen e-posta adreslerine göndermenizi rica ederiz. 
                            Gerekli belgeler ulaştıktan sonra jeton kartı iptal işlemi gerçekleştirilecektir.<br><br>
                        </p>
                        <img src="./static/img/8.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Аннулирование жетона</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br><br>Если один из используемых в вашей компании жетонных карт становится непригодным или ваш сотрудник увольняется, необходимо отменить соответствующие жетонные карты и уведомить нас. В этом случае отправьте ваш запрос на отмену по электронной почте Севинч Кары <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a> и Рыфату Сефе Кючюк <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a>.<br><br>
                            Жетонная карта(ы), которую(ые) необходимо отменить, должны быть переданы лично Севинч Кары или Рыфату Сефе Кючюку в офисе службы безопасности.<br><br>
                            Также просьба заполнить прилагаемую форму отмены жетонных карт в Excel и отправить ее на указанные электронные адреса. После получения необходимых документов будет выполнена процедура отмены жетонных карт.<br><br>
                        </p>                                                
                        <img src="./static/img/8.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    },
    kayipjeton: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Kayıp Jeton İşlemleri</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br><br>Firmanızda kullanılan jeton kartlarından herhangi biri kaybolduğunda, bu durumun tarafımıza bildirilmesi zorunludur.<br><br>
                            Lütfen bu bildirim için Sevinç Kara <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a> ve Rıfat Sefa Küçük <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a> adreslerine e-posta gönderiniz.<br><br>
                            Kaybolan jeton kartının iptal işleminin gerçekleştirilebilmesi için, aşağıdaki pdf örneğine uygun şekilde firmanızın antetli kağıdına, kartın kaybolduğuna dair bir 
                            yazı hazırlayınız. Bu yazıda:<br>
                            &nbsp&nbsp&nbsp •	Kayıp jeton kartının sahibinin adı, soyadı ve imzası,<br>
                            &nbsp&nbsp&nbsp •	Firmanızın kaşesi,<br>
                            &nbsp&nbsp&nbsp •	Yetkili kişinin imzası<br>
                            bulunmalıdır.<br><br>
                        <img src="./static/img/7.jpg"><br><br>
                        Ek olarak, aşağıdaki Jeton Kartı İptal Excel dosyasını doldurarak yukarıda belirtilen e-posta adreslerine iletmeniz gerekmektedir. Gerekli belgelerin tarafımıza ulaşmasının 
                        ardından, jeton kartı iptal işlemi gerçekleştirilecektir.<br><br>
                        <img src="./static/img/8.jpg">
                    </p>
                    </div>
                </div>
            </div>                                                                       
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Аннулирование потерянного жетона</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <<p><br><br>Если один из используемых в вашей компании жетонных карт потерян, необходимо сообщить об этом нам.<br><br>
                            Пожалуйста, отправьте уведомление по электронной почте Севинч Кары <a href="mailto:sevinc.kara@t2ic.com">sevinc.kara@t2ic.com</a> и Рыфату Сефе Кючюк <a href="mailto:rifat.kucuk@t2ic.com">rifat.kucuk@t2ic.com</a>.<br><br>
                            Для того чтобы была выполнена отмена потерянной жетонной карты, подготовьте письмо на бланке вашей компании, в котором будет указано, что карта потеряна, в соответствии с приведенным ниже примером в формате PDF. В письме должны быть указаны:<br>
                            &nbsp&nbsp&nbsp • Имя, фамилия и подпись владельца потерянной жетонной карты,<br>
                            &nbsp&nbsp&nbsp • Печать вашей компании,<br>
                            &nbsp&nbsp&nbsp • Подпись уполномоченного лица<br><br>
                        </p>
                        <img src="./static/img/7.jpg"><br><br>
                        <p>Кроме того, вам нужно заполнить прилагаемый файл Excel для отмены жетонных карт и отправить его на вышеуказанные электронные адреса. После получения необходимых документов будет выполнена процедура отмены жетонной карты.<br><br>
                            <img src="./static/img/8.jpg">
                        </p>                                                
                    </div>
                </div>
            </div>                                                                       
        </div>
    </div>`,
    },
    abk: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">90VAA-91VAA ABK Binaları Giriş Prosedürü</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br>90VAA-91VAA ABK binalarına giriş yapabilmek için gerekli prosedürlerin uygulanması rica olunur.<br><br>
                            <b>Evrak Teslimi</b><br>
                            &nbsp&nbsp&nbsp•	"ABK Binalarına Giriş İzin Listesi" Excel dosyasının eksiksiz ve doğru bir şekilde doldurulması gerekmektedir.<br>
                            &nbsp&nbsp&nbsp•	Doldurulan Excel dosyası ve PDF formatındaki taraması, aşağıdaki e-posta adreslerine gönderilmelidir:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•		<a href='mailto:nedim.tolunay@t2ic.com'>nedim.tolunay@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•		<a href='mailto:semih.alioglu@t2ic.com'>semih.alioglu@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•		<a href='mailto:id@t2ic.com'>id@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp•	E-postanın konusu şu şekilde olmalıdır: 'Новая процедура подачи заявки в здания АБК 2025 _ ABK binaları için yeni başvuru prosedürü 2025'.<br>
                            &nbsp&nbsp&nbsp•	<b>İmzalı Evrağı Fiziken Teslim Ediniz: Islak imzalı orijinal belgenizi JV Güvenlik Departmanı'na elden teslim etmeniz gerekmektedir.</b><br><br>
                            <u style="color: red;"><b>ÖNEMLİ:</b></u> Evraklar tarafımıza teslim edildikten sonra işlemler başlatılacak olup, onay alındığında tarafınıza e-posta yoluyla 
                            bilgilendirme yapılacaktır.<br><br>
                            <b>Alan Doldurma Talimatları:</b><br>
                            <b>1. "FİRMA ADI"</b> bölümüne, personelin saha giriş kartında yazılı olan firma bilgisinin Türkçe karşılığını yazınız.<br>
                            <b>2. "НАЗВАНИЕ ОРГАНИЗАЦИИ"</b> bölümüne, personelin saha giriş kartında yazılı olan firma bilgisinin Rusça karşılığını yazınız.<br>
                            <b>3. "AD SOYAD / ИМЯ ФАМИЛИЯ"</b> bölümüne, personelin saha giriş kartında yazılı olan ad soyad bilgisini giriniz.<br>
                            <b>4. "KART NUMARASI / НОМЕР КАРТЫ"</b> bölümüne, personelin saha giriş kartında yazılı olan numarayı giriniz.<br>
                            <p style="color: red;"><b><u>ÖNEMLİ: Kart üzerinde ok ile belirtilmiş "KART NO" bölümünde yer alan numarayı yazınız. "ID No" kısmındaki
                                numarayı kesinlikle YAZMAYINIZ.</u></b></p>
                            <img src="./static/img/kart.png" style="width: 40%; height: 40%"><br><br>
                            <b>5. "TC/PAS.NO - ТС/ЗАГРАН ПАСПОРТ"</b> bölümüne, türk personel için TC Kimlik numarası ,yabancı personel için Pasaport numarasını yazınız.<br>
                            <b>6. "GÖREVİ / ДОЛЖНОСТЬ"</b> bölümüne, personelin görevini belirtiniz.<br>
                            <b>7. "GELİŞ AMACI / ЦЕЛЬ ПРИХОДА"</b> bölümüne, ABK binalarında görüşeceğiniz yetkilinin adı, soyadı ve görüşme amacını belirtiniz.<br>
                            <b>8. "GELIŞ SIKLIĞI / ЧАСТОТА ВИЗИТА"</b> bölümüne, ABK binalarına ne sıklıkla girileceğini belirtiniz.<br>
                            <b>9. "GELECEĞİ BİRİM / В КАКОЙ ОТДЕЛ ПРИХОДИТ"</b> bölümüne, ABK binalarında görüşeceğiniz yetkilinin birimini belirtiniz.<br>
                            <b>10. "GELECEĞİ BİRİM MÜDÜRÜ İMZASI / ПОДПИСЬ ЗАИНТЕРЕСОВАННОГО ОТДЕЛА АККУЮ"</b> bölümü, imzalayan kişi, mutlaka imzanın altına isim ve soyismini yazmalıdır.<br><br>
                            <img src="./static/img/abk.jpg"><br><br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Процедура снятия блокировки через 90 дней</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div id="faq-1-1" class="accordion-collapse collapse show" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p><br>Для доступа в здания 90VAA-91VAA ABK необходимо выполнить следующие процедуры:<br><br>
                            <b>Подача документов</b><br>
                            &nbsp&nbsp&nbsp•	Необходимо правильно и полностью заполнить Excel-файл "Список разрешений на вход в здания ABK".<br>
                            &nbsp&nbsp&nbsp•	Заполненный Excel-файл и его отсканированную копию в формате PDF необходимо отправить на следующие электронные адреса:<br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•		<a href='mailto:nedim.tolunay@t2ic.com'>nedim.tolunay@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•		<a href='mailto:semih.alioglu@t2ic.com'>semih.alioglu@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•		<a href='mailto:id@t2ic.com'>id@t2ic.com</a><br>
                            &nbsp&nbsp&nbsp•	Тема письма должна быть следующей: 'Новая процедура подачи заявки в здания АБК 2025 _ ABK binaları için yeni başvuru prosedürü 2025'.<br>
                            &nbsp&nbsp&nbsp•	<b>Передача подписанного документа: оригинал документа с мокрой подписью необходимо передать лично в отдел безопасности JV.</b><br><br>
                            <u style="color: red;"><b>ВАЖНО:</b></u> После передачи документов начнется процесс их обработки, и после одобрения вы будете уведомлены по электронной почте.<br><br>
                            <b>Инструкции по заполнению полей:</b><br>
                            <b>1. В разделе "FİRMA ADI"</b> укажите название компании, указанное на пропускной карте сотрудника, на турецком языке.<br>
                            <b>2. В разделе "НАЗВАНИЕ ОРГАНИЗАЦИИ"</b> укажите название компании, указанное на пропускной карте сотрудника, на русском языке.<br>
                            <b>3. В разделе "AD SOYAD / ИМЯ ФАМИЛИЯ"</b> введите имя и фамилию сотрудника, указанные на пропускной карте.<br>
                            <b>4. В разделе "KART NUMARASI / НОМЕР КАРТЫ"</b> введите номер, указанный на пропускной карте сотрудника.<br>
                            <p style="color: red;"><b><u>ВАЖНО: Укажите номер, указанный в разделе "КАРТЫ НОМЕР" с указателем. Никогда не указывайте номер из раздела "ID No".</u></b></p>
                            <img src="./static/img/kart.png" style="width: 40%; height: 40%"><br><br>
                            <b>5. В разделе "TC/PAS.NO - ТС/ЗАГРАН ПАСПОРТ"</b> укажите номер удостоверения личности для турецких сотрудников или номер заграничного паспорта для иностранных сотрудников.<br>
                            <b>6. В разделе "GÖREVİ / ДОЛЖНОСТЬ"</b> укажите должность сотрудника.<br>
                            <b>7. В разделе "GELİŞ AMACI / ЦЕЛЬ ПРИХОДА"</b> укажите имя, фамилию и цель встречи с ответственным лицом в зданиях ABK.<br>
                            <b>8. В разделе "GELIŞ SIKLIĞI / ЧАСТОТА ВИЗИТА"</b> укажите частоту посещения зданий ABK.<br>
                            <b>9. В разделе "GELECEĞİ BİRİM / В КАКОЙ ОТДЕЛ ПРИХОДИТ"</b> укажите отдел ответственного лица, с которым будет проводиться встреча в зданиях ABK.<br>
                            <b>10. В разделе "GELECEĞİ BİRİM MÜDÜRÜ İMZASI / ПОДПИСЬ ЗАИНТЕРЕСОВАННОГО ОТДЕЛА АККУЮ"</b> подписавший должен обязательно указать имя и фамилию под подписью.<br><br>
                            <img src="./static/img/abk.jpg"><br><br>
                        </p>
                    </div>
                </div>
            </div>
        </div> 
    </div>`,
    },
    teslimnoktalari: {
        tr: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Teslim, İşlem Noktaları</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="false">Güvenlik Ofisi Konumu</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p class="ps-4">
                                <img src="./static/img/38.png"><br><br>
                            Güvenlik Ofisi, yandaki haritada kırmızı renkle işaretlenmiş olan 90VAA-91VAA ABK Akkuyu Nükleer binalarının yanında yer almaktadır.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Vizitör Kart Teslim Noktası</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Akkuyu Nükleer sahasına giriş yapacak ziyaretçilerin vizitör kartlarını teslim alacakları konteyner ofis, Akkuyu ana nizamiye(4 Nolu Kapı) turnike kapılarının 
                            önünde yer almaktadır.<br><br>
                            Sahaya giriş esnasında, aşağıda belirtilen Vizitör-Ziyaretçi konteynerine kimlik veya pasaportunuzu görevliye teslim etmeniz gerekmektedir. 
                            Eğer vizitör giriş talebiniz onaylanmışsa, size bir vizitör giriş kartı verilecektir ve bu kart ile sahaya giriş yapabilirsiniz.<br><br> 
                            Sahadan çıkış yaptığınızda ise, vizitör kartınızı tekrar Vizitör-Ziyaretçi konteynerine iade ederek kimlik veya pasaportunuzu geri alabilirsiniz.
                        </p><br>
                        <img src="./static/img/30.jpg"><br><br>
                        <img src="./static/img/29.jpg"><br><br>
                        <img src="./static/img/nizamiye.png"><br><br>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="false">Personel Kart, Araç Kart, Jeton Kart Dağıtım Noktası</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Basılan Akkuyu Personel Giriş Kartınızı, Araç Kartınızı veya Jeton Kartınızı, Akkuyu ana nizamiyede(4 Nolu Kapı) kırmızı ok ile gösterilen dağıtım noktasından teslim alabilirsiniz.
                        </p><br>
                        <img src="./static/img/35k.jpg"><br><br>
                        <img src="./static/img/32.jpg"><br><br>
                        <img src="./static/img/36.jpg"><br><br>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="false">Malzeme Evrağı Teslim Noktası</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Akkuyu Nükleer sahasına giriş ve çıkış yapılacak tüm malzemelerin evrak kayıt ve kontrol işlemleri bu noktada yapılmaktadır. Malzemeleriniz, evraklarınızla birlikte 
                            görevliler tarafından gerekli kontrollerden geçirildikten sonra geçişe izin verilecektir.                                               
                        </p>
                        <img src="./static/img/35.jpg"><br><br>
                        <img src="./static/img/34.jpg"><br><br>
                        <img src="./static/img/31.jpg"><br><br>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
        ru: `<div class="space-y-4">
        <i class="mb-3 mt-3 fw-bold fs-3 ps-2">Пункты выдачи жетонов</i>
        <div id="faq-1" class="accordion" role="tablist" aria-multiselectable="true">
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-1" aria-expanded="false">Местоположение Офиса Безопасности</button>
                </div>
                <div id="faq-1-1" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p class="ps-4">
                                <img src="./static/img/38.png"><br><br>
                            Офис безопасности расположен рядом с зданиями 90VAA-91VAA ABK Akkuyu Nuclear, которые помечены красным цветом на карте.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-2" aria-expanded="false">Пункт получения визитной карты</button>
                </div>
                <div id="faq-1-2" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Для посетителей Akkuyu Nuclear, пункт получения визитных карт расположен перед основными турникетами входа в Akkuyu.<br><br>
                        Для входа на территорию, необходимо передать свою личность или паспорт сотруднику в контейнере для визитеров. Если ваша заявка на вход будет одобрена, вам будет выдана визитная карта, с которой вы сможете пройти на территорию.<br><br>
                        При выходе с территории, визитная карта должна быть возвращена в контейнер для визитеров, и вы получите свой паспорт или удостоверение личности обратно.</p><br>
                        <img src="./static/img/30.jpg"><br><br>
                        <img src="./static/img/29.jpg"><br><br>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-3" aria-expanded="false">Пункт выдачи карт для персонала, автомобилей и жетонов</button>
                </div>
                <div id="faq-1-3" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Ваши персональные карты Akkuyu, автомобильные карты или жетоны можно получить в пункте выдачи, расположенном на главном КПП Akkuyu, который помечен красной стрелкой.</p><br>
                        <img src="./static/img/35k.jpg"><br><br>
                        <img src="./static/img/32.jpg"><br><br>
                        <img src="./static/img/36.jpg"><br><br>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" role="tab">
                    <button class="accordion-button fs-3 collapsed fw-bolder" data-bs-toggle="collapse" data-bs-target="#faq-1-4" aria-expanded="false">Пункт сдачи материалов</button>
                </div>
                <div id="faq-1-4" class="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                    <div class="accordion-body pt-0">
                        <p>Процедуры регистрации и контроля всех материалов, которые будут перемещены на территорию Akkuyu Nuclear, проводятся на этом пункте. Ваши материалы будут проверены сотрудниками вместе с документами, и после этого будет разрешен проход.</p>
                        <img src="./static/img/35.jpg"><br><br>
                        <img src="./static/img/34.jpg"><br><br>
                        <img src="./static/img/31.jpg"><br><br>
                    </div>
                </div>
            </div>                                    
        </div>
    </div>`,
    },
};

function loadPageContent(page, lang) {
    document.getElementById('page-content').innerHTML = pageContents[page][lang];
}