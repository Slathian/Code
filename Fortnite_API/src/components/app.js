import React, { Component } from 'react';

import FortniteAPI from './fortniteData';

export default class App extends Component {
  render() {
    return (
        <div className="app">
            <FortniteAPI key="1"/>
      </div>
    );
  }
}
