import styled from 'styled-components'
import { colors } from '../../theme'
import { small, medium, large } from '../breakpoints'

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 110;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
`
export const Fade = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.77);
`
export const Modal = styled.section`
  width: 65vw;
  height: 60vh;
  background-color: #fff;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;

  @media all and (max-width: ${small}) {
    width: 100%;
    height: 100%;
  }
  @media all and (min-width: ${small}) and (max-width: ${large}) {
    width: 80vw;
  }
`
export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  padding: 20px;
  background-color: #efefef;

  @media all and (max-width: ${small}) {
    height: 70px;
  }
`
export const SearchInput = styled.input`
  height: 100%;
  width: 40%;
  padding: 20px;
  font-size: 1em;
  border: none;

  &:focus {
    outline: none;
  }

  @media all and (max-width: ${small}) {
    width: 85%;
  }
`
export const ExitBtn = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  &:focus {
    outline: none;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: space-between;

  @media all and (max-width: ${small}) {
    flex-flow: column;
    -webkit-flex-flow: column;
  }
`
export const MapContainer = styled.div`
  height: 100%;
  width: 55%;
  position: relative;

  @media all and (max-width: ${medium}) {
    width: 100%;
  }
`
export const PointsGrid = styled.section`
  width: 45%;
  height: 100%;
  padding: 60px 0 0;
  position: relative;

  ${({ fetched }) => {
    if (fetched.length > 0) {
      return `
            display: grid;
            grid-template-columns: 1fr;
          `
    } else {
      return `
            display: flex;
            justify-content: center;
            -webkit-justify-content: center;
            align-items: center;
            -webkit-align-items: center;
            flex-flow: column;
        `
    }
  }};

  overflow: auto;

  @media all and (max-width: ${medium}) {
    display: none;
  }
`
export const UseGPSBtn = styled.button`
  border: none;
  font-size: 1em;
  color: ${colors.action};
  cursor: pointer;
  display: flex;
  align-items: center;
  -webkit-align-items: center;

  &:focus {
    outline: none;
  }
  @media all and (max-width: ${small}) {
    display: none;
  }
`
export const FetchPlaceholder = styled.p`
  text-align: center;
`
export const Pagination = styled.div`
  width: 45%;
  height: 60px;
  padding: 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 80px;
  left: 0;
  background-color: #efefef;
`
export const CurrentPage = styled.p`
  font-size: 1em;
`
export const DecrementPagination = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  &:focus {
    outline: none;
  }
`
export const IncrementPagination = styled(DecrementPagination)``

export const PointData = styled.div`
  width: 50%;
  height: 15vh;
  background-color: #fff;
  position: absolute;
  z-index: 50;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 10px;

  @media all and (max-width: ${small}) {
    width: 90%;
    margin: 0 0 0 -45%;
    height: 25vh;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 90%;
  }
`
export const MapPoint = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${colors.action};
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
export const Name = styled.p``
export const Street = styled.p``
export const OpenLabel = styled.p`
  font-size: 0.9em;
  color: #b7b7b7;
`
export const SelectBtn = styled.button`
  width: 100%;
  padding: 15px 30px 15px;
  background-color: ${colors.action};
  border: none;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
