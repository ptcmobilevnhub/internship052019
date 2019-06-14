import { combineReducers } from 'redux'
import registerReducer from '../modules/Register/Register.reducer'


const rootReducer = combineReducers({
    registerReducer,
})

export default rootReducer