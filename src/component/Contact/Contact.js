import React, { useEffect } from 'react'
import ContactContent from './ContactContent/ContactContent'
import ContactForm from './ContacForm/ContactForm'
import Map from './Map/Map'

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      <ContactContent />
      <Map />
      <ContactForm />
    </div>
  )
}

export default Contact