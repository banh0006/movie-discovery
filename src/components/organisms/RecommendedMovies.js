import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { BASE_URL, DETAILS_URL, API_KEY } from '../../asset/GlobalData'
import SwiperMovies from '../molecules/SwiperMovies'

export function RecommendedMovies(props) {
    const [movies, setMovies] = useState([])
    const [swiperCards, setSwiperCards] = useState("")

    const getRecommendedMovies = (movieId) => {
        let url = BASE_URL + DETAILS_URL + movieId + "/recommendations?api_key=" + API_KEY
        axios.get(url)
            .then(response => {
                if (response.status === 200) {
                    return response.data
                }
                if (response.status === 400) {
                  const error = response.text()
                  throw new Error(error)
                }
                throw new Error("Network response was not ok.")
            })
            .then(data => {
                if (data.results.length > 10) {
                    const recommendedList = data.results.slice(0, 10)
                    setMovies(recommendedList)
                } else {
                    setMovies(data.results)
                }
            })
    }

    useEffect(() => {
        if (props.movieId) {
            getRecommendedMovies(props.movieId)
        }
    }, [props.movieId])

    useEffect(() => {
       if (movies.length > 0) {
               const swiperCards = <SwiperMovies movies={movies} />
               setSwiperCards(swiperCards)
       }
    }, [movies])

    return (
        <>
            <h2>You may also like</h2>

            <div> 
                {swiperCards}
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        nowPlaying: state.movies.nowPlaying.length === 0 
            ? [] 
            : state.movies.nowPlaying,
    }
}
  
export default connect(mapStateToProps)(RecommendedMovies)