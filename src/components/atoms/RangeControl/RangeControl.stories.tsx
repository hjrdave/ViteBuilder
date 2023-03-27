import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Comp } from './RangeControl';

export default {
  title: 'Design System/Atoms/RangeControl',
  component: Comp,
  argTypes: {},
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Range Control',
  className: '',
  disabled: false,
};
