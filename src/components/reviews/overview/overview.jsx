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
  const [rates, setRates] = useState([])
  const [visualRate] = useState([
    { key: 1, value: 5 },
    { key: 2, value: 4 },
    { key: 3, value: 3 },
    { key: 4, value: 2 },
    { key: 5, value: 1 },
  ])
  const getReviewsAverange = () => {
    const averange = []
    if (reviews) {
      return reviews.forEach(({ rate }) => {
        const found = rate.filter((val) => {
          return val.checked === true
        })
        averange.push(found.length)
        const sum = averange.reduce((acc, cur) => {
          return (acc += cur)
        }, 0)
        setAverangeRate((sum / averange.length).toFixed(1))
      })
    }
  }
  const getAmountOfCurrentReview = () => {
    let ratesArr = []
    let allRates = []
    let key = 0
    let value = 6
    allRates.forEach((rate) => {
      console.log(rate)
    })
    if (reviews) {
      reviews.forEach(({ rate }) => {
        const selected = rate.filter(({ checked }) => {
          return checked === true
        })
        console.log(selected.length)
      })
      return reviews.forEach(({ rate }) => {
        const found = rate.filter(({ checked }) => {
          return checked === true
        })
        key += 1
        value -= 1
        ratesArr.push({
          key: key,
          value: value,
          rate: found.length,
          quantity: 1,
        })
        setRates(ratesArr)
      })
    }
  }

  useEffect(() => {
    getReviewsAverange()
    getAmountOfCurrentReview()
  }, [])
  return (
    <ReviewOverview>
      <Values>
        <AverangeRate>{averangeRate}</AverangeRate>
        <TotalRates>{reviews.length} opinie</TotalRates>
      </Values>
    </ReviewOverview>
  )
}

export default Overview

/*
<Visual>
        {rates.map(({ key, value, rate, quantity }) => {
          return (
            <Record key={key}>
              <Value>{value}</Value>
              <Line quantity={quantity} arrayLength={rates.length} />
            </Record>
          )
        })}
      </Visual>
 */
