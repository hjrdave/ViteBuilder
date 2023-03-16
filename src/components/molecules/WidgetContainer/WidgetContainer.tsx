import React, { CSSProperties } from 'react';
//import { IWidgetBuilder } from '../../templates/WidgetBuilder';
import ErrorBoundary from '../../atoms/ErrorBoundary';

interface Props {
    children?: JSX.Element | JSX.Element[];
    className?: string;
    style?: CSSProperties;
    [key:string]: any;
};
export default function WidgetContainer({ children, className, style, loading, BrokenComp }: Props){

    return(
        <>
            <div className={className} style={style}>
                <ErrorBoundary>
                    <>
                        {(loading) ? <p className={'p-3 mb-0'}>Loading...</p> : children}
                        {(BrokenComp) ? <BrokenComp/> : null}
                    </>
                </ErrorBoundary>
            </div>
        </>
    )
}