import React, { useEffect, useState } from "react";
import "./landing.css";
import instance from "../../instance";
import Row from "./Row";
import requests from "../../request";
import { Link } from "react-router-dom";

function LandingPage({ fetchUrl }) {
  console.log("fetch url ", fetchUrl);
  const image_base_url = "https://image.tmdb.org/t/p/original/";
  const [banner, setBanner] = useState({});
  const fetchData = async () => {
    const result = await instance.get(fetchUrl);
    const { data } = result;
    setBanner(data.results[Math.floor(Math.random() * data.results.length)]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="landing-container p-2 rounded bg-primary ms-auto me-auto">
        <div
          style={{
            overflowX: "hidden",
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${image_base_url}${banner?.backdrop_path})`,
            backgroundSize: "cover",
          }}
        >
          <div className="mainInsideBanner">
            <div className="mainInside1 d-flex">
              <div className="text-light text-center  insidebanner1">
                <p className="yearINsideBanner">{banner.first_air_date}</p>
              </div>
              <div className="text-light text-center insidebanner2">
                <p className="yearINsideBanner1">
                  <i class="fa-regular fa-star  me-2"></i>
                  {banner.vote_average}
                </p>
              </div>
            </div>

            <div className="bannerIsideHEading text-center">
              <p style={{ fontSize: "50px" }}>{banner.name}</p>
              <p className="text-light">{banner.overview?.slice(0, 200)}</p>
            </div>

            <Link to='/home'>
            <button className="buttons">GET STARTED <i class="fa-solid fa-caret-right"></i></button>
            </Link>

            
          </div>
        </div>
      </div>

      <div className="rows">
        <Row title='Trending Movies'  fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated Movies'  fetchUrl={requests.fetchTopRated} />
        <Row title='Top Rated Comedy Movies'  fetchUrl={requests.fetchComedyMovies} />
        <Row title='Top Rated Action Movies'  fetchUrl={requests.fetchActionMovies} />


      </div>
      <Link  to='/showmore'>
      <button className="buttons2">SHOW MORE</button>
      </Link>
    </>
  );
}

export default LandingPage;
