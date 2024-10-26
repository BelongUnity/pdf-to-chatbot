# Project Overview

Bu proje, kullanıcıların PDF dosyalarını yükleyerek dosya içeriğine dayalı bir chatbot oluşturabilecekleri açık kaynak bir web uygulamasıdır. OpenAI API'si ile entegre edilen uygulama, PDF'deki metni analiz eder ve kullanıcıların doğal dilde sorularına yanıt verebilen bir chatbot sağlar.

Hedefler:

- Kullanıcıların PDF belgelerindeki içeriği hızlıca analiz edebilmelerini sağlamak.
- PDF dosyalarından bilgi çıkarımı yaparak belgeyle ilgili soruları yanıtlayan bir chatbot oluşturmak.
- Minimum kurulum gereksinimi ile herkesin OpenAI API anahtarını ekleyerek kullanabileceği bir çözüm sunmak.

Öne Çıkan Özellikler:

- PDF Yükleme: Kullanıcı, analiz etmek istediği PDF dosyasını yükleyebilir.
- Chatbot Oluşturma: Yüklenen PDF içeriğine dayalı olarak OpenAI modeli üzerinden etkileşimli bir chatbot sağlanır.
- Kolay Kurulum: GitHub üzerinden erişilebilir olacak bu projede, kullanıcılar kendi OpenAI API anahtarlarını ekleyerek uygulamayı çalıştırabilir.

Bu yapı, iş ve araştırma alanında kullanıcıların PDF içeriğiyle daha etkileşimli ve verimli çalışabilmelerine olanak tanır.

Teknoloji Yığını:

Frontend:
- React
- Tailwind CSS
- Lucid Icons

Backend:
- Node.js
- Express

API Entegrasyonu:
- OpenAI API

Versiyon Kontrolü:
- GitHub

# Core Functionalities

Bu projede, PDF dosyalarını analiz etmek ve dosya içeriğine dayalı bir chatbot oluşturmak için gereken ana işlevler aşağıdaki gibidir:

PDF Yükleme ve Ön İşleme:
- Kullanıcılar, bir PDF dosyasını yükleyebilir.
- PDF içeriği okunur ve metin formatına dönüştürülür, gereksiz boşluklar ve işlenemeyen karakterler filtrelenir.

Metin Analizi ve Anlamlandırma:
- Yüklenen PDF'den anlamlı içerik çıkarılır ve parçalara ayrılır.
- OpenAI API'sine gönderilmek üzere içerik, uygun uzunlukta parçalara bölünür ve sorgu için hazırlanır.

Chatbot Arayüzü:
- Kullanıcıların doğal dilde sorular sorabilmesi için etkileşimli bir arayüz sunulur.
- Kullanıcının sorduğu sorular, PDF'den alınan bilgilere dayanarak OpenAI API aracılığıyla yanıtlanır.

OpenAI API Entegrasyonu:
- OpenAI API'si, yüklenen PDF içeriğiyle chatbot için sorulara yanıt verir.
- Kullanıcıların kendi OpenAI API anahtarlarını projeye entegre ederek kullanabilecekleri bir yapı sağlanır.

Güçlü Hata Yönetimi:
- Geçersiz PDF formatlarını, API bağlantı sorunlarını ve maksimum yanıt boyutunu aşan talepleri yönetmek için hata kontrolü yapılır.
- Kullanıcıya hata durumlarında açıklayıcı mesajlar sunulur.

Esnek Yapı ve Modüler Kod:
- Kolay güncellenebilir, özelleştirilebilir ve genişletilebilir bir yapıya sahip modüler kodlama yaklaşımı uygulanır.
- Proje, kullanıcının kendi ihtiyaçlarına göre kişiselleştirebileceği açık kaynak bir çözüm olarak sunulur.

# Documentation

Bu bölüm, projenin teknik yapısını ve kullanılan teknolojileri özetler:

Frontend:
- React: Kullanıcı arayüzünün oluşturulmasında kullanılan JavaScript kütüphanesi.
- Tailwind CSS: Projede stil uygulamaları için kullanılan CSS framework'ü.
- Lucid Icons: Kullanıcı arayüzüne simgeler eklemek için kullanılır.

Backend:
- Node.js & Express: Sunucu tarafı işlevselliği sağlamak için kullanılır. PDF yükleme, analiz ve OpenAI API'sine yapılan isteklerin yönetimi burada yapılır.

OpenAI API Entegrasyonu:
- Projenin kullanıcılarına, OpenAI tarafından sağlanan doğal dil işleme yeteneklerinden faydalanabilmeleri için kendi API anahtarlarını ekleme seçeneği sunar.

Version Control:
- GitHub: Projenin açık kaynaklı kod deposu olarak kullanılır; herkesin projeye erişip kendi API anahtarları ile çalıştırabilmesi sağlanır.

# Current File Structure

/pdf-chatbot
  /frontend
    /public
    /src
      /components
      /pages
      /styles
      App.js
      index.js
  /backend
    /src
      /controllers
      /routes
      /services
      /utils
      app.js
      server.js