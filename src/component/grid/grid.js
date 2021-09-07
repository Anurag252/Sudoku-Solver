import React, { useEffect, useState } from 'react'
import {Cell} from '../cell/cell'
import styles from './grid.module.css'

export const Grid = (prop) => {

    
    const [map, setMap] = useState(prop.gridMap)

    useEffect(() => {
        setMap(prop.gridMap)
    }, [prop.gridMap])

    console.log(map)
    
    return (
        <div className={styles.grid}>
            
            <div className={styles.cell}>
                {map.map((x) => {
                   return x.map((y) =>{
                        return <Cell key={Math.random()} value={y}/>
                    })
                   
                })}
            </div>
       
      
        </div>
    )
}