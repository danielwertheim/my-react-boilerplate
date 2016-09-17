import React from 'react';
import {Link} from 'react-router';

import BaseComponent from '../BaseComponent';
import { Jumbotron, FaIcon, LinkButton } from '../ui/BasicElements';

export default class Welcome extends BaseComponent {
  render() {
    return (
      <Jumbotron>
        <h1>Hello React peers!<FaIcon use="thumbs-o-up" /></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse eget cursus augue.</p>
        <LinkButton to={'about'} type="primary">About</LinkButton>
      </Jumbotron>
    );
  }
}