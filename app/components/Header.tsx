'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Mail, Phone } from 'lucide-react'
import '../styles/Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container mx-auto px-4 header-container">
        <Link href="/" className="header-logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image
            src="/images/apax.jpeg"
            alt="APAX BİLGİSAYAR"
            width={200}
            height={60}
            className="header-logo-image"
            priority
          />
        </Link>
        <nav className={`header-nav ${isMenuOpen ? 'flex' : 'hidden'} md:flex md:justify-center`}>
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center w-full">
            <li><a href="#who-we-are" className="header-nav-link" onClick={() => setIsMenuOpen(false)}>Biz Kimiz</a></li>
            <li><a href="#why-us" className="header-nav-link" onClick={() => setIsMenuOpen(false)}>Neden Biz</a></li>
            <li><a href="#services" className="header-nav-link" onClick={() => setIsMenuOpen(false)}>Hizmetler</a></li>
            <li><a href="#work-steps" className="header-nav-link" onClick={() => setIsMenuOpen(false)}>Çalışma Adımları</a></li>
            <li><a href="#reviews" className="header-nav-link" onClick={() => setIsMenuOpen(false)}>Sizin Yorumlarınız</a></li>
            <li><a href="#contact" className="header-nav-link" onClick={() => setIsMenuOpen(false)}>Bize Ulaşın</a></li>
          </ul>
        </nav>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <div className="header-contact flex-col items-start md:items-end gap-1 mt-2 md:mt-0 text-left md:text-right w-full md:w-auto">
          <div className="header-contact-item flex items-center gap-1 w-full md:w-auto">
            <Mail className="header-contact-icon" />
            <a href="mailto:gokhansarac@apax.com.tr" className="header-contact-text text-xs md:text-sm hover:underline truncate">
              gokhansarac@apax.com.tr
            </a>
          </div>
          <div className="header-contact-item flex items-center gap-1 w-full md:w-auto">
            <Phone className="header-contact-icon" />
            <a href="tel:+905348981952" className="header-contact-text text-xs md:text-sm hover:underline truncate">
              0534 898 19 52
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

