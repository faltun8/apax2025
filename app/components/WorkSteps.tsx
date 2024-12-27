import React from 'react';
import { Wrench, Search, ThumbsUp, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  { icon: Wrench, title: '1. ADIM', description: 'Cihazın şikayetini sizlerden dinleme' },
  { icon: Search, title: '2. ADIM', description: 'ÜCRETSİZ arıza tespit' },
  { icon: ThumbsUp, title: '3. ADIM', description: 'Sizlerden onay alma' },
  { icon: CheckCircle, title: '4. ADIM', description: 'ÇÖZÜMLEME ve TESLİM' },
]

export default function WorkSteps() {
  return (
    <section id="work-steps" className="bg-gray-100 py-16 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Çalışma Adımları</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md">
                <step.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-700">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight key={`arrow-${index}`} className="w-8 h-8 text-blue-600 hidden md:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

