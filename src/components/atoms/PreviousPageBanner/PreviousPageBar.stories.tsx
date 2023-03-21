import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {default as Comp} from "./PreviousPageBar";

export default {
  title: 'Design System/Atoms/PreviousPageBar',
  component: Comp,
  argTypes: {
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    onPreviousClick: () => alert("Go to Previous Page."),
    previousBtnLabel: "Choose a different plan",
    text: "My trip: Birmingham, Paris, Madrid | Aug 2 - Aug 14, 2023 | 2 Travelers"
};
