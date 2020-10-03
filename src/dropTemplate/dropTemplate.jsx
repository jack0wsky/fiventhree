import React from 'react'
import {
  TemplateWrapper,
  CollectionImage,
  Image,
  CurrentClientsAmount,
} from './dropTemplate.styled'
import SignForm from './signForm/signForm'

const DropTemplate = ({ pageContext }) => {
  const { drop } = pageContext
  const getCurrentClients = () => {
    console.log(drop)
    const amount = drop.clients.length
    if (amount < 20) {
      return 20 - amount
    }
    return amount
  }
  return (
    <TemplateWrapper>
      <CollectionImage>
        <Image src={drop.image.url} alt={drop.image.url} />
      </CollectionImage>
      <h2>{drop.name}</h2>
      <CurrentClientsAmount>
        <p>
          Aby drop się odbył, musi być co najmniej 20 chętnych. Pozostało{' '}
          {getCurrentClients()}
        </p>
      </CurrentClientsAmount>
      <SignForm id={drop.id} />
    </TemplateWrapper>
  )
}

export default DropTemplate
