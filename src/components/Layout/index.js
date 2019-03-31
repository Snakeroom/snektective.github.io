import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Helmet } from 'react-helmet';

import styles from './index.module.scss';

class Layout extends Component {
  render() {
    return (
      <main className={styles.main}>
        <Helmet
          titleTemplate="%s | Sneknet"
          defaultTitle="Sneknet"
        >
          <meta name="description" content="🐍 ssssoon 🐍"/>
        </Helmet>
        <Header />
        <div className={styles.contents}>
          {this.props.children}
        </div>
        <Footer />
      </main>
    )
  }
}

export default Layout;
