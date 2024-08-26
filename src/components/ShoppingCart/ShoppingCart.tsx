import React from 'react'
import Image from 'next/image'

import Button from '../Button/Button'

import styles from './ShoppingCart.module.scss'

type Props = {}

function ShoppingCart({ }: Props) {
    return (
        <div className={styles.shopping}>
            <div className={styles.shopping__heading}>
                <h3 className={styles.shopping__title}>Shopping Cart (3)</h3>
                <button className={styles.shopping__button}>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <ul className={styles.shopping__items}>
                <li className={styles.shopping__item}>
                    <div className={styles.shoppingItem}>
                        <Image
                            src="/mountain.jpg"
                            className={styles.shoppingItem__image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '159px', height: 'auto' }}
                            alt="Picture of the author"
                        />
                        <div className={styles.shoppingItem__content}>
                            <h3 className={styles.shoppingItem__title}>Iphone 9</h3>
                            <p className={styles.shoppingItem__price}>€36,99 incl. btw</p>
                        </div>
                    </div>
                </li>
                <li className={styles.shopping__item}>
                    <div className={styles.shoppingItem}>
                        <Image
                            src="/mountain.jpg"
                            className={styles.shoppingItem__image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '159px', height: 'auto' }}
                            alt="Picture of the author"
                        />
                        <div className={styles.shoppingItem__content}>
                            <h3 className={styles.shoppingItem__title}>Iphone X</h3>
                            <p className={styles.shoppingItem__price}>€36,99 incl. btw</p>
                        </div>
                    </div>
                </li>
                <li className={styles.shopping__item}>
                    <div className={styles.shoppingItem}>
                        <Image
                            src="/mountain.jpg"
                            className={styles.shoppingItem__image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '159px', height: 'auto' }}
                            alt="Picture of the author"
                        />
                        <div className={styles.shoppingItem__content}>
                            <h3 className={styles.shoppingItem__title}>Samsung Universe 9</h3>
                            <p className={styles.shoppingItem__price}>€36,99 incl. btw</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div className={styles.shopping__bottom}>
                <Button>View Shopping Cart</Button>
            </div>
        </div>
    )
}

export default ShoppingCart