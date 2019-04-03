import React, { Component } from 'react'
import styles from './index.module.scss'

const categories = {
  id: 'website',
  contributors: 'general contributions',
  logo: 'sneknet logo',
}
const users = [
  {
    reddit: 'offbeatwitch',
    github: 'hedgehog1029',
    category: 'site',
  },
  {
    reddit: 'BrandonDyer64',
    github: 'BrandonDyer64',
    category: 'site',
  },
  {
    reddit: '__-_------___---',
    github: '9hp',
    category: 'site',
  },
  {
    reddit: '7coil',
    github: '7coil',
    category: 'site',
  },
  {
    reddit: 'taxborn',
    github: 'taxborn',
    category: 'contributors',
  },
  {
    reddit: 'seshpenguin',
    github: 'Seshpenguin',
    category: 'contributors',
  },
  {
    reddit: 'thesbros',
    github: 'odensc',
    category: 'contributors',
  },
  {
    reddit: 'goz3rr',
    github: 'goz3rr',
    category: 'contributors',
  },
  {
    reddit: 'Hexbugman213',
    github: null,
    category: 'logo',
  },
  {
    reddit: 'cubity_first',
    github: 'CubityFirst',
    category: 'contributors',
  }
]

class Footer extends Component {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
    this.onRelease = this.onRelease.bind(this)

    this.state = {
      mode: 'reddit',
    }
  }
  onPress(event) {
    if (event.keyCode === 17) {
      this.setState({
        mode: 'github',
      })
    }
  }
  onRelease(event) {
    if (event.keyCode === 17) {
      this.setState({
        mode: 'reddit',
      })
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onPress, false)
    document.addEventListener('keyup', this.onRelease, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onPress, false)
    document.removeEventListener('keyup', this.onRelease, false)
  }
  render() {
    const { mode } = this.state
    return (
      <footer className={styles.footer}>
        <p>
          contributors
          <br />
          <span className={styles.links}>
            {users.map(user => {
              const username = user[mode]
              const url =
                mode === 'reddit'
                  ? `https://reddit.com/u/${username}`
                  : `https://github.com/${username}`
              const prefix = mode === 'reddit' ? 'u/' : ''
              return (
                <a key={username} href={url} title={categories[user.category]}>
                  {prefix}
                  {username}
                </a>
              )
            })}
          </span>
        </p>
      </footer>
    )
  }
}

export default Footer
