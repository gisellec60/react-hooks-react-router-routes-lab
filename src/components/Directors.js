import React from "react";
import { directors } from "../data";

function Directors() {

   const displayDirectors = directors.map((director,index) => {
          return ( 
            <div key={index}>
                {director.name}
            </div>
          )  
    })

    const displayMovies = directors.map((director,index) => {
         return (
           <li key={index}>
             {director.movies}
           </li>
          )
    })

  return (
    <div>
      <h1>Directors Page</h1>
      <div>
         {displayDirectors}
      </div>
      <ul>
        {displayMovies}
      </ul>
    </div>
  ) 
}

export default Directors;
