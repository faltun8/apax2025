import { Cpu, CheckCircle, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import '../styles/WhoWeAre.css'

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="who-we-are-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Biz Kimiz?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold">
                <Cpu className="w-6 h-6 mr-2 text-blue-600" />
                Uzun Yıllara Dayanan Deneyim
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Bilişim sektöründe bilgisayar tamir, bakım, onarım ve teknik servis hizmeti 
                vermek amacıyla, 2008 yılından beri sektörün değişen ihtiyaçlarına uyum sağlayarak 
                hizmet vermeye APAX ile devam etmekteyiz. Yılların deneyimiyle, en zorlu teknolojik 
                sorunlara bile çözüm üretiyoruz.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold">
                <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
                Güvenilir Teknik Servis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Bilgisayar teknik servisi arıyorsanız, doğru yerdesiniz. 
                Elektrik elektronik her türlü cihazın sorun tespitini ÜCRETSİZ yapıyor, 
                en kısa sürede çözüm sağlıyoruz. Müşteri memnuniyeti bizim için 
                her zaman ön plandadır.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center mt-12 experience-banner">
          <Clock className="w-6 h-6 mr-2 text-blue-600" />
          <p className="text-xl font-semibold text-gray-700 italic">
            2008'den beri hizmetinizdeyiz
          </p>
        </div>
      </div>
    </section>
  )
}

