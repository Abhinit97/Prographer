import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './component/main';
import { Provider } from "react-redux";

import  store  from './store.js'

class App extends React.Component {

  clickNew = () => {
    alert("google")
  }

  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;
