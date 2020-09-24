import React, { useState ,useEffect } from 'react'
import SectionHeading from '../atoms/SectionHeading'
import MovieList from '../molecules/MovieList'
import { Container, Row, Col } from 'reactstrap'

import { sectionNames } from '../../asset/GlobalData'
import { bindActionCreators } from 'redux'
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

            case sectionNames.LATEST_MOVIES:
            break

            case sectionNames.TRENDING_MOVIES:
            break
        }
    }, [props.recommended])

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
        recommended: state.movies.recommendedMovies.length === 0 
            ? [] 
            : state.movies.recommendedMovies
    }
}
  
function mapDispatchToProps(dispatch) {
return {
    actions: {

    }
}
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MovieSection)