import React from 'react'
import styles from './index.module.scss'

export default props => {
  return (
    <div className={styles.gif}>
      <a href={props.href}>
        <img src={props.src} />
      </a>
    </div>
  )
}
