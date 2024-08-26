import React, { useContext } from 'react'

import styles from './ShoppingButton.module.scss'

import { ToggleContext } from '@/context/NavigationContext'

type Props = {
    children: React.ReactNode;
}

function Button({ children }: Props) {
    const { toggle, setToggle } = useContext(ToggleContext)

    const toggleCart = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        setToggle(true)
    }

    return (
        <button className={styles.shoppingButton} onClick={(e) => toggleCart(e)}>
            {children}
        </button>
    )
}

export default Button