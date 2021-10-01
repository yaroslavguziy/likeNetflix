import React from 'react';
import { generatePath, useHistory } from 'react-router-dom';
import { Button, Card as EntityCard } from 'react-bootstrap';

import { routes } from 'constants/routes';
import { postUsersFavoritesData, postUsersLikesData } from 'api/users';

export const Card = ({ entity, width, height, isShowOverview, search }) => {
  const { push } = useHistory();

  const handleCardClick = () => {
    push(
      generatePath(routes.show, {
        id: entity.id,
      })
    );
  };

  const handleFavorite = e => {
    e.stopPropagation();
    e.preventDefault();

    postUsersFavoritesData(entity.id);
  };

  const handleLike = e => {
    e.stopPropagation();
    e.preventDefault();
    postUsersLikesData(entity.id);
  };

  return (
    <EntityCard width={width} className={search ? '' : 'mt-3'} onClick={handleCardClick}>
      <EntityCard.Img
        height={height}
        variant="top"
        src={isShowOverview ? entity?.image.original : entity?.image?.medium}
      />
      <EntityCard.Body className="text-center">
        <EntityCard.Title>{entity?.name}</EntityCard.Title>
        <EntityCard.Text className="fw-bold text-danger">Rating: {entity?.rating?.average}</EntityCard.Text>
        {search ? null : (
          <EntityCard.Text className="fw-bold text-dark">Genres: {entity?.genres?.join(', ')}</EntityCard.Text>
        )}
        {isShowOverview && <EntityCard.Text dangerouslySetInnerHTML={{ __html: entity?.summary }} />}
        {search ? null : (
          <div className="d-flex align-items-center justify-content-between">
            <span className="fw-bold text-dark">Likes: {entity?.likeCount}</span>
            <Button variant="danger" onClick={handleLike}>
              {entity?.likeCount ? 'Like' : 'Dislike'}
            </Button>
          </div>
        )}
        {search ? null : (
          <Button className="mt-3 w-100" variant="danger" onClick={handleFavorite}>
            {entity?.isFavorite ? 'Remove favorite' : 'Add to favorite'}
          </Button>
        )}
      </EntityCard.Body>
    </EntityCard>
  );
};
