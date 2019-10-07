/*
 * @Author: Jiajun Yan
 * @Date: 2018-10-18 15:36:26
 * @Last Modified by: Jiajun Yan
 * @Last Modified time: 2018-11-15 11:03:05
 */

import React, { Component } from 'react';
import IndexComponent from '~src/components/mainmenu/index';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';

class Index extends Component {
  constructor() {
    super();

    this.state = {
     
      }
    

    bindAll(this, ['abc']);
  }
  abc(){}

  componentWillMount() {
    // 设置页面标题
    document.title = 'STM';
  }

  render() {
    return (
      <IndexComponent
        state={this.state}
      />
    );
  }
}

export default Index;
