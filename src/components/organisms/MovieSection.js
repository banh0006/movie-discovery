import React, { useState ,useEffect } from 'react'
import SectionHeading from '../atoms/SectionHeading'
import MovieList from '../molecules/MovieList'
import { Container } from 'reactstrap'
import { sectionNames } from '../../asset/GlobalData'
import { connect } from 'react-redux'
import '../../css/MovieSection.css'

export function MovieSection(props) {
    const [title, setTitle] = useState("")
    const [movies, setMovies] = useState([])

    useEffect(() => {
        setTitle(props.sectionName)
        switch(props.sectionName) {
            case sectionNames.RECOMMENDED_MOVIES:
                setMovies(props.recommended)
            break

            case sectionNames.UPCOMING_MOVIES:
                setMovies(props.upcoming)
                break

            case sectionNames.TRENDING_MOVIES:
                break

            default:
                break
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.recommended, props.upcoming ])

    return (
        <Container className="movie-section">
            <div>
                <SectionHeading sectionTitle={title}/>
            </div>
            <div>
                <MovieList movieList={movies} />
            </div>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        recommended: state.movies.recommendedMovies,
        upcoming: state.movies.upcomingMovies
    }
}
  
function mapDispatchToProps(dispatch) {
return {
    actions: {

    }
}
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MovieSection)