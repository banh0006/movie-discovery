import * as actionTypes from './actionTypes'

export function setTextColor(color) {
    return { type: actionTypes.SET_TEXT_COLOR, color }
}