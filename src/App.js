import React, { useState, useEffect } from 'react'
import './css/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/commons/NavBar'
import Home from './components/pages/Home'
import MovieDetails from './components/pages/MovieDetails'
import TopRatedMovies from './components/pages/TopRatedMovies'
import PopularMovies from './components/pages/PopularMovies'

// axios.defaults.baseURL = 'https://...'
function App() {
  const [showNav, setShowNav] = useState(true)
  const [transparentNav, setTransparentNav] = useState(true)
  const [scrolledPosition, setSrolledPosition] = useState(0)
  const [carouselHeight, setCarouselHeight] = useState(0)

  const handleScroll = () => {
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

  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <div className="App">
        <Navbar showNav={showNav} isTransparent={transparentNav} />
        <Switch>
          <Route path="/popular" component={PopularMovies} />
          <Route path="/toprated" component={TopRatedMovies} />
          <Route path="/details" component={MovieDetails} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
