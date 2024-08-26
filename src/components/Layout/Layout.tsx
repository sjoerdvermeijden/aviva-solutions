import React from 'react'

import Image from 'next/image'
import Header from '../Header/Header'

import styles from './Layout.module.scss'

type Props = {
    children: React.ReactNode;
}

function Layout({ children }: Props) {
    return (
        <>
            <div className="overlay"></div>
            <div className='headerContainer'>
                <Image
                    src="/mountain.jpg"
                    className={styles.headerImage}
                    width={500}
                    height={600}
                    alt="Picture of the author"
                />
            </div>
            <Header />
            {children}
        </>
    )
}

export default Layout