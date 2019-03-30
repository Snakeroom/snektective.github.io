import React, { Component } from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import IndexPage from './pages/IndexPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Helmet
          titleTemplate="%s | Sneknet"
          defaultTitle="Sneknet"
        >
          <meta name="description" content="🐍 ssssoon 🐍"/>
        </Helmet>
        <Layout>
          <Switch>
            <Route path="/" exact={true}>
              <IndexPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
