import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useEntities } from 'hooks/entities';
import { Card } from 'components/Card';

export const Shows = () => {
  const { data: entities } = useEntities();

  return (
    <Container fluid className="mt-4">
      <Row>
        {entities?.map(entity => (
          <Col xs="6" sm="4" md="3" lg="2" key={entity.id}>
            <Card entity={entity} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
