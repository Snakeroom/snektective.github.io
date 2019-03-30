import React, { Component } from 'react';
import Container from '../../components/Container';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>404 Not Found</title>
        </Helmet>
        <h1>404</h1>
        <h2>Not found!</h2>
        <Link to="/">Go home, you're drunk</Link>
      </Container>
    )
  }
}

export default NotFoundPage;
