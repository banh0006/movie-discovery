import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row } from 'reactstrap'
import * as movieActions from '../../redux/actions/movieActions'
import * as navbarActions from '../../redux/actions/navbarActions'
import MovieList from '../molecules/MovieList'
import FilterBar from '../molecules/FilterBar'
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
        props.actions.setHomePage(false)
        if (movies.length === 0) {
            props.actions.loadTopRatedMovies()
        }
    }, [])


    useEffect(() => {
        setMovies(props.topRatedMovies)
    }, [props.topRatedMovies])
    return (
        <Container id="top-rated-movies">
            <Row className="filter-bar">
                <FilterBar />
            </Row>
            <Row className="top-rated-movies">
                <div className="top-rated-movie-list" style={styles.topRatedMovieContainer}>
                    <MovieList movieList={currentMovies} />
                </div>
            </Row>
            <Row className="pagination-bar" style={styles.paginationBar}>
                <PaginationBar moviesPerPage={moviesPerPage} totalMovies={movies.length} 
                    currentPage={currentPage} paginate={paginate} link="#top-rated-movies" />
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
            loadTopRatedMovies: bindActionCreators(movieActions.loadTopRatedMovies, dispatch),
            setHomePage: bindActionCreators(navbarActions.setHomepage, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies)