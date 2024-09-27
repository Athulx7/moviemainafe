import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { uploadMusic } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddMusic() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [muiscDetails, setMusicDetails] = useState({
    MusisName: "",
    muiscLink: "",
    imageurl: "",
  });

  const addMuiscdetails = async () => {
    const { MusisName, muiscLink, imageurl } = muiscDetails;
    if (!MusisName || !muiscLink) {
      alert("please fill the form completely  ");
    } else {
      console.log("final data form misic");
      console.log(muiscDetails);
      const responce = await uploadMusic(muiscDetails);
      console.log(responce);

      if (responce.status === 201) {
        toast.success("muisc added successfuly");
        handleClose();
        setMusicDetails({
          MusisName: "",
          muiscLink: "",
          imageurl: "",
        });
      } else {
        alert("somethinf went wwromg");
      }
    }
  };
  const setEmbLink = (data) => {
    console.log("setembLink working");
    const link = `https://www.youtube.com/embed/${data.slice(-11)}`;
    const link2 = `https://img.youtube.com/vi/${data.slice(-11)}/hqdefault.jpg`;

    console.log(link);
    console.log(link2);
    setMusicDetails({ ...muiscDetails, muiscLink: link, imageurl: link2 });
  };

  return (
    <div>
      <button className="Homebuttons1" onClick={handleShow}>
        ADD MUSIC <i class="fa-solid fa-circle-plus ms-2"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD MUSIC</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter the music name"
                onChange={(e) =>
                  setMusicDetails({
                    ...muiscDetails,
                    MusisName: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter the Music URL from youtube"
                onChange={(e) => setEmbLink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMuiscdetails}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center"/>
    </div>
  );
}

export default AddMusic;
