import {combineReducers} from 'redux'
import folderReducer from './fileExploreReducer'

const rootReducer = combineReducers({
dataFile:folderReducer,
})


export default rootReducer