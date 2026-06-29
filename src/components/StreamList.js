import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function StreamList() {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addMovie = () => {
    if (movie.trim() === "") return;

    if (editIndex !== null) {
      const updatedMovies = [...movies];
      updatedMovies[editIndex].title = movie;
      setMovies(updatedMovies);
      setEditIndex(null);
    } else {
      setMovies([
        ...movies,
        {
          title: movie,
          completed: false,
        },
      ]);
    }

    setMovie("");
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const editMovie = (index) => {
    setMovie(movies[index].title);
    setEditIndex(index);
  };

  const completeMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].completed =
      !updatedMovies[index].completed;
    setMovies(updatedMovies);
  };

  return (
    <div className="stream-container">

      <h1>🎬 StreamList</h1>

      <input
        type="text"
        placeholder="Enter a movie..."
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />

      <button onClick={addMovie}>
        {editIndex !== null ? "Update Movie" : "Add Movie"}
      </button>

      <ul>

        {movies.map((item, index) => (

          <li key={index}>

            <span
              className={
                item.completed ? "completed" : ""
              }
            >
              {item.title}
            </span>

            <div className="buttons">

              <button onClick={() => completeMovie(index)}>
                <CheckCircleIcon />
              </button>

              <button onClick={() => editMovie(index)}>
                <EditIcon />
              </button>

              <button onClick={() => deleteMovie(index)}>
                <DeleteIcon />
              </button>

            </div>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default StreamList;