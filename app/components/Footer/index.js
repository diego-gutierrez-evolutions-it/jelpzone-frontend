import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

import styled from 'styled-components';

const FooterComponent = styled.footer`
  box-sizing: border-box;
  background-color: #eee;
  border-top: 1px solid #e0e0e0;
  padding: 10px 0;
`

function Footer() {
  return (
    <FooterComponent>
      <div className="mui-container mui--text-center">
        JelpZone
      </div>
    </FooterComponent>
  );
}

export default Footer;
