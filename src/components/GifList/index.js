import React, { Component } from 'react'
import Gif from './Gif'
import styles from './index.module.scss'

class GifList extends Component {
  render() {
    return (
      <div className={styles.giflist}>
        <Gif src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6f%2F10%2Ff6%2F6f10f618b21ac4ceae614259ce789065--ball-python-terrarium-cute-snakes.jpg&f=1" />
        <Gif src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6f%2F10%2Ff6%2F6f10f618b21ac4ceae614259ce789065--ball-python-terrarium-cute-snakes.jpg&f=1" />
        <Gif src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6f%2F10%2Ff6%2F6f10f618b21ac4ceae614259ce789065--ball-python-terrarium-cute-snakes.jpg&f=1" />
        <Gif src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6f%2F10%2Ff6%2F6f10f618b21ac4ceae614259ce789065--ball-python-terrarium-cute-snakes.jpg&f=1" />
      </div>
    )
  }
}

export default GifList
