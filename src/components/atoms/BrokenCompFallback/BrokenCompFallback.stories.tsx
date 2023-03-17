import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {default as Comp} from './BrokenCompFallback';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/BrokenCompFallback',
  component: Comp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: {type: 'inline-radio'}
    }
  },
} as ComponentMeta<typeof Comp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    variant: undefined
};
