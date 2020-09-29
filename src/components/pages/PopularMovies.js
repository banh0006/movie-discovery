import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as movieActions from '../../redux/actions/movieActions'
import * as navbarActions from '../../redux/actions/navbarActions'
import { Container, Row } from 'reactstrap'
import MovieList from '../molecules/MovieList'
import FilterBar from '../molecules/FilterBar'
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
        filterBar: {
            'margin': '8rem 0 0 0'
        },
        paginationBar: {
            'justifyContent': 'center',
            'alignItems': 'center'
        }
    }

    useEffect(() => {
        props.actions.setHomePage(false)
        if (movies.length === 0) {
            props.actions.loadPopularMovies()
        }
    }, [])


    useEffect(() => {
        setMovies(props.popularMovies)
    }, [props.popularMovies])

    return (
        <Container id="popular-movies">
            <Row className="filter-bar" style={styles.filterBar}>
                <FilterBar />
            </Row>
            <Row className="popular-movies">
                <div className="popular-movie-list" style={styles.popularMovieContainer}>
                    <MovieList movieList={currentMovies} />
                </div>
            </Row>
            <Row className="pagination-bar" style={styles.paginationBar}>
                <PaginationBar moviesPerPage={moviesPerPage} totalMovies={movies.length} 
                    currentPage={currentPage} paginate={paginate} link="#popular-movies" />
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
            loadPopularMovies: bindActionCreators(movieActions.loadPopularMovies, dispatch),
            setHomePage: bindActionCreators(navbarActions.setHomepage, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies)