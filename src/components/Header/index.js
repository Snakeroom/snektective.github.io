import React, { Component } from 'react'
import styles from './index.module.scss'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import snekImage from './snek.png'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Helmet>
          <link rel="shortcut icon" href={snekImage} />
          <meta property="og:image" content={snekImage} />
        </Helmet>
        <Link to="/">
          <img src={snekImage} alt="Snektective logo" />
          <h1 className={styles.name}>Sneknet</h1>
        </Link>
        <div className={styles.links}>
          <a href="https://github.com/Snektective">github</a>
          <a href="https://discord.gg/yq9QV2A">snakeroom</a>
          <a href="https://discord.gg/f9xaeJG">april knights</a>
          <a href="https://discord.gg/sfe">sfe</a>
          <a href="https://discord.gg/3rcujhh">sequence narrators</a>
        </div>
      </header>
    )
  }
}

export default Header
