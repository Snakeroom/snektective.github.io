import React, { Component } from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SnekEmoji from '../components/SnekEmoji'
import DiscordList from '../components/DiscordList'
import GifList from '../components/GifList'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <h1>Until next time.</h1>
          <img src="https://media0.giphy.com/media/sWedUFPt2zrgc/giphy.gif" />
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
