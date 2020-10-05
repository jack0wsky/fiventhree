import React, { useEffect } from 'react'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import styled from 'styled-components'
import { small } from '../../../components/breakpoints'

gsap.registerPlugin(CSSPlugin)

const PopupContainer = styled.div`
  width: 100vw;
  height: 5vh;
  background-color: rgb(26, 190, 11);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 0 25vh 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media all and (max-width: ${small}) {
    height: 15vh;
    padding: 0 5vw 0;
  }
`
const Text = styled.p`
  color: #fff;
`
const Close = styled.button`
  border: none;
  height: 30px;
  width: 30px;
  background: transparent;

  @media all and (max-width: ${small}) {
    height: 40px;
    width: 40px;
  }
`

const SuccessPopup = ({ point }) => {
  useEffect(() => {
    gsap.from('.popup', {
      delay: 0.3,
      translateY: '100%',
      duration: 0.2,
    })
    setTimeout(() => {
      gsap.to('.popup', {
        translateY: '100%',
        duration: 0.2,
      })
    }, 5000)
  }, [point])
  return (
    <PopupContainer className="popup">
      <Text>
        Paczkomat został wybrany: {point.address.line1}, {point.address.line2} (
        {point.name})
      </Text>
      <Close>
        <svg xmlns="http://www.w3.org/2000/svg" width={'25px'}>
          <g transform="translate(0 0)">
            <g fill="none" className="nc-icon-wrapper">
              <path
                d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </Close>
    </PopupContainer>
  )
}

export default SuccessPopup
