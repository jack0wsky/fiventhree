import styled from 'styled-components'
import { small, medium, large, xlarge } from '../../../components/breakpoints'

export const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  @media all and (max-width: ${small}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    align-items: flex-start;
    height: auto;
    margin: 20px 0 20px;
  }

  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    align-items: flex-start;
    height: auto;
  }
`
export const StarsWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;

  svg {
    margin: 0 5px 0 0;
  }
  @media all and (max-width: ${small}) {
    width: 100%;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: auto;
  }
`
export const RatesAmount = styled.p`
  font-size: 1em;
`
export const SeeAllBtn = styled.button`
  border: none;
  background: none;
  font-size: 1em;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
