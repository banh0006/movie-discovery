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
        case actionTypes.SET_GENRE:
            return { ...initialState, genres: [action.genre] }
        case actionTypes.SET_COUNTRY:
            return { ...initialState, countries: [action.country] }
        default:
            return state
    }
}