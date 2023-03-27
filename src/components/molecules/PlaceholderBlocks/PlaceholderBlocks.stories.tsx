import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Comp } from './PlaceholderBlocks';

export default {
  title: 'Design System/Molecules/PlaceholderBlocks',
  component: Comp,
  argTypes: {},
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  count: 4,
};
