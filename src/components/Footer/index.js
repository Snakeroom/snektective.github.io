import React, { Component } from 'react';
import styles from './index.module.scss';

const categories = [
  {
    id: 'site',
    content: 'site written by'
  }, {
    id: 'contributors',
    content: 'contributors'
  }, {
    id: 'logo',
    content: 'sneknet icon courtesy of'
  }
]

const users = [
  {
    reddit: '__-_------___---',
    category: 'site'
  }, {
    reddit: 'offbeatwitch',
    category: 'site'
  }, {
    reddit: '7coil',
    category: 'site'
  }, {
    reddit: 'taxborn',
    category: 'contributors'
  }, {
    reddit: 'seshpenguin',
    category: 'contributors'
  }, {
    reddit: 'thesbros',
    category: 'contributors'
  },{
    reddit: 'cubity_first',
    category: 'contributors'
  },{
    reddit: 'Hexbugman213',
    category: 'logo'
  }
]

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        {categories.map(category => (
          <p key={category.id}>
            {category.content}<br />
            <div className={styles.links}>
              {
                users
                  .filter(user => user.category === category.id)
                  .map(user => <a key={user.reddit} href={`https://reddit.com/u/${user.reddit}`}>/u/{user.reddit}</a>)
              }
            </div>
          </p>
        ))}
        <p>
          <small>
            &lt;3 reactjs
          </small>
        </p>
      </footer>
    )
  }
}

export default Footer;
