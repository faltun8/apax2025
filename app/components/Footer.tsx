import Link from 'next/link'
import '../styles/Footer.css'
import { MapPin, Phone, Mail, Clock, Lock } from 'lucide-react'

const workingHours = [
  { days: 'Pazartesi - Cuma', hours: '09:00 - 19:30', icon: Clock },
  { days: 'Cumartesi', hours: '12:00 - 19:00', icon: Clock },
  { days: 'Pazar', hours: 'Kapalıyız', icon: Lock },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">APAX BILGISAYAR</h3>
            <p>Uzman teknoloji tamir ve bakım hizmetleri.</p>
          </div>
          <div>
            <h3 className="footer-title">Hızlı Bağlantılar</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#home">Ana Sayfa</a></li>
              <li className="footer-link"><a href="#services">Hizmetler</a></li>
              <li className="footer-link"><a href="#reviews">Değerlendirmeler</a></li>
              <li className="footer-link"><a href="#contact">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Bize Ulaşın</h3>
            <div className="footer-contact-info">
              <p className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-blue-400" />
                <a
                  href="https://maps.app.goo.gl/oswggtrpRYpdeDCR6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Ayrancı, Güvenevler Mh. Yeşilyurt Sk. NO:18/A Aşağı, 06690 Çankaya/Ankara, Türkiye
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-blue-400" />
                <a href="tel:+905348981952" className="hover:text-blue-400 transition-colors">0534 898 19 52</a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-blue-400" />
                <a href="mailto:gokhansarac@apax.com.tr" className="hover:text-blue-400 transition-colors">gokhansarac@apax.com.tr</a>
              </p>
            </div>

          </div>
          <div>
            <h3 className="footer-title">Çalışma Saatleri</h3>
            <div className="footer-working-hours">
              {workingHours.map((item, index) => (
                <p key={index} className="flex items-center mb-2 last:mb-0">
                  <item.icon className="mr-2 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span>{item.days}: </span>
                  <span className="ml-1 font-semibold">{item.hours}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            © 2025 APAX BILGISAYAR. Designed By: {' '}
            <a 
              href="https://www.instagram.com/faltun8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Furkan Altun
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

