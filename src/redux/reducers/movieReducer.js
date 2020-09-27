import * as actionTypes from '../actions/actionTypes'

const initialState = {
    nowPlaying: [],
    searchMovies: [],
    recommendedMovies: [],
    topRatedMovies: [],
    popularMovies: [],
}

export default function movieReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.LOAD_NOW_PLAYING_MOVIE_SUCCESS: 
            return { ...state, nowPlaying: action.movies }
        case actionTypes.LOAD_RECOMMENDED_MOVIE_SUCCESS:
            return { ...state, recommendedMovies: action.movies }
        case actionTypes.LOAD_POPULAR_MOVIE_SUCCESS:
            return { ...state, popularMovies: action.movies }
        case actionTypes.LOAD_TOP_RATED_MOVIE_SUCCESS:
            return { ...state, topRatedMovies: action.movies }
        case actionTypes.LOAD_LATEST_MOVIES:
            return { ...state, latestMovies: action.latestMovies }
        case actionTypes.LOAD_TRENDING_MOVIES:
            return { ...state, trendingMovies: action.trendingMovies }
        default:
            return state
    }
}