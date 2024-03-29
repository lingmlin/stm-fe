

import React, { Component } from 'react';
import ScanResultComponent from '~src/components/scan-result/scan-result';
import bindAll from 'lodash.bindall';
import {connect} from 'react-redux';
import sendRequest from '~src/requests/index';

class ScanResult extends Component {
  constructor() {
    super();

    this.state = {
     complete:false
      }
    

    bindAll(this, ['abc']);
  }

 abc(){}

  componentDidMount() {
    let that=this;
    setTimeout(function(){
      that.setState({
        complete:true
      });
    },3000);
    
    //document.title = 'STM';
  }

  render() {
    return (
      <ScanResultComponent
        state={this.state}
        transaction={this.props.transaction}
      />
    );
  }
}

const mapStateToProps = state =>{
  return {
    transaction:state.userForm.transaction
  }
};

export default connect(mapStateToProps)(ScanResult);
