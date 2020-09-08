import styled from 'styled-components'

export const ReviewOverview = styled.section`
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
`
export const Values = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
`
export const AverangeRate = styled.h3`
  font-size: 5em;
`
export const TotalRates = styled.p``

export const Visual = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 60%;
`
export const Record = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  width: 100%;
  height: 100%;
`
export const Value = styled.p`
  font-size: 0.8em;
`
export const Line = styled.span`
  display: block;
  width: 80%;
  height: 3px;
  background-color: #ccc;
  position: relative;

  &:before {
    content: '';
    display: block;
    width: ${({ quantity, arrayLength }) =>
      `${(quantity / arrayLength) * 100}%`};
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #3093ff;
  }
`
