import React from 'react'
import styles from './index.module.scss'

export default props => {
  return (
    <div className={styles.gif}>
      <a
        href={`https://www.reddit.com/sequence/?link=${props.fullname.replace("t3_", "")}`}
      >
        <img src={props.src} />
      </a>
    </div>
  )
}
