import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {default as Comp} from "./FormControl";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/FormControl',
  component: Comp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} as ComponentMeta<typeof Comp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Form Control",
  placeholder: "Type here",
  value: "",
  required: false,
  disabled: false,
  caption: "",
  maxLength: 255,
  readOnly: false,
  plaintext: false,
  className: "",
};

export const Valid = Template.bind({});
Valid.args = {
  label: "Form Control",
  placeholder: "Type here",
  value: "",
  required: false,
  disabled: false,
  caption: "",
  maxLength: 255,
  readOnly: false,
  plaintext: false,
  className: "",
  isValid: true
};

export const NotValid = Template.bind({});
NotValid.args = {
  label: "Form Control",
  placeholder: "Type here",
  value: "",
  required: false,
  disabled: false,
  caption: "",
  maxLength: 255,
  readOnly: false,
  plaintext: false,
  className: "",
  isInvalid: true
};
