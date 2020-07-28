import React, { useEffect, useState } from 'react'
import { Stars } from '../../hero/content/content.styled'
import stars from '../../../assets/stars.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: flex-start;
`

const Logo = ({ color, height }) => {
  const [scrolled, setScrolled] = useState(true)
  useEffect(() => {
    /*if (window) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      })
    }*/
  })
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox="0 0 889.06 63.23"
      >
        <g id="Warstwa_2" dataname="Warstwa 2">
          <g id="Warstwa_1-2" dataname="Warstwa 1">
            <path
              d="M0,0H69.55V14.17H26.88V26H67.13V40.21H26.88v23H0Z"
              fill={color}
            />
            <path d="M84.34,0h27.31V63.23H84.34Z" fill={color} />
            <path
              d="M157.44,63.23,123.17,0h29.3l20.62,43.13L193.71,0h28.73L188.17,63.23Z"
              fill={color}
            />
            <path
              d="M234,0h72.68V14H260.56v10.1H303.8v14H260.56V49.24h49.07l-2.27,14H234Z"
              fill={color}
            />
            <path
              d="M323.28,0h23.89l36.56,36.22V0h25.74V63.23H385.86L349,27.1V63.23H323.28Z"
              fill={color}
            />
            <path
              d="M451.57,14.44h-29.3V0h85.91V14.44h-29.3V63.23H451.57Z"
              fill={color}
            />
            <path
              d="M520.84,0h27.31V22.94h33V0h27.31V63.23H581.14v-25h-33v25H520.84Z"
              fill={color}
            />
            <path
              d="M707.87,20a16.34,16.34,0,0,1-3.7,10.58q-3.7,4.56-11.38,7.39l20.77,25.24H684.68L668,41.45H653.25V63.23h-26V0h40.11A95.77,95.77,0,0,1,687,1.68,41.23,41.23,0,0,1,699.4,6.16,17.12,17.12,0,0,1,706,12.58,15.74,15.74,0,0,1,707.87,20Zm-54.62,8.23h13.37q8.25,0,11.59-2a6.3,6.3,0,0,0,3.35-5.71A6,6,0,0,0,678,15.06q-3.56-2-12.23-2H653.25Z"
              fill={color}
            />
            <path
              d="M724.08,0h72.68V14H750.68v10.1h43.24v14H750.68V49.24h49.07l-2.28,14H724.08Z"
              fill={color}
            />
            <path
              d="M813.4,0h72.68V14H840v10.1h43.24v14H840V49.24h49.07l-2.27,14H813.4Z"
              fill={color}
            />
          </g>
        </g>
      </svg>
      <Stars scrolled={scrolled} src={stars} />
    </Wrapper>
  )
}

export default Logo
