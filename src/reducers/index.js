import { combineReducers } from 'redux'

const mainReducer = function (state = {}, action) {  
	switch(action.type) {
		case "TEST_ACTION":
			console.log('TEST_ACTION dispatched')				
			return { ...state, test: true }
		default:
			return state
	}
}

// export default mainReducer


const appReducer = combineReducers({
	mainReducer,
	//some reducers here....
})

export default appReducer