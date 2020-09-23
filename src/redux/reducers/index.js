import { combineReducers } from 'redux'
import genres from './genreReducer'
import movies from './movieReducer'

const rootReducer = combineReducers({
    genres,
    movies
})

export default rootReducer