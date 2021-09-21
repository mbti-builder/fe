import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text from '@src/atom/Text';

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: Story = (props) => <Text {...props} />;
const testContent = `"But man is not made for defeat,” he said. “A man can be destroyed but not defeated."`

export const text = Template.bind({});

text.args = {
  children: testContent,
  fontSize: 'm',
  fontWeight: 'regular',
  textAlign: 'start',
};