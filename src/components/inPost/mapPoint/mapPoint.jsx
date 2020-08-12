import React, { useState } from 'react'
import { MapPointWrapper, Popup, Point } from './mapPoint.styled'

const MapPoint = ({ centerMapOnActivePoint, point, latitude, longitude }) => {
  const [extend, setExtend] = useState(false)
  const handlePoint = (point) => {
    setExtend(!extend)
  }
  return (
    <MapPointWrapper>
      <Popup extend={extend}>
        <p>{point.name}</p>
        <button>Wybierz</button>
      </Popup>
      <Point />
    </MapPointWrapper>
  )
}

export default MapPoint
