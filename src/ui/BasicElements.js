import React from 'react';
import { Link } from 'react-router';
import BaseComponent from '../BaseComponent';

export class FaIcon extends BaseComponent {
  render() {
    return (
      <i className={'fa fa-' + this.props.use}></i>
    );
  }
}
FaIcon.propTypes = {
  use: React.PropTypes.string.isRequired
};

export class LinkButton extends BaseComponent {
  render() {
    let type = this.props.type || 'default';

    return <Link to={ this.props.to } className={'btn btn-' + type}>{this.props.children}</Link>;
  }
}
LinkButton.propTypes = {
  to: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
};

export class Jumbotron extends BaseComponent {
  render() {
    return <div className="jumbotron">{this.props.children}</div>;
  }
}