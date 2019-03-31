import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import SnekEmoji from '../components/SnekEmoji';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <h2><SnekEmoji /> ssssoon <SnekEmoji /></h2>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage;
