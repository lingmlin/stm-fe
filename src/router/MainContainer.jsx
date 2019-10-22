/*
 * 设置和监测路由更改
 * https://stackoverflow.com/questions/45244132/react-how-to-get-component-to-detect-route-change

 */

import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import asyncComponent from '~src/utils/asyncComponent';
import { connect } from 'react-redux';
import '../style/base.scss';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import '../style/s-alert-box.scss';

import Index from '~src/containers/index';
//import IdCard from '~src/containers/idcard';

const Mainmenu = asyncComponent(() => import('~src/containers/mainmenu'));
const IdCard = asyncComponent(() => import('~src/containers/idcard'));
const Facial = asyncComponent(() => import('~src/containers/facial'));
//const QrCode = asyncComponent(() => import('~src/containers/qrcode'));
const ScanResult = asyncComponent(() => import('~src/containers/scan-result'));


const InfoUpdate = asyncComponent(() => import('~src/containers/info-update'));
const WaitingStaff = asyncComponent(() => import('~src/containers/waiting-staff'));
const Completion = asyncComponent(() => import('~src/containers/completion'));

const AccountHistory = asyncComponent(() => import('~src/containers/account-history'));

const QueueIndex = asyncComponent(() => import('~src/containers/queuing/index'));
const Indication = asyncComponent(() => import('~src/containers/queuing/indication'));

const PrintIndex = asyncComponent(() => import('~src/containers/print/index'));
const Printing = asyncComponent(() => import('~src/containers/print/printing'));
const PrintComplete = asyncComponent(() => import('~src/containers/print/completion'));





// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
class MainContainer extends Component {
  render() {
    return (
      <div
        className={`main-container ${this.props.scrollBarIsHidden && 'hide-scroll-bar'}`}
      >
  
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/mainmenu" component={Mainmenu} />
          <Route path="/idcard" component={IdCard} />
          <Route path="/facial" component={Facial} />
          
          <Route path="/scan-result" component={ScanResult} />
          <Route path="/info-update" component={InfoUpdate} />
          <Route path="/waiting-staff" component={WaitingStaff} />
          <Route path="/completion" component={Completion} />
          <Route path="/account-history" component={AccountHistory} />

          <Route path="/queue/index" component={QueueIndex} />
          <Route path="/queue/indication" component={Indication} />

          <Route path="/print/index" component={PrintIndex} />
          <Route path="/print/printing" component={Printing} />
          <Route path="/print/complete" component={PrintComplete} />
		     
          <Redirect to="/" />
        </Switch>
        <Alert
          stack={{ limit: 3 }}
          timeout={2000}
          effect="slide"
          position="bottom-right"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    scrollBarIsHidden: state.scrollBarReducer.scrollBarIsHidden
  };
};

export default withRouter(
  (props => <MainContainer {...props} />)
);
