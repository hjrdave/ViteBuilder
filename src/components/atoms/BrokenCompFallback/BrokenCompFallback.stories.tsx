import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Comp } from './BrokenCompFallback';

export default {
  title: 'Design System/Atoms/BrokenCompFallback',
  component: Comp,
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
    },
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: undefined,
};
