/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SearchInput from 'components/common/searchInput/searchInput';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, boolean, text, number
} from '@storybook/addon-knobs/react';
import Wrapper from '../story-wrapper';


const cities = [
  {
    id: 1,
    name: 'Ho Chi Minh',
    polation: 90000000,
  },
  {
    id: 2,
    name: 'Ha Noi',
    polation: 50000000,
  },
  {
    id: 2,
    name: 'Dalat',
    polation: 4002000,
  },
  {
    id: 2,
    name: 'Vung Tau',
    polation: 180000,
  },
  {
    id: 2,
    name: 'KonTum',
    polation: 12000,
  }
];

const InputContainer = () => {
  const [value, setValue] = useState(friendOptions[0].value);
  return (
    <SearchInput
      //label={text('label', 'friends')}
      source={friendOptions}
    //   onChange={e => setValue(e.target.value)}
    //   value={value}
    />
  );
};

storiesOf('Common', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('dropdown input', () => (
    <Wrapper>
      <InputContainer />
    </Wrapper>
  ));
