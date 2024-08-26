import React, { useContext } from 'react'

import styles from './Button.module.scss'

type Props = {
    children: React.ReactNode;
}

function Button({ children }: Props) {

    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}

export default Button