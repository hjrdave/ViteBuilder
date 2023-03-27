import React from 'react';
import { default as BSSpinner } from 'react-bootstrap/Spinner';
import styles from './Spinner.module.scss';

interface Props {
  size?: 'sm' | 'lg';
}

export default function Spinner({ size }: Props) {
  return (
    <>
      <BSSpinner
        as='span'
        className={size === 'lg' ? styles.large : ''}
        animation='border'
        variant={'primary'}
        role='status'
        aria-hidden='true'
      />
    </>
  );
}
