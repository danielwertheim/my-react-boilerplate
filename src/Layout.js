import React from 'react';
import {Link} from 'react-router';

import BaseComponent from './BaseComponent';
import SiteBar from './shared/SiteBar';

import './styling/bootstrap.less';
import 'font-awesome/css/font-awesome.css';

export default class Layout extends BaseComponent {
  render() {
    return (
      <div>
        <SiteBar location={this.props.location} />
        <div className="container-fluid">{this.props.children}</div>
      </div>
    )
  }
}