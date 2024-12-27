'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/app/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/HeroSection.css'

const banners = [
  {
    title: "Tüm Teknoloji İhtiyaçlarınız için Güvenilir Tamir ve Bakım!",
    description: "Bilgisayarlar, akıllı telefonlar ve her türlü teknoloji ürünü için uzman çözümler.",
    cta: "Tamir Talebi",
    ctaLink: "#contact",
    image: "/images/chip.jpeg",
    alt: "Mavi ışıklandırmalı anakart üzerine CPU kurulumu"
  },
  {
    title: "Apple Ürün Tamirinde Uzmanlaşmış",
    description: "iPhone'dan MacBook'a kadar, Apple uzmanlığımızla yanınızdayız.",
    cta: "Daha Fazla Bilgi",
    ctaLink: "#services",
    image: "/images/mac.jpeg",
    alt: "Uzay Siyahı MacBook Pro"
  },
  {
    title: "Hızlı Sonuç, Kaliteli Hizmet",
    description: "Verimli tamir sürecimizle cihazlarınızı hızlıca çalışır hale getiriyoruz.",
    cta: "Sürecimizi Görün",
    ctaLink: "#work-steps",
    image: "/images/technician.jpeg",
    alt: "Başparmağını kaldıran profesyonel bilgisayar teknisyeni"
  }
]

export default function HeroSection() {
  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000) // 5 saniyede bir banner değiştir

    return () => clearInterval(timer)
  }, [])

  const handleDotClick = (index: number) => {
    setCurrentBanner(index)
  }

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
    } else {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }
  }

  return (
    <section className="hero-section">
      <div className="container mx-auto px-4 hero-container">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`hero-banner ${index === currentBanner ? 'active' : 'inactive'} ${index === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="hero-content">
              <h1 className="hero-title">
                {banner.title}
              </h1>
              <p className="hero-description">
                {banner.description}
              </p>
              <Button asChild size="lg">
                <a href={banner.ctaLink}>{banner.cta}</a>
              </Button>
            </div>
            <div className="hero-image-container">
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority={index === 0}
                className="hero-image"
              />
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="hero-nav-button hero-nav-button-left"
        onClick={() => handleArrowClick('left')}
        aria-label="Önceki banner"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="hero-nav-button hero-nav-button-right"
        onClick={() => handleArrowClick('right')}
        aria-label="Sonraki banner"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="hero-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentBanner ? 'hero-dot-active' : 'hero-dot-inactive'}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Slayt ${index + 1}'e git`}
            aria-current={index === currentBanner ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  )
}

