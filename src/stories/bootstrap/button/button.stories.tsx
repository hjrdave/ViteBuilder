import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {within, userEvent} from '@storybook/testing-library';
import { default as Comp } from 'react-bootstrap/Button';

export default {
  title: 'Bootstrap/Button',
  component: Comp,
  argTypes: {
    variant: {
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 
        'info', 'dark', 'light', 'link', 'outline-primary', 'outline-secondary', 
        'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 
        'outline-dark', 'outline-light'],
        control: { type: 'select' }
    },
    size: {
        options: [undefined, 'sm', 'lg'],
        control: { type: 'inline-radio', labels: {undefined: 'default', sm: 'sm', lg: 'lg'} }
    }
  },
} as ComponentMeta<typeof Comp>;
const Template: ComponentStory<typeof Comp> = ({btnCount, ...args}) => (
    <>
        {
            [...Array(btnCount).keys()].map(() => (
                <Comp {...args} />
            ))
        }
    </>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  active: false,
  disabled: false,
  size: undefined,
  type: 'button',
  variant: 'primary',
  className: "m-1",
  style: {},
  btnCount: 1
};
export const Clicked = Template.bind({});
Clicked.args = {
  children: 'Primary',
  variant: 'primary',
  className: "m-1"
};
Clicked.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const btn = canvas.getByRole('button');
  await userEvent.click(btn);
}

