import React, { Component } from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>404 Not Found</title>
        </Helmet>
        <Container>
          <h1>404</h1>
          <h2>Not found!</h2>
          <Link to="/">Go home, you're drunk</Link>
        </Container>
      </Layout>
    )
  }
}

export default NotFoundPage
