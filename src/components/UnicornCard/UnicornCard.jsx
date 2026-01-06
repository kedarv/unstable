import React from "react";
import { Card, Image, Text } from "@mantine/core";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const UnicornCard = props => (
  <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: '100%' }}>
    <Card.Section>
      <LazyLoadComponent>
        <Image 
          src={"../../card_images/" + props.img} 
          alt={props.name}
          fit="contain"
          style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }}
        />
      </LazyLoadComponent>
    </Card.Section>
    <Text fw={500} size="lg" mt="md">{props.name}</Text>
    <Text mt="xs" c="dimmed" size="sm">
      {props.type} / {props.deck} / {props.quantity}
    </Text>
    <Text size="sm" mt="sm">{props.text}</Text>
  </Card>
);

export default UnicornCard;
