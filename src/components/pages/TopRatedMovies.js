import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row } from 'reactstrap'
import * as movieActions from '../../redux/actions/movieActions'
import * as navbarActions from '../../redux/actions/navbarActions'
import * as filterbarActions from '../../redux/actions/filterbarActions'
import * as filterFunctions from '../../asset/FilterFunctions'
import MovieList from '../molecules/MovieList'
import FilterBar from '../molecules/FilterBar'
import PaginationBar from '../molecules/PaginationBar'

export function TopRatedMovies(props) {
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
            'paddingTop': '8rem'
        },
        pageTitle: {
            'margin': '0rem 1rem 2rem 1rem'
        },
        topRatedMovieContainer: {
            'margin': '0 1rem',
            'width': '100%'
        },
        paginationBar: {
            'justifyContent': 'center',
            'alignItems': 'center'
        }
    }

    const filterMovies = () => {
        if (movies.length > 0) {
            let filteredMovieList = movies
            let sortType = "Default"
            if (props.filterOptions.sort) {
                sortType = props.filterOptions.sort
            }

            if (props.filterOptions.genres.length > 0) {
                const genreIds = filterFunctions.getGenreIdsFromNames(props.filterOptions.genres, props.genres)
                filteredMovieList = filteredMovieList.filter(filterFunctions.filterGenre.bind(this, genreIds))
            }

            if (props.filterOptions.years.length > 0) {
                filteredMovieList = filteredMovieList.filter(filterFunctions.filterYear.bind(this, props.filterOptions.years))
            }

            if (props.filterOptions.countries.length > 0) {
                filteredMovieList = filteredMovieList.filter(filterFunctions.filterCountry.bind(this, props.filterOptions.countries))
            }

            filteredMovieList = filterFunctions.sortMovies(filteredMovieList, sortType)
            setFilteredMovies(filteredMovieList)
        }
    }

    useEffect(() => {
        props.actions.setHomePage(false)
        if (movies.length === 0) {
            props.actions.loadTopRatedMovies()
        }
        props.actions.clearFilter()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        setMovies(props.topRatedMovies)
        setFilteredMovies(props.topRatedMovies)
    }, [props.topRatedMovies])

    useEffect(() => {
        filterMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.filterOptions])

    return (
        <Container id="top-rated-movies" style={styles.pageContainer}>
            <Row className="page-title">
                <h2 style={styles.pageTitle}>
                    Top rated movies
                </h2>
            </Row>
            <Row className="filter-bar">
                <FilterBar />
            </Row>
            <Row className="top-rated-movies">
                <div className="top-rated-movie-list" style={styles.topRatedMovieContainer}>
                    <MovieList movieList={currentMovies} />
                </div>
            </Row>
            <Row className="pagination-bar" style={styles.paginationBar}>
                {
                    filteredMovies.length > 0 &&
                    <PaginationBar moviesPerPage={moviesPerPage} totalMovies={filteredMovies.length} 
                    currentPage={currentPage} paginate={paginate} link="#top-rated-movies" />
                }
            </Row>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        topRatedMovies: state.movies.topRatedMovies.length === 0 
            ? [] 
            : state.movies.topRatedMovies,
        filterOptions: state.filterbar,
        genres: state.genres
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadTopRatedMovies: bindActionCreators(movieActions.loadTopRatedMovies, dispatch),
            setHomePage: bindActionCreators(navbarActions.setHomepage, dispatch),
            clearFilter: bindActionCreators(filterbarActions.clearFilter, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies)