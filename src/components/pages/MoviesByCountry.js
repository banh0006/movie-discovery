import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row } from 'reactstrap'
import * as navbarActions from '../../redux/actions/navbarActions'
import * as filterbarActions from '../../redux/actions/filterbarActions'
import * as filterFunctions from '../../asset/FilterFunctions'
import { BASE_URL, DISCOVER_URL, API_KEY } from '../../asset/GlobalData'
import MovieList from '../molecules/MovieList'
import FilterBar from '../molecules/FilterBar'
import PaginationBar from '../molecules/PaginationBar'
import axios from 'axios'

export function MoviesByCountry(props) {
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
        countryMovieContainer: {
            'margin': '0 1rem',
            'width': '100%'
        },
        paginationBar: {
            'justifyContent': 'center',
            'alignItems': 'center'
        }
    }

    const getMoviesByCountry = (languageCode) => {
        if (!languageCode) return 
        
        const getMoviesFuncs = []
        for (let i = 1; i <= 20; i++) {
            getMoviesFuncs.push(getMoviesByCountryFromOnePage(i, languageCode))
        }

        Promise.all(getMoviesFuncs)
            .then(function (responses) {
                const combinedData = []
                responses.map(res => {
                    if (res.data.results) {
                        combinedData.push(...res.data.results)
                    }
                    return null
                })
                setMovies(combinedData)
                setFilteredMovies(combinedData)
            })
            .catch(error => {
                console.error("API call failed. " + error)
                throw error
            }) 
    }

    const getMoviesByCountryFromOnePage = (pageNumber, languageCode) => {
        let url = BASE_URL + DISCOVER_URL + API_KEY + "&page=" + pageNumber + "&with_original_language=" + languageCode
        return axios.get(url)
    }

    useEffect(() => {
        if (props.match.params.name) {
            const countryName = props.match.params.name
            const languageCode = filterFunctions.getLanguageCode(countryName)
            getMoviesByCountry(languageCode)
            props.actions.setCountry(countryName)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.name])

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.filterOptions])

    return (
        <Container id="movies-by-country" style={styles.pageContainer}>
        <Row className="page-title">
            <h2 style={styles.pageTitle}>
                {props.match.params.name} Movies
            </h2>
        </Row>
        <Row className="filter-bar">
            <FilterBar />
        </Row>
        <Row className="movies-by-country">
            <div className="movie-list-by-country" style={styles.countryMovieContainer}>
                <MovieList movieList={currentMovies} redirect={true} />
            </div>
        </Row>
        <Row className="pagination-bar" style={styles.paginationBar}>
            {
                filteredMovies.length > 0 &&
                <PaginationBar moviesPerPage={moviesPerPage} totalMovies={filteredMovies.length} 
                currentPage={currentPage} paginate={paginate} link="#movies-by-country" />
            }
        </Row>
    </Container>
    )
}

function mapStateToProps(state) {
    return {
        filterOptions: state.filterbar,
        genres: state.genres
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            setHomePage: bindActionCreators(navbarActions.setHomepage, dispatch),
            clearFilter: bindActionCreators(filterbarActions.clearFilter, dispatch),
            setCountry: bindActionCreators(filterbarActions.setCountry, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesByCountry)
