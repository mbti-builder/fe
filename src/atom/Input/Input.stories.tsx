import React from 'react';
import { Story, Meta } from '@storybook/react';
import Input, { InputProps } from '@src/atom/Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (props) => <Input {...props} />;

export const input = Template.bind({});

input.args = {
  inputSize: 'md',
  password: '패스워드',
  disabled: false,
  error: false,
  errorMessage: '',
};
