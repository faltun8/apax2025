'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import '../styles/ReviewSection.css'

const googleReviews = [
  {
    id: 1,
    name: "Furkan ALTUN",
    text: "Tamir isini herkes yapiyor ama bu derece guvenilir, icten ve yetkin kisi sayisi cok az. Herkese gokhan beyi tavsiye ediyorum. Ozellikle apple urunlerinde gercekten cok iyiler.",
    rating: 5,
    date: "25 dakika önce"
  },
  {
    id: 2,
    name: "Sencer Yılmaz",
    text: "Bütün işleri eksiksiz ve zamanında yapması ve güvenilirliğiyle daha fazla yıldız hakediyor",
    rating: 5,
    date: "3 hafta önce"
  },
  {
    id: 3,
    name: "Anıl Özcan",
    text: "İşini tam anlamıyla titizlikle yapıyor, çok memnun kaldım. Gözünüz kapalı güvenebilirsiniz. 15 yıllık bilgisayarımı 1 saatte ayağı kaldırdı. 10 yıldız olsa 10 veririm",
    rating: 5,
    date: "3 hafta önce"
  },
  {
    id: 4,
    name: "BBurak BBurak",
    text: "Verdiği bakım hizmetinden dolayı kendisine teşşekür ederim cihazın termal macununu değiştirdi ve sıcaklık olarak kasada ciddi bir fark oldu.",
    rating: 5,
    date: "3 hafta önce"
  },
  {
    id: 5,
    name: "Guntur Gunawan",
    text: "The repair was incredibly fast, and they managed to fix my laptop in no time. The communication was very good, he kept me updated throughout the process and explained everything clearly. I highly recommend their service for anyone looking for reliable repairs. Thank you so much Gokhan Bey.",
    rating: 5,
    date: "bir ay önce"
  },
  {
    id: 6,
    name: "Doğa Darı",
    text: "Bilgisayarım internete bağlanmıyordu, ve bu doğal olarak sıkıntı yaratıyordu, arama motorunda bilgisayarımı tamir ettirmek için yaptığım arama sonuçları arasında ilk gözüme çarpan yer burasıydı ( APAX BİLGİSAYAR HİZMETLERİ ). Sitede yazan iletişim numarasını aradım ve Gökhan Bey'le görüştüm, kendisi gayet nazik ve ilgiliydi. Bilgisayarımı götürdüm ve kısa sürede tamir edildi. Fiyat konusunda da gayet uygundu. Teşekkürler Gökhan Bey.",
    rating: 5,
    date: "3 ay önce"
  },
  {
    id: 7,
    name: "Yazgı Mutlu",
    text: "Gökhan Bey işinde çok başarılı ve titiz biri . Kullandığımız bilgisayarların hassasiyetine dikkat ederek en kısa sürede en iyi çözümü sunuyor. Hem evde kullandığım hem de işte kullandığımız bilgisayarları sürekli kendisine getiriyoruz. Güler yüzlü ve samimi yaklaşımı için de ayrıca teşekkür ederim.",
    rating: 5,
    date: "5 ay önce"
  },
  {
    id: 8,
    name: "Aydın Burak Kuyumcu",
    text: "Gökhan abi gayet işini iyi bilen, soru sorduğunuzda sizi çok iyi bilgilendiren ve sorununuzu hızlıca ve profesyonelce çözmesinden  dolayı çok memun kaldım. Teşekkür ederim.",
    rating: 5,
    date: "7 ay önce"
  },
  {
    id: 9,
    name: "Kaan Güryuva",
    text: "Gökhan abi gayet işini bilen nerede ne yapılması gerektiğini bilen ve istediğiniz soruyu sorup sizi gerçekten insan yerine koyup düzgün cevap veren bir insan.",
    rating: 5,
    date: "11 ay önce"
  },
  {
    id: 10,
    name: "Ahmet Şengül",
    text: "Gökhan Bey'e şirketimizde bulunan 4 dizüstü bilgisayarı 2 tanesi harap şeklinde olmasına rağmen çok temiz şekilde kullanır hale getirdi.İşçiliğini ve dürüstlüğünü çok beğendiğim Gökhan Bey'e hiç şüphe duymadan güvenilir  bir şekilde teslim edebilirsiniz.Teşekkür ederiz.",
    rating: 5,
    date: "bir yıl önce"
  },
  {
    id: 11,
    name: "onur varoğlu",
    text: "Gökhan Bey işinde çok mahir. Ben APAX bilgisayara üç adet bilgisayar yenilettim. Bu bilgisayarlar 13, 11 ve 8 yaşlarındaydı. Bu üç bilgisayarı da ayrı işler için kullanıyorum, yenilemeden sonra sanki üç tane yeni bilgisayar kullanıyor gibi oldum. Gökhan Bey'e çok teşekkür ederim.",
    rating: 5,
    date: "bir yıl önce"
  },
  {
    id: 12,
    name: "Olcay Boran",
    text: "Sevgili Gökhan bey hem işine çok hakim olmakla birlikte alternatif çözüm arayan ekonomik seçenekler de sunan ve kısa sürede çözüme kavuşturan biri. Servis kalemleri de geniş. İyi işler ve teşekkür dileklerimle👍👍👍",
    rating: 5,
    date: "bir yıl önce"
  },
  {
    id: 13,
    name: "Melih POLAT",
    text: "Çok kısa sürede arızayı tespit edip sorunu çözdü. Güler yüzü ve samimiyeti için de bundan sonra tek tercihim olur. Gökhan beye teşekkür ederim",
    rating: 5,
    date: "bir yıl önce"
  },
  {
    id: 14,
    name: "Nuri Yoğurtcu",
    text: "Bilgisayarım ısınıp kapanıyordu, macun vb. işlemler incelikle yapılmış ayrıca bakım ve temizliğini de yapmışlar. Güvenilir",
    rating: 5,
    date: "bir yıl önce"
  },
  {
    id: 15,
    name: "Ks A",
    text: "Güvenilir ve kaliteli. Bilgisayar hizmeti arayan herkese tavsiye ederim.",
    rating: 5,
    date: "bir yıl önce"
  },
  {
    id: 16,
    name: "UFUK REKLAM",
    text: "Alanında uzman gönül rahatlığıyla işlerinizi yaptırabilirsiniz",
    rating: 5,
    date: "bir yıl önce"
  },
  {
    id: 17,
    name: "Mahsa MIKAEILI",
    text: "işlerinde çok iyi ve başarılı. En kısa süre de problemi çöze biliyorlar.",
    rating: 5,
    date: "bir yıl önce"
  },
  {
    id: 18,
    name: "Sefa Mert NALBANT",
    text: "Kibar ve pratik hemen sorunumu çözdü teşekkürler abi",
    rating: 5,
    date: "bir yıl önce"
  },
  {
    id: 19,
    name: "Random RANDOM",
    text: "Tüm kasayı profesyonelce topladı işinin ehli",
    rating: 5,
    date: "bir yıl önce"
  },
  {
    id: 20,
    name: "Murat Ak",
    text: "MSI dizüstü bilgisayarımın fan temizliği ve termal macun değişimi yapıldı. Çok memnun kaldım. Gökhan bey çok titiz ve ilgili davrandı. Gözünüz kapalı güvenebileceğiniz bir servis.",
    rating: 5,
    date: "2 yıl önce"
  },
  {
    id: 21,
    name: "İdil Yılmaz",
    text: "İşinin uzmanı! Gökhan Bey 13 yıllık Vaio'mu baştan yarattı. Bütün ilgisiyle tüm sorularımı detaylı bir şekilde cevapladı. Bilgisayar bakım&tamir için tek adresim!",
    rating: 5,
    date: "2 yıl önce"
  },
  {
    id: 22,
    name: "gokhan evliyaoglu",
    text: "Dokuz yıllık dizüstü bilgisayarımda  birçok sorun vardı. Parça değişim ücretinin yüksek olması dışında verilen hizmetten gayet memnunum. Yeni bir bilgisayar almaktansa çok daha ucuza mal ettim.",
    rating: 5,
    date: "2 yıl önce"
  },
  {
    id: 23,
    name: "Kerem Konar",
    text: "Şirketimizin 6 tane kasa bilgisayarını gökhan beye emanet ettik yıllardır yavaş kullandığımız makineler artık sıfır ayarında ve de hızlı gökhan beye ilgi ve alakası için teşekkür ederiz",
    rating: 5,
    date: "2 yıl önce"
  },
  {
    id: 24,
    name: "Başak Gözde",
    text: "5 yıldız az bile. Üzerinden araba geçen telefonumu birkaç saatte düzeltip sorunsuz teslim etti. İlgisi, alakası kusursuz. çok teşekkür ederim",
    rating: 5,
    date: "2 yıl önce"
  },
  {
    id: 25,
    name: "Emre YILDIZ",
    text: "İşinin ehli güzel insan. Tüm bilgisayar işlerimde gözüm kapalı güvendiğim ve gittiğim tek yer. Uygun fiyat kaliteli hizmet.",
    rating: 5,
    date: "2 yıl önce"
  },
  {
    id: 26,
    name: "Hilal Polat",
    text: "Çok memnun kaldım, bilgisayarımı bundan sonra buraya getireceğim. Herkese tavsiye ederim. Çok ilgililer ve bana çok yardımcı oldular.",
    rating: 5,
    date: "2 yıl önce"
  }
]

export default function ReviewSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="reviews" className="review-section">
      <div className="container mx-auto px-4">
        <div className="review-header">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image 
              src="/images/google.png"
              alt="Google Logo"
              width={40}
              height={40}
              className="review-google-logo"
            />
            <h2 className="text-3xl font-bold text-gray-800">Google Yorumları</h2>
          </div>
        </div>
        
        <div className="review-summary">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Apax Bilgisayar Hizmetleri</h3>
          <div className="review-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-current w-6 h-6" />
            ))}
          </div>
          <span className="review-rating">4.9</span>
          <span className="review-count">(36 değerlendirme)</span>
        </div>

        <div className="review-carousel">
          <div 
            ref={scrollContainerRef}
            className="review-container"
          >
            {googleReviews.map((review) => (
              <Card key={review.id} className="review-card">
                <CardContent className="review-content">
                  <div className="review-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                    ))}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="review-author">{review.name}</p>
                    <p className="review-date">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="review-gradient-left" />
          <div className="review-gradient-right" />
          <Button
            variant="outline"
            size="icon"
            className="review-nav-button review-nav-button-left"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="review-nav-button review-nav-button-right"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

