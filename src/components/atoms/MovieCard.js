import React from 'react'
import { TiInfoLarge, TiStar } from "react-icons/ti"
import { MOVIE_IMAGE_URL } from '../../asset/GlobalData'
import '../../css/MovieCard.css'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

export function MovieCard(props) {
    const getGenreNamesFromIds = (genreIds) => {
        let genreNames = []
        props.genres.map(genre => {
            for(let genreId of genreIds) {
                if (genre.id === genreId) {
                    genreNames.push(genre.name)
                }
            }
            return null
        })
        genreNames = genreNames.join(', ')
        return genreNames
    }

    return (
            <div className="card-container">
                <div className="image-card">
                    <Link to={`details/${props.movie.id}`} >
                        <img className="movie-img" src={MOVIE_IMAGE_URL + props.movie.poster_path} alt={props.movie.title}/>
                    </Link>
                    <div className="movie-info">
                        <TiInfoLarge color="#fff" />
                        <div className="info-text">
                            <h3 className="title">{props.movie.title}</h3>
                            <p className="overview">{props.movie.overview}</p>
                            <p className="genre">{"Genre: " + getGenreNamesFromIds(props.movie.genre_ids)}</p>
                            <p className="release-date">{props.movie.release_date}</p>
                            <p className="rate">
                                <TiStar color="yellow" size={22} />
                                {props.movie.vote_average}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

function mapStateToProps(state) {
    return {
        genres: state.genres
    }
}

export default connect(mapStateToProps)(MovieCard)
