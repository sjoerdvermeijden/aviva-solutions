import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
                        <div className={styles.logo}>
                            <Link href="/">
                                <Image
                                    src="/images/Logo.png"
                                    className={styles.shoppingItem__image}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '90px', height: 'auto' }}
                                    alt="Picture of the author"
                                />
                            </Link>
                        </div>
                        <Navigation />
                    </div>
                </Wrap>
            </header>
        </>
    )
}

export default Header