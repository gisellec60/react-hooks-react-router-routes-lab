import React from "react";
import { movies } from "../data";

function Movies() {
  
  const {genres} = movies

  console.log ("this is genres",genres)

  const headings = movies.map((movie) => {
      <h3>{movie.title}{movie.time}</h3>
  })

  console.log ("this is genres",movies.genres)

  const movieGenre = genres.map((genre,index) => {
    <li key={index}>{genre}</li>
  })

  return (
  <div>
    <h1>Movies Page</h1>
    <h3>{headings}</h3>
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