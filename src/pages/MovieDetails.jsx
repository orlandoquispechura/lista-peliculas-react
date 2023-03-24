import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../data/dajaClient";
import getImagen from "../utils/getImagen";
import "./MovieDetails.css";

export default function MovieDetails() {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState([]);
  const [genero, setGenero] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenero(data.genres[0]);
    });
  }, [movieId]);

  const imageUrl = getImagen(movie.poster_path, 500);

  return (
    <>
      <div className="containerImage">
        <img className="col imageDetail" src={imageUrl} alt={movie.title} />
        <div className="col movieDetails">
          <p className="movieTitle" >
            <strong>Título: </strong> {movie.title}
          </p>
          <p>
            <strong>Género: </strong> {genero.name}
          </p>
          <p>
            <strong>Descripción: </strong> {movie.overview}
          </p>
          <div className="back">
            <Link to={"/"}>Regresar</Link>
          </div>
        </div>
      </div>
    </>
  );
}
