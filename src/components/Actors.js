import React from "react";
import { actors } from "../data";

const displayActors = actors.map((actor) => {
   return (
     <div key={actor.name}>{actor.name}</div>
   )
})

const displayMovies = actors.map((actor,index) => {
   return(
     <li key={index}>{actor.movies}</li>
   )
})
function Actors() {
  return (
   <div>
      <h1>Actors Page</h1>
      {displayActors}
      <ul>
        {displayMovies}
      </ul>
   </div>
  )
}

export default Actors;
