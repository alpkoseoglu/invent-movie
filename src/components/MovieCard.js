import React from "react"
import Card from "./Card"

const MovieCard = ({results, openPopup}) => {
    return (
        <div className="results">
            {
                results.sort((a,b) => b.Year - a.Year).map((result,index) => (<Card key={index} result={result} openPopup={openPopup} />))

            }
            {console.log(results)}
        </div>
    )
}

export default MovieCard