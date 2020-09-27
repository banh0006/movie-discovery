import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as movieActions from '../../redux/actions/movieActions'
import * as navbarActions from '../../redux/actions/navbarActions'
import { sectionNames } from '../../asset/GlobalData'
import MovieCarousel from '../atoms/MovieCarousel'
import MovieSection from '../organisms/MovieSection'
import { Container, Row } from 'reactstrap'
import '../../css/Home.css'

export function Home(props) {
    useEffect(() => {
        props.actions.setHomePage(true)
        props.actions.loadNowPlayingMovies()
    }, [])

    return (
        <Container>
            <Row>
                <MovieCarousel />
            </Row>
            <Row>
                <MovieSection sectionName={sectionNames.RECOMMENDED_MOVIES} />
            </Row>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        nowPlaying: state.movies.nowPlaying.length === 0 
            ? [] 
            : state.movies.nowPlaying
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadNowPlayingMovies: bindActionCreators(movieActions.loadNowPlayingMovies, dispatch),
            setHomePage: bindActionCreators(navbarActions.setHomepage, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)