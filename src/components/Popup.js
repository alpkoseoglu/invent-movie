import React from "react"
import logo from "../placeholder.png"

const Popup = ({selected, closePopup}) => {
    return (
        <div className="popup">
            <div className="content">
                <h2>{selected.Title} <span>({selected.Year})</span> </h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster !== "N/A" ? selected.Poster : logo} alt={selected.Title + "Poster"}/>
                    <div className="desc">
                        <p>{selected.Director}</p>
                        <p>{selected.Runtime}</p>
                        <p>{selected.Actors}</p>
                        <p>{selected.Plot}</p>
                    </div>
                    <button className="close" onClick={closePopup}>Close</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Popup