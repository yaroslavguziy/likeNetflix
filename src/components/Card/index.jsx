import React from 'react';
import { Button, Card as EntityCard } from 'react-bootstrap';

export const Card = ({ entity, width, height, handleClick, isShowOverview }) => {
  return (
    <EntityCard>
      <EntityCard.Img variant="top" src={entity.image.medium} />
      <EntityCard.Body>
        <EntityCard.Title>{entity.name}</EntityCard.Title>
        <EntityCard.Text>{entity.genres.join(', ')}</EntityCard.Text>
        <Button variant="primary">Add to favourite</Button>
      </EntityCard.Body>
    </EntityCard>
  );
};
