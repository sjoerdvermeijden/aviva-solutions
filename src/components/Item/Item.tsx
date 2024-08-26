import React from 'react'

import styles from './Item.module.scss'

type Props = {
    children: React.ReactNode;
    background?: string
}

function Item({ children, background }: Props) {
    const itemBackground = background;
    return (
        <div className={`${styles.item} ${styles[itemBackground]}`}>
            {children}
        </div >
    )
}

export default Item