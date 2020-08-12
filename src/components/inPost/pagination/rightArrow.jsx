import React from 'react'

const NavArrowRight = ({ color, height }) => {
  return (
    <svg height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path
          d="M9 6l6 6-6 6"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  )
}

export default NavArrowRight
