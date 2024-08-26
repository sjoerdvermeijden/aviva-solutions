import React from 'react'

import styles from './Button.module.scss'

type Props = {}

function Button({ }: Props) {
    return (
        <button className={styles.Button}>Button</button>
    )
}

export default Button