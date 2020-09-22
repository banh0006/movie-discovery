import React, { useState, useEffect } from 'react'
import './css/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/commons/NavBar'
import Home from './components/pages/Home'
import MovieDetails from './components/pages/MovieDetails'
import LatestMovies from './components/pages/LatestMovies'
import TrendingMovies from './components/pages/TrendingMovies'
// import { BASE_URL, GENRE_URL, API_KEY } from './asset/GlobalData'
// import axios from 'axios'

// axios.defaults.baseURL = 'https://...'
function App() {
  const [showNav, setShowNav] = useState(true)
  const [scrolledPosition, setSrolledPosition] = useState(0)

  //#region get data online
  // const getGenres = async() => {
    
  //   let url = BASE_URL + GENRE_URL + API_KEY
  //   try {
  //       axios.get(url)
  //           .then(res => {
  //           console.log(res.data.genres)
  //       })
  //   } catch (error) {
        
  //   }
  // }
  
  //#endregion

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

  // useEffect(() => {
  //   getGenres()
  // }, [])

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
