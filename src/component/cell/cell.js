import React from 'react'
import styles from './cell.module.css'

export const  Cell = (prop) => {
    return (
        <div className={styles.cell}>
            {prop.value == 'NA' ? null : prop.value}
        </div>
    )

}