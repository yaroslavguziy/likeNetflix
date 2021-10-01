import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { useEntity } from 'hooks/entities';

import { Card } from 'components/Card';

export const Show = () => {
  const { id } = useParams();
  const { data: entity } = useEntity({ id });

  return (
    <Container className="mt-4">
      <Card height="800px" entity={entity} isShowOverview />
    </Container>
  );
};
