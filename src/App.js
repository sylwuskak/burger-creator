import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuider from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuider />
        </Layout>
      </div>
    );
  }
}

export default App;
