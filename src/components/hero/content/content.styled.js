import styled from 'styled-components'
import { small } from '../../breakpoints'

export const Stars = styled.img`
  width: 8.5vw;
  transform-origin: 0 0;
  transition: 0.3s ease-in-out;
  margin: 5px 0 0;

  ${(props) => {
    if (!props.scrolled) {
      return `
            transform: scale(9);
            margin: 0;
            bottom: 0;
          `
    }
  }};

  @media all and (max-width: ${small}) {
    margin: 10px 0 0;
    width: 40vw;

    ${(props) => {
      if (!props.scrolled) {
        return `
            transform: scale(2.2);
            margin: 0;
            bottom: 0;
          `
      }
    }};
  }
`
