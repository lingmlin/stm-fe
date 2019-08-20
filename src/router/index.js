import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import MainContainer from '~src/router/MainContainer';

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <MainContainer />
      </HashRouter>
    );
  }
}
