import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { uploadReview } from "../services/allAPI";

function AddReview() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [reviewDetails, setReviewDetails] = useState({
    name: "",
    email: "",
    reviews: "",
  });
  const addReview = async () => {
    const { name, email, reviews } = reviewDetails;
    if (!name || !email || !reviews) {
      alert("please fill the form completely");
    } else {
      const responce = await uploadReview(reviewDetails);
      console.log(responce);
      if (responce.status === 201) {
        alert("review added successfully");
        handleClose();
        setReviewDetails({
          name: "",
          email: "",
          reviews: "",
        });
      }
    }
  };

  return (
    <div>
      <button className="Homebuttons1" onClick={handleShow}>
        ADD REVIEW <i class="fa-solid fa-circle-plus ms-2"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            ADD REVIEW WITH THE DETAILS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) =>
                  setReviewDetails({ ...reviewDetails, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email "
                onChange={(e) =>
                  setReviewDetails({ ...reviewDetails, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter your valid review about us "
                onChange={(e) =>
                  setReviewDetails({
                    ...reviewDetails,
                    reviews: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addReview}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddReview;
