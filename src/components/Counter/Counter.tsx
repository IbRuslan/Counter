import React, {useEffect, useState} from 'react';
import s from './Counter.module.css'
import Button from "../Button";
import {Settings} from "../Settings/Settings";

const Counter = () => {

    const [open, setOpen] = useState(false)

    const [max, setMax] = useState<number>(5)
    const [min, setMin] = useState<number>(0)

    const [counter, setCounter] = useState(0)

    useEffect(()=> {
        let valueCount = localStorage.getItem('counter')
        if (valueCount) {
            let newValue = JSON.parse(valueCount)
            setCounter(newValue)
        }
        let valueMin = localStorage.getItem('minCount')
        if (valueMin) {
            let newValue = JSON.parse(valueMin)
            setMin(newValue)
        }
        let valueMax = localStorage.getItem('maxCount')
        if (valueMax) {
            let newValue = JSON.parse(valueMax)
            setMax(newValue)
        }
    }, [])


    useEffect(()=> {
        setCounter(min)
    },[min])

    const clickIncHandler = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }

    const clickResetHandler = () => {
        setCounter(min)
    }

    const changeOpenStatus = () => {
        setOpen(!open)
    }

    const classNum = s.num + (counter === max ? ' ' + s.error : '')


    return (
        <div className={s.block}>
            {!open ?
                <div className={s.counter}>
                    <div className={classNum}>{counter}</div>
                    <div className={s.container}>
                        <Button name={'inc'} callback={clickIncHandler} disabled={counter >= max}/>
                        <Button name={'reset'} callback={clickResetHandler} disabled={counter <= min}/>
                        <Button name={'set'} callback={changeOpenStatus}/>
                    </div>
                </div>
                :
                <Settings changeOpenStatus={changeOpenStatus}
                          max={max}
                          min={min}
                          setMax={setMax}
                          setMin={setMin}
                />
            }
        </div>
    );
};

export default Counter;