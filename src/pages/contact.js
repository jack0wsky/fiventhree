import React, { useState } from 'react'
import { Wrapper } from '../components/contact/contact.styled'
import LeftSide from '../components/contact/leftSide/leftSide'
import ContactUs from '../components/contact/contactUs/contactUs'
import Success from '../components/contact/contactForm/success/success'

const Contact = () => {
  const [handleSend, setSend] = useState(false)
  const handleEmail = () => {
    setSend(!handleSend)
  }
  return (
    <Wrapper>
      <LeftSide />
      {handleSend ? <Success /> : <ContactUs handleEmail={handleEmail} />}
    </Wrapper>
  )
}

export default Contact
