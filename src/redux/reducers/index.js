import { combineReducers } from 'redux'
import genres from './genreReducer'
import movies from './movieReducer'
import navbar from './navbarReducer'
import filterbar from './filterbarReducer'

const rootReducer = combineReducers({
    genres,
    movies,
    navbar,
    filterbar
})

export default rootReducer