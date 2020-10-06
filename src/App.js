import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './css/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/commons/NavBar'
import Footer from './components/commons/Footer'
import Home from './components/pages/Home'
import MovieDetails from './components/pages/MovieDetails'
import TopRatedMovies from './components/pages/TopRatedMovies'
import PopularMovies from './components/pages/PopularMovies'
import SearchPage from './components/pages/SearchPage'
import MoviesByGenre from './components/pages/MoviesByGenre'
import MoviesByCountry from './components/pages/MoviesByCountry'
import { positions, Provider } from "react-alert"
import AlertTemplate from "react-alert-template-mui"

// axios.defaults.baseURL = 'https://...'
function App(props) {
  const [showNav, setShowNav] = useState(true)
  const [transparentNav, setTransparentNav] = useState(true)
  const [scrolledPosition, setSrolledPosition] = useState(0)
  const [carouselHeight, setCarouselHeight] = useState(0)

  const options = {
    timeout: 4000,
    position: positions.MIDDLE
  }
  
  const handleScroll = () => {
    if (!props.homepage) {
      setTransparentNav(false)
      setShowNav(true)
      return
    }

    const currentPosition = window.pageYOffset

    if (carouselHeight <= 0 ) {
      if (document.querySelector('.carousel')) {
        const height = document.querySelector('.carousel').clientHeight
        setCarouselHeight(height)
      }
    }

    // show/hide navbar when scroll
    if (scrolledPosition > currentPosition) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }

    // make change navbar background when carousel is not in view port
    if (currentPosition > carouselHeight) {
      setTransparentNav(false)
    } else {
      setTransparentNav(true)
    }

    setSrolledPosition(currentPosition)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  useEffect(() => {
    if (props.homepage) {
      const currentPosition = window.pageYOffset
      if(currentPosition === 0) {
        setTransparentNav(true)
      } else {
        setTransparentNav(false)
      }
    } else {
      setTransparentNav(false)
    }
  }, [props.homepage])

  return (
    <Provider template={AlertTemplate} {...options}>
      <Router basename="/movie-discovery">
        <div className="App">
          <Navbar showNav={showNav} isTransparent={transparentNav} />
          <Switch>
            <Route path="/popular" component={PopularMovies} />
            <Route path="/toprated" component={TopRatedMovies} />
            <Route path="/details/:id" component={MovieDetails} />
            <Route path="/movies/genre/:name" component={MoviesByGenre} />
            <Route path="/movies/country/:name" component={MoviesByCountry} />
            <Route path='/search' component={SearchPage} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

function mapStateToProps(state) {
  return {
      homepage: state.navbar.homepage
  }
}

export default connect(mapStateToProps)(App)
