import React from 'react';
import s from './Counter/Counter.module.css'

type ButtonType = {
    name: string
    callback: () => void
    disabled?: boolean
}

const Button: React.FC<ButtonType> = ({name, callback,disabled}) => {

    const classNam = s.button + ( disabled ? ' ' + s.active : '')

    return (
        <button className={classNam} onClick={callback} disabled={disabled}>{name}</button>
    );
};

export default Button;