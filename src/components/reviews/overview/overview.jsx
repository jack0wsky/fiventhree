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
import { useSelector } from 'react-redux'
import { useQuery, gql } from '@apollo/client'

const REVIEWS = gql`
  query Review($shopifyId: String!) {
    reviews(where: { _search: $shopifyId }) {
      author
      caption
      rate
      createdAt
      id
      shopifyId
    }
  }
`

const Overview = ({ reviews }) => {
  const { shopifyId } = useSelector((state) => state.getProductData)
  const { loading, data } = useQuery(REVIEWS, { variables: { shopifyId } })
  const [averangeRate, setAverangeRate] = useState(0)
  const [rates, setRates] = useState([])
  const [visualRate] = useState([
    { key: 1, value: 5 },
    { key: 2, value: 4 },
    { key: 3, value: 3 },
    { key: 4, value: 2 },
    { key: 5, value: 1 },
  ])

  const calculateReviewsAverange = () => {
    const { reviews } = data
    const tempArray = []
    reviews.forEach(({ rate }) => {
      const positive = rate.filter((star) => {
        return star.checked === true
      })
      tempArray.push(positive.length)
      const sum = tempArray.reduce((acc, cur) => {
        return (acc += cur)
      }, 0)
      const total = (sum / tempArray.length).toFixed(1)
      setRates(total)
    })
  }

  const parseReviewsLength = () => {
    const length = data.reviews.length
    switch (length) {
      case length >= 2 && length < 5: {
        return `${length} opinie`
      }
      default: {
        return `${length} opinii`
      }
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
    if (!loading) {
      calculateReviewsAverange()
      getAmountOfCurrentReview()
    }
  }, [loading])
  return (
    <ReviewOverview>
      {!loading ? (
        <Values>
          <AverangeRate>{rates}</AverangeRate>
          <TotalRates>{parseReviewsLength()}</TotalRates>
        </Values>
      ) : null}
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
