import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExampleCounter2 from './ExampleCounter2';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Widgets/ExampleCounter2',
  component: ExampleCounter2,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    error: {
      control: {type: 'boolean'}
    }
  },
} as ComponentMeta<typeof ExampleCounter2>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExampleCounter2> = (args) => <ExampleCounter2 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Example Counter 2",
  message: "This is a Message",
  loading: false,
  error: false
};
