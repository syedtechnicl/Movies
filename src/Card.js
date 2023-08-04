import React, { useContext } from "react";
import Mycontext from "./Mycontext";

// slider

// import Slider from "react-slick";

// import settings from './Setting'

const Card = () => {
  const { data } = useContext(Mycontext);
  return (

<div className="card-container">
      {data.map((item, key) => (
        <div className="card" key={key}>
          <img
            className="card-img-top img-fluid"
            src={item && item.Poster}
            alt="Img Not Available"
          />
          <div className="card-body">
            <h5 className="card-title">{item && item.Title}</h5>
            <p className="card-text">
              <span className="bold-text">Year:</span> {item && item.Year}
            </p>
            <p className="card-text">
              <span className="bold-text">Type:</span> {item && item.Type}
            </p>
            <p className="card-text">
              <span className="bold-text">IMDb ID:</span> {item && item.imdbID}
            </p>
            <a href="#" className="btn btn-primary">
              Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
