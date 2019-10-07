

import React, { Component } from 'react';
import IndicationComponent from '~src/components/queuing/indication/indication';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';
import axios from 'axios';
import {connect} from 'react-redux';

class Indication extends Component {
    constructor() {
      super();
  
      this.state = {
          //destination:'STM No.03'
       
        }
      
  
      bindAll(this, [
          //'capture'
      ]);
    }

  
  
   componentDidMount(){
  
  
   }
  
    componentWillMount() {
      
      
    }
  
    render() {
      return (
        <IndicationComponent
          state={this.state}
          destination = {this.props.destination}
          transaction = {this.props.transaction}
          destType={this.props.destType}

        />
      );
    }
  }
  
  const mapStateToProps = state =>{
    
    return {
      destination:state.queue.destination,
      transaction:state.queue.transaction,
      destType:state.queue.destType
    }
  };

export default connect(mapStateToProps)(Indication);