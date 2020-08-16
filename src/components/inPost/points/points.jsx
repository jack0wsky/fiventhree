import React, { useState } from 'react'
import {
  PointWrapper,
  Address,
  Description,
  ChooseBtn,
  IconWrapper,
  DataWrapper,
  OpeningHours,
} from './points.styled'
import { useDispatch } from 'react-redux'
import { provideInPostLocker } from '../../../actions/provideInPostLocker'
import { handleInPostModal } from '../../../actions/handleInPostModal'
import Pin from '../pinIcon/pinIcon'
import { colors } from '../../../theme'

const InPostPoints = ({ point }) => {
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  const choosePoint = (point) => {
    const exist = localStorage.getItem('deliveryPoint')
    const data = {
      name: point.name,
      street: point.address.line1,
      city: point.address.line2,
    }
    //TODO handling data about selected point
    //TODO Caching this data
    if (exist) {
      localStorage.removeItem('deliveryPoint')
      localStorage.setItem('deliveryPoint', JSON.stringify(data))
      dispatch(provideInPostLocker(point))
    } else {
      localStorage.setItem('deliveryPoint', JSON.stringify(data))
      dispatch(provideInPostLocker(point))
    }
    dispatch(handleInPostModal())
  }
  return (
    <PointWrapper
      onClick={() => {
        setToggle(!toggle)
      }}
      toggle={toggle}
    >
      <IconWrapper>
        <Pin height={'35px'} color={colors.darkRed} />
      </IconWrapper>
      <DataWrapper>
        <Address>{point.address.line1}</Address>
        <Description>{point.location_description}</Description>
        <OpeningHours>{point.opening_hours}</OpeningHours>
      </DataWrapper>
      <ChooseBtn onClick={() => choosePoint(point)}>Wybierz</ChooseBtn>
    </PointWrapper>
  )
}

export default InPostPoints
