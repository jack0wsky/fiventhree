import styled from 'styled-components'
import { small } from '../../components/breakpoints'

export const FormWrapper = styled.form`
  width: 40vw;
  height: auto;
  background-color: #ccc;
  padding: 20px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;

  @media all and (max-width: ${small}) {
    width: 100vw;
  }
`
export const Grid = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'name surname' 'size .' 'locker locker';
  grid-column-gap: 30px;

  div:nth-child(1) {
    grid-area: name;
  }
  div:nth-child(2) {
    grid-area: surname;
  }

  @media all and (max-width: ${small}) {
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
  }
`
export const StatusBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`
export const Circle = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
`
export const Label = styled.label``
export const Input = styled.input`
  font-size: 1em;
  padding: 10px;
`
export const SizeSelector = styled(InputWrapper)`
  grid-area: size;
`
export const SelectInput = styled.select`
  width: 50px;
  height: 40px;
  font-size: 1em;
`
export const LockerSearch = styled.div`
  width: 100%;
  height: auto;
  min-height: 10vh;
  grid-area: locker;
  background-color: #fff;
`
export const SearchHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Search = styled.input`
  width: 60%;
  height: 50px;
  font-size: 1em;
  background-color: #eeeeee;
  padding: 10px;
  border: none;

  &:focus {
    outline: none;
  }
`
export const GetLocationButton = styled.button`
  width: auto;
  padding: 10px 20px 10px;
  font-size: 0.8em;
  cursor: pointer;
  border: none;
  background-color: #000;
  color: #fff;

  &:focus {
    outline: none;
  }
`
export const Point = styled.button`
  height: 30px;
  font-size: 1em;
  border: none;
  background-color: #fff;
  text-align: left;
  padding: 10px 10px 10px 30px;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    display: none;
    position: absolute;
    height: 100%;
    width: 3px;
    background-color: #000;
    left: 0;
  }
  &:hover:before {
    display: block;
  }
`
export const Results = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  height: ${({ points }) => (points.length > 0 ? '25vh' : '50px')};
  overflow: scroll;
`
export const SelectedPoint = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #fff;
  margin: 5px 0 5px;
`
