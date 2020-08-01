import React from 'react'
import { Wrapper } from '../components/contact/contact.styled'
import LeftSide from '../components/contact/leftSide/leftSide'
import ContactUs from '../components/contact/contactUs/contactUs'

const Contact = () => {
  return (
    <Wrapper>
      <LeftSide />
      <ContactUs />
    </Wrapper>
  )
}

export default Contact
