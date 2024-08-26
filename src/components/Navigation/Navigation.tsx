import React from 'react'

import styles from './Navigation.module.scss'
import ShoppingButton from '../ShoppingButton/ShoppingButton'

type Props = {}

function Navigation({ }: Props) {

    return (
        <div>
            <ul className={styles.navigation}>
                <li className={styles.navigation__item}>Menu item #1</li>
                <li className={styles.navigation__item}>Menu item #2</li>
                <li className={styles.navigation__item}>Menu item #3</li>
                <li className={styles.navigation__item}>Menu item #4</li>
                <li className={styles.navigation__item}><ShoppingButton>Shopping Cart</ShoppingButton></li>
            </ul>
        </div>
    )
}

export default Navigation