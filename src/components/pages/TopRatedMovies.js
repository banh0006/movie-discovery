import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row } from 'reactstrap'
import * as movieActions from '../../redux/actions/movieActions'
import MovieList from '../molecules/MovieList'
import PaginationBar from '../molecules/PaginationBar'

export function TopRatedMovies(props) {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const moviesPerPage = 40

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastMovie = currentPage * moviesPerPage
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie)

    const styles = {
        topRatedMovieContainer: {
            'margin': '0 1rem'
        },
        paginationBar: {
            'justifyContent': 'center',
            'alignItems': 'center'
        }
    }

    useEffect(() => {
        if (movies.length === 0) {
            props.actions.loadTopRatedMovies()
        }
    }, [])


    useEffect(() => {
        setMovies(props.topRatedMovies)
    }, [props.topRatedMovies])
    return (
        <Container>
            <Row className="filter-bar">

            </Row>
            <Row className="top-rated-movies" id="top-rated-movies">
                <div className="top-rated-movie-list" style={styles.topRatedMovieContainer}>
                    <MovieList movieList={currentMovies} />
                </div>
            </Row>
            <Row className="pagination-bar" style={styles.paginationBar}>
                <PaginationBar moviesPerPage={moviesPerPage} totalMovies={movies.length} currentPage={currentPage} paginate={paginate} />
            </Row>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        topRatedMovies: state.movies.topRatedMovies.length === 0 
            ? [] 
            : state.movies.topRatedMovies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadTopRatedMovies: bindActionCreators(movieActions.loadTopRatedMovies, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies)