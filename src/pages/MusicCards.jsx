import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { deleteSong } from "../services/allAPI";

function MusicCards({displaySongs}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteSongs = async(id)=>{
    const responce  = await deleteSong(id)


  }

  return (
    <div>
      <Card
        style={{ width: "18rem" }}
        className="bg-primary text-light ms-3 mt-3"
      >
        <Card.Img
          variant="top"
          height={"200px"}
          className="zooming"
          style={{ padding: "5px" }}
          src={displaySongs.imageurl}
          onClick={handleShow}
        />
        <Card.Body className="d-flex justify-content-between ">
          <Card.Title className="">{displaySongs.MusisName}</Card.Title>
          <Button variant="" className="me-2">
            <i class="fa-solid fa-trash " onClick={()=>deleteSongs(displaySongs.id)}></i>
          </Button>
        </Card.Body>
      </Card>


      <Modal
        style={{}}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displaySongs.MusisName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            style={{ padding: "22px", marginLeft: "-25px", width: "517px" }}
            width="560"
            height="315"
            src={`${displaySongs.muiscLink}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; allowfullscreen"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  );
}

export default MusicCards;
