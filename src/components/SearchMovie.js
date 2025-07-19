import axios from "axios";
import React, { useState } from "react";
import { SEARCH_MOVIE_URL, options } from "../utils/constant";

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}`, options);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center pt-[10%] w-[100%]">
      <form onSubmit={submitHandler} className="w-[50%]">
        <div className="flex justify-between shadow-md border-gray-200 rounded-lg w-[100%]">
          <input
            value={searchMovie}
            onChange={(e) => {
              setSearchMovie(e.target.value);
            }}
            className="w-full outline-none rounded-md text-lg"
            type="text"
            placeholder="Search Movies..."
          />
          <button className="bg-red-800 text-white rounded-md px-4 py-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchMovie;
