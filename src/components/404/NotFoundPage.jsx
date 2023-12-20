import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = ({unthozarized}) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1 className="display-4">{ unthozarized}</h1>
          <p className="lead">The page you are looking for doesn't exist.</p>
          <Button as={Link} to="/login" variant="primary">
            Go To Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
