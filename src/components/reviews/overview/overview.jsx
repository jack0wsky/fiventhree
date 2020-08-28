import React, { useEffect, useState } from 'react'
import {
  ReviewOverview,
  AverangeRate,
  TotalRates,
  Values,
  Visual,
  Record,
  Value,
  Line,
} from './overview.styled'

const Overview = ({ reviews }) => {
  const [averangeRate, setAverangeRate] = useState(0)
  const [visualRate] = useState([
    { key: 1, value: 5 },
    { key: 2, value: 4 },
    { key: 3, value: 3 },
    { key: 4, value: 2 },
    { key: 5, value: 1 },
  ])
  const getReviewsAverange = () => {
    const averange = []
    return reviews.forEach(({ rate }) => {
      const found = rate.filter((val) => {
        return val.checked === true
      })
      averange.push(found.length)
      const sum = averange.reduce((acc, cur) => {
        return (acc += cur)
      }, 0)
      setAverangeRate(sum / averange.length)
    })
  }

  useEffect(() => {
    getReviewsAverange()
  }, [])
  return (
    <ReviewOverview>
      <Values>
        <AverangeRate>{averangeRate}</AverangeRate>
        <TotalRates>{reviews.length} opinie</TotalRates>
      </Values>
      <Visual>
        {visualRate.map(({ key, value }) => {
          return (
            <Record key={key}>
              <Value>{value}</Value>
              <Line />
            </Record>
          )
        })}
      </Visual>
    </ReviewOverview>
  )
}

export default Overview
