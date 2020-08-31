import styled from 'styled-components'

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
`
export const Form = styled.form`
  width: 30vw;
  height: 40vh;
  background-color: #eaeaea;
  padding: 20px;
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
`
export const Label = styled.label``
export const Input = styled.input`
  height: 50px;
  padding: 10px;
  font-size: 1em;
`
export const ChooseStarsAmount = styled(InputWrapper)``
export const StarsGrid = styled.div`
  display: flex;
  align-items: center;
  -webkit-align-items: center;

  svg {
    margin: 0 10px 0 0;
  }
`
