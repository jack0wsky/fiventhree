import styled from 'styled-components'

export const ContentWrapper = styled.section`
  width: 50%;
  height: 100%;
  padding: 100px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Name = styled.h3`
  font-size: 2em;
`
export const Price = styled(Name)``

export const Sizes = styled.section`
  width: 50%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
`
export const Size = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
export const Description = styled.section`
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
`
export const Title = styled.h4`
  font-size: 1.1em;
`
export const Text = styled.p`
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
`
export const AddToCart = styled.button`
  text-transform: uppercase;
  padding: 20px 40px 20px;
  width: max-content;
`
