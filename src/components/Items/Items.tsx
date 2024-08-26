import React from 'react'

import styles from './Items.module.scss'
import Item from '../Item/Item'
import Wrap from '../Wrap/Wrap'

type Props = {}

function Items({ }: Props) {
    return (
        <Wrap>
            <div className={styles.items}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </Wrap>
    )
}

export default Items