import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 60;
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
`
export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  padding: 2vw 2vw 0;
`
export const SearchInput = styled.input``
export const ExitBtn = styled.button`
  width: 50px;
  height: 50px;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
`
export const Map = styled.section`
  height: 100%;
  width: 50%;
  background-color: #ccc;
`
export const PointsGrid = styled.section`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  overflow: auto;
`
