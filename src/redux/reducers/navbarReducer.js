import * as actionTypes from '../actions/actionTypes'

const initialState = {
    textColor: 'dark'
}

export default function navbarReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.SET_TEXT_COLOR: 
            return { textColor: action.color }
        default:
            return state
    }
}