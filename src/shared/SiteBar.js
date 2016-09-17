import React from 'react';
import {Link} from 'react-router';

import BaseComponent from '../BaseComponent';
import { Navbar, NavbarHeader, NavbarNav, NavbarNavLink, NavbarNavDropdown } from '../ui/Navbar';
import { MenuItem, MenuDivider } from '../ui/DropdownMenu';

export default class SiteBar extends BaseComponent {
  render() {
    let currentLocation = this.props.location.pathname;

    return (
      <Navbar>
        <NavbarHeader>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to={'/'} className="navbar-brand">Boilerplate</Link>
        </NavbarHeader>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <NavbarNav>
            <NavbarNavLink location={currentLocation} to={'/'}>Home</NavbarNavLink>
            <NavbarNavLink location={currentLocation} to={'about'}>About</NavbarNavLink>
          </NavbarNav>
          <NavbarNav right>
            <NavbarNavDropdown title="Dropdown">
              <MenuItem to={'/'}>Home again</MenuItem>
              <MenuDivider />
              <MenuItem to={'about'}>About again</MenuItem>
            </NavbarNavDropdown>
          </NavbarNav>
        </div>
      </Navbar>
    )
  }
}