import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../theme'

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.darkRed};
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  opacity: 0.5;
`

const RedOverlay = () => {
  return <Overlay />
}

export default RedOverlay
