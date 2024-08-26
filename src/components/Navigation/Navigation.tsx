import React from 'react'

import styles from './Navigation.module.scss'

type Props = {}

function Navigation({ }: Props) {
    return (
        <div>
            <ul className={styles.navigation}>
                <li className={styles.navigation__item}>Menu item #1</li>
                <li className={styles.navigation__item}>Menu item #1</li>
                <li className={styles.navigation__item}>Menu item #1</li>
                <li className={styles.navigation__item}>Menu item #1</li>
                <li className={styles.navigation__item}>Menu item #1</li>
            </ul>
        </div>
    )
}

export default Navigation