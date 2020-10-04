import React from 'react'
import MovieCard from '../atoms/MovieCard'

export default function MovieList(props) {
    const movieCards = props.movieList.map(movie => (
        <MovieCard key={movie.id} movie={movie} redirect={props.redirect ? true : false}/>
    ))

    return (
        <div className="movie-list">
            { movieCards }
        </div>
    )
}
