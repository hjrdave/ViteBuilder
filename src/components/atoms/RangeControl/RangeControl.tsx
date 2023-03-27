import React from 'react';
import { Form } from 'react-bootstrap';
import RangeControl from './RangeControl.interface';

export default function RangeControl({ label, labelClassName, ...props }: RangeControl) {
  return (
    <>
      <Form.Label className={labelClassName}>{label}</Form.Label>
      <Form.Range {...props} />
    </>
  );
}
