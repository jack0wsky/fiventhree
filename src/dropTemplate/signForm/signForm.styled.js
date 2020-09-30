import styled from 'styled-components'

export const FormWrapper = styled.form`
  width: 40vw;
  height: 50vh;
  background-color: #ccc;
  padding: 20px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
`
export const FormStatus = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`
export const StepOne = styled.div`
  width: 50%;
  height: 5px;
  display: flex;
  flex-flow: column;
`
export const StatusBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`
export const Line = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background-color: #b8b8b8;
`
export const Circle = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
`
export const Tag = styled.p`
  font-size: 0.8em;
`
export const StepTwo = styled(StepOne)``

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
`
export const Label = styled.label``
export const Input = styled.input`
  font-size: 1em;
  padding: 10px;
`
