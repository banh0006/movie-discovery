import { handleResponse, handleError } from "./apiUtils"
import { BASE_URL, GENRE_URL, API_KEY } from '../asset/GlobalData'
import axios from 'axios'

export function getGenres() {
    let url = BASE_URL + GENRE_URL + API_KEY
    return axios.get(url)
        .then(handleResponse)
        .catch(handleError)
}