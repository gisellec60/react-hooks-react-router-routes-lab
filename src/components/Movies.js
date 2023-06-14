import React from "react";
import { movies } from "../data";

function Movies() {
  
  const displayMovieInfo = movies.map((movie) => {
       <div key={movie.title}>{movie.title}{movie.time}</div>
       console.log("title and time", movie.title, movie.time)
   })

  const movieGenre = movies.map((movie,index) => {
      <li key={index}>{movie.genres}</li>
       console.log("this genre",movie.genres)
   })

  return (
  <div>
    <h1>Movies Page</h1>
      {displayMovieInfo}
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