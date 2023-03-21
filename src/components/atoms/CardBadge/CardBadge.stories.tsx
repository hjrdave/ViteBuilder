import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {default as Comp} from "./CardBadge";

export default {
  title: 'Design System/Atoms/CardBadge',
  component: Comp,
  argTypes: {
    variant: {
        options: ['primary', 'secondary'],
        control: 'select'
    }
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Recommended',
    variant: 'primary'
};
