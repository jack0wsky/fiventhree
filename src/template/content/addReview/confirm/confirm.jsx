import React from 'react'
import { ConfirmWrapper, Message } from './confirm.styled'

const Confirm = () => {
  return (
    <ConfirmWrapper>
      <Message>
        <svg
          height={'30px'}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>check</title>
          <g fill="none">
            <path
              d="M7 12.5l3 3 7-7"
              stroke="#22c740"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
              stroke="#22c740"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
        Twoja opinia została dodana
      </Message>
    </ConfirmWrapper>
  )
}

export default Confirm
