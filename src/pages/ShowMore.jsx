import React, { useEffect } from "react";
import requests from "../../request";
import ShowmoreCard from "./ShowmoreCard";
import AOS from 'aos'

function ShowMore() {
  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <>
      <div className="rows m-5">
        

        <ShowmoreCard title='Trending Movies' fetchUrl={requests.fetchTrending} data-aos = 'fade-down'/>
        <ShowmoreCard title='Top Rated Movies'  fetchUrl={requests.fetchTopRated} data-aos = 'fade-down'/>
        <ShowmoreCard title='Top Rated Comedy Movies'  fetchUrl={requests.fetchComedyMovies}data-aos = 'fade-down'/>
        <ShowmoreCard title='Top Rated Action Movies'  fetchUrl={requests.fetchActionMovies} data-aos = 'fade-down'/>


      </div>
    </>
  );
}

export default ShowMore;
