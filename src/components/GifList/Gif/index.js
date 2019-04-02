import React from 'react'
import styles from './index.module.scss'

export default props => {
  return (
    <div className={styles.gif}>
      <a
        href={`https://www.reddit.com/sequence/scene?chapter=${
          props.chapter
        }&scene=${props.scene}`}
      >
        <img src={props.src} />
      </a>
    </div>
  )
}
