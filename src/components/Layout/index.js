import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';

import styles from './index.module.scss';

class Layout extends Component {
  render() {
    return (
      <main className={styles.main}>
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
