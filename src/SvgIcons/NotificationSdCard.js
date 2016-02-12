import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class NotificationSdCard extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"/>
      </SvgIcon>
    );
  }
}

export default NotificationSdCard;
