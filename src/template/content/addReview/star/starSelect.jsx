import React from 'react'
import styled from 'styled-components'

const StarButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const StarSelect = ({
  height,
  hoverStars,
  value,
  checked,
  resetStars,
  handleStars,
}) => {
  return (
    <StarButton
      value={value}
      onMouseLeave={() => resetStars()}
      onClick={(e) => handleStars(e)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox="0 0 50.82 48.16"
      >
        <g id="Warstwa_2" data-name="Warstwa 2">
          <g id="Warstwa_1-2" data-name="Warstwa 1">
            <path
              fill={checked ? '#ffa70c' : '#d0d0d0'}
              d="M47,11.34l3.78,10.78L34.3,27.58,44.66,41.3l-9.24,6.86L25.06,33.74l-9.8,14.42L5.88,41.3,16.24,27.58,0,22.12,3.78,11.34,19.6,17.5V0H30.8V17.5Z"
            />
          </g>
        </g>
      </svg>
    </StarButton>
  )
}
export default StarSelect
