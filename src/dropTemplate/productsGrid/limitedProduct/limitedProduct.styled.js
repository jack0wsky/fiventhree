import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 80%;
  height: 40vh;
  background-color: #fff;
  border-radius: 10px;
`
export const Preview = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
export const Data = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 10px;
`
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`
export const PropsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0;
`
export const SizeSelector = styled.select`
  font-size: 0.8em;
  padding: 5px;
`
export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`
export const DecrementQuantity = styled.button`
  font-size: 1em;
  cursor: pointer;
  border: none;
  background-color: ${({ quantity }) => (quantity === 1 ? '#ddd' : '#000')};
  color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const IncrementQuantity = styled(DecrementQuantity)``
export const AddToCart = styled.button`
  border: none;
  width: 100%;
  padding: 10px 20px 10px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-size: 1em;

  &:focus {
    outline: none;
  }
`
