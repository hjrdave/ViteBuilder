import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Comp } from './Link';

export default {
  title: 'Design System/Atoms/Link',
  component: Comp,
  argTypes: {},
} as ComponentMeta<typeof Comp>;
const Template: ComponentStory<typeof Comp> = (args) => <>{<Comp {...args} />}</>;

export const Primary = Template.bind({});
Primary.args = {
  path: 'https://www.sevencorners.com/',
  children: 'This is a link.',
  target: '_blank',
  className: '',
  style: {},
};
