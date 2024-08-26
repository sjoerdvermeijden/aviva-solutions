import React from 'react'

import styles from './Items.module.scss'
import style from '../Item/Item.module.scss'
import Item from '../Item/Item'
import Wrap from '../Wrap/Wrap'

type Props = {}

function Items({ }: Props) {
    return (
        <div className={styles.items}>
            <Wrap>
                <div className={styles.items__list}>
                    <Item background="white">
                        <h3 className={style.item__title}>Lorem Ipsum</h3>
                        <p className={style.item__content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
                    </Item>
                    <Item background="white">
                        <h3 className={style.item__title}>Dolor sit amet</h3>
                    </Item>
                    <Item background="white">
                        <h3 className={style.item__title}>Consectet adi pisicin</h3>
                        <p className={style.item__content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum.</p>
                    </Item>
                    <Item background="white">
                        <h3 className={style.item__title}>Adipiscing elit dolor si</h3>
                    </Item>
                </div>
            </Wrap>
        </div>
    )
}

export default Items