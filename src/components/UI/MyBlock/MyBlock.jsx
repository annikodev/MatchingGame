import React from 'react';
import styles from './MyBlock.module.scss'

const MyBlock = ({children}) => {
    return (
        <div className={styles.mylabel}>
            {children}
        </div>
    );
};

export default MyBlock;