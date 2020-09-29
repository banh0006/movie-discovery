import * as actionTypes from '../actions/actionTypes'

const initialState = {
    genre: [],
    year: 0,
    country: 'All',
    sort: 'Default',
}

export default function filterbarReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.SET_FILTER_OPTION:
            return { state: action.options }
        default:
            return state
    }
}