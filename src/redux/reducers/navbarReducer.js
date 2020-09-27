import * as actionTypes from '../actions/actionTypes'

const initialState = {
    homepage: true
}

export default function navbarReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.SET_HOME_PAGE:
            return { ...state, homepage: action.value }
        default:
            return state
    }
}