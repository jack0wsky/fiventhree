import styled from 'styled-components'

export const SizeWrapper = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: relative;
  display: flex;
`
export const Radio = styled.input`
  position: relative;

  &:checked:after {
    background-color: #000;
    color: #fff;
  }
  &:after {
    content: '${({ sizeValue }) => sizeValue}';
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: 600;
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 2px solid #000;
    cursor: pointer;
  }
`
