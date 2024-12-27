'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  { id: 1, name: "John D.", text: "Great service! Fixed my laptop in no time.", rating: 5 },
  { id: 2, name: "Sarah M.", text: "Excellent Apple product support. Highly recommended!", rating: 5 },
  { id: 3, name: "Mike R.", text: "Professional and quick. Will definitely come back.", rating: 4 },
  { id: 4, name: "Emily L.", text: "Saved my data and fixed my crashed hard drive. Thank you!", rating: 5 },
  { id: 5, name: "David K.", text: "Affordable and reliable smartphone repair. Very satisfied!", rating: 4 },
]

export default function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, setScrollSnaps, onSelect])

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">What Our Customers Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div className="flex-[0_0_100%] min-w-0" key={review.id}>
                  <Card className="mx-4">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg text-center mb-4">"{review.text}"</p>
                      <p className="text-right font-semibold">- {review.name}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center mt-4">
          {scrollSnaps.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`mx-1 ${index === selectedIndex ? 'bg-blue-200' : ''}`}
              onClick={() => scrollTo(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

