import React, { useState, useEffect } from 'react'
import { Wrapper, StarsWrapper, RatesAmount, SeeAllBtn } from './review.styled'
import Star from '../../../components/reviews/review/star/star'
import { handleReviewsAside } from '../../../actions/reviews/handleReviewsAside'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const ProductReview = () => {
  const dispatch = useDispatch()
  const [values, setValues] = useState([])
  const [fetching, setFetching] = useState(false)
  const [averangeRate, setAverangeRate] = useState([
    {
      key: 1,
      checked: false,
    },
    {
      key: 2,
      checked: false,
    },
    {
      key: 3,
      checked: false,
    },
    {
      key: 4,
      checked: false,
    },
    {
      key: 5,
      checked: false,
    },
  ])
  const [averangeSum, setAverange] = useState(0)

  const getReviews = async () => {
    await axios
      .get('https://boiling-everglades-34125.herokuapp.com/reviews')
      .then((res) => {
        setAverangeRate(res.data)
        console.log(res.data)
        setFetching(true)
      })
  }

  const getAverange = () => {
    const averange = new Array(5)
    const total = [
      { value: 5 },
      { value: 4 },
      { value: 3 },
      { value: 2 },
      { value: 2 },
    ]
    if (fetching) {
      console.log(averangeRate)
      return averangeRate.forEach((rate) => {
        const found = rate.filter(({ checked }) => checked === true)
        averange.push(found.length)
        const sum = averange.reduce((acc, cur) => {
          return (acc += cur)
        }, 0)
        setAverange((sum / averangeRate.length).toFixed(1))
      })
    }
    console.log(averangeSum)
  }

  const setStars = () => {
    const lessThan = averangeRate.filter(({ key }) => {
      return key <= averangeSum
    })
    const moreThan = averangeRate.filter(({ key }) => {
      return key > averangeSum
    })
    lessThan.forEach((rate) => {
      rate.checked = true
    })
    const merged = lessThan.concat(moreThan)
    setAverangeRate(merged)
  }
  useEffect(async () => {
    await getReviews().then(() => {
      getAverange()
      setStars()
    })
  }, [averangeSum])
  return (
    <Wrapper>
      <StarsWrapper>
        {averangeRate.length > 0
          ? averangeRate.map(({ key, checked }) => {
              return <Star key={key} height={'25px'} checked={checked} />
            })
          : null}
        <RatesAmount>
          {averangeSum} ({averangeRate.length})
        </RatesAmount>
      </StarsWrapper>
      <SeeAllBtn onClick={() => dispatch(handleReviewsAside())}>
        Zobacz wszystkie
      </SeeAllBtn>
    </Wrapper>
  )
}

export default ProductReview

/*

{!loading
          ? reviews[0].rate.map(({ checked }) => {
              return <Star height={'30px'} checked={checked} />
            })
          : null}
 */
