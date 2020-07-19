import React, { useEffect, useRef } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import logo from "../assets/logo.svg"
import { small, medium, large, extraLarge } from "../breakpoints"
import gsap from "gsap"
import { CSSPlugin } from "gsap/CSSPlugin"
gsap.registerPlugin(CSSPlugin)

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: ${small}) {
    overflow: hidden;
  }
`
const Container = styled.div`
  width: 60vw;
  height: 80vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  position: relative;

  @media all and (max-width: ${small}) {
    width: 90%;
    height: 90%;
    & > svg {
      width: 50vw;
    }
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    & > svg {
      width: 40vw;
    }
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    & > svg {
      width: 35vw;
    }
  }
`
const Title = styled.h1`
  font-size: 4em;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  opacity: 0;
  transform: translateY(30px);

  @media all and (max-width: ${medium}) {
    font-size: 3em;
    text-align: center;
  }
`
const Footer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: space-between;

  @media all and (max-width: ${small}) {
    width: 100%;
    height: 15vw;
    flex-flow: column;
    -webkit-flex-flow: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    margin: 0 0 10vh;
  }
  @media all and (min-width: ${small}) and (max-width: ${large}) {
    width: 100%;
  }
  @media all and (min-width: ${large}) and (max-width: ${extraLarge}) {
    width: 80%;
  }
`
const Logo = styled.img`
  width: 8vw;

  @media all and (max-width: ${small}) {
    width: 30vw;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 20vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 15vw;
  }
`
const SM = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    width: 100%;
  }
  @media all and (min-width: ${large}) and (max-width: ${extraLarge}) {
    width: 30%;
  }
`
const Label = styled.p`
  font-size: 0.8em;
  text-transform: uppercase;
  color: #fff;
`
const Link = styled.a`
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }

  @media all and (max-width: ${small}) {
    width: 20vw;
  }
`

const IndexPage = () => {
  const title = useRef()
  const stars = useRef()
  const footer = useRef()
  useEffect(() => {
    const tl = gsap.timeline({ duration: 2.5 })
    tl.to(title.current, {
      opacity: 1,
      translateY: 0,
      duration: 0.4,
    })
    tl.from(stars.current.children, {
      duration: 0.5,
      y: 30,
      opacity: 0,
      stagger: 0.1,
    })
    tl.from(footer.current.children, {
      y: 40,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
    })
  })
  return (
    <Layout>
      <Wrapper>
        <Container>
          <Title ref={title}>Już wkrótce</Title>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"10vw"}
            viewBox="0 0 554.99 191.99"
          >
            <g id="Warstwa_2" dataName="Warstwa 2">
              <g id="Warstwa_1-2" ref={stars} dataName="Warstwa 1">
                <path
                  d="M0,32.66,5.06,17.71l25.3,9.89V0H46V27.6l25.07-9.89,5.52,14.95L50.37,41.4,66.47,63,54.28,72,38,49.45,22.31,72,9.43,63,25.53,41.4Z"
                  fill="#fff"
                />
                <path
                  d="M119.6,32.66l5.06-14.95L150,27.6V0H165.6V27.6l25.07-9.89,5.52,14.95L170,41.4,186.07,63l-12.19,9L157.55,49.45,141.91,72,129,63l16.1-21.62Z"
                  fill="#fff"
                />
                <path
                  d="M239.2,32.66l5.06-14.95,25.3,9.89V0H285.2V27.6l25.07-9.89,5.52,14.95L289.57,41.4,305.67,63l-12.19,9L277.15,49.45,261.51,72l-12.88-9,16.1-21.62Z"
                  fill="#fff"
                />
                <path
                  d="M358.8,32.66l5.06-14.95,25.3,9.89V0H404.8V27.6l25.07-9.89,5.52,14.95L409.17,41.4,425.27,63l-12.19,9L396.75,49.45,381.11,72l-12.88-9,16.1-21.62Z"
                  fill="#fff"
                />
                <path
                  d="M478.4,32.66l5.06-14.95,25.3,9.89V0H524.4V27.6l25.07-9.89L555,32.66,528.77,41.4,544.87,63l-12.19,9L516.35,49.45,500.71,72l-12.88-9,16.1-21.62Z"
                  fill="#fff"
                />
                <path
                  d="M119.6,152.66l5.06-14.95L150,147.6V120H165.6v27.6l25.07-9.89,5.52,14.95L170,161.4,186.07,183l-12.19,9-16.33-22.54L141.91,192,129,183l16.1-21.62Z"
                  fill="#fff"
                />
                <path
                  d="M239.2,152.66l5.06-14.95,25.3,9.89V120H285.2v27.6l25.07-9.89,5.52,14.95-26.22,8.74L305.67,183l-12.19,9-16.33-22.54L261.51,192l-12.88-9,16.1-21.62Z"
                  fill="#fff"
                />
                <path
                  d="M358.8,152.66l5.06-14.95,25.3,9.89V120H404.8v27.6l25.07-9.89,5.52,14.95-26.22,8.74L425.27,183l-12.19,9-16.33-22.54L381.11,192l-12.88-9,16.1-21.62Z"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>
          <Footer ref={footer}>
            <Logo src={logo} />
            <SM>
              <Label>Obserwuj nas</Label>
              <Link
                href="https://www.instagram.com/fiventhree_clothing/"
                target="_blank"
              >
                <svg
                  height={"30px"}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none">
                    <path
                      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 17V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M17.5 6.51l.01-.011"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              </Link>
              <Link href="https://www.facebook.com/fiventhree/" target="_blank">
                <svg
                  height="25px"
                  viewBox="0 0 96.124 96.123"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#fff">
                    <path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.961v15.803a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.959-1.96V1.98A1.96 1.96 0 0 0 72.089.02z" />
                  </g>
                </svg>
              </Link>
            </SM>
          </Footer>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
