import React, { useEffect, useState } from "react";
import "./row.css";
import instance from "../../instance";
import Card from "../components/Card";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Row({title, fetchUrl}) {
  const image_base_url = "https://image.tmdb.org/t/p/original/";
  const [rowmovie, setRowMovie] = useState();


  const fetchData = async()=>{
    const responce = await instance.get(fetchUrl)
    setRowMovie(responce.data.results)
  }

  useEffect(()=>{
    fetchData()
    AOS.init({duration:2000})
  },[])


  

  return (
    <div>
      <div  className="rows m-5" >
        <div className="d-flex" data-aos = 'fade-down'>
        <h3 className="text-primary">{title} </h3>

        <a href="/showmore" style={{marginLeft:'auto',textDecoration:'none',fontSize:'18px'}}>List All <i class="fa-solid fa-arrow-right ms-1"></i></a>
        </div>
         

        <div className=" moving-row" >
            {
                rowmovie?.map(item=>(
                  <Card item={item} image_base_url={image_base_url}/>
                ))
            }

       


        {/* <div className="row-sub1 mt-4 ms-4 "></div>
        <div className="row-sub1 mt-4 ms-4 "></div>
        <div className="row-sub1 mt-4 ms-4 "></div> */}
        </div>

        
      </div>
    </div>
  );
}

export default Row;
