import React, {useEffect} from 'react';
import s from './Counter.module.css'
import Button from "../Button";
import {Settings} from "../Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {changeCounterAC, CounterStateType, openIsFetchingAC} from "../../redux/counter-reducer";

const Counter = () => {

    const count = useSelector<AppRootStateType, CounterStateType>
    (state => state.counter)
    const dispatch = useDispatch()

    // const [max, setMax] = useState<number>(5)
    // const [min, setMin] = useState<number>(0)
    //
    // const [counter, setCounter] = useState(0)

    // useEffect(()=> {
    //     let valueCount = localStorage.getItem('counter')
    //     if (valueCount) {
    //         let newValue = JSON.parse(valueCount)
    //         setCounter(newValue)
    //     }
    //     let valueMin = localStorage.getItem('minCount')
    //     if (valueMin) {
    //         let newValue = JSON.parse(valueMin)
    //         setMin(newValue)
    //     }
    //     let valueMax = localStorage.getItem('maxCount')
    //     if (valueMax) {
    //         let newValue = JSON.parse(valueMax)
    //         setMax(newValue)
    //     }
    // }, [])


    useEffect(()=> {
        // setCounter(count.min)
        dispatch(changeCounterAC(count.min))
    },[count.min])

    const clickIncHandler = () => {
        if (count.counter < count.max) {
            // setCounter(counter + 1)
            dispatch(changeCounterAC(count.counter + 1))
        }
    }

    const clickResetHandler = () => {
        // setCounter(min)
        dispatch(changeCounterAC(count.min))
    }

    const changeOpenStatus = () => {
        dispatch(openIsFetchingAC(!count.open))
    }

    const classNum = s.num + (count.counter === count.max ? ' ' + s.error : '')


    return (
        <div className={s.block}>
            {!count.open ?
                <div className={s.counter}>
                    <div className={classNum}>{count.counter}</div>
                    <div className={s.container}>
                        <Button name={'inc'} callback={clickIncHandler} disabled={count.counter >= count.max}/>
                        <Button name={'reset'} callback={clickResetHandler} disabled={count.counter <= count.min}/>
                        <Button name={'set'} callback={changeOpenStatus}/>
                    </div>
                </div>
                :
                <Settings open={count.open}/>
            }
        </div>
    );
};

export default Counter;