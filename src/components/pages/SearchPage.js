import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row } from 'reactstrap'
import * as navbarActions from '../../redux/actions/navbarActions'
import * as filterFunctions from '../../asset/FilterFunctions'
import MovieList from '../molecules/MovieList'
import FilterBar from '../molecules/FilterBar'
import PaginationBar from '../molecules/PaginationBar'
import axios from 'axios'
import { BASE_URL, SEARCH_URL, API_KEY } from '../../asset/GlobalData'

export function SearchPage(props) {
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchString, setSearchString] = useState("")
    const moviesPerPage = 40
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastMovie = currentPage * moviesPerPage
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie)

    const styles = {
        pageContainer: {
            'padding-top': '8rem'
        },
        searchMovieContainer: {
            'margin': '0 1rem',
            'width': '100%'
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

    const getSearchMoviesFromOnePage = (pageNumber, searchString) => {
        let url = BASE_URL + SEARCH_URL + API_KEY + `&query=${searchString}&page=${pageNumber}`
        return axios.get(url)
    }

    const getGenreIdsFromNames = (genreNames) => {
        let genreIds = []
        if (genreNames.length === 0) return genreIds

        props.genres.map(genre => {
            for(let genreName of genreNames) {
                if (genre.name === genreName) {
                    genreIds.push(genre.id)
                }
            }
            return null
        })
        
        return genreIds
    }

    

    // const getLanguageCode = (countryName) => {
    //     switch (countryName) {
    //         case "United States", "Canada", "United Kingdom": 
    //             return "en"
    //         case "France":
    //             return "fr"
    //         case "Italy":
    //             return "it"
    //         case "Russia":
    //             return "ru"
    //         case "Korean":
    //             return "ko"
    //         case "Japan":
    //             return "ja"
    //         case "HongKong", "China":
    //             return "zh"
    //         case "Brazil":
    //             return "pt"
    //         case "India":
    //             return "hi"
    //         default:
    //             return "en"
    //     }
    // }

    // const getLanguageCodesFromCountryNames = (countries) => {
    //     const languageCodes = []
    //     countries.map(country => {  
    //         languageCodes.push(getLanguageCode(country))
    //     })
    //     return languageCodes
    // }

    // const compareByDate = (a, b) => {
    //     return new Date(a.release_date) > new Date(b.release_date)
    // }

    // const compareByName = (a, b) => {
    //     return a.title.localeCompare(b.title)
    // }

    // const compareByRate = (a, b) => {
    //     return a.vote_average === b.vote_average ? 0 : (a.vote_average > b.vote_average ? -1 : 1)
    // }

    // const compareByView = (a, b) => {
    //     return a.popularity === b.popularity ? 0 : (a.popularity > b.popularity ? 1 : -1)
    // }

    // const filterGenre = (genreConditions, movie) => {
    //     if (genreConditions.length === 0) return true   // no genre condition, return all movie 
    //     return genreConditions.every(condition => {    // movie must contains all the genres in the filter list
    //         return movie.genre_ids.includes(condition)
    //     })
    // }

    // const filterYear = (yearConditions, movie) => {
    //     if (yearConditions.length === 0) return true    // no year condition, return all movie
    //     if (!movie.release_date) return false   // some movies does not have release_date

    //     return yearConditions.includes(getYearStringFromDate(movie.release_date))
    // }

    // const filterCountry = (countryConditions, movie) => {
    //     if (countryConditions.length === 0) return true     // no country condition, return all movie
    //     if (!movie.original_language)  return false // incase movie does not have original language
    //     const languageCodes = getLanguageCodesFromCountryNames(countryConditions)
    //     return languageCodes.includes(movie.original_language)
    // }

    // const sortMovies = (movies, sortType) => {
    //     switch (sortType) {
    //         case "Default":
    //             return movies
    //         case "Release Date":
    //             return movies.sort(compareByDate)
    //         case "Name":
    //             return movies.sort(compareByName)
    //         case "Rate": 
    //             return movies.sort(compareByRate)
    //         case "Most Watched":
    //             return movies.sort(compareByView)
    //         default:
    //             return movies
    //     }
    // }

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (props.location.state) {
            let searchQuery = props.location.state.searchString
            if (searchQuery !== searchString) {
                setSearchString(searchQuery)
                getSearchMovies(searchQuery)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.location.state])

    useEffect(() => {
        console.log("filter options changed")
        if (movies.length > 0) {
            let sortType = "Default"
            if (props.filterOptions.sort) {
                sortType = props.filterOptions.sort
            }

            const genreIds = getGenreIdsFromNames(props.filterOptions.genres)
            console.log(genreIds)
            let filteredMovieList = 
                movies
                    .filter(filterFunctions.filterGenre.bind(this, genreIds))
                    .filter(filterFunctions.filterYear.bind(this, props.filterOptions.years))
                    .filter(filterFunctions.filterCountry.bind(this, props.filterOptions.countries))

            filteredMovieList = filterFunctions.sortMovies(filteredMovieList, sortType)
            setFilteredMovies(filteredMovieList)
            console.log(filteredMovieList)
        }
        
    }, [props.filterOptions])

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
                <div className="search-movie-list" style={styles.searchMovieContainer}>
                    <MovieList movieList={currentMovies} />
                </div>
            </Row>
            <Row className="pagination-bar" style={styles.paginationBar}>
                {movies.length > 0 && 
                    (
                        <PaginationBar moviesPerPage={moviesPerPage} totalMovies={filteredMovies.length} 
                            currentPage={currentPage} paginate={paginate} link="#search-movies" />
                    )
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
            setHomePage: bindActionCreators(navbarActions.setHomepage, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
