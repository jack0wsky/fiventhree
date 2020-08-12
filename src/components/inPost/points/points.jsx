import React, { useState } from 'react'
import { PointWrapper, Address, Description, ChooseBtn } from './points.styled'
import { useDispatch } from 'react-redux'
import { provideInPostLocker } from '../../../actions/provideInPostLocker'

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
  }
  return (
    <PointWrapper
      onClick={() => {
        setToggle(!toggle)
      }}
      toggle={toggle}
    >
      <Address>{point.address.line1}</Address>
      <Description>{point.location_description}</Description>
      {toggle ? (
        <ChooseBtn onClick={() => choosePoint(point)}>Wybierz</ChooseBtn>
      ) : null}
    </PointWrapper>
  )
}

export default InPostPoints
