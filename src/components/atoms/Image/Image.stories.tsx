import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Comp } from './Image';

export default {
  title: 'Design System/Atoms/Image',
  component: Comp,
  argTypes: {},
} as ComponentMeta<typeof Comp>;
const Template: ComponentStory<typeof Comp> = (args) => <>{<Comp {...args} />}</>;

export const Primary = Template.bind({});
Primary.args = {
  style: {},
  width: '400px',
  alt: 'This is an image.',
  path: 'https://www.sevencorners.com/images/default-source/blog/hurricane-causing-rough-waters.webp',
};
