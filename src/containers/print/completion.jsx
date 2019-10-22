

import React, { Component } from 'react';
import CompletionComponent from '~src/components/print/completion/completion';
import bindAll from 'lodash.bindall';
import sendRequest from '~src/requests/index';

class Completion extends Component {
  constructor() {
    super();

    this.state = {
      submitted:false,
      complete:false
     
      }
    

    bindAll(this, ['clickGood','clickBad','clickNeutral','submitSurvey']);
  }

 clickGood(){
    this.submitSurvey();
 }
 clickBad(){
    this.submitSurvey();
 }
 clickNeutral(){
    this.submitSurvey();
 }

 submitSurvey(){
    this.setState({
      submitted:true
    });
    setTimeout(()=>{
      this.setState({
        complete:true
      });
    },5000);
 }

  componentWillMount() {
    
    //document.title = 'STM';
  }

  render() {
    return (
      <CompletionComponent
        state={this.state}
        clickGood={this.clickGood}        
        clickBad={this.clickBad}
        clickNeutral={this.clickNeutral}

      />
    );
  }
}

export default Completion;
