import React from 'react';
import {Link} from 'react-router';
import BaseComponent from '../BaseComponent';
import { DropdownMenu, MenuDivider } from './DropdownMenu';

export class Navbar extends BaseComponent {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">{this.props.children}</div>
      </nav>
    );
  }
}

export class NavbarHeader extends BaseComponent {
  render() {
    return (
      <div className="navbar-header">{this.props.children}</div>
    );
  }
}

export class NavbarNav extends BaseComponent {
  render() {
    let s = this.props.right === true ? ' navbar-right' : '';

    return (
      <ul className={'nav navbar-nav' + s}>{this.props.children}</ul>
    );
  }
}
NavbarNav.defaultProps = {
  right: false
};

export class NavbarNavLink extends BaseComponent {
  render() {
    let isActive = this.props.location === this.props.to;

    return (
      <li className={isActive ? 'active' : ''}>
        <Link to={this.props.to}>{this.props.children}</Link>
      </li>
    );
  }
}
NavbarNavLink.propTypes = {
  location: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired
};

export class NavbarNavDropdown extends BaseComponent {
  render() {
    return (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">{this.props.title} <span className="caret"></span></a>
        <DropdownMenu>{this.props.children}</DropdownMenu>
      </li>
    );
  }
}
NavbarNavDropdown.propTypes = {
  title: React.PropTypes.string.isRequired
};