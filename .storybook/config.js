import { configure, addParameters } from '@storybook/react';

const req = require.context('../stories/components', true, /\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// https://github.com/storybookjs/storybook/tree/next/addons/options
addParameters({
  options: {
    brandTitle: 'Demo simple auto complete Storybook',
    enableShortcuts: true
  }
});

configure(loadStories, module);
