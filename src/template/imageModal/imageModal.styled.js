import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 60;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const SelectedImageContainer = styled.div`
  width: 60vw;
  height: 85vh;
  background-color: #fff;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform-origin: center 0;

  div {
    height: 100%;
    width: 100%;
  }
`
export const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  z-index: 50;
  left: 5vw;
  top: 5vw;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  &:focus {
    outline: none;
  }
`
