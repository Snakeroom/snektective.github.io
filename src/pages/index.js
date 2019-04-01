import React, { Component } from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SnekEmoji from '../components/SnekEmoji'
import GifList from '../components/GifList'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <GifList />
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
