import styled from 'styled-components'

export const SizeWrapper = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: relative;
  display: flex;
`
export const Label = styled.label``
export const Radio = styled.input`
  &:checked ${Label} {
    color: #ff0043;
  }
`
