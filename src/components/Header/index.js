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
          <img src={snekImage} alt="Snektective logo" />
          <h1 className={styles.name}>Sneknet</h1>
        </Link>
        <div className={styles.links}>
          <a href="https://github.com/Snektective" target="_blank">
            github
          </a>
          <a href="https://discord.gg/yq9QV2A" target="_blank">
            snakeroom
          </a>
          <a href="https://discord.gg/f9xaeJG" target="_blank">
            april knights
          </a>
          <a href="https://discord.gg/sfe" target="_blank">
            sfe
          </a>
          <a href="https://discord.gg/3rcujhh" target="_blank">
            sequence narrators
          </a>
        </div>
        <div className={styles.installButtons}>
          <h2>
            Install Sneknet&nbsp;
            <span className={styles.tooltip}>
              <img
                src={question}
                style={{ height: '1em', marginBottom: '-2px' }}
              />
              <span className={styles.tooltiptext}>
                Sneknet is a browser etension that allows you to use your votes
                to support story-telling collaboration from our Reddit
                communities.
              </span>
            </span>
          </h2>
          <span className={styles.buttons}>
            <a
              href="https://addons.mozilla.org/en-US/firefox/addon/snek/"
              target="_blank"
            >
              Firefox
            </a>
            <a
              href="https://chrome.google.com/webstore/detail/snek/cdajbijppfenmcmgnhekghefilinkfnm"
              target="_blank"
            >
              Chrome
            </a>
          </span>
        </div>
      </header>
    )
  }
}

export default Header
