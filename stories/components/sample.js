import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//import Button from '../components/Button';
import SearchInput from 'components/common/searchInput/searchInput';

storiesOf('Button', module)
  .add('with text', () => (
    <SearchInput></SearchInput>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
  ));  