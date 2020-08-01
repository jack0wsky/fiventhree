import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 0 5vw 0;
`
export const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  margin: 0 0 1vw;
  position: relative;
`
export const Dropdown = styled.div`
  width: 100%;
  height: auto;
  background-color: #ccc;
  position: absolute;
  top: 100%;
  z-index: 2;
  transform: scale(0);
  transition: 0.3s ease-in-out;
  transform-origin: 50% 0;

  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
`
export const Option = styled.button`
  font-size: 1em;
  border: none;
  background-color: #fff;
  padding: 0 0 0 2vw;
  height: 50px;
  text-align: left;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #ececec;
  }
`
export const Label = styled.label``
export const Input = styled.input`
  height: 50px;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #000;

  &:focus ~ ${Dropdown} {
    transform: scale(1);
  }
  &:focus {
    outline: none;
  }
`
export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  resize: none;
  height: 200px;

  &:focus {
    outline: none;
  }
`
export const SubmitBtn = styled.button`
  width: max-content;
  padding: 15px 30px 15px;
  font-size: 1em;
  border: none;
  background-color: #000;
  color: #fff;
  display: flex;
  align-self: flex-end;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
export const Error = styled.p`
  color: #ff0043;
  font-size: 0.8em;
`
