import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Comp } from './FormReset';

export default {
  title: 'Design System/Atoms/FormReset',
  component: Comp,
  argTypes: {
    size: {
      options: [undefined, 'sm', 'lg'],
      control: { type: 'select', labels: { undefined: 'default', sm: 'sm', lg: 'lg' } },
    },
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
  active: false,
  size: {} as any,
};
