import * as movieApi from '../../api/movieApi'
import * as actionTypes from './actionTypes'

export function loadNowPlayingMoviesSuccess(movies) {
    return { type: actionTypes.LOAD_NOW_PLAYING_MOVIE_SUCCESS, movies }
}

export function loadRecommendedMoviesSuccess(movies) {
    return { type: actionTypes.LOAD_RECOMMENDED_MOVIE_SUCCESS, movies }
}

export function loadPopularMoviesSuccess(movies) {
    return { type: actionTypes.LOAD_POPULAR_MOVIE_SUCCESS, movies }
}

export function loadNowPlayingMovies() {
    return function(dispatch) {
        return movieApi
            .getNowPlayingMovies()
            .then(res => {
                let nowPlayingList = []
                let recommendedList = []

                // get 5 movie for movie carousel 
                if (res.results < 0) return
                if (res.results.length > 5) {
                    for (let i = 0; i < 5; i++) {
                        nowPlayingList.push(res.results[i])
                    }
                } else {
                    for(let movie of res.results) {
                        nowPlayingList.push(movie)
                    }
                }

                // get 20 movies for recomended movie list
                if (res.results.length > 20) {
                    for (let i = 0; i < 20; i++) {
                        recommendedList.push(res.results[i])
                    }
                } else {
                    for(let movie of res.results) {
                        recommendedList.push(movie)
                    }
                }

                dispatch(loadNowPlayingMoviesSuccess(nowPlayingList))
                dispatch(loadRecommendedMoviesSuccess(recommendedList))
            })
            .catch(error => {
                console.error(error)
                throw error
            })
    }
}

export function loadPopularMovies() {
    return function(dispatch) {
        return movieApi
            .getPopularMovies()
            .then(res => {
                dispatch(loadPopularMoviesSuccess(res))
            })
            .catch(error => {
                console.error(error)
                throw error
            })
    }
}
