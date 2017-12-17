import {
	combineReducers
} from 'redux'
import {
	userInfo
} from './reducer.user.js'


const reducer = combineReducers({
	userInfo
})

export default reducer