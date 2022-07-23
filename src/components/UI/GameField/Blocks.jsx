import React, {useEffect, useState} from 'react';
import styles from './GameField.module.scss'

const Blocks = ({item, compare}) => {
    const [visible, setVisible] = useState(false)
    const vi = (visible) => {
        setVisible(!visible)
    }


    return (
        <div onClick={()=>{
            vi(visible)
            compare(item)
        }}>
            <span  className={visible?styles.active:''}>{item}</span>
        </div>
    );

};

export default Blocks;