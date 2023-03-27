import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Comp } from './Placeholder';

export default {
  title: 'Design System/Atoms/Placeholder',
  component: Comp,
  argTypes: {},
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  rowSizes: [1, 5, 3, 6, 4, 2, 6, 4, 3],
};
