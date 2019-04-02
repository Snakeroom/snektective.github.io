import React, { Component } from 'react'

import styles from './index.module.scss'

import snek from './Images/snek.png'
import knight from './Images/knight.png'
import sfe from './Images/sfe.png'
import film from './Images/film.png'

const discords = [
  { link: 'yq9QV2A', title: 'Snakeroom', icon: snek },
  { link: 'f9xaeJG', title: 'April Knights', icon: knight },
  { link: 'sfe', title: 'Something for Everyone', icon: sfe },
  { link: '3rcujhh', title: 'Sequence Narrators', icon: film },
]

function Discord(props) {
  return (
    <div className={styles.discord}>
      <img src={props.discord.icon} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '0px',
          alignItems: 'flex-end',
        }}
      >
        <span>{props.discord.title}</span>
        <a href={'https://discord.gg/' + props.discord.link}>Join</a>
      </div>
    </div>
  )
}

class DiscordList extends Component {
  render() {
    return (
      <>
        <h2>Our Friends</h2>
        <div className={styles.discords}>
          <Discord discord={discords[0]} />
          <Discord discord={discords[1]} />
          <Discord discord={discords[2]} />
          <Discord discord={discords[3]} />
        </div>
      </>
    )
  }
}

export default DiscordList
