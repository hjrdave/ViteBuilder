import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {default as Comp} from './index';

export default {
  title: 'Design System/Organisms/Form',
  component: Comp,
  argTypes: {
    variant: {
      control: {type: 'inline-radio'}
    }
  },
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => (
    <>
        <Comp {...args}>
            <Row>
                <Col>
                    <h2>Test Form Provider</h2>
                </Col>
            </Row>
            <Row className={"pt-4"}>
                <Col>
                    <Comp.Text name={'textControl'} label={'Text Control'} placeholder={'Type here...'}/>
                </Col>
                <Col>
                    <Comp.TextArea name={'textAreaControl'} label={'TextArea Control'} placeholder={'Type here...'}/>
                </Col>
            </Row>
            <Row className={"pt-4"}>
                <Col>
                    <Comp.Phone name={'phoneControl'} label={'Phone Control'} placeholder={'Type Phone Number'}/>
                </Col>
                <Col>
                    <Comp.Number name={'numberControl'} label={'Number Control'} />
                </Col>
                <Col>
                    <Comp.Email name={'emailControl'} label={'Email Control'} />
                </Col>
            </Row>
            <Row className={"pt-4"}>
                <Col className={"d-flex justify-content-end"}>
                    <Comp.Reset className={"me-2"}/>
                    <Comp.Submit/>
                </Col>
            </Row>
        </Comp>
    </>
);

export const Primary = Template.bind({});
Primary.args = {
    name: "TestForm",
    className: "",
    style: {}
};
