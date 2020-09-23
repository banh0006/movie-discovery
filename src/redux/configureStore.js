import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
} 