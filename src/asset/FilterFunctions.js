export const getLanguageCode = (countryName) => {
    switch (countryName) {
        case "United States":
        case "Canada":
        case "United Kingdom": 
            return "en"
        case "France":
            return "fr"
        case "Italy":
            return "it"
        case "Russia":
            return "ru"
        case "Korean":
            return "ko"
        case "Japan":
            return "ja"
        case "Hongkong":
        case "China":
            return "zh"
        case "Brazil":
            return "pt"
        case "India":
            return "hi"
        default:
            return "en"
    }
}

const getYearStringFromDate = (dateString) => {
    return dateString.substring(0, 4)
}

export const getGenreIdsFromNames = (genreNames, allGenres) => {
    let genreIds = []
    if (genreNames.length === 0) return genreIds

    allGenres.map(genre => {
        for(let genreName of genreNames) {
            if (genre.name === genreName) {
                genreIds.push(genre.id)
            }
        }
        return null
    })
    
    return genreIds
}

export const getLanguageCodesFromCountryNames = (countries) => {
    const languageCodes = []
    countries.map(country => {  
        languageCodes.push(getLanguageCode(country))
        return null
    })
    return languageCodes
}

export const compareByDate = (a, b) => {
    return new Date(a.release_date) > new Date(b.release_date)
}

export const compareByName = (a, b) => {
    return a.title.localeCompare(b.title)
}

export const compareByRate = (a, b) => {
    return a.vote_average === b.vote_average ? 0 : (a.vote_average > b.vote_average ? -1 : 1)
}

export const compareByView = (a, b) => {
    return a.popularity === b.popularity ? 0 : (a.popularity > b.popularity ? 1 : -1)
}

export const filterGenre = (genreConditions, movie) => {
    if (genreConditions.length === 0) return true   // no genre condition, return all movie 
    return genreConditions.every(condition => {    // movie must contains all the genres in the filter list
        return movie.genre_ids.includes(condition)
    })
}

export const filterYear = (yearConditions, movie) => {
    if (yearConditions.length === 0) return true    // no year condition, return all movie
    if (!movie.release_date) return false   // some movies does not have release_date

    return yearConditions.includes(getYearStringFromDate(movie.release_date))
}

export const filterCountry = (countryConditions, movie) => {
    if (countryConditions.length === 0) return true     // no country condition, return all movie
    if (!movie.original_language)  return false // incase movie does not have original language
    const languageCodes = getLanguageCodesFromCountryNames(countryConditions)
    return languageCodes.includes(movie.original_language)
}

export const sortMovies = (movies, sortType) => {
    switch (sortType) {
        case "Default":
            return movies
        case "Release Date":
            return movies.sort(compareByDate)
        case "Name":
            return movies.sort(compareByName)
        case "Rate": 
            return movies.sort(compareByRate)
        case "Most Watched":
            return movies.sort(compareByView)
        default:
            return movies
    }
}
