import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as movieActions from '../../redux/actions/movieActions'
import * as navbarActions from '../../redux/actions/navbarActions'
import * as filterFunctions from '../../asset/FilterFunctions'
import { Container, Row } from 'reactstrap'
import MovieList from '../molecules/MovieList'
import FilterBar from '../molecules/FilterBar'
import PaginationBar from '../molecules/PaginationBar'

export function PopularMovies(props) {
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const moviesPerPage = 40

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastMovie = currentPage * moviesPerPage
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie)

    const styles = {
        pageContainer: {
            'padding-top': '8rem'
        },
        popularMovieContainer: {
            'margin': '0 1rem',
            'width': '100%'
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        setMovies(props.popularMovies)
        setFilteredMovies(props.popularMovies)
    }, [props.popularMovies])

    useEffect(() => {
        if (movies.length > 0) {
            let sortType = "Default"
            if (props.filterOptions.sort) {
                sortType = props.filterOptions.sort
            }

            const genreIds = filterFunctions.getGenreIdsFromNames(props.filterOptions.genres, props.genres)
            let filteredMovieList = 
                movies
                    .filter(filterFunctions.filterGenre.bind(this, genreIds))
                    .filter(filterFunctions.filterYear.bind(this, props.filterOptions.years))
                    .filter(filterFunctions.filterCountry.bind(this, props.filterOptions.countries))

            filteredMovieList = filterFunctions.sortMovies(filteredMovieList, sortType)
            setFilteredMovies(filteredMovieList)
        }
        
    }, [props.filterOptions])

    return (
        <Container id="popular-movies" style={styles.pageContainer}>
            <Row className="filter-bar">
                <FilterBar />
            </Row>
            <Row className="popular-movies">
                <div className="popular-movie-list" style={styles.popularMovieContainer}>
                    <MovieList movieList={currentMovies} />
                </div>
            </Row>
            <Row className="pagination-bar" style={styles.paginationBar}>
                <PaginationBar moviesPerPage={moviesPerPage} totalMovies={filteredMovies.length} 
                    currentPage={currentPage} paginate={paginate} link="#popular-movies" />
            </Row>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        popularMovies: state.movies.popularMovies.length === 0 
            ? [] 
            : state.movies.popularMovies,
        filterOptions: state.filterbar,
        genres: state.genres
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