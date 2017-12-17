/*
 
 */

const initialUser = {
	isLogin: false,
	name: ''
}
export function userInfo(state = initialUser, action) {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return {...state,
				...action.payload
			}
		default:
			return state
	}
}

export function login(data) {
	return dispatch => {
		dispatch({
			type: 'LOGIN_SUCCESS',
			payload: data
		})
	}
}