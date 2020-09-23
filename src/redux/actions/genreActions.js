import * as genreApi from '../../api/genreApi'
import * as actionTypes from './actionTypes'

export function loadGenresSuccess(genres) {
    return { type: actionTypes.LOAD_GENRES_SUCCESS, genres }
}

export function loadGenres() {
    return function(dispatch) {
        return genreApi
            .getGenres()
            .then(genres => {
                dispatch(loadGenresSuccess(genres))
            })
            .catch(error => {
                console.error(error)
                throw error
            })
    }
}