import React, { useEffect, useState } from "react";

//slider

// all context access
import Mycontext from "./Mycontext";
// all component
import Card from "./Card";

const App = () => {
  const [movies, setmovies] = useState();
  const [data, setdata] = useState([]);

  // old  http://www.omdbapi.com/?i=tt3896198&apikey=6408f98c

  const Mainfunc = async () => {
    try {
      const url = await fetch(
        `http://www.omdbapi.com/?apikey=b47b466f&s=${movies}`
      );
      const main = await url.json();
      console.log(main.Search);
      setdata(main.Search);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Mainfunc();
  }, []);

  return (
    <>
      <Mycontext.Provider value={{ data }}>
        <br />
        <div className="input-group mb-3 container">
          <input
            type="text"
            placeholder="Enter Movie Name"
            className="form-control custom-input"
            onChange={(e) => {
              setmovies(e.currentTarget.value);
            }}
          />
          <div>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                Mainfunc();
              }}
            >
              Search
            </button>
          </div>
        </div>

        <center>{data ? <Card /> : "Movie Not Available"}</center>
      </Mycontext.Provider>
    </>
  );
};

export default App;
