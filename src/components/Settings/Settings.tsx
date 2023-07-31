import React, {ChangeEvent, useState} from 'react';
import s from './Settings.module.css'
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {changeMaxValueAC, changeMinValueAC, CounterStateType, openIsFetchingAC} from "../../redux/counter-reducer";
import {AppRootStateType} from "../../redux/store";

type SettingsType = {
    open: boolean
}

export const Settings: React.FC<SettingsType> = ({open,}) => {

    const count = useSelector<AppRootStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const maxChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        // setMax(Number(event.currentTarget.value))
        dispatch(changeMaxValueAC(Number(event.currentTarget.value)))
    }
    const minChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        // setMin(Number(event.currentTarget.value))
        dispatch(changeMinValueAC(Number(event.currentTarget.value)))
    }

    const changeCounterParams = () => {
        // localStorage.setItem('counter', JSON.stringify(min))
        // localStorage.setItem('minCount', JSON.stringify(min))
        // localStorage.setItem('maxCount', JSON.stringify(max))
        // changeOpenStatus()
        dispatch(openIsFetchingAC(!open))
    }

    return (
        <div>
            <div>
                <div>
                    <span className={s.span}>start value: </span><input onChange={minChangeValue} value={count.min}/>
                </div>
                <div>
                    <span className={s.span}>max value: </span><input onChange={maxChangeValue} value={count.max}/>
                </div>
            </div>
            <div className={s.btn}>
                <Button name={'set'} callback={changeCounterParams} disabled={false}/>
            </div>
        </div>
    );
};
