import * as actionTypes from './actionTypes'

export function setFilterOptions(options) {
    return { type: actionTypes.SET_FILTER_OPTION, options }
}

export function clearFilter() {
    return { type: actionTypes.CLEAR_FILTER }
}