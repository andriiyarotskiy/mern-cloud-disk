const initialState = {
    currentUser: {},
    isAuth: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER': {
            return {...state, currentUser: action.payload, isAuth: true}
        }
        case 'LOGOUT': {
            return {...state, currentUser: {}, isAuth: false}
        }
        default :
            return state
    }
}

export const setUser = (user) => {
    return {type: 'SET_USER', payload: user}
}
export const logOut = () => {
    return {type: 'LOGOUT'}
}