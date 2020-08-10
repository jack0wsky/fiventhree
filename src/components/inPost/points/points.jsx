import React from 'react'
import { PointWrapper, Address, Description } from './points.styled'

const InPostPoints = ({ point }) => {
  console.log(point)
  return (
    <PointWrapper>
      <Address>
        {point.address_details.street}, {point.address_details.city}
      </Address>
      <Description>{point.location_description}</Description>
    </PointWrapper>
  )
}

export default InPostPoints
