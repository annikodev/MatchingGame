import React, {useState} from 'react';
import styles from './GameField.module.scss'
import Blocks from "./Blocks";

const GameField = ({gamearray}) => {
    const [compares, setCompare] = useState({firstel: '', firselIN:'', secondel: '',secondelID:''})
    const [selectedcount, setSelectedcount] = useState(0)
    const [fieldArray, setfieldArray] = useState(gamearray)

    const setComparinos = (item,itemindex) => {
        switch (selectedcount){
            case 0:
                compares.firselIN = itemindex
                compares.firstel=item
                fieldArray[compares.firselIN]={...fieldArray[compares.firselIN], visible:true}
                setSelectedcount(selectedcount+1)
                break;
            case 1:
                compares.secondelID=itemindex
                compares.secondel=item
                fieldArray[compares.secondelID]={...fieldArray[compares.secondelID], visible:true}
                setSelectedcount(selectedcount+1)
                setTimeout(()=>{
                    CompareElement()
                    setSelectedcount(0)
                },1000)
                break;
        }
    }

    const CompareElement = () =>{
        if(compares.firstel===compares.secondel) {
            fieldArray[compares.firselIN]={...fieldArray[compares.firselIN], visible:true}
            fieldArray[compares.secondelID]={...fieldArray[compares.secondelID], visible:true}
        } else {
            fieldArray[compares.firselIN]={...fieldArray[compares.firselIN], visible:false}
            fieldArray[compares.secondelID]={...fieldArray[compares.secondelID], visible:false}
        }
    }
    return (
        <div className={styles.gamefield}>
            {fieldArray.map((item,index)=>
                <Blocks
                    item={item.item}
                    itemindex={index}
                    visibled={item.visible}
                    key={index}
                    compare={setComparinos}
                />
            )}
        </div>
    );
};

export default GameField;