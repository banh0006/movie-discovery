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
    const styles = {
        recommendedSection: {
            'margin-top': '2rem'
        }
    }

    useEffect(() => {
        props.actions.setHomePage(true)
        props.actions.loadNowPlayingMovies()
        props.actions.loadUpcomingMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Row>
                <MovieCarousel />
            </Row>
            <Row style={styles.recommendedSection}>
                <MovieSection sectionName={sectionNames.RECOMMENDED_MOVIES} />
            </Row>
            <Row>
                <MovieSection sectionName={sectionNames.UPCOMING_MOVIES} />
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
            loadNowPlayingMovies: bindActionCreators(movieActions.loadNowPlayingMovies, dispatch),
            loadUpcomingMovies: bindActionCreators(movieActions.loadUpcomingMovies, dispatch),
            setHomePage: bindActionCreators(navbarActions.setHomepage, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)