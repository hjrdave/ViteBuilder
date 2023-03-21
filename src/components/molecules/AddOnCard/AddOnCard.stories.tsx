import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {default as Comp} from "./AddOnCard";


export default {
  title: 'Design System/Molecules/AddOnCard',
  component: Comp,
  argTypes: {
    btnType: {
      options: ['add', 'remove'],
      control: {
        type: 'select'
      }
    }
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => (
  <Row className={'d-flex justify-content-center'}>
    <Col sm={'12'} md={'5'}>
      <Comp {...args} />
    </Col>
  </Row>
);

export const Primary = Template.bind({});
Primary.args = {
    title: "Interruption for any reason (IFAR)",
    description: "Coverage for up to 75% of your trip if your trip is interrupted for any reason.",
    tellMeMoreLink: "",
    btnType: "add",
    onClick: () => alert('clicked'),
    price: "$5.22"
};

