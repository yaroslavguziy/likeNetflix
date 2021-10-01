import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useEntities } from 'hooks/entities';
import { Card } from 'components/Card';
import { FilterDropdown } from 'components/FilterDropdown';
import { genres } from 'constants/genres';
import { ratings } from 'constants/ratings';

export const Shows = () => {
  const { data: entities } = useEntities();

  const [filters, setFilters] = useState({ genre: null, rating: null });

  const filteredEntities = entities
    ?.filter(({ genres }) => (filters.genre ? genres.includes(filters.genre) : true))
    .filter(({ rating }) => (filters.rating ? +filters.rating >= rating.average : true));

  const handleClick = ({ target }) => {
    setFilters(filters => ({ ...filters, [target.name]: target.textContent }));
  };

  return (
    <Container fluid className="mt-4">
      <div className="d-flex align-items-center flex-wrap justify-content-between">
        <FilterDropdown value={filters.genre} values={genres} handleClick={handleClick} name="genre" />
        <FilterDropdown value={filters.rating} values={ratings} handleClick={handleClick} name="rating" />
      </div>

      <Row>
        {filteredEntities?.map(entity => (
          <Col xs="12" sm="6" md="4" lg="3" xl="2" key={entity.id}>
            <Card className="mt-2" entity={entity} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
