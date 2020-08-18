import React from 'react'

const InstagramIcon = ({ height, color }) => {
  return (
    <a
      target="_blank"
      href="https://www.instagram.com/fiventhree_clothing/"
      rel="noreferrer"
    >
      <svg
        height={height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>instagram-icon</title>
        <g fill="none">
          <path
            d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
            stroke={color}
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d="M2 17V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z"
            stroke={color}
            strokeWidth="1.5"
          />
          <path
            d="M17.5 6.51l.01-.011"
            stroke={color}
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </a>
  )
}

export default InstagramIcon
