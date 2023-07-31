import {applyMiddleware, combineReducers, legacy_createStore, Middleware} from "redux";
import {counterReducer} from "./counter-reducer";

const rooReducer = combineReducers( {
        counter: counterReducer
})

const localStorageMiddleware: Middleware<{}, AppRootStateType> = store => next => action => {
        const result = next(action);
        localStorage.setItem('reduxState', JSON.stringify(store.getState()));
        return result;
};

const persistedState: AppRootStateType | undefined = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState') as string)
    : undefined;

export const store = legacy_createStore(rooReducer, persistedState, applyMiddleware(localStorageMiddleware))

export type AppRootStateType = ReturnType<typeof rooReducer>