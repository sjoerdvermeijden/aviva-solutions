import React from 'react'

import styles from './Item.module.scss'

type Props = {}

function Item({ }: Props) {
    return (
        <div className={styles.item}>
            <a href="" className={styles.item__link}>Read more</a>
        </div>
    )
}

export default Item