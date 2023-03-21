import React from 'react';
import styles from './CardBadge.module.scss';

interface Props{
    label?: string;
    variant?: 'primary' | 'secondary';
};

export default function CardBadge({label, variant}: Props){

    return(
        <>
        <div className={`${styles.compContainer} d-flex position-relative`}>
            <div className={`${styles.cardBadgeSlant} bg-${(variant == 'secondary') ? 'secondary' : 'primary'} bg-gradient`}></div>
            <div className={`position-relative p-2 text-uppercase text-white bg-gradient bg-primary`}>
                <strong>{label}</strong>
            </div>
        </div>
        </>
    )
}