import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExampleCounter from './ExampleCounter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Widgets/ExampleCounter',
  component: ExampleCounter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    error: {
      control: {type: 'boolean'}
    }
  },
} as ComponentMeta<typeof ExampleCounter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExampleCounter> = (args) => <ExampleCounter {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Example Counter",
  message: "This is a Message",
  loading: false,
  error: false
};
