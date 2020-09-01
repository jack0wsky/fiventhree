import styled from 'styled-components'
import { small } from '../../../components/breakpoints'

export const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 110;
  background-color: rgba(0, 0, 0, 0.78);
`
export const Form = styled.form`
  width: 30vw;
  height: auto;
  background-color: #ffffff;
  padding: 20px;

  @media all and (max-width: ${small}) {
    width: 100vw;
    height: 100vh;
  }
`
export const Title = styled.h4`
  font-size: 1.5em;
`
export const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  margin: 50px 0 0;

  @media all and (max-width: ${small}) {
    margin: 30px 0 0;
  }
`
export const Label = styled.label``
export const Input = styled.input`
  height: 50px;
  padding: 10px;
  font-size: 1em;
`
export const ChooseStarsAmount = styled(InputWrapper)`
  margin: 0 0 30px;
`
export const StarsGrid = styled.div`
  display: flex;
  align-items: center;
  -webkit-align-items: center;

  svg {
    margin: 0 10px 0 0;
  }
`
export const CaptionWrapper = styled(ChooseStarsAmount)``

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 1em;

  &:focus {
    outline: none;
  }

  @media all and (max-width: ${small}) {
    height: 30vh;
  }
`
export const Footer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  padding: 0 0 0 20px;

  @media all and (max-width: ${small}) {
    margin: 30px 0 0;
  }
`
export const CloseModalBtn = styled.button`
  font-size: 1em;
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.5;

  &:focus {
    outline: none;
  }
`
export const SubmitBtn = styled(CloseModalBtn)`
  width: 70%;
  padding: 20px 40px 20px;
  font-size: 1em;
  background-color: #000;
  color: #fff;
  opacity: 1;

  &:focus {
    outline: none;
  }
`
