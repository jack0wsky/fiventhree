import React from 'react'

const Cancel = ({ height, color }) => {
  return (
    <svg height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path
          d="M6.757 17.243L12 12m5.243-5.243L12 12m0 0L6.757 6.757M12 12l5.243 5.243"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}

export default Cancel
