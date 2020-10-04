import * as actionTypes from './actionTypes'

export function setFilterOptions(options) {
    return { type: actionTypes.SET_FILTER_OPTION, options }
}

export function clearFilter() {
    return { type: actionTypes.CLEAR_FILTER }
}

export function setGenre(genre) {
    return { type: actionTypes.SET_GENRE, genre }
}

export function setCountry(country) {
    return { type: actionTypes.SET_COUNTRY, country }
}