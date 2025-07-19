import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);
  useMovieById(movieId);
  return (
    <div className=" w-screen">
      <iframe
        className=" w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerMovie?.key}??si=UCj02iRVsjdDAOvW&autoplay=1&mute=1`}
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
