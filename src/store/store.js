import {createStore} from 'redux'
import {acompanhaR} from './action/acompanhaReducer'
export const store= createStore(
    acompanhaR)