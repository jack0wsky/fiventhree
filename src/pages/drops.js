import React, { useEffect, useState } from 'react'
import { Wrapper, Grid, Drop } from '../drops/drops.styled'
import { useQuery, gql } from '@apollo/client'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const DROPS = gql`
  query MyQuery {
    drops {
      name
      number
      date
      path
    }
  }
`

const Drops = () => {
  const { data, loading } = useQuery(DROPS)
  const [drops, setDrops] = useState([])
  useEffect(() => {
    if (!loading) {
      const { drops } = data
      setDrops(drops)
    }
    console.log(drops)
  }, [])
  console.log(data)
  const dropCountdown = (date) => {
    const curDate = new Date()
    const dropDate = new Date(date)
    const month = curDate.getMonth()
    if (month % 2) {
      return 31 - curDate.getDate() + dropDate.getDate()
    } else {
      return 30 - curDate.getDate() + dropDate.getDate()
    }
  }
  return (
    <Wrapper>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Grid>
          {data.drops.map(({ name, number, date, path }) => {
            return (
              <AniLink to={`/drops/${path}`} key={number}>
                <Drop>
                  <h4>
                    #{number} {name}
                  </h4>
                  <p>{dropCountdown(date)} dni</p>
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
