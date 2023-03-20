import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {default as Comp} from './ExampleCounter2';

export default {
  title: 'Widgets/ExampleCounter2',
  component: Comp,
  argTypes: {
    error: {
      control: {type: 'boolean'}
    }
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Example Counter 2",
  message: "This is a Message",
  loading: false
};
