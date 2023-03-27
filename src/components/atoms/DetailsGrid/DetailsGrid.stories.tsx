import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Comp from './DetailsGrid';

export default {
  title: 'Design System/Atoms/DetailsGrid',
  component: Comp,
  argTypes: {},
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Trip protection',
  details: [
    {
      label: 'Trip Cancellation',
      description: '100% of Insured Trip Cost (up to $100,000 per person)',
    },
    { label: 'Trip Interruption', description: 'Up to 150%' },
    { label: 'Trip Delay', description: '$250 per day (up to $250)' },
    { label: 'Missed Tour or Cruise Connection', description: 'Up to $250 per day ($1,500 max)' },
  ],
};
