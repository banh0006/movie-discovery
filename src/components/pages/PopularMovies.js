import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as movieActions from '../../redux/actions/movieActions'
import MovieList from '../molecules/MovieList'
import { Container, Row } from 'reactstrap'
import PaginationBar from '../molecules/PaginationBar'

export function PopularMovies(props) {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const moviesPerPage = 40

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastMovie = currentPage * moviesPerPage
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie)

    const styles = {
        popularMovieContainer: {
            'margin': '0 1rem'
        },
        paginationBar: {
            'justifyContent': 'center',
            'alignItems': 'center'
        }
    }

    useEffect(() => {
        if (movies.length === 0) {
            props.actions.loadPopularMovies()
        }
    }, [])


    useEffect(() => {
        setMovies(props.popularMovies)
    }, [props.popularMovies])

    return (
        <Container>
            <Row className="filter-bar">

            </Row>
            <Row className="popular-movies" id="popular-movies">
                <div className="popular-movie-list" style={styles.popularMovieContainer}>
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
        popularMovies: state.movies.popularMovies.length === 0 
            ? [] 
            : state.movies.popularMovies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadPopularMovies: bindActionCreators(movieActions.loadPopularMovies, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies)