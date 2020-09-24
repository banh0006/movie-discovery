import { handleResponse, handleError } from "./apiUtils"
import { BASE_URL, NOW_PLAYING_URL, API_KEY } from '../asset/GlobalData'
import axios from 'axios'

export function getNowPlayingMovies() {
    let url = BASE_URL + NOW_PLAYING_URL + API_KEY + "&page=1"
    return axios.get(url)
        .then(handleResponse)
        .catch(handleError)
}