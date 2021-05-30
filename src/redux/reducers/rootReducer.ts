import {combineReducers} from 'redux'
import folderReducer from '../reducers/folderReducer'

const rootReducer = combineReducers({
dataFile:folderReducer,
})


export default rootReducer