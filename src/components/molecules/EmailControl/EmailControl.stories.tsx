import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Comp } from './EmailControl';

export default {
  title: 'Design System/Molecules/EmailControl',
  component: Comp,
  argTypes: {},
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Email Control',
  required: false,
  disabled: false,
  caption: '',
  maxLength: 255,
  value: '',
  isInvalid: false,
  isValid: false,
  readOnly: false,
  plaintext: false,
  className: '',
};
