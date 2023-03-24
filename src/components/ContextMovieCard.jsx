import React, { useState, useEffect } from "react";
import { get } from "../data/dajaClient";
import CardMovie from "./CardMovie";
import "./ContextMovieCard.css";



export default function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results); 
    });
  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <CardMovie key={movie.id}  movie={movie} />
      ))}
    </ul>
  );
}
