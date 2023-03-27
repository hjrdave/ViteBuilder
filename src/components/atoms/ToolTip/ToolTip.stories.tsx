import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Comp } from './ToolTip';

export default {
  title: 'Design System/Atoms/ToolTip',
  component: Comp,
  argTypes: {
    variant: {
      options: ['primary', 'dark', 'light'],
      control: 'select',
    },
    placement: {
      options: ['right', 'left', 'top', 'bottom'],
      control: 'select',
    },
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Need Help?',
  variant: 'primary',
  placement: 'right',
  toolTipMsg: 'This is a Tool Tip.',
  className: '',
  style: {},
};

export const WithNoLabel = Template.bind({});
WithNoLabel.args = {
  variant: 'primary',
  placement: 'right',
  toolTipMsg: 'This is a Tool Tip.',
  className: '',
  style: {},
};
