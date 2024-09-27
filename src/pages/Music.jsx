import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MusicCards from './MusicCards'
import { viewSongs } from '../services/allAPI'

function Music() {

  const [songs,setSongs] = useState([])
  const getSongs = async()=>{
    const responce = await viewSongs()
    const {data} = responce
    console.log(responce)
    setSongs(data)

  }

  useEffect(()=>{
    getSongs()
  })
  return (
    <div>
      <div>
      <div className="container">
        <div className="trailer-head mt-5 d-flex ">
          <h3>ALL ADDED SONGS</h3>
          <Link to="/home" className="ms-auto">
            <button className="traler-button">
              <i class="fa-solid fa-arrow-left me-3"></i>Back To Home
            </button>
          </Link>
        </div>
        <div className="row">

          {
            songs.length>0?(
              songs.map((videos)=>(
                <div className='col'>
                  <MusicCards displaySongs = {videos}/>
                </div>
              ))
            ):(
              <p className='text-center text-primary'>nothing to dsiaplay</p>
            )
          }
          
          
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Music
