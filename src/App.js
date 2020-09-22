import React, { useState, useEffect } from 'react'
import './css/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/commons/NavBar'
import Home from './components/pages/Home'
import MovieDetails from './components/pages/MovieDetails'
import LatestMovies from './components/pages/LatestMovies'
import TrendingMovies from './components/pages/TrendingMovies'

function App() {
  const [showNav, setShowNav] = useState(true)
  const [scrolledPosition, setSrolledPosition] = useState(0)

  const handleScroll = () => {
    const currentPosition = window.pageYOffset
    
    // show/hide navbar when scroll
    if (scrolledPosition > currentPosition) {
      setShowNav(true)
    } else {
      setShowNav(false)
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
        <Navbar showNav={showNav} />
        <Switch>
          <Route path="/latest" component={LatestMovies} />
          <Route path="/trending" component={TrendingMovies} />
          <Route path="/details" component={MovieDetails} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
