'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import '../styles/ReviewSection.css'

const googleReviews = [
  { id: 1, name: "Mehmet A.", text: "Çok hızlı ve profesyonel hizmet. Teşekkürler Apax!", rating: 5, date: "2023-05-15" },
  { id: 2, name: "Ayşe K.", text: "Bilgisayarımı kısa sürede tamir ettiler. Çok memnun kaldım.", rating: 5, date: "2023-05-10" },
  { id: 3, name: "Ali R.", text: "Fiyatları uygun ve işçilik kaliteli. Tavsiye ederim.", rating: 4, date: "2023-05-05" },
  { id: 4, name: "Zeynep B.", text: "Mac'imi çok hızlı bir şekilde tamir ettiler. Teşekkürler!", rating: 5, date: "2023-04-30" },
  { id: 5, name: "Mustafa Y.", text: "Çok ilgili ve bilgili ekip. Kesinlikle tavsiye ediyorum.", rating: 5, date: "2023-04-25" },
  { id: 6, name: "Elif S.", text: "Hızlı ve güvenilir hizmet. Fiyatlar da gayet makul.", rating: 4, date: "2023-04-20" },
  { id: 7, name: "Ahmet D.", text: "Laptop'umun fan sorununu çözdüler. Artık sessiz çalışıyor.", rating: 5, date: "2023-04-15" },
  { id: 8, name: "Fatma G.", text: "Virüs temizleme konusunda harikalar. Bilgisayarım eskisinden hızlı!", rating: 5, date: "2023-04-10" },
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
          <span className="review-rating">4.8</span>
          <span className="review-count">(42 değerlendirme)</span>
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

