import React from 'react'

import Navigation from '../Navigation/Navigation'
import Wrap from '../Wrap/Wrap'

import styles from './Header.module.scss'

type Props = {}

function Header({ }: Props) {
    return (
        <>
            <header>
                <Wrap>
                    <div className={styles.header}>
                        <div className={styles.logo}></div>
                        <Navigation />
                    </div>
                </Wrap>
            </header>
        </>
    )
}

export default Header