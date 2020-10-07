import styled from 'styled-components'

export const TemplateWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 10vh 0 10vh;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  justify-content: space-between;
  background-color: #efefef;
  position: relative;
`
export const CollectionImage = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
export const FakeOverlay = styled.div`
  width: 100vw;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
