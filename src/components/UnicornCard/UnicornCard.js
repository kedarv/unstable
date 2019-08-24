import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const UnicornCard = (props) => (
  <Card>
    <Image src={'../../card_images/' + props.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.type} / {props.deck} / {props.quantity}</Card.Meta>
      <Card.Description>{props.text}</Card.Description>
    </Card.Content>
  </Card>
)

export default UnicornCard
