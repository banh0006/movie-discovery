import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row } from 'reactstrap'
import * as navbarActions from '../../redux/actions/navbarActions'
import MovieList from '../molecules/MovieList'
import FilterBar from '../molecules/FilterBar'
import PaginationBar from '../molecules/PaginationBar'
import axios from 'axios'
import { BASE_URL, SEARCH_URL, API_KEY } from '../../asset/GlobalData'

export function SearchPage(props) {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchString, setSearchString] = useState("")
    const moviesPerPage = 40
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastMovie = currentPage * moviesPerPage
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie)

    const styles = {
        pageContainer: {
            'padding-top': '8rem'
        },
        searchMovieContainer: {
            'margin': '0 1rem'
        },
        searchTitle: {
            'margin': '0rem 1rem 2rem 1rem'
        },
        paginationBar: {
            'justifyContent': 'center',
            'alignItems': 'center'
        }
    }

    const getSearchMovies = (searchString) => {
        const getSearchMoviesFuncs = []
        for (let i = 1; i <= 20; i++) {
            getSearchMoviesFuncs.push(getSearchMoviesFromOnePage(i, searchString))
        }

        Promise.all(getSearchMoviesFuncs)
            .then(function (responses) {
                const combinedData = []
                responses.map(res => {
                    if (res.data.results) {
                        combinedData.push(...res.data.results)
                    }
                })
                setMovies(combinedData)
            })
            .catch(error => {
                console.error("API call failed. " + error)
                throw error
            }) 
    }

    const getSearchMoviesFromOnePage = (pageNumber, searchString) => {
        let url = BASE_URL + SEARCH_URL + API_KEY + `&query=${searchString}&page=${pageNumber}`
        return axios.get(url)
    }

    useEffect(() => {
        props.actions.setHomePage(false)
        if (props.location.state) {
            let searchQuery = props.location.state.searchString
            setSearchString(searchQuery)
            getSearchMovies(searchQuery)
            if (movies.length === 0) {
                getSearchMovies(searchQuery)
            }
        }
    }, [])

    useEffect(() => {
        if (props.location.state) {
            let searchQuery = props.location.state.searchString
            if (searchQuery !== searchString) {
                setSearchString(searchQuery)
                getSearchMovies(searchQuery)
            }
        }
    }, [props.location.state])


    return (
        <Container id="search-movies" style={styles.pageContainer}>
            <Row className="search-title">
                <h2 style={styles.searchTitle}>
                    {`Results for: ${searchString}`}
                </h2>
            </Row>
            <Row className="filter-bar">
                <FilterBar/>
            </Row>
            <Row className="search-movies">
                <div className="serch-movie-list" style={styles.searchMovieContainer}>
                    <MovieList movieList={currentMovies} />
                </div>
            </Row>
            <Row className="pagination-bar" style={styles.paginationBar}>
                {movies.length > 0 && 
                    (
                        <PaginationBar moviesPerPage={moviesPerPage} totalMovies={movies.length} 
                            currentPage={currentPage} paginate={paginate} link="#search-movies" />
                    )
                }
                
            </Row>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            setHomePage: bindActionCreators(navbarActions.setHomepage, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
