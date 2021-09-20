import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '@src/atom/Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story = (props) => <Button {...props} />;

export const button = Template.bind({});

button.args = {
  size: 'md',
  variant: 'solid',
  disabled: false,
  fullWidth: false,
  rounded: false,
  buttonColor: 'black',
  labelText: 'TEST',
};
