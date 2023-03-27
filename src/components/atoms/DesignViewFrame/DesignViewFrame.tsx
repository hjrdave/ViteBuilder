import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './DesignViewFrame.module.scss';

interface Props {
  children?: JSX.Element | JSX.Element[];
  maxWidth?: string;
  className?: string;
  align?: 'start' | 'end' | 'center';
}

export default function DesignViewFrame({ children, maxWidth, className, align }: Props) {
  const alignmentOfWidget = `justify-content-${align ? align : 'start'}`;

  return (
    <>
      <Col className={`p-3 ${styles.compContainer} ${className}`} style={{ maxWidth: maxWidth }}>
        <Row>
          <Col className={`d-flex ${alignmentOfWidget}`}>{children}</Col>
        </Row>
      </Col>
    </>
  );
}
