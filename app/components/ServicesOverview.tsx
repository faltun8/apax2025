import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Apple, Laptop, ComputerIcon as Desktop, Tv, Smartphone, Tablet, Printer, Mouse, Network, HardDrive, FileCode, Mail, Package, ShoppingBag } from 'lucide-react'
import '../styles/ServicesOverview.css'

const hardwareServices = [
  {
    icon: Apple,
    title: "APPLE (MACBOOK PRO, MACBOOK AIR ve IMAC)",
    description: "Apple cihazlarınız için uzman bakım ve onarım hizmetleri."
  },
  {
    icon: Laptop,
    title: "NOTEBOOK",
    description: "Tüm marka ve model dizüstü bilgisayarlar için teknik destek."
  },
  {
    icon: Desktop,
    title: "MASAÜSTÜ BİLGİSAYAR",
    description: "Masaüstü bilgisayarlarınız için bakım, onarım ve yükseltme hizmetleri."
  },
  {
    icon: Tv,
    title: "TELEVİZYON ve MONİTÖR",
    description: "TV ve monitörleriniz için profesyonel tamir ve bakım."
  },
  {
    icon: Smartphone,
    title: "TELEFON (IPHONE, SAMSUNG ve HUAWEİ)",
    description: "Akıllı telefonlarınız için hızlı ve güvenilir onarım hizmetleri."
  },
  {
    icon: Tablet,
    title: "TABLET ve TABLET PC",
    description: "Tablet cihazlarınız için kapsamlı bakım ve onarım desteği."
  },
  {
    icon: Printer,
    title: "YAZICI (Tonerli lazer ve tanklı)",
    description: "Tüm yazıcı türleri için teknik servis ve bakım hizmetleri."
  },
  {
    icon: Mouse,
    title: "BİLGİSAYAR AKSESUARLARI",
    description: "Mouse, klavye, adaptör vb. aksesuarlar için tamir ve yedek parça temini."
  },
]

const softwareServices = [
  {
    icon: Network,
    title: "AĞ ve AĞ ÜRÜNLERİ KURULUMU",
    description: "Ağ sistemleri kurulumu ve yapılandırması için profesyonel hizmet."
  },
  {
    icon: HardDrive,
    title: "VERİ KURTARMA",
    description: "Kaybolan verilerinizi kurtarmak için uzman çözümler."
  },
  {
    icon: FileCode,
    title: "LİSANSLI YAZILIM PROGRAMLARI",
    description: "Güvenilir ve lisanslı yazılım temini ve kurulumu."
  },
  {
    icon: Mail,
    title: "KURUMSAL MAİL YEDEKLENMESİ ve TEKRAR KURULUM",
    description: "Şirket e-postalarınızın güvenli yedeklenmesi ve geri yüklenmesi."
  },
  {
    icon: Package,
    title: "SARF MALZEME SATIŞI",
    description: "Bilgisayar ve elektronik cihazlar için kaliteli sarf malzemeleri."
  },
  {
    icon: ShoppingBag,
    title: "2.EL SIFIR PC ve YEDEK PARÇA TEMİNİ",
    description: "Uygun fiyatlı ikinci el ve sıfır bilgisayar ile yedek parça satışı."
  }
]

export default function ServicesOverview() {
  return (
    <section id="services" className="services-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Hizmetlerimiz</h2>
        
        <h3 className="text-2xl font-semibold mb-8 text-gray-700">Donanım Hizmetleri</h3>
        <div className="services-grid">
          {hardwareServices.map((service, index) => (
            <Card key={index} className="service-card">
              <CardHeader>
                <CardTitle className="service-card-title">
                  <service.icon className="service-card-icon" /> {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="services-footer">
          Cihazların bakım, onarım, kurulum, yükseltme, hızlandırma ve teknik servis işlemlerini yapmaktayız.
        </p>

        <h3 className="text-2xl font-semibold mb-8 text-gray-700">Yazılım ve Sistem Hizmetleri</h3>
        <div className="services-grid">
          {softwareServices.map((service, index) => (
            <Card key={index} className="service-card">
              <CardHeader>
                <CardTitle className="service-card-title">
                  <service.icon className="service-card-icon" /> {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="services-decoration"></div>
    </section>
  )
}

