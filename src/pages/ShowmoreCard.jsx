import React, { useEffect, useState } from 'react'
import instance from "../../instance";
import './showmore.css'
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';



function ShowmoreCard({title,fetchUrl}) {
    const image_base_url = "https://image.tmdb.org/t/p/original/";

    const [showMore,setshowMore] = useState();
    const fetchData = async ()=>{
        const responce = await instance.get(fetchUrl)
        setshowMore(responce.data.results)
       
    }
    useEffect(()=>{
        fetchData()
       
    },[])


  return (
    <>
    <div className="mt-3" >
          <h3 className="text-primary">{title} </h3>
        </div>
        <Row className='ms-5'>
            
            {
                showMore?.map(item=>(
                    <Card style={{ width: '13rem' }} className=' me-4 mt-4  ' >
      <Card.Img variant="top" src={`${image_base_url}${item?.poster_path}`} className='mt-2' />
      <Card.Body className='text-center'>
      
        <i class="fa-solid fa-star fa-2 text-warning"></i> <span className='ms-2'>{item.vote_average}</span>
        
      </Card.Body>
    </Card>

                ))
            }
            

    

    
   
        </Row>
        
    

    

    
    </>
  )
}

export default ShowmoreCard
