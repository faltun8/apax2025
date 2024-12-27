'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesOverview from './components/ServicesOverview'
import ReviewSection from './components/ReviewSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import WorkSteps from './components/WorkSteps'
import WhoWeAre from './components/WhoWeAre'
import WhyUs from './components/WhyUs'
import StoreMap from './components/StoreMap'

export default function Home() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <WhoWeAre />
        <HeroSection />
        <WhyUs />
        <ServicesOverview />
        <WorkSteps />
        <ReviewSection />
        <section id="contact">
          <CTASection />
        </section>
        <StoreMap />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

