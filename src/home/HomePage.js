import React from 'react';

import BaseComponent from '../BaseComponent';
import Welcome from './Welcome';

export default class HomePage extends BaseComponent {
  render() {
    return (
      <Welcome />
    );
  }
}