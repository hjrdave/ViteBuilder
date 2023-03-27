import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Comp } from './FormControl';

export default {
  title: 'Design System/Atoms/FormControl',
  component: Comp,
  argTypes: {},
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Form Control',
  placeholder: 'Type here',
  value: '',
  required: false,
  disabled: false,
  caption: '',
  maxLength: 255,
  readOnly: false,
  plaintext: false,
  className: '',
};

export const Valid = Template.bind({});
Valid.args = {
  label: 'Form Control',
  placeholder: 'Type here',
  value: '',
  required: false,
  disabled: false,
  caption: '',
  maxLength: 255,
  readOnly: false,
  plaintext: false,
  className: '',
  isValid: true,
};

export const NotValid = Template.bind({});
NotValid.args = {
  label: 'Form Control',
  placeholder: 'Type here',
  value: '',
  required: false,
  disabled: false,
  caption: '',
  maxLength: 255,
  readOnly: false,
  plaintext: false,
  className: '',
  isInvalid: true,
};
