import React, { Component } from 'react'
import Gif from './Gif'
import { getData } from './getData'
import styles from './index.module.scss'

class GifList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // Start pinging server
    this.interval = setInterval(() => {
      this.update()
    }, 5000)
    this.update()
  }

  update() {
    // Post to backend
    getData().then(data => {
      // Add gifs to state
      let key = 0
      const gifs = data.targets.map(target => {
        return (
          <Gif
            key={key++}
            src={target.extra.url}
            fullname={target.fullname}
          />
        )
      })
      this.setState({ gifs })
    })
  }

  componentWillUnmount() {
    super.componentWillUnmount()
    // Stop pinging server
    clearInterval(this.interval)
  }

  render() {
    return <div className={styles.giflist}>{this.state.gifs}</div>
  }
}

export default GifList
