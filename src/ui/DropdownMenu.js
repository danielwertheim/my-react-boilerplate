import React from 'react';
import { Link } from 'react-router';

import BaseComponent from '../BaseComponent';

export class DropdownMenu extends BaseComponent {
  render() {
    return <ul className="dropdown-menu">{this.props.children}</ul>;
  }
}

export class MenuDivider extends BaseComponent {
  render() {
    return <li role="separator" className="divider"></li>;
  }
}

export class MenuItem extends BaseComponent {
  render () {
    return <li><Link to={this.props.to}>{this.props.children}</Link></li>;
  }
}