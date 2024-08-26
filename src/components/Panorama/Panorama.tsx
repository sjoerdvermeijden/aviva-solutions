import React from 'react'

import styles from './Panorama.module.scss'

import Content from '../Content/Content'
import Wrap from '../Wrap/Wrap'

type Props = {}

function Panorama({ }: Props) {
    return (
        <div>
            <Wrap>
                <Content />
            </Wrap>
        </div>
    )
}

export default Panorama