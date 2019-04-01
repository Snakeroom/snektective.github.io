import React, { Component } from 'react'
import styles from './index.module.scss'

const categories = [
  {
    id: 'site',
    content: 'site written by',
  },
  {
    id: 'contributors',
    content: 'contributors',
  },
  {
    id: 'logo',
    content: 'sneknet icon courtesy of',
  },
]
const users = [
  {
    reddit: '__-_------___---',
    github: '9hp',
    category: 'site',
  },
  {
    reddit: 'offbeatwitch',
    github: 'hedgehog1029',
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
    reddit: 'cubity_first',
    github: 'CubityCube',
    category: 'contributors',
  },
  {
    reddit: 'Hexbugman213',
    github: null,
    category: 'logo',
  },
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
        {categories
          .filter(
            (
              category // Filter out categories that have no users in it
            ) =>
              users
                .filter(user => user.category === category.id)
                .filter(user => user[mode]).length > 0
          )
          .map(category => (
            <p key={category.id}>
              {category.content}
              <br />
              <span className={styles.links}>
                {users
                  .filter(user => user.category === category.id)
                  .filter(user => user[mode])
                  .map(user => {
                    const username = user[mode]

                    if (mode === 'reddit')
                      return (
                        <a
                          key={username}
                          href={`https://reddit.com/u/${username}`}
                        >{`/u/${username}`}</a>
                      )

                    if (mode === 'github')
                      return (
                        <a
                          key={username}
                          href={`https://github.com/${username}`}
                        >
                          {username}
                        </a>
                      )

                    // Return the username if unknown mode
                    return <span>{username}</span>
                  })}
              </span>
            </p>
          ))}
      </footer>
    )
  }
}

export default Footer
