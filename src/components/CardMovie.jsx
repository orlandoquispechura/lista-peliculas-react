import React from "react";
import { Link } from "react-router-dom";
import "./CardMovie.css";

export default function CardMovie({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <>
      <li className="cardMovie">
        <Link to={"/movie/" + movie.id}>
          <img
            className="imgMovie"
            width={230}
            height={345}
            src={imgUrl}
            alt={movie.title}
          />
        </Link>
        <div className="movieTitle">{movie.title}</div>
      </li>
    </>
  );
}
