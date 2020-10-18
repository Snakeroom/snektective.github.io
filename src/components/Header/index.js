import React, { Component } from 'react'
import styles from './index.module.scss'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import snekImage from './snek.png'
import question from './question.png'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Helmet>
          <link rel="shortcut icon" href={snekImage} />
          <meta property="og:image" content={snekImage} />
        </Helmet>
        <Link to="/">
          <img src={snekImage} alt="Snakeroom logo" />
          <h1 className={styles.name}>Sneknet</h1>
        </Link>
        <div className={styles.links}>
          <a href="https://github.com/Snakeroom" target="_blank">
            github
          </a>
          <a href="http://join.snakeroom.org/" target="_blank">
            discord
          </a>
        </div>
      </header>
    )
  }
}

export default Header
