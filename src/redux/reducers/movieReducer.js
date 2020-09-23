export default function movieReducer(state = [], action) {
    switch(action.type) {
        case "SET_NOW_PLAYING_MOVIES": 
            return [...state, { ...action.movies }]
        default:
            return state
    }
}