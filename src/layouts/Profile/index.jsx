import React, { useMemo } from 'react';
import { Card as ProfileCard, Container, Image, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useEntities } from 'hooks/entities';
import { routes } from 'constants/routes';
import { auth } from 'db/auth';
import { Card } from 'components/Card';

export const Profile = () => {
  const user = auth.currentUser;
  const { data } = useEntities();

  const favorites = useMemo(() => data?.filter(({ isFavorite }) => isFavorite), [data]);
  const likes = useMemo(() => data?.filter(({ isLiked }) => isLiked), [data]);

  return (
    <>
      <div className="mt-5 d-flex justify-content-center">
        <ProfileCard className="w-75">
          <ProfileCard.Body>
            <h2 className="text-center mb-5">Profile</h2>
            <div className="d-flex align-items-center justify-content-center">
              <Image
                width="100px"
                height="100px"
                src={user?.photoURL ? user?.photoURL : 'https://via.placeholder.com/150'}
                roundedCircle
              />
            </div>
            <ProfileCard.Text className="text-center mt-3">
              <strong>User name: {user.displayName ? user?.displayName : user?.email}</strong>
            </ProfileCard.Text>
            <ProfileCard.Text className="text-center mt-3">
              <strong>User email: {user?.email}</strong>
            </ProfileCard.Text>
            <Link to={routes.updateProfile} className="btn btn-danger w-100 mt-3">
              Update Profile
            </Link>
          </ProfileCard.Body>
        </ProfileCard>
      </div>
      <div className="mt-4">
        <h2 className="text-center">Favorites</h2>
        <Container fluid className="mt-4">
          <Row>
            {favorites?.map(favorite => (
              <Col xs="12" sm="6" md="4" lg="3" xl="2" key={favorite.id}>
                <Card entity={favorite} />
              </Col>
            ))}
          </Row>
        </Container>
        <div className="mt-5">
          <h2 className="text-center">Liked</h2>
          <Container fluid className="mt-5">
            <Row>
              {likes?.map(like => (
                <Col xs="12" sm="6" md="4" lg="3" xl="2" key={like.id}>
                  <Card entity={like} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
