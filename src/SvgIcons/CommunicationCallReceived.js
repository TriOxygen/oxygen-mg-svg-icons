import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class CommunicationCallReceived extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/>
      </SvgIcon>
    );
  }
}

export default CommunicationCallReceived;
