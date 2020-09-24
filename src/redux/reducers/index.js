import { combineReducers } from 'redux'
import genres from './genreReducer'
import movies from './movieReducer'
import navbar from './navbarReducer'

const rootReducer = combineReducers({
    genres,
    movies,
    navbar
})

export default rootReducer