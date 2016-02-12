import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class DeviceSignalWifi0Bar extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path fillOpacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/>
      </SvgIcon>
    );
  }
}

export default DeviceSignalWifi0Bar;
