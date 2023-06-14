import React from "react";
import { movies } from "../data";

function Movies() {
  
  const displayTitles = movies.map((movie) => {
      return <div key={movie.title}>{movie.title}{movie.time} </div>

  })

  const movieGenre = movies.map((movie,index) => {
    return <li key={index}>{movie.genres}</li>
  })

  return (
  <div>
    <h1>Movies Page</h1>
        {displayTitles}
    <ul>
        {movieGenre}
    </ul>
  </div>
  )
}

export default Movies;
// const movies = [
//   {
//     title: "Doctor Strange",
//     time: 115,
//     genres: ["Action", "Adventure", "Fantasy"],
//   },
//   {
//     title: "Trolls",
//     time: 92,
//     genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
//   },
//   {
//     title: "Jack Reacher: Never Go Back",
//     time: 118,
//     genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"],
//   },
// ];