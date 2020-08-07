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
  width: 90%;
  height: 90%;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`
export const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 5vw;
  top: 5vw;
`
