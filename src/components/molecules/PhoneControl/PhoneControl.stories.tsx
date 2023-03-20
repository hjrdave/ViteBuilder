import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {default as Comp} from "./PhoneControl";


export default {
  title: 'Design System/Molecules/PhoneControl',
  component: Comp,
  argTypes: {
    
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Phone Control",
  placeholder: "Type here",
  value: "",
  required: false,
  disabled: false,
  caption: "",
  maxLength: 255,
  isInvalid: false,
  isValid: false,
  readOnly: false,
  plaintext: false,
  className: "",
};

