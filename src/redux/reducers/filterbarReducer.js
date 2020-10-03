import * as actionTypes from '../actions/actionTypes'

const initialState = {
    genres: [],
    years: [],
    countries: [],
    sort: 'Default'
}

export default function filterbarReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.SET_FILTER_OPTION:
            return action.options
        case actionTypes.CLEAR_FILTER:
            return initialState
        default:
            return state
    }
}