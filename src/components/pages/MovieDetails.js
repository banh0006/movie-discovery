import React, { useState ,useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import * as navbarActions from '../../redux/actions/navbarActions'
import CastInfoCard from '../molecules/CastInfoCard'
import { BASE_URL, DETAILS_URL, API_KEY, MOVIE_IMAGE_URL, YOUTUBE_VIDEO_URL } from '../../asset/GlobalData'
import { TiStar } from 'react-icons/ti'
import { BsClock } from 'react-icons/bs'
import '../../css/MovieDetails.css'
import RecommendedMovies from '../organisms/RecommendedMovies'

import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export function MovieDetails(props) {
    const [movie, setMovie] = useState({})
    const [genres, setGenres] = useState("")
    const [movieCredits, setMovieCredits] = useState({})
    const [castInfoCards, setCastInfoCards] = useState([])
    const [trailer, setTrailer] = useState({})

    const styles = {
        pageContainer: {
            'paddingTop': '8rem',
            'paddingBottom': '2rem'
        }
    }

    const getDirectorName = () => {
        if (movieCredits.crew) {
            const director = movieCredits.crew.find(crewMember => crewMember.job === "Director")
            if (director) return director.name
            else return "Not found"
        }
    }

    const getGenreNames = (genres) => {
        let genreNames = []
        if (genres) {
            for(let movieGenre of genres) {
                props.genres.map(genre => {
                    if (movieGenre.id === genre.id) {
                        genreNames.push(movieGenre.name)
                    }
                    return null
                })
            }
            genreNames = genreNames.join(', ')
        }
        
        return genreNames
    }

    const getMovieDetails = (movieId) => {
        let url = BASE_URL + DETAILS_URL + movieId + "?api_key=" + API_KEY
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
            .then(data => setMovie(data))
    }

    const getMovieCredits = (movieId) => {
        let url = BASE_URL + DETAILS_URL + movieId + "/credits?api_key=" + API_KEY
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
            .then(data => setMovieCredits(data))
    }

    const getTrailers = (movieId) => {
        let url = BASE_URL + DETAILS_URL + movieId + "/videos?api_key=" + API_KEY
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
                if (data.results.length === 0) {
                    setTrailer({})
                } 
                const officialTrailer = data.results.find(trailer => trailer.name === "Official Trailer")
                if (officialTrailer) {
                    setTrailer(officialTrailer)
                } else {
                    let availableTrailer = {}
                    availableTrailer = data.results[0]
                    setTrailer(availableTrailer)
                }
            })
    }

    useEffect(() => {
        props.actions.setHomePage(false)
        const movieId = props.match.params.id
        getMovieDetails(movieId)
        getMovieCredits(movieId)
        getTrailers(movieId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.id])

    useEffect(() => {
        if (movie.genres) {
            const genreNames = getGenreNames(movie.genres)
            setGenres(genreNames)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movie])

    useEffect(() => {
        if (movieCredits.cast) {
            const castList = movieCredits.cast.slice(0, 5)
            const castInfoCards = castList.map(cast => (
                <CastInfoCard key={cast.credit_id} name={cast.name} url={cast.profile_path} />
            ))
            setCastInfoCards(castInfoCards)
        }
    }, [movieCredits])

    return (
        <Container id="movie-details" style={styles.pageContainer}>
            <Row className="movie-details-info">
                <Col sm="12" xs="5" md="5" lg="4" className="movie-poster">
                    <img className="movie-detail-img" src={MOVIE_IMAGE_URL + movie.poster_path} alt={movie.title}/>
                </Col>
                <Col sm="12" xs="6" md="6" lg="5" className="detail-info-text">
                    <Row className="movie-detail-title">
                        <h2>{movie.title}</h2>
                    </Row>
                    <Row className="movie-detail-view">
                        <TiStar color="yellow" /> 
                        {movie.vote_average}
                        <div className="movie-duration">
                             <BsClock color="#fff"/> {movie.runtime} min 
                        </div>
                        {movie.vote_count} voted
                    </Row>
                    <Row className="movie-detail-overview">{movie.overview}</Row>
                    <Row className="movie-detail-release_date">Release Date: {movie.release_date}</Row>
                    <Row className="movie-detail-genre">Genre: {genres} </Row>
                    <Row className="movie-detail-director">Director: {getDirectorName()}</Row>
                    <Row className="cast-text">Cast: </Row>
                    <Row className="movie-detail-cast">
                        {castInfoCards}
                    </Row>
                </Col>
            </Row>
            <Row className="trailer">
                { trailer  && 
                    <Col sm="12" xs="11" md="12" lg="9" className="trailer-container">
                        <iframe src={trailer.key ? YOUTUBE_VIDEO_URL + trailer.key : null}  title={movie.title}/>
                    </Col>
                }
            </Row>
            <Row className="recommendation">
                <Col>
                    <div className="recommmended movies">
                        <RecommendedMovies movieId={movie.id} />    
                    </div> 
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        genres: state.genres
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            setHomePage: bindActionCreators(navbarActions.setHomepage, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)