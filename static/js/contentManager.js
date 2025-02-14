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
        tr: ``,
        ru: ``
    },
    ksureuzatma: {
        tr: ``,
        ru: ``
    },
    doksangunbloke: {
        tr: ``,
        ru: ``
    },
    vatandaslikdegisim: {
        tr: ``,
        ru: ``
    },
};

function loadPageContent(page, lang) {
    document.getElementById('page-content').innerHTML = pageContents[page][lang];
}