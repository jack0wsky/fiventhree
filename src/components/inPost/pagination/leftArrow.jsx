import React from 'react'

const NavArrowLeft = ({ height, color }) => {
  return (
    <svg height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path
          d="M15 6l-6 6 6 6"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  )
}

export default NavArrowLeft
