import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class HardwareLaptopChromebook extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/>
      </SvgIcon>
    );
  }
}

export default HardwareLaptopChromebook;
