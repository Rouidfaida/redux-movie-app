import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MovieList = () => {
    const movie = useSelector(state => state.movie)
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {
                movie.map((el,i)=><MovieCard  movie={el} key={i}/>)
            }
        </div>
    )
}

export default MovieList
