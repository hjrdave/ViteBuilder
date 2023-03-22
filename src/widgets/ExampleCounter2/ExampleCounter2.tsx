import React from 'react';
import IWidgetBuilder from '../../components/templates/WidgetBuilder/IWidgetBuilder';
import WidgetContainer from '../../components/molecules/WidgetContainer';
import {default as ExampleCounterComp} from '../../components/atoms/ExampleCounter';
import styles from './ExampleCounter2.module.scss';

interface Props extends IWidgetBuilder {
    message?: string;
    title?: string;
}
export default function ExampleCounter2({message, title, loading }: Props) {
    return (
        <>
            <WidgetContainer className={styles.compContainer} loading={loading}>
                <ExampleCounterComp title={title} message={message} />
            </WidgetContainer>
        </>
    )
}