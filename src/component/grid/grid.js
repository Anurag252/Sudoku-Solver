import React, { useState } from 'react'
import {Cell} from '../cell/cell'
import styles from './grid.module.css'

export const Grid = () => {

    const [numberOfCells , setNumberOfCells] = useState(9);
    let arrayOfInterable = [1,2,3,4,5,6,7,8,9]
    
    console.log(arrayOfInterable)
    return (
        <div className={styles.grid}>
            
            <div className={styles.cell}>
                {arrayOfInterable.map((x) => {
                    console.log("here")
                   return arrayOfInterable.map((y) =>{
                        return <Cell key={x+y}/>
                    })
                   
                })}
            </div>
       
      
        </div>
    )
}