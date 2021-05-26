import {combineReducers} from 'redux'
import GameBauCuaReducer from './GameBauCuaReducer';

const rootReducer = combineReducers({
    baucua: GameBauCuaReducer
})
export default rootReducer;