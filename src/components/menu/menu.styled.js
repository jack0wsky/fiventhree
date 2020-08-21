import styled from 'styled-components'
import { medium } from '../breakpoints'

export const MenuWrapper = styled.section`
  display: none;
  @media all and (max-width: ${medium}) {
    width: 100vw;
    height: 50vh;
    background-color: #ffffff;
    position: fixed;
    z-index: 45;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
    bottom: ${(props) => (props.toggle ? 0 : '-100%')};
    padding: 5vw;

    a {
      text-decoration: none;
      color: #000;
      text-transform: uppercase;
      font-size: 1.2em;
      line-height: 50px;
    }
  }
`
export const SocialMedia = styled.div`
  width: 25%;
  height: 5vh;
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const SMItem = styled.img`
  height: 30px;
`
export const Ahref = styled.a``
export const LinkButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;

  &:focus {
    outline: none;
  }
`
