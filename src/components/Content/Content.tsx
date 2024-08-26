import React from 'react'

import styles from './Content.module.scss'

type Props = {}

function Content({ }: Props) {
    return (
        <div className={styles.content}><strong>Lorem ipsum</strong> dolor sit dolor sit<br /> amet sit amet consectetur<span className={styles.content__texture}>.</span></div>
    )
}

export default Content