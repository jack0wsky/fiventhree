import React from 'react'
import fiventhreeLogo from '../../../assets/5&3-logo.svg'
import styled from 'styled-components'
import { small } from '../../breakpoints'

const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: flex-start;
`
const LogoSVG = styled.img`
  height: 100%;
  width: 10vw;

  @media all and (max-width: ${small}) {
    width: 30vw;
  }
`

const Logo = () => {
  return (
    <Wrapper>
      <LogoSVG src={fiventhreeLogo} alt="logo" />
    </Wrapper>
  )
}

export default Logo
