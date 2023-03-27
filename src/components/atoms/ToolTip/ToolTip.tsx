import React from 'react';
import uniqid from 'uniqid';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { default as BSTooltip } from 'react-bootstrap/Tooltip';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  variant?: 'primary' | 'dark' | 'light';
  label?: string;
  placement?: 'right' | 'left' | 'top' | 'bottom';
  toolTipMsg?: string;
}

export default function ToolTip({
  className,
  style,
  variant,
  label,
  placement,
  toolTipMsg,
}: Props) {
  const key = `tool-tip-${uniqid()}`;
  const _placement = placement ? placement : 'right';
  const textColor = `text-${variant ?? 'dark'}`;

  return (
    <>
      <OverlayTrigger
        key={key}
        placement={_placement}
        overlay={
          <BSTooltip id={key}>
            <div className={'p-2'}>{toolTipMsg ?? 'This is a tool tip.'}</div>
          </BSTooltip>
        }
      >
        <Button
          variant={'bg-none'}
          className={`text-capitalize p-2 ${
            label ? 'fs-7' : 'fs-6'
          } fw-normal ${textColor} ${className}`}
          style={style}
        >
          <i className={`fa-regular fa-circle-question pe-1`}></i>
          {label}
        </Button>
      </OverlayTrigger>
    </>
  );
}
