import React, {useState} from 'react';
import styles from './GameField.module.scss'
import Blocks from "./Blocks";

const GameField = ({gamearray}) => {
    const [compares, setCompare] = useState({firstel: '', secondel: ''})
    const [selectedcount, setSelectedcount] = useState(0)

    const setComparinos = (item) => {
        switch (selectedcount){
            case 0:
                compares.firstel=item
                setSelectedcount(selectedcount+1)
                break;
            case 1:
                compares.secondel=item
                setSelectedcount(selectedcount+1)
                setSelectedcount(0)
                CompareElement()
                break;
        }
    }

    const CompareElement = () =>{
        compares.firstel==compares.secondel? console.log('da'):console.log('net')
    }
    return (
        <div className={styles.gamefield}>
            {gamearray.map((item,index)=>
                <Blocks
                    item={item}
                    key={index}
                    compare={setComparinos}
                />
            )}
        </div>
    );
};

export default GameField;