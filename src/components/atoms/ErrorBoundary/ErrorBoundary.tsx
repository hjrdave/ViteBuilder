import React from 'react';
import BrokenCompFallback from '../BrokenCompFallback';
interface Props {
  children?: JSX.Element | JSX.Element[] | React.ReactElement<any, any> | null;
  fallback?:
    | 'button'
    | 'control'
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null;
  pathname?: string;
}
class ErrorBoundaryComp extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, fallback: props.fallback };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if ((this.state as any).hasError) {
      // You can render any custom fallback UI
      return <>{(this.props as any).fallback()}</>;
    }

    return <>{(this.props as any).children}</>;
  }
}

export default function ErrorBoundary({ fallback, children, pathname }: Props) {
  return (
    <>
      <ErrorBoundaryComp
        key={pathname}
        {...{
          fallback: () => (
            <BrokenCompFallback
              variant={typeof fallback === 'string' ? (fallback as any) : fallback}
            />
          ),
          children: children,
        }}
      />
    </>
  );
}
