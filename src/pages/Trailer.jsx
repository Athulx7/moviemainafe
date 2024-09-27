import React, { useEffect, useState } from "react";
import "./trailer.css";
import { Link } from "react-router-dom";
import TrailerCard from "./TrailerCard";
import { Col, Row } from "react-bootstrap";
import { ViewTrailer } from "../services/allAPI";

function Trailer() {
  const [trailers, setTrailers] = useState([]);
  const getTrailers = async () => {
    const responce = await ViewTrailer();
    const { data } = responce;
    setTrailers(data)
  };

  useEffect(() => {
    getTrailers();
  });

  return (
    <div>
      <div className="container">
        <div className="trailer-head mt-5 d-flex ">
          <h3>ALL ADDED TRAILERS</h3>
          <Link to="/home" className="ms-auto">
            <button className="traler-button">
              <i class="fa-solid fa-arrow-left me-3"></i>Back To Home
            </button>
          </Link>
        </div>
        <div className="row">
          {
            trailers.length>0?(
              trailers.map((videos)=>(
                <div className="col">
                <TrailerCard displayTraielrs = {videos}/>
              </div>

              ))
            ):(
                <p className="text-center text-primary">nothing to display</p>
            )

          }
         
        </div>
      </div>
    </div>
  );
}

export default Trailer;
