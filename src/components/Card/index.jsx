import React from 'react';
import { generatePath, useHistory } from 'react-router-dom';
import { Button, Card as EntityCard } from 'react-bootstrap';

import { routes } from 'constants/routes';

export const Card = ({ entity, width, height, handleClick, isShowOverview, search }) => {
  const { push } = useHistory();

  const handleCardClick = () => {
    if (handleClick) {
      handleClick();
    }
    push(
      generatePath(routes.show, {
        id: entity.id,
      })
    );
  };

  return (
    <EntityCard width={width} className="shows-card" onClick={handleCardClick}>
      <EntityCard.Img
        height={height}
        variant="top"
        src={isShowOverview ? entity?.image.original : entity?.image?.medium}
      />
      <EntityCard.Body>
        <EntityCard.Title>{entity?.name}</EntityCard.Title>
        {search ? null : <EntityCard.Text>{entity?.genres?.join(', ')}</EntityCard.Text>}
        {isShowOverview && <EntityCard.Text dangerouslySetInnerHTML={{ __html: entity?.summary }} />}
        <EntityCard.Text>{entity?.rating?.avarage}</EntityCard.Text>
        {search ? null : <Button variant="primary">Add to favourite</Button>}
      </EntityCard.Body>
    </EntityCard>
  );
};
