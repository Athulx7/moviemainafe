import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { uploadTrailer } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AddTrailer() {

const [trailerDetails,setTrailerDetails]=useState({
    trailerName:'',
    YoutubeLink:'',
    ImageUrl:''
});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addTrailerDetails = async()=>{
    const {trailerName,YoutubeLink,ImageUrl} = trailerDetails
    if(!trailerName || !YoutubeLink ){
        toast.error("please fill the form ")
    }
    else{
        console.log("final dataata")
        console.log(trailerDetails)

        const responce = await uploadTrailer(trailerDetails)
        console.log(responce)
        if(responce.status === 201){
            toast.success("trailer added successfully and please click view trailers to view")
            handleClose()
            setTrailerDetails({
                trailerName:'',
                YoutubeLink:'',
                ImageUrl:''
            })
        }
        else{
           toast.error("something went wrong")
        }
    }

    console.log(trailerDetails)
  }

  const setEmbLink = (data)=>{
   console.log("setembLink working")
   const link = `https://www.youtube.com/embed/${data.slice(-11)}`;
    const link2 = `https://img.youtube.com/vi/${data.slice(-11)}/hqdefault.jpg`;

    console.log(link)
    console.log(link2)
    setTrailerDetails({...trailerDetails,YoutubeLink:link,ImageUrl:link2})

  }

  return (
    <div>
      <button className="Homebuttons1" onClick={handleShow}>
        ADD TARILER <i class="fa-solid fa-circle-plus ms-2"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD TRAILER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter the Movie Name" onChange={(e)=>setTrailerDetails({...trailerDetails,trailerName:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter the trailer URL from youtube" onChange={(e)=>setEmbLink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addTrailerDetails}>
            ADD 
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
       
    </div>
  );
}

export default AddTrailer;
