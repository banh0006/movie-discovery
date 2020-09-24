import * as movieApi from '../../api/movieApi'
import * as actionTypes from './actionTypes'

export function loadNowPlayingMoviesSuccess(movies) {
    return { type: actionTypes.LOAD_NOW_PLAYING_MOVIE_SUCCESS, movies }
}

export function loadNowPlayingMovies() {
    return function(dispatch) {
        return movieApi
            .getNowPlayingMovies()
            .then(res => {
                let nowPlayingList = []
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
                dispatch(loadNowPlayingMoviesSuccess(nowPlayingList))
            })
            .catch(error => {
                console.error(error)
                throw error
            })
    }
}