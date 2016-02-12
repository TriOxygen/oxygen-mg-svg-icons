import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class NotificationPersonalVideo extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z"/>
      </SvgIcon>
    );
  }
}

export default NotificationPersonalVideo;
