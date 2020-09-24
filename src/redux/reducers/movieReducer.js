import * as actionTypes from '../actions/actionTypes'

const initialState = {
    nowPlaying: [],
    searchMovies: [],
    recommendedMovies: [],
    latestMovies: [],
    trendingMovies: [],
}

export default function movieReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.LOAD_NOW_PLAYING_MOVIE_SUCCESS: 
            return { ...state, nowPlaying: action.movies }
        case actionTypes.LOAD_RECOMMENDED_MOVIE_SUCCESS:
            return { ...state, recommendedMovies: action.movies }
        case actionTypes.LOAD_LATEST_MOVIES:
            return { ...state, latestMovies: action.latestMovies }
        case actionTypes.LOAD_TRENDING_MOVIES:
            return { ...state, trendingMovies: action.trendingMovies }
        default:
            return state
    }
}