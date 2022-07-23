import React, {useEffect, useState} from 'react';
import styles from './GameField.module.scss'

const Blocks = ({item, compare,visibled, itemindex}) => {

    return (
        <div onClick={()=>{
            if (visibled){

            } else {
                compare(item, itemindex)
            }
        }}
             className={visibled?styles.active:''}
        >
            <span className={visibled?styles.active:''}>{item}</span>
        </div>
    );

};

export default Blocks;