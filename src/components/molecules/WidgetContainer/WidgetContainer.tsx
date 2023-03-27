import React, { CSSProperties } from 'react';
import uniqid from 'uniqid';
import { IWidgetBuilder } from '../../templates/WidgetBuilder';
import ErrorBoundary from '../../atoms/ErrorBoundary';

interface Props extends IWidgetBuilder {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  style?: CSSProperties;
}
export default function WidgetContainer({ children, className, style, loading }: Props) {
  return (
    <>
      <div className={className} style={style}>
        <ErrorBoundary>
          <>{loading ? <p className={'p-3 mb-0'}>Loading...</p> : children}</>
        </ErrorBoundary>
      </div>
    </>
  );
}
