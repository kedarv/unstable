import React from "react";
import { Card, Image } from "semantic-ui-react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const UnicornCard = props => (
  <Card>
    <LazyLoadComponent>
      <Image src={"../../card_images/" + props.img} wrapped ui={false} />
    </LazyLoadComponent>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        {props.type} / {props.deck} / {props.quantity}
      </Card.Meta>
      <Card.Description>{props.text}</Card.Description>
    </Card.Content>
  </Card>
);

export default UnicornCard;
