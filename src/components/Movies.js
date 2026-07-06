import React, { useState } from "react";
import axios from "axios";

function Movies() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState(null);

  const searchMovie = async () => {
    if (!search) return;

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${search}`
    );

    if (response.data.results.length > 0) {
      setMovie(response.data.results[0]);
    } else {
      setMovie(null);
    }
  };

  return (
    <div className="stream-container">
      <h1>Movie Search</h1>

      <input
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchMovie}>Search</button>

      {movie && (
        <div style={{ marginTop: "20px" }}>
          <h2>{movie.title}</h2>

          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>

          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  );
}

export default Movies;