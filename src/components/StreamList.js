import React, { useState } from "react";

function StreamList() {
  const [movie, setMovie] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movie.trim() === "") return;

    console.log("Added movie:", movie);

    setList([...list, movie]);
    setMovie("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>StreamList</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a movie"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;