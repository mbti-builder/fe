import React from 'react';
import { Story, Meta } from '@storybook/react';
import ToastView, { ToastProps } from '@src/atom/ToastView';

export default {
  title: 'ToastView',
  component: ToastView,
} as Meta;

const Template: Story<ToastProps> = (props) => <ToastView {...props} />;
export const toastView = Template.bind({});

toastView.args = {
  message: 'message',
};
