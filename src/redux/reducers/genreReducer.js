import * as actionTypes from '../actions/actionTypes'

export default function genreReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.LOAD_GENRES_SUCCESS: 
            return action.genres
        default:
            return state
    }
}