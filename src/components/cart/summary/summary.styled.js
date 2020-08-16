import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  height: 23vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 0 2vw 2vw;
  position: absolute;
  bottom: 0;
  right: 0;
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
  font-size: 1em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
  &:hover {
    transition: 0.3s ease-in-out;
    box-shadow: 0 2.9px 2.2px -9px rgba(0, 0, 0, 0.017),
      0 6.9px 5.3px -9px rgba(0, 0, 0, 0.024),
      0 13px 10px -9px rgba(0, 0, 0, 0.03),
      0 23.2px 17.9px -9px rgba(0, 0, 0, 0.036),
      0 43.4px 33.4px -9px rgba(0, 0, 0, 0.043),
      0 104px 80px -9px rgba(0, 0, 0, 0.06);
  }
`
export const InPostBtn = styled.button`
  width: ${({ inPost }) => (inPost ? '75%' : '100%')};
  height: 100%;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
export const ShippingStatus = styled.div`
  width: 100%;
  height: auto;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
`
export const SelectedLocker = styled.div`
  height: 100%;
  width: 70%;
  background-color: #0cc43a;
  color: #fff;
`
export const SelectedValue = styled.p`
  color: #fff;
`
export const ChangeBtn = styled.button`
  height: 100%;
  padding: 15px 30px 15px;
  width: max-content;
  border: 2px solid #000;
  cursor: pointer;
  background: transparent;

  &:focus {
    outline: none;
  }
`
