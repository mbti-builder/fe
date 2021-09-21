import React from 'react';
import { Story, Meta } from '@storybook/react';
import Spinner from '@src/atom/Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story = (props) => <Spinner {...props} />;

export const spinner = Template.bind({});

spinner.args = {
  size: 'md',
};
