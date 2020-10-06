import React, { useState } from 'react'
import {
  TemplateWrapper,
  CollectionImage,
  Image,
  CurrentClientsAmount,
  OpenCountdown,
  Counter,
  Title,
  JoinBtn,
} from './dropTemplate.styled'
import SignForm from './signForm/signForm'
import CountDown from './countdown/countDown'

const DropTemplate = ({ pageContext }) => {
  const [opened, setOpened] = useState(false)
  const [countdown, setCountdown] = useState(null)
  const { drop } = pageContext
  setInterval(() => {
    const end = new Date(drop.startDate).getTime()
    const now = new Date().getTime()
    const distance = end - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    const result = `${days}d ${hours}h ${minutes}m ${seconds}s`
    setCountdown(result)
  }, 1000)
  const getCurrentClients = () => {
    const amount = drop.clients.length
    if (amount < 20) {
      return 20 - amount
    }
    return amount
  }
  return (
    <TemplateWrapper opened={opened}>
      <CollectionImage>
        <Image src={drop.image.url} alt={drop.image.url} />
      </CollectionImage>
      {opened && countdown === 0 ? (
        <>
          <CountDown startDate={drop.startDate} endDate={drop.endDate} />
          <h2>{drop.name}</h2>
          <CurrentClientsAmount>
            <p>
              Aby drop się odbył, musi być co najmniej 20 chętnych. Pozostało{' '}
              {getCurrentClients()}
            </p>
          </CurrentClientsAmount>
          <SignForm id={drop.id} />
        </>
      ) : (
        <OpenCountdown>
          <Title>Preoder rozpocznie się za:</Title>
          <Counter>{countdown}</Counter>
          <JoinBtn disabled={!opened} onClick={() => setOpened(true)}>
            Dołącz do preorderu
          </JoinBtn>
        </OpenCountdown>
      )}
    </TemplateWrapper>
  )
}

export default DropTemplate
