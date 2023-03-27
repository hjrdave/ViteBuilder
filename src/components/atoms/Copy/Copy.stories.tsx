import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Comp from './Copy';

export default {
  title: 'Design System/Atoms/Copy',
  component: Comp,
  argTypes: {},
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
  iconClassName: 'text-dark',
};
