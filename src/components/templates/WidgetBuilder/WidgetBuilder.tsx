import React from 'react';
import DesignViewFrame from '../../atoms/DesignViewFrame';
import ErrorBoundary from '../../atoms/ErrorBoundary';

interface Props {
    children?: any;
    // name?: string;
    // propKeyValuePairs?: {
    //     key: string;
    //     value: string
    // }[];
    // exampleUpdatePropsKeyValuePairs?: {
    //     key: string;
    //     value: string
    // }[];
    // CustomControls?: JSX.Element | JSX.Element[];
    containerClassName?: string;
    align?: 'start' | 'end' | 'center';
};

export default function WidgetBuilder({ children, containerClassName, align }: Props) {


    return (
        <>
            <DesignViewFrame className={containerClassName} align={align}>
                <ErrorBoundary>
                    {children}
                </ErrorBoundary>
            </DesignViewFrame>
        </>
    )
}