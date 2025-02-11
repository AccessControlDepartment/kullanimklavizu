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
    about: {
        tr: `<h1>Hakkımızda</h1><p>Burası hakkımızda sayfasının Türkçe içeriğidir.</p>`,
        ru: `<h1>О нас</h1><p>Это русский контент страницы "О нас".</p>`
    },
    contact: {
        tr: `<h1>İletişim</h1><p>Bize ulaşın sayfasının Türkçe içeriğidir.</p>`,
        ru: `<h1>Контакты</h1><p>Это русский контент страницы "Контакты".</p>`
    }
};

function loadPageContent(page, lang) {
    document.getElementById('page-content').innerHTML = pageContents[page][lang];
}