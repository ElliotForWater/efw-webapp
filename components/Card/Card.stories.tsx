import React from 'react'
import CardComponent from './Card'

export default { title: 'Components/Card' }

export const Card = () => (
  <CardComponent
    title='I am a fancy card'
    text='some description to make the card even more fancier'
    image={{ url: '/images/how-it-works/change.svg', title: 'I am a fancy card' }}
  />
)
