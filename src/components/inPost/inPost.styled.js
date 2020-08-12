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
  width: 60vw;
  height: 60vh;
  background-color: #fff;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;

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
`
export const SearchInput = styled.input`
  height: 100%;
  width: 40%;
  padding: 20px;
  font-size: 1em;
  border: none;
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
`
export const Map = styled.section`
  height: 100%;
  width: 50%;
  background-color: #ccc;
`
export const PointsGrid = styled.section`
  width: 50%;
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
`
export const FetchPlaceholder = styled.p`
  text-align: center;
`
export const Pagination = styled.div`
  width: 50%;
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
