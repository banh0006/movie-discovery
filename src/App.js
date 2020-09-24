import React, { useState, useEffect } from 'react'
import './css/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/commons/NavBar'
import Home from './components/pages/Home'
import MovieDetails from './components/pages/MovieDetails'
import LatestMovies from './components/pages/LatestMovies'
import TrendingMovies from './components/pages/TrendingMovies'

// axios.defaults.baseURL = 'https://...'
function App() {
  const [showNav, setShowNav] = useState(true)
  const [transparentNav, setTransparentNav] = useState(true)
  const [scrolledPosition, setSrolledPosition] = useState(0)
  const [carouselHeight, setCarouselHeight] = useState(0)

  const handleScroll = () => {
    const currentPosition = window.pageYOffset

    if (carouselHeight <= 0 ) {
      const height = document.querySelector('.carousel').clientHeight
      setCarouselHeight(height)
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
    <Router>
      <div className="App">
        <Navbar showNav={showNav} isTransparent={transparentNav} />
        <Switch>
          <Route path="/latest" component={LatestMovies} />
          <Route path="/trending" component={TrendingMovies} />
          <Route path="/details" component={MovieDetails} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
