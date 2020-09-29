import { handleResponse, handleError } from "./apiUtils"
import { BASE_URL, NOW_PLAYING_URL, POPULAR_URL, TOP_RATED_URL, API_KEY } from '../asset/GlobalData'
import axios from 'axios'

export function getNowPlayingMovies() {
    let url = BASE_URL + NOW_PLAYING_URL + API_KEY + "&page=1"
    return axios.get(url)
        .then(handleResponse)
        .catch(handleError)
}

export function getPopularMovies() { //from 20 pages
    const getPopularMoviesFuncs = []
    for (let i = 1; i <= 20; i++) {
        getPopularMoviesFuncs.push(getPopularMoviesFromOnePage(i))
    }

    return Promise.all(getPopularMoviesFuncs)
    .then(function (responses) {
        const combinedData = []
        responses.map(res => {
            if (res.data.results) {
                combinedData.push(...res.data.results)
            }
            return null
        })
        return combinedData
    })
    .catch(handleError)
}

function getPopularMoviesFromOnePage(pageNumber) {
    let url = BASE_URL + POPULAR_URL + API_KEY + `&page=${pageNumber}`
    return axios.get(url)
}

export function getTopRatedMovies() {
    const getTopRatedMoviesFuncs = []
    for (let i = 1; i <= 20; i++) {
        getTopRatedMoviesFuncs.push(getTopRatedMoviesFromOnePage(i))
    }

    return Promise.all(getTopRatedMoviesFuncs)
    .then(function (responses) {
        const combinedData = []
        responses.map(res => {
            if (res.data.results) {
                combinedData.push(...res.data.results)
            }
            return null
        })
        return combinedData
    })
    .catch(handleError)
}

function getTopRatedMoviesFromOnePage(pageNumber) {
    let url = BASE_URL + TOP_RATED_URL + API_KEY + `&page=${pageNumber}`
    return axios.get(url)
}