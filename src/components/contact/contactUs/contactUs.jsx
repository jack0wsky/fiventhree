import React from 'react'
import { Wrapper, HeadTitle } from './contactUs.styled'
import ContactForm from '../contactForm/contactForm'

const ContactUs = ({ handleEmail }) => {
  return (
    <Wrapper>
      <HeadTitle>Kontakt</HeadTitle>
      <ContactForm handleEmail={handleEmail} />
    </Wrapper>
  )
}

export default ContactUs
