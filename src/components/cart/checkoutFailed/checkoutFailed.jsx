import React from 'react'
import {
  Wrapper,
  BackgroundFade,
  TextWrapper,
  Header,
  CloseBtn,
  Text,
  Highlight,
} from './checkoutFailed.styled'

const CheckoutFailed = ({ handleCloseInfo }) => {
  return (
    <Wrapper>
      <BackgroundFade />
      <TextWrapper>
        <Header>
          <CloseBtn onClick={() => handleCloseInfo()} size={'25px'}>
            <svg
              height={'100%'}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path
                  d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
          </CloseBtn>
        </Header>
        <Text>
          Jeśli używasz Safari i strona nie przekierowuje do realizacji
          zamówienia, przejdź do{' '}
          <Highlight>
            Ustawienia > Safari, następnie wyłącz Blokowanie okien wyskakujących
          </Highlight>{' '}
          i spróbuj ponownie.
        </Text>
      </TextWrapper>
    </Wrapper>
  )
}

export default CheckoutFailed
