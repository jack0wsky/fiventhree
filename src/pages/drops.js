import React, { useState } from 'react'
import { Wrapper, Grid, Drop, Info } from '../drops/drops.styled'
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
  const [opened, setOpened] = useState(false)
  const [date, setDate] = useState(0)
  setInterval(() => {
    if (!loading) {
      const { drops } = data
      drops.forEach((drop) => {
        const { startDate, endDate } = drop
        const start = new Date(startDate).getTime()
        const end = new Date(endDate).getTime()
        const now = new Date().getTime()
        const distance = start - now
        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24))
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          )
          const seconds = Math.floor((distance % (1000 * 60)) / 1000)
          const result = `${days}d ${hours}h ${minutes}m ${seconds}s`
          setDate(result)
        } else {
          const countdown = end - now
          const days = Math.floor(countdown / (1000 * 60 * 60 * 24))
          const hours = Math.floor(
            (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
          const minutes = Math.floor(
            (countdown % (1000 * 60 * 60)) / (1000 * 60)
          )
          const seconds = Math.floor((countdown % (1000 * 60)) / 1000)
          const result = `${days}d ${hours}h ${minutes}m ${seconds}s`
          setOpened(true)
          setDate(result)
        }
      })
    }
  }, 1000)
  return (
    <Wrapper>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Grid>
          {data.drops.map(({ name, number, path }) => {
            return (
              <Drop>
                <h4>{name}</h4>
                <Info opened={opened}>
                  <p>{date}</p>
                  {opened ? (
                    <AniLink
                      to={`/drops/${path}`}
                      cover
                      bg={'#ffffff'}
                      key={number}
                    >
                      Dołącz
                    </AniLink>
                  ) : null}
                </Info>
              </Drop>
            )
          })}
        </Grid>
      )}
    </Wrapper>
  )
}

export default Drops
