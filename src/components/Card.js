import React from "react"
import logo from "../placeholder.png"

const Card = ({result, openPopup}) => {
    return (
        <div className="card" onClick={() => openPopup(result.imdbID)}>
            <img className="card--image" src={result.Poster !== "N/A" ? result.Poster : logo} alt={result.Title + "Poster"}/>
                <div className="card--content">
                    <h3 className="card--title">{result.Title}</h3>
                    <p><small>Release Date: {result.Year}</small></p>
                    <p><small>IMDB ID: {result.imdbID}</small></p>
                </div>
        </div>
    )
}

export default Card