import React, {useState, useEffect} from 'react'
import axios from "axios"

import Search from "./components/Search"
import MovieCard from './components/MovieCard'
import Pagination from "./components/Pagination"
import Popup from "./components/Popup"

const App = () => {
  const [results, setResults] = useState([])
  const [state, setState] = useState({
    query: "pokemon",
    selected: {}
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [moviePerPage, setMoviePerPage] = useState(5)

  const baseUrl = "http://www.omdbapi.com/?apikey=6f44ee32"
  let pageNum = 100

  

const search = (e) => {
  //e.preventDefault()

//Clear state before every search
setResults([])

/*This is the fetch section */
const promises = []
let response = []

for (let i = 1; i < pageNum; i++) {
  promises.push(
    axios(baseUrl + "&s=" + state.query + "&page=" + i).then(({data}) => {
      let res = data.Search
      //console.log(res)
      if(res) {
        response = [...response, res]
      }
    })
  )
}
Promise.all(promises).then(() => {
  response.map(item => setResults(res => res.concat(item)))
} )
}
/*End of fetch section */

const handleInput = (e) => {
  let str = e.target.value

  setState(prevState => {
    return {...prevState, query: str}
  })
}

const openPopup = id => {
  axios(baseUrl + "&i=" + id).then(({data}) => {
    let result = data

    setState(prev => {
      return {...prev, selected: result}
    })
  })
}

const closePopup = () => {
  setState(prev => {
    return {...prev, selected: {}}
  })
}

// Get Current Movies
const indexOfLastMovie = currentPage * moviePerPage
const indexOfFirstMovie = indexOfLastMovie - moviePerPage
const currentMovies = results.sort((a,b) => b.Year - a.Year).slice(indexOfFirstMovie, indexOfLastMovie)

//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container">
      <h1 className="title">Movie Search App</h1>

      <Search handleInput={handleInput} search={search} quer={state.query} />

      <MovieCard results={currentMovies} openPopup={openPopup}/>

      <Pagination moviePerPage={moviePerPage} totalMovies={results.length} paginate={paginate}/>

      {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false }
    </div>
  );
}

export default App;
