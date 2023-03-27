import React from 'react';
import { default as BSForm } from 'react-bootstrap/Form';

export interface Props {
  name: string;
  children?: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  className?: string;
}
export default function Form({ children, style, onSubmit, className, name }: Props) {
  return (
    <>
      <BSForm
        name={name}
        autoComplete={'off'}
        noValidate
        onSubmit={onSubmit}
        style={style}
        className={className}
      >
        {children}
      </BSForm>
    </>
  );
}
