import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Comp } from './ProductCard';

export default {
  title: 'Design System/Molecules/ProductCard',
  component: Comp,
  argTypes: {},
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => (
  <>
    <Row>
      <Col>
        <Comp {...args} />
      </Col>
      <Col>
        <Comp {...args} />
      </Col>
    </Row>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'RoundTrip Choice',
  startingAt: '$216.00',
  isRecommended: true,
  onSelect: () => alert('Selected'),
  includes: [
    {
      text: (
        <>
          <strong>150%</strong> trip interruption coverage
        </>
      ),
    },
    {
      text: (
        <>
          Medical expense coverage, including Covid treatment, up to <strong>$500,000</strong>
        </>
      ),
    },
    {
      text: (
        <>
          Trip delay coverage up to <strong>$2,000</strong>
        </>
      ),
    },
    {
      text: <>Protection for lost belongings, including baggage, VISA, credit card, and more.</>,
    },
  ],
};
