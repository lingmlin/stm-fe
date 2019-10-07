/*
 * @Author: Jiajun Yan
 * @Date: 2018-10-18 15:36:26
 * @Last Modified by: Jiajun Yan
 * @Last Modified time: 2018-11-15 11:03:05
 */

import React, { Component } from 'react';
import IndexComponent from '~src/components/index/index';
import bindAll from 'lodash.bindall';
import store from '~src/store/store';
import * as userForm from '~src/store/userForm/actions';
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
  componentDidMount(){
    let that = this;
    /*to handle keyboard event
    1 for print trx history
    2 for issue token
    3 for id card renewal
    */
    document.body.onkeypress = e => {
      let option = e.keyCode - 48;
      if(option === 1 || option === 2 || option === 3){//switch to ID card
        document.body.onkeypress = ()=> {return false;}//delete keyboard event handling

        //update transaction field in reducer
        const action = userForm.downloadForm;
        action.transaction = option;  
        store.dispatch(action);

        that.setState({
          complete:true
        });
      }//else nth
    }
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
