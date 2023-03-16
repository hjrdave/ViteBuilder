import React from 'react';
import uniqid from 'uniqid';
import { Button } from 'react-bootstrap';
import DesignViewFrame from '../../atoms/DesignViewFrame';
import ErrorBoundary from '../../atoms/ErrorBoundary';

interface Props {
    children?: any;
    name?: string;
    propKeyValuePairs?: {
        key: string;
        value: string
    }[];
    exampleUpdatePropsKeyValuePairs?: {
        key: string;
        value: string
    }[];
    CustomControls?: JSX.Element | JSX.Element[];
    containerClassName?: string;
    align?: 'start' | 'end' | 'center';
};

export default function WidgetBuilder({ children, containerClassName, align }: Props) {

    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [forceUpdate, setForceUpdate] = React.useState<string>();
    const BrokenComp = () => (<>{(isError) ? ("break" as any).map(() => (<></>)) : null}</>);
    const widgetBuilderProps = { 
        BrokenComp:  BrokenComp, 
        loading: isLoading
    }
    const onReset = () => {
        setIsError(false);
        setIsLoading(false);
        setForceUpdate(uniqid());
    };
    const onLoading = () => {
        setIsError(false);
        setIsLoading(true);
        setForceUpdate(uniqid());
    };
    const onError = () => {
        setIsLoading(false);
        setIsError(true);
        setIsLoading(true);
    };


    return (
        <>
            <div className={"d-flex justify-content-end py-3"}>
                <div>
                    <Button 
                        size={"sm"} 
                        variant={"dark"} 
                        className={"me-2"} 
                        onClick={onError}>
                            Error
                    </Button>
                    <Button 
                        size={"sm"} 
                        variant={"dark"} 
                        className={"me-2"} 
                        onClick={onLoading}>
                            Loading
                    </Button>
                    <Button 
                        size={"sm"} 
                        variant={"dark"} 
                        className={"me-2"} 
                        onClick={onReset}>
                            Reset
                    </Button>
                </div>
            </div>
            <DesignViewFrame key={forceUpdate} className={containerClassName} align={align}>
                <ErrorBoundary>
                    {
                        React.Children.map(children, (child) => (
                            React.cloneElement(child, { ...widgetBuilderProps }
                        )))
                    }
                </ErrorBoundary>
            </DesignViewFrame>
        </>
    )
}