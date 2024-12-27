import ContactForm from './ContactForm'
import '../styles/CTASection.css'

export default function CTASection() {
  return (
    <section id="contact" className="cta-section">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Bize Ulaşın</h2>
        <p className="cta-description">
          Herhangi bir sorunuz veya talebiniz varsa, bizi arayabilir, yeşil butona tıklayarak WhatsApp'tan ulaşabilir veya aşağıdaki formu doldurarak email yoluyla bize ulaşabilirsiniz. En kısa sürede size geri dönüş yapacağız.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

