import React from 'react'

const Cart = ({ color, height }) => {
  return (
    <svg height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path
          d="M19.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          fill={color}
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          d="M9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          fill={color}
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          d="M19.5 19H5.23c-1.784 0-2.73-.781-2.73-2 0-1.219.946-2 2.73-2H7M5 4l2 11M5 4c-.167-.667-1-2-3-2m3 2h5.75M7 15h4.5m5-11H22l-2 11h-4.5m1-11l-1 11m1-11h-5.75m4.75 11h-4m-.75-11l.75 11"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  )
}

export default Cart
