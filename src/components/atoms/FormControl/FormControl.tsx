import React from 'react';
import { Form } from 'react-bootstrap';
import FormControl from './FormControl.interface';

export default function FormControl({
  className,
  controlClassName,
  label,
  htmlFor,
  ariaDescribedby,
  caption,
  captionId,
  ariaLabel,
  maxLength,
  required,
  ...props
}: FormControl) {
  return (
    <>
      <Form.Group className={className}>
        <Form.Label htmlFor={htmlFor}>{required ? `${label} *` : label}</Form.Label>
        <>
          <Form.Control
            {...props}
            size={undefined} //make sure that size is not specified
            className={`${controlClassName}`}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedby}
            maxLength={maxLength ?? 255}
            required={required}
          />
        </>
        {caption ? (
          <Form.Text id={captionId} muted>
            {caption}
          </Form.Text>
        ) : null}
      </Form.Group>
    </>
  );
}
