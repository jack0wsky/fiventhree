import styled from 'styled-components'
import { medium, large } from '../../../../components/breakpoints'

export const ProductShortcut = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  margin: 30px 0 30px;
`
export const ShortcutImage = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  overflow: hidden;

  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 25%;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const ShortcutData = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: center;
  -webkit-justify-content: center;
`
export const Title = styled.h3``
export const Size = styled.p``
