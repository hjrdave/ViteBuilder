import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Comp } from './CheckControl';

export default {
  title: 'Design System/Atoms/CheckControl',
  component: Comp,
  argTypes: {
    type: {
      options: ['checkbox', 'radio', 'switch'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => (
  <>
    <Comp {...args} />
    <Comp {...args} />
    <Comp {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  feedback: 'This is a feedback',
  feedbackToolTip: false,
  inline: false,
  reverse: false,
  label: 'Check Box',
  type: 'checkbox',
  className: 'pt-1',
};
