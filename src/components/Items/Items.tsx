import React from 'react'
import Image from 'next/image'

import styles from './Items.module.scss'
import style from '../Item/Item.module.scss'
import Item from '../Item/Item'
import Wrap from '../Wrap/Wrap'

type Props = {}

function Items({ }: Props) {
    return (
        <div className={styles.items}>
            <Wrap>
                <ul className={styles.items__list}>
                    <li>
                        <Item>
                            <div className={style.item__content}>
                                <h3 className={style.item__title}>Lorem Ipsum</h3>
                                <p className={style.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
                                <a href="" className={style.item__link}>Read more</a>
                            </div>
                        </Item>
                    </li>
                    <li>
                        <Item>
                            <Image
                                src="/mountain.jpg"
                                className={style.item__image}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '102px' }}
                                alt="Picture of the author"
                            />
                            <div className={style.item__content}>
                                <h3 className={style.item__title}>Dolor sit amet</h3>
                                <a href="" className={style.item__link}>Read more</a>
                            </div>
                        </Item>
                    </li>
                    <li>
                        <Item>
                            <div className={style.item__content}>
                                <h3 className={style.item__title}>Consectet adi pisicin</h3>
                                <p className={style.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum.</p>
                                <a href="" className={style.item__link}>Read more</a>
                            </div>
                        </Item>
                    </li>
                    <li>
                        <Item>
                            <Image
                                src="/mountain.jpg"
                                className={style.item__image}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '102px' }}
                                alt="Picture of the author"
                            />
                            <div className={style.item__content}>
                                <h3 className={style.item__title}>Adipiscing elit dolor si</h3>
                                <a href="" className={style.item__link}>Read more</a>
                            </div>
                        </Item>
                    </li>
                </ul>
            </Wrap>
        </div>
    )
}

export default Items