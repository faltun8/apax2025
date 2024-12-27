import { Zap, Search, Laptop, RefreshCwIcon as Refresh, Users, Truck, Award } from 'lucide-react'
import '../styles/WhyUs.css'

const reasons = [
  { icon: Zap, text: "HIZLI ÇÖZÜM" },
  { icon: Search, text: "ÜCRETSİZ ARIZA TESPİT" },
  { icon: Laptop, text: "HER MARKA ELEKTRONİK CİHAZA BAKABİLME TECRÜBESİ" },
  { icon: Refresh, text: "SEKTÖRDE GÜNCEL KALMA" },
  { icon: Users, text: "PROFOSYONEL YAKLAŞIM ALTERNATİF ÇÖZÜM" },
  { icon: Truck, text: "YERİNDE TEKNİK SERVİS" },
  { icon: Award, text: "15 YILLIK DENEYİM" },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us-section py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">NEDEN BİZ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-item flex items-center p-4 bg-gray-50 rounded-lg">
                <reason.icon className="reason-icon w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                <p className="text-sm font-semibold text-gray-700">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

