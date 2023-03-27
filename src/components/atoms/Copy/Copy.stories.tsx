import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Copy from './Copy';

export default {
  title: 'Design System/Atoms/Copy',
  component: Copy,
  argTypes: {},
} as ComponentMeta<typeof Copy>;

const Template: ComponentStory<typeof Copy> = (args) => <Copy {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
  iconClassName: 'text-dark',
};
