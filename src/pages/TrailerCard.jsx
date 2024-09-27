import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./trailer.css";
import { deleteTrailer } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
function TrailerCard({ displayTraielrs }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteTrailers = async (id) => {
    const responce = await deleteTrailer(id);
    console.log(responce);
    if (responce.status === 200) {
      toast.success(` Trailer of ${displayTraielrs.trailerName} is deleted`);
    } else {
      toast.error("somethinf went wrong");
    }
  };
  return (
    <div className="">
      <Card
        style={{ width: "18rem" }}
        className="bg-primary text-light ms-3 mt-3"
      >
        <Card.Img
          variant="top"
          height={"200px"}
          className="zooming"
          style={{ padding: "5px" }}
          src={displayTraielrs.ImageUrl}
          onClick={handleShow}
        />
        <Card.Body className="d-flex justify-content-between ">
          <Card.Title className="">{displayTraielrs.trailerName}</Card.Title>
          <Button variant="" className="me-2">
            <i
              class="fa-solid fa-trash   "
              onClick={() => deleteTrailers(displayTraielrs.id)}
            ></i>
          </Button>
        </Card.Body>
      </Card>
      <ToastContainer position="top-center" />

      <Modal
        style={{}}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayTraielrs.trailerName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            style={{ padding: "22px", marginLeft: "-25px", width: "517px" }}
            width="560"
            height="315"
            src={`${displayTraielrs.YoutubeLink}`}
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

export default TrailerCard;
