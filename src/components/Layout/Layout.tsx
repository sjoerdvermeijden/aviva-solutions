import React, { useContext, useEffect } from 'react'

import Image from 'next/image'
import Header from '../Header/Header'

import styles from './Layout.module.scss'

import { ToggleContext } from '@/context/NavigationContext'

type Props = {
    children: React.ReactNode;
}

function Layout({ children }: Props) {
    const { toggle, setToggle } = useContext(ToggleContext);

    return (
        <>
            <div className={toggle ? `${styles.toggled}` : ''}>
                <div className={styles.overlay}></div>
                <div className={styles.headerContainer}>
                    <Image
                        src="/mountain.jpg"
                        className={styles.headerImage}
                        fill={true}
                        alt="Picture of the author"
                    />
                </div>
                <Header />
                {children}
            </div >
        </>
    )
}

export default Layout