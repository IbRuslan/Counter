
export type CounterStateType = {
    open: boolean,
    max: number,
    min: number,
    counter: number
}

const initialState = {
    open: false,
    max: 5,
    min: 0,
    counter: 0
}

export type counterReducerType = ChangeCounterAT | OpenIsFetchingAT | ChangeMinValueAT | ChangeMaxValueAT

export const counterReducer = (state: CounterStateType = initialState, action: counterReducerType): CounterStateType => {
    console.log('буква')
    switch (action.type) {
        case "OPEN-IS-FETCHING":
            return {...state, open: action.fetching}
        case "CHANGE-COUNTER":
            return {...state, counter: action.count}
        case "CHANGE-MIN-VALUE":
            return {...state, min: action.value}
        case "CHANGE-MAX-VALUE":
            return {...state, max: action.value}
        default:
            return {...state}
    }
}

export const changeCounterAC = (count: number) => {
    return {type: 'CHANGE-COUNTER', count} as const
}
type ChangeCounterAT = ReturnType<typeof changeCounterAC>

export const openIsFetchingAC = (fetching: boolean) => {
    return {type: 'OPEN-IS-FETCHING', fetching} as const
}
type OpenIsFetchingAT = ReturnType<typeof openIsFetchingAC>

export const changeMinValueAC = (value: number) => {
    return {type: 'CHANGE-MIN-VALUE', value} as const
}
type ChangeMinValueAT = ReturnType<typeof changeMinValueAC>

export const changeMaxValueAC = (value: number) => {
    return {type: 'CHANGE-MAX-VALUE', value} as const
}
type ChangeMaxValueAT = ReturnType<typeof changeMaxValueAC>

