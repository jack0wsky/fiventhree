import React, { useState, useEffect } from 'react'
import {
  TemplateWrapper,
  CollectionImage,
  Image,
  FakeOverlay,
} from './dropTemplate.styled'
import CountDown from './countdown/countDown'
import ProductsGrid from './productsGrid/productsGrid'
import { useStaticQuery, graphql } from 'gatsby'

const DropTemplate = ({ pageContext }) => {
  const preorderCollection = useStaticQuery(graphql`
    {
      allShopifyCollection(
        filter: { title: { eq: "Support Local Hustlers" } }
      ) {
        edges {
          node {
            title
            products {
              title
              images {
                id
                originalSrc
                altText
                localFile {
                  childImageSharp {
                    fluid {
                      srcWebp
                      srcSetWebp
                      tracedSVG
                      src
                    }
                  }
                }
              }
              id
              variants {
                price
                shopifyId
                title
              }
            }
          }
        }
      }
    }
  `)
  const [preorderItems, setPreorderItems] = useState([])
  const [opened, setOpened] = useState(false)
  useEffect(() => {
    const {
      allShopifyCollection: { edges },
    } = preorderCollection
    setPreorderItems(edges[0].node.products)
  }, [])
  const [countdown, setCountdown] = useState(null)
  const { drop } = pageContext
  setInterval(() => {
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
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      const result = `${days}d ${hours}h ${minutes}m ${seconds}s`
      setCountdown(result)
    } else {
      const countdown = end - now
      const days = Math.floor(countdown / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((countdown % (1000 * 60)) / 1000)
      const result = `${days}d ${hours}h ${minutes}m ${seconds}s`
      setOpened(true)
      setCountdown(result)
    }
  }, 1000)
  return (
    <TemplateWrapper>
      <CollectionImage>
        <Image src={drop.image.url} alt={drop.image.url} />
      </CollectionImage>
      {opened ? (
        <>
          <h2>{drop.name}</h2>
          <CountDown startDate={drop.startDate} endDate={drop.endDate} />
          <ProductsGrid items={preorderItems} />
        </>
      ) : (
        <FakeOverlay>
          <p>Do rozpoczęcia pozostało: {countdown}</p>
        </FakeOverlay>
      )}
    </TemplateWrapper>
  )
}

export default DropTemplate

// && countdown === 0
