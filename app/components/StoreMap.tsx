import React from 'react'
import '../styles/StoreMap.css'

const StoreMap: React.FC = () => {
  return (
    <section className="store-map">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDWfTJUX-X2vP8UkyfuwT6Uhj4oMoTec5Y&place_id=ChIJKeKxj9VP0xQRFYduweDRJH8"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="store-map-iframe"
      ></iframe>
    </section>

  )
}

export default StoreMap

