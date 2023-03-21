import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {default as Comp} from "./Spinner";

export default {
  title: 'Design System/Atoms/Spinner',
  component: Comp,
  argTypes: {
    size: {
        options: ['sm', 'lg'],
        control: {type: 'select', labels: {sm: "sm", lg: "lg"}}
    }
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "lg"
};
