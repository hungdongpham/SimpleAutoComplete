import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from 'components/layout/header/header';

import Wrapper from '../story-wrapper';

storiesOf('Header|Header', module).add('default', () => (
  <Wrapper>
    <Header />
  </Wrapper>
));
