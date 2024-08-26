import React, { useContext } from 'react'
import Image from 'next/image'

import Button from '../Button/Button'

import styles from './ShoppingCart.module.scss'

import { ToggleContext } from '@/context/NavigationContext';

type Props = {}

function ShoppingCart({ }: Props) {
    const { toggle, setToggle } = useContext(ToggleContext)

    const toggleCart = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setToggle(false)
    }

    return (
        <div className={styles.shopping} style={toggle ? { transform: 'translatex(0)' } : { transform: 'translatex(347px' }}  >
            <div className={styles.shopping__heading}>
                <h3 className={styles.shopping__title}>Shopping Cart (3)</h3>
                <button className={styles.shopping__button} onClick={(e) => toggleCart(e)}>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <ul className={styles.shopping__items}>
                <li className={styles.shopping__item}>
                    <div className={styles.shoppingItem}>
                        <Image
                            src="/images/image 1.jpg"
                            className={styles.shoppingItem__image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            quality={100}
                            style={{ width: '159px', height: 'auto', objectFit: 'cover' }}
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
                            src="/images/image 2.jpg"
                            className={styles.shoppingItem__image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            quality={100}
                            style={{ width: '159px', height: 'auto', objectFit: 'cover' }}
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
                            src="/images/image 3.jpg"
                            className={styles.shoppingItem__image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '159px', height: 'auto', objectFit: 'cover' }}
                            quality={100}
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