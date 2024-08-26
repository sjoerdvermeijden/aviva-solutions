import React from 'react'

import styles from './Navigation.module.scss'
import Button from '../Button/Button'

type Props = {}

function Navigation({ }: Props) {
    return (
        <div>
            <ul className={styles.navigation}>
                <li className={styles.navigation__item}>Menu item #1</li>
                <li className={styles.navigation__item}>Menu item #1</li>
                <li className={styles.navigation__item}>Menu item #1</li>
                <li className={styles.navigation__item}>Menu item #1</li>
                <li className={styles.navigation__item}><Button>Shopping Cart</Button></li>
            </ul>
        </div>
    )
}

export default Navigation