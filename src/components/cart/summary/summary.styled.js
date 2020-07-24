import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 0 2vw 0;
`
export const Divider = styled.span`
  width: 100%;
  height: 3px;
  background-color: #000;
`
export const Shipping = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Label = styled.p`
  text-transform: uppercase;
  font-size: 1em;
`
export const Value = styled(Label)``
export const Total = styled(Shipping)``
export const Text = styled(Label)`
  font-size: 1.2em;
`
export const Price = styled(Value)`
  font-size: 1.2em;
`
export const ContinueBtn = styled.button`
  padding: 15px 30px 15px;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
