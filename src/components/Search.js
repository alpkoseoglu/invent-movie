import React, {useEffect} from "react"

const Search = ({handleInput, search, quer}) => {
    
    return (
        <form className="form" onSubmit={search}>
            <input className="input" type="text" name="query" placeholder="i.e. Pokemon" value={quer} onChange={handleInput}/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}

export default Search

/*
React App Tutorial 2020 [Build a Movie Search App] - Full Course
https://www.youtube.com/watch?v=UKmsNUk7RxM

Build a Movie APP With React | React Tutorial for Beginners
https://www.youtube.com/watch?v=ufodJVcpmps

Simple Frontend Pagination | React
https://www.youtube.com/watch?v=IYCa1F-OWmk
*/

/*
 <div className="card-list">
             {
                movies 
                ? movies.filter(movie => movie.Poster !== "N/A").map((movie, index) => (
                <MovieCard movie={movie} key={index+movie.imdbID}/>
            )) 
                : <h3>Not Found</h3>}
        </div>
*/