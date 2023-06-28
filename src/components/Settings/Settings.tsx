import React, {ChangeEvent, useState} from 'react';
import s from './Settings.module.css'
import Button from "../Button";

type SettingsType = {
    changeOpenStatus: () => void
    max: number
    min: number
    setMax: (max: number) => void
    setMin: (min: number) => void
}

export const Settings: React.FC<SettingsType> = (
    {
        max,
        min,
        setMax,
        setMin,
        changeOpenStatus
    }) => {

    const maxChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(event.currentTarget.value))
    }
    const minChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMin(Number(event.currentTarget.value))
    }

    const changeCounterParams = () => {
        localStorage.setItem('counter', JSON.stringify(min))
        localStorage.setItem('minCount', JSON.stringify(min))
        localStorage.setItem('maxCount', JSON.stringify(max))
        changeOpenStatus()
    }

    return (
        <div>
            <div>
                <div>
                    <span className={s.span}>start value: </span><input onChange={minChangeValue} value={min}/>
                </div>
                <div>
                    <span className={s.span}>max value: </span><input onChange={maxChangeValue} value={max}/>
                </div>
            </div>
            <div className={s.btn}>
                <Button name={'set'} callback={changeCounterParams} disabled={false}/>
            </div>
        </div>
    );
};
