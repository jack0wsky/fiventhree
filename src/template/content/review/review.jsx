import React, { useState, useEffect } from 'react'
import { Wrapper, StarsWrapper, RatesAmount, SeeAllBtn } from './review.styled'
import Star from '../../../components/reviews/review/star/star'
import { handleReviewsAside } from '../../../actions/reviews/handleReviewsAside'
import { useDispatch } from 'react-redux'

const ProductReview = ({ reviews, loading }) => {
  const [averangeSum, setSum] = useState(0)
  const dispatch = useDispatch()
  const [averangeRate, setAverangeRate] = useState([
    { key: 1, checked: false },
    { key: 2, checked: false },
    { key: 3, checked: false },
    { key: 4, checked: false },
    { key: 5, checked: false },
  ])
  const calculateRate = () => {
    const tempArr = []
    reviews.forEach(({ rate }) => {
      const stars = rate.filter((star) => {
        return star.checked === true
      })
      tempArr.push(stars.length)
      const sum = tempArr.reduce((acc, cur) => {
        return (acc += cur)
      }, 0)
      setSum((sum / tempArr.length).toFixed(1))
    })
  }
  const setStars = () => {
    let tempArr
    reviews.forEach(({ rate }) => {
      const positive = rate.filter((star) => {
        return star.checked === true
      })
      //setAverangeRate(positive)
      const stars = averangeRate.filter((star) => {
        return star.key <= positive.length
      })
      stars.forEach((star) => {
        star.checked = true
      })
      const rest = averangeRate.filter((star) => {
        return star.key > positive.length
      })
      tempArr = stars.concat(rest)
    })
    setAverangeRate(tempArr)
  }
  useEffect(() => {
    setStars()
    calculateRate()
  }, [loading])

  return (
    <Wrapper>
      {reviews.length > 0 ? (
        <StarsWrapper>
          {averangeRate.length > 0
            ? averangeRate.map(({ key, checked }) => {
                return <Star key={key} checked={checked} height={'30px'} />
              })
            : null}
          <RatesAmount>
            {averangeSum > 0 ? averangeSum : 0} {`(${reviews.length})`}
          </RatesAmount>
        </StarsWrapper>
      ) : null}
      {reviews.length > 0 ? (
        <SeeAllBtn onClick={() => dispatch(handleReviewsAside())}>
          Zobacz wszystkie
        </SeeAllBtn>
      ) : null}
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


          return this.state.averangeRate.length > 0
                  ? this.state.averangeRate.map(({key, checked}) => {
                    return <Star key={key} height={'25px'} checked={checked}/>
                  })
 */
