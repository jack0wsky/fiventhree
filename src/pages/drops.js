import React, { useEffect, useState } from 'react'
import { Wrapper, Grid, Drop } from '../drops/drops.styled'
import { useQuery, gql } from '@apollo/client'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const DROPS = gql`
  query DROPS {
    drops {
      endDate
      name
      id
      startDate
      path
    }
  }
`

const Drops = () => {
  const { data, loading } = useQuery(DROPS)
  const [date, setDate] = useState(null)
  setInterval(() => {
    data.drops.forEach(({ startDate, endDate }) => {
      const start = new Date(startDate).getTime()
      const end = new Date(endDate).getTime()
      const now = new Date().getTime()
      const distance = start - now
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        const result = `${
          days > 0 ? days : ''
        } ${hours}h ${minutes}m ${seconds}s`
        setDate(result)
      } else {
        const toEnd = end - now
        const days = Math.floor(toEnd / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (toEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((toEnd % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((toEnd % (1000 * 60)) / 1000)
        const result = `${days}d ${hours}h ${minutes}m ${seconds}s`
        setDate(result)
      }
    })
  }, 1000)
  return (
    <Wrapper>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Grid>
          {data.drops.map(({ name, number, path }) => {
            return (
              <AniLink to={`/drops/${path}`} cover bg={'#ffffff'} key={number}>
                <Drop>
                  <h4>
                    #{number} {name}
                  </h4>
                  <p>{date}</p>
                </Drop>
              </AniLink>
            )
          })}
        </Grid>
      )}
    </Wrapper>
  )
}

export default Drops
