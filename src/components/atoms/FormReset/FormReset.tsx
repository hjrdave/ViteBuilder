import React from 'react';
import { Button } from 'react-bootstrap';
import Form from '../../organisms/Form/Form.interface';

interface Props extends Form.BaseButtonProps {
  formName?: string;
}

export default function FormReset({ children, onClick, formName, ...props }: Props) {
  const _onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    formName ? (document.getElementsByName(formName) as any)?.reset() : null;
    onClick?.(e);
  };

  return (
    <>
      <Button type={'reset'} onClick={(e) => _onClick(e)} {...props}>
        {children ? children : 'Reset'}
      </Button>
    </>
  );
}
