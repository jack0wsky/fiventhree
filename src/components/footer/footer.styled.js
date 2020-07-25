import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100vw;
  height: 30vh;
  background-color: #000;
  padding: 2vw 10vw 2vw;
  display: ${({ minify }) => (minify ? 'none' : 'block')};
`
export const Logo = styled.img`
  height: 10px;
`
