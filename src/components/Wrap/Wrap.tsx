import React from 'react'

import styles from './Wrap.module.scss'

type Props = {
    children: React.ReactNode;
}

function Wrap({ children }: Props) {
    return (
        <>
            <div className={styles.wrap}>
                {children}
            </div>
        </>
    )
}

export default Wrap